var headLine = document.querySelectorAll('ul.rightHead > li');
var underLine = function () {
    this.style.textDecoration = 'underline';
};
var removeLine = function () {
    this.style.textDecoration = 'none';
};
for (var key in headLine) {
    if (headLine.hasOwnProperty(key)) {
        var obj = headLine[key];
        obj.addEventListener('mouseenter',underLine ,false);
        obj.addEventListener('mouseleave',removeLine ,false);
    }
}//下划线
var down_one = document.querySelectorAll(".downOne li");
var down_two = document.querySelectorAll(".downTwo li");
for (var key1 in down_one) {
    if (down_one.hasOwnProperty(key1)) {
        var obj = down_one[key1];
        obj.addEventListener('mouseenter',underLine ,false);
        obj.addEventListener('mouseleave',removeLine ,false);
    }
}
for (var key3 in down_two) {
    if (down_two.hasOwnProperty(key3)) {
        var obj = down_two[key3];
        obj.addEventListener('mouseenter',underLine ,false);
        obj.addEventListener('mouseleave',removeLine ,false);
    }
}



var iPhone = document.querySelectorAll('li.phoneImg')[0];
var oPhone = document.querySelectorAll('div.oPhone')[0];
var oImg = document.createElement('img');
iPhone.addEventListener('mouseenter',function () {
    oPhone.style.display = 'block';
    oImg.src = 'https://qiye.aliyun.com/static/5379462/images/forNetCN/phone_client.png';
    oPhone.appendChild(oImg);
}, false)
iPhone.addEventListener('mouseleave', function () {
    oPhone.removeChild(oImg);
    oPhone.style.display = 'none';
}, false)

var head = document.querySelectorAll('.head > .leftHead > img')[0];
head.addEventListener('click', function () {
    window.open('https://qiye.aliyun.com');
},false)

var leftLine = document.querySelectorAll('.topInput > span');
for (var i in leftLine) {
    if (leftLine.hasOwnProperty(i)) {
        var obj = leftLine[i];
        obj.addEventListener('click', function () {
            leftLine[0].className = '';
            leftLine[1].className = '';
            this.className = 'line';
        })    
    }
}



var passWord = document.querySelectorAll('.passwordInp')[0];
passWord.addEventListener('focus',function () {
    passWord.type = "password";
}, false)



var botInpJs = document.querySelectorAll('.botInp')[0];
var localJs = document.querySelectorAll('.local')[0];
var bottomJs = document.querySelectorAll('.bottom')[0];
var login_dd = document.querySelectorAll('.topInput > span')[1];
var login_bb = document.querySelectorAll('.topInput > span')[0];
var rightInputJs = document.querySelectorAll('.rightInput')[0];
var submit_dd = document.querySelectorAll('.submit')[0];
var oSubmitImg = document.createElement('img');
var iNone = function () {
    botInpJs.style.display = 'none';
    localJs.style.display = 'none';
    bottomJs.style.display = 'none';
    submit_dd.style.display = 'block'; 
    oSubmitImg.src = "data:image/png;base64,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"
    submit_dd.appendChild(oSubmitImg);
    small_submit.style.display = 'none';
}
var oNone = function () {
    if(key === false){
        small_submit.style.display = 'block';
        botInpJs.style.display = 'none';
        local_iosImg.style.display = 'none';
        local_androidImg.style.display = 'none';
        submit_dd.style.display = 'none';
        login_img.style.display = 'block';
        bottomJs.style.display = 'block';
    }else{
        botInpJs.style.display = 'block';
        localJs.style.display = 'block';
        bottomJs.style.display = 'block';
        submit_dd.style.display = 'none';
    }
}
login_dd.addEventListener('click', iNone, false);
login_bb.addEventListener('click', oNone, false);



var local_img = document.querySelectorAll(".local div");
for (var ele in local_img) {
    if (local_img.hasOwnProperty(ele)) {
        var obj = local_img[ele];
        function new_bg_img () {
            if(this.className === "iosImg"){
                this.style.backgroundImage = "url('https://mailsso.mxhichina.com/home/images/new_app_iOS_hover.png')";
            }else if(this.className === "androidImg"){
                this.style.backgroundImage = "url('https://mailsso.mxhichina.com/home/images/new_android_hover.png')";
            }else{
                this.style.backgroundImage = "url('https://mailsso.mxhichina.com/home/images/smart/sq.png')";
            }
        }
        function old_bg_img () {
            if(this.className === "iosImg"){
                this.style.backgroundImage = "url('https://mailsso.mxhichina.com/home/images/new_app_iOS.png')";
            }else if(this.className === "androidImg"){
                this.style.backgroundImage = "url('https://mailsso.mxhichina.com/home/images/new_android.png')";
            }else{
                this.style.backgroundImage = "url('https://mailsso.mxhichina.com/home/images/smart/sq_hover.png')";
            }
        }
        obj.addEventListener('mouseenter',new_bg_img, false);
        obj.addEventListener('mouseleave',old_bg_img, false)
    }
}


var small_submit = document.querySelectorAll('.small_submit')[0];
var login_img = document.querySelectorAll(".local .loginImg")[0];
var local_iosImg = document.querySelectorAll(".local .iosImg")[0];
var local_androidImg = document.querySelectorAll(".local .androidImg")[0];
var errorImg = document.querySelectorAll('.error_img')[0];
var key = true;
login_img.addEventListener('click',function () {
    small_submit.style.display = 'block';
    botInpJs.style.display = 'none';
    local_iosImg.style.display = 'none';
    local_androidImg.style.display = 'none';
    errorImg.src = "https://mailsso.mxhichina.com/home/images/smart/sq_close.png";
    key = false;
}, false)
errorImg.addEventListener('click',function () {
    botInpJs.style.display = 'block';
    localJs.style.display = 'block';
    bottomJs.style.display = 'block';
    submit_dd.style.display = 'none';
    local_iosImg.style.display = 'block';
    local_androidImg.style.display = 'block';
    small_submit.style.display = 'none';
    key = true;
}, false)



var small_img = document.querySelector(".small_submit span img");
var iSpeed,stop = true;
function fn1 () {
    // small_img.src = 'https://mailsso.mxhichina.com/home/images/smart/saosao.png';   
    if(stop){
        stop = false;
        var img_timer = setInterval(function () {
            var iCur = window.getComputedStyle(small_img,null)['opacity']*100; 
            iSpeed = (0 - iCur) / 15;
            small_img.style.opacity = (iSpeed + iCur) / 100;
            if(Math.abs( small_img.style.opacity) <= 0.01){
                clearInterval(img_timer)
                small_img.style.opacity = 0;
                iSpeed = 0;
                small_img.src = 'https://mailsso.mxhichina.com/home/images/smart/saosao.png';
                var img_timer2 = setInterval(function () {
                    var iCur2 = window.getComputedStyle(small_img,null)['opacity']*100;   
                    iSpeed = (100 - iCur2) / 15;
                    small_img.style.opacity = (iSpeed + iCur2) / 100;
                    // console.log( small_img.style.opacity)
                    if(Math.abs(1 - small_img.style.opacity) <= 0.01){
                        clearInterval(img_timer2)
                        small_img.style.opacity = 1;
                        iSpeed = 0;
                        stop = true;
                    }
                },10) 
            }
        },10) 
    }
   
}
function fn2 () {
    // small_img.src = 'https://mailsso.mxhichina.com/generateLoginQRCode.do?timestamp=1542038868000&appCode=smartmail&redirectUrl=https://qiye.aliyun.com/alimail/auth/callbackForCore%3Freurl=%2Falimail%2F&errorUrl=&deviceId=6a7c05b3fda34f5e9df66a194e0026ee&lang=zh_CN'; 
    if(stop){
        stop = false;
        var img_timer = setInterval(function () {
            var iCur = window.getComputedStyle(small_img,null)['opacity']*100; 
            iSpeed = (0 - iCur) / 15;
            small_img.style.opacity = (iSpeed + iCur) / 100;
            if(Math.abs( small_img.style.opacity) <= 0.01){
                clearInterval(img_timer)
                small_img.style.opacity = 0;
                iSpeed = 0;
                small_img.src = 'https://mailsso.mxhichina.com/generateLoginQRCode.do?timestamp=1542038868000&appCode=smartmail&redirectUrl=https://qiye.aliyun.com/alimail/auth/callbackForCore%3Freurl=%2Falimail%2F&errorUrl=&deviceId=6a7c05b3fda34f5e9df66a194e0026ee&lang=zh_CN'; 
                var img_timer2 = setInterval(function () {
                    var iCur2 = window.getComputedStyle(small_img,null)['opacity']*100;   
                    iSpeed = (100 - iCur2) / 15;
                    small_img.style.opacity = (iSpeed + iCur2) / 100;
                    // console.log( small_img.style.opacity)
                    if(Math.abs(1 - small_img.style.opacity) <= 0.01){
                        clearInterval(img_timer2)
                        small_img.style.opacity = 1;
                        iSpeed = 0;
                        stop = true; 
                    }
                },10) 
            }
        },10) 
    }   
}
small_img.addEventListener('mouseenter',fn1, false);
small_img.addEventListener('mouseleave',fn2, false);



var sliderTimer = null;
var sliderPage = document.getElementById('sliderPage');
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
var index = 0;
var num = sliderPage.children.length - 1;
var moveWidth = sliderPage.children[0].offsetWidth;
var lock = true;
var oIArr = document.getElementsByTagName('i');

for (var i = 0; i < oIArr.length; i++) {
    oIArr[i].onclick = (function (sliderIndex) {
        return function () {
            clearInterval(sliderTimer);
            index = sliderIndex;
            startMove(sliderPage, {left: -moveWidth * sliderIndex}, function () {
                sliderTimer = window.setInterval(autoMove, 1500);
                lock = true;
                changeIndex(index);
            });
        }
    })(i)
}





// 从右向左
leftBtn.onclick = function () {
    autoMove(-1);
}

// 从左向右 默认方向 1
rightBtn.onclick = function () {
    autoMove(1);
}


function autoMove(direction) {
    if (lock) {
        lock = false;
        clearInterval(sliderTimer);
        if (direction === 1 || !direction) {
            index++;
            startMove(sliderPage, {left: sliderPage.offsetLeft - moveWidth}, function () {
                if (index === 4) {
                    sliderPage.style.left = '0px';
                    index = 0;
                }
                sliderTimer = window.setInterval(autoMove, 1500);
                lock = true;
                changeIndex(index);
            });
        }else if (direction === -1) {
            if (sliderPage.offsetLeft === 0) {
                sliderPage.style.left = -moveWidth * num + 'px';
                index = num;
            }
            index--;
            startMove(sliderPage, {left: sliderPage.offsetLeft + moveWidth},function () {
                sliderTimer = window.setInterval(autoMove, 1500);
                lock = true;
                changeIndex(index);
            });
        }
    }
}

function changeIndex (index) {
    for (var i = 0; i < oIArr.length; i++) {
        oIArr[i].className = '';
    }
    oIArr[index].className = 'active';
}

sliderTimer = window.setInterval(autoMove, 1500);
