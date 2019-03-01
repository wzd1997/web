// 获取浏览器视口尺寸
function getViewportOffset() {
  if(window.innerWidth) {//IE8及IE8以下不兼容
    return {
      w : window.innerWidth,
      h : window.innerHeight
    }
  }else {
    if(document.compatMode === 'BackCompat') {
      return {//适用于怪异模式下的浏览器 无doctype html
        w : document.body.clientWidth,
        h : document.body.clientHeight
      }
    }else {//标准模式下,任意浏览器都兼容
      return {
        w : document.documentElement.clientWidth,
        h : document.documentElement.clientHeight
      }
    }
  }
}
//获取元素在文档中的位置left
function getElementLeft(elem) {
  var Left = elem.offsetLeft;
  var parent = elem.offsetParent;
  while (parent !== null) {
    Left += parent.offsetLeft;
    parent = parent.offsetParent;
  }return Left;
}
//获取元素在文档中的位置top
function getElementTop(elem) {
  var Top = elem.offsetTop;
  var parent = elem.offsetParent;
  while (parent !== null) {
    Top += parent.offsetTop;
    parent = parent.offsetParent;
  }return Top;
}
// 获取当前元素的计算样式
function getStyle (elem,prop) {
   if(window.getComputedStyle) {
       return window.getComputedStyle(elem,null)[prop];
   }else {
       return elem.currentStyle[prop]; //IE独有属性
   }
}
// 触发一个事件
function addEvent (elem, type, handle) {
  if(elem.addEventListener) {
      elem.addEventListener(type, handle, false);
  }else if(elem.attachEvent) {
      elem.attachEvent('on' +type, function () {
          handle.call(elem);
      })
  }else {
          elem['on' + type] = handle;
      }
}
//停止一个事件
function removeEvent (elem, type, handle) {
  if(elem.addEventListener) {
      elem.removeEventListener(type, handle, false);
  }else if(elem.attachEvent) {
      elem.detachEvent('on' +type, function () {
          handle.call(elem);
      })
  }else {
          elem['on' + type] = null;
      }
}
// 阻止冒泡事件
function stopBubble(event) {
  if(event.stopPropagation) {
      event.stopPropagation();
  }else {
      event.cancelBubble = true;
  }
}
// 阻止默认事件
function cancelHandler (event) {
 if(event.preventDefault) {
     event.preventDefault();
 }else {
     event.returnValue = false;
 }
}
//拖拽
function drag(elem) {
          var disX,
              disY;
          addEvent(elem, 'mousedown', function (e) {
            var event = e || window.event;
            disX = event.pageX - elem.offsetLeft; // ???style.left
            disY = event.pageY - elem.offsetTop;
            addEvent (document, 'mousemove', mouseMove);
            addEvent (document, 'mouseup', mouseUp);
            stopBubble(event);
            cancelHandler(event);
          })
          function mouseMove (e) {
            var event = e || window.event;
            elem.style.left = event.pageX - disX + 'px';
            elem.style.top = event.pageY - disY + 'px';
          }
          function mouseUp (e) {
            var event = e || window.event;
            removeEvent(document, 'mousemove', mouseMove);
            removeEvent(document, 'mouseup', mouseUp);
          }
}

//异步加载js 引入方法 loadScript ('tool.js', function () {text();}) 
function loadScript (url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if(script.readyState) {
        script.onreadystatechange = function () {//IE
            if (script.readyState == "complete" || script.readyState == "loaded") {
                callback();
            }
        }
    }else{
        script.onload = function () {
            callback();
        }
    }
    script.src = url;//不同的js工具包
    document.head.appendChild(script);
}


function startMove (obj, data, func) {         
    clearInterval(obj.timer);
    var iSpeed;
    var iCur;
    var name;            
    startTimer = obj.timer = setInterval(function () {
        var bStop = true;
        for (var attr in data) {
            if (attr === 'opacity') {
                name = attr;
                iCur = parseFloat(getStyle(obj, attr)) * 100;
            }else {
                iCur = parseInt(getStyle(obj, attr));
            }
            iSpeed = ( data[attr] - iCur) / 8;

            if (iSpeed > 0) {
                iSpeed = Math.ceil(iSpeed);
            }else {
                iSpeed = Math.floor(iSpeed);
            }

            if (attr === 'opacity') {
                obj.style.opacity = ( iCur + iSpeed ) / 100; 
            }else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
            if ( Math.floor(Math.abs(data[attr] - iCur)) != 0 ) {
                bStop = false;
            }
        }
        if (bStop) {					
            clearInterval(obj.timer);
            if (name === 'opacity') {
                obj.style.opacity = data[name] / 100;
            }
            func();
        }

    },30);
}  