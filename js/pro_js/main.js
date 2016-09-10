/*
* @Author: anchen
* @Date:   2015-10-14 09:28:19
* @Last Modified by:   anchen
<<<<<<< .mine
* @Last Modified time: 2016-03-29 12:44:44
=======
* @Last Modified time: 2015-12-04 13:21:40
>>>>>>> .r448
*/
// 本地存储localstorage
// 用户名：user
// 密码：psw
// 用户id：userId
// 商店ID：shopId
// 

// 'use strict';
// var rule_url='http://192.168.1.197:8080/wd/upload/PersonHtml/ReturnGoods/';
// var test_url='http://192.168.1.116:8088/wd/appApi.jsp?';
// var rule_url='http://192.168.1.197:8080/wd/upload/PersonHtml/ReturnGoods/';
var img_url='http://192.168.1.116:8088/wdPic/image/goodsPic/';
// var img_url='http://192.168.1.197:8080/wdPic/image/goodsPic/';
// var ac_url='http://203.195.141.229:6089/wdPic/image/activityPic/';
var ac_url='http://192.168.1.116:8088/wdPic/image/activityPic/';
// var ac_url='http://192.168.1.197:8080/wdPic/image/activityPic/';
// var img_url='http://203.195.141.229:6089/wdPic/image/goodsPic/';
// var test_url='http://203.195.141.229:6089/wd/appApi.jsp?';
// var test_url='http://10.0.28.23:8080/wd/appApi.jsp?';
// var test_url='http://192.168.1.197:8080/wd/appApi.jsp?';
var test_url='http://192.168.1.116:8088/wd/appApi.jsp?';
// var test_url='http://192.168.10.204:8080/wd/appApi.jsp?';  //java
// var test_url='http://10.0.28.20:8080/wd/appApi.jsp?';  //java
// var main12='http://10.0.28.17:8080/wd/appApi.jsp?';
// var main_img='http://192.168.1.116:8080/jeecg/upload/image/goodsPic/';
// var main3_url='http://10.0.28.17:8080/wd/appApi.jsp?';
// var pay_url='http://192.168.1.61/uctest/ucorder/ucpay.php';
var pay_url='http://order.zhidian168.cn/ucpay.php';

var storage = window.localStorage;
function openwin(url){
    location.href=url+'.html';
}
function back(){
    history.back();
    return false;
}

function loadImage(o, url) {
    var img = new Image();
    img.src = url;
    img.onload = function() {
        //处理图片加载
    }
    img.onerror = function() {
        //处理图片加载失败
    }
}

function isSupportFixed() {
    var userAgent = window.navigator.userAgent,
        ios = userAgent.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),
        ios5below = ios && ios[2] && (parseInt(ios[2].replace(/_/g, '.'), 10) < 5),
        operaMini = /Opera Mini/i.test(userAgent),
        body = document.body,
        div, isFixed;

    div = document.createElement('div');
    div.style.cssText = 'display:none;position:fixed;z-index:100;';
    body.appendChild(div);
    isFixed = window.getComputedStyle(div).position != 'fixed';
    body.removeChild(div);
    div = null;

    return !!(isFixed || ios5below || operaMini);
}

    function setCookie(name,value)//兩個參數，一個是cookie的名字，一個是值
{
    var Days = 0.1; //此 cookie 將被保存30天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)//取cookies函數
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;

}
function delCookie(name)//刪除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

            //图片加载失败时显示默认图片
            $(window).load(function() {
                $('img').each(function() {
                    if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                        if(window.localStorage.getItem('parentId')==371){
                            this.src = 'images/wjl.png';
                        }else if(window.localStorage.getItem('parentId')==370){
                            this.src = 'images/wanpan.png';
                            console.log('湾畔');
                        }else if(window.localStorage.getItem('parentId')==380){
                            this.src = 'images/funengda.png';
                            console.log('福能达');
                        }
                    }
                });
            });
            function is_weixin(){
                var ua = navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)=="micromessenger") {
                    return true;
                } else {
                    return false;
                }
            }
            //数组去重
            function unique(arr) {
                var result = [], hash = {};
                for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                    if (!hash[elem]) {
                        result.push(elem);
                        hash[elem] = true;
                    }
                }
                return result;
            }
