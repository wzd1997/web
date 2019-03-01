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
// 获取当前元素的计算样式
function getStyle (elem,prop) {
   if(window.getComputedStyle) {
       return window.getComputedStyle(elem,null);
   }else {
       return elem.currentStyle[prop]; //IE独有属性
   }
}
// 触发一个事件 三种
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