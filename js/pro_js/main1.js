/*
* @Author: anchen
* @Date:   2015-11-26 15:13:32
* @Last Modified by:   anchen
* @Last Modified time: 2016-02-15 10:29:54
*/

function request(param){
        var url = location.href;
        var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
        var paraObj = {}
        for (i=0; j=paraString[i]; i++){
            paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
        }
        var returnValue = paraObj[param.toLowerCase()];
        if(typeof(returnValue)=="undefined"){
            return "";
        }else{
            return returnValue;
        }
    }

    function mr(addid){
        $.ajax({
            url:test_url+'action=8807',
            dataType:'jsonp',
            type:'get',
            jsonp:'callback',
            data:{'addressId':addid,userId:storage.getItem('userId')},
            success:function(res){
                if(res.code=='0000'){
                    weui.alert(res.message,"提示",function(){
                      window.location.href='locate.html';
                    });
                }else{weui.alert(res.message);}
            },
            error:function(err){
                weui.alert('失败');}
        });
    }
    Date.prototype.format = function(format) {
           var date = {
                  "M+": this.getMonth() + 1,
                  "d+": this.getDate(),
                  "h+": this.getHours(),
                  "m+": this.getMinutes(),
                  "s+": this.getSeconds(),
                  "q+": Math.floor((this.getMonth() + 3) / 3),
                  "S+": this.getMilliseconds()
           };
           if (/(y+)/i.test(format)) {
                  format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
           }
           for (var k in date) {
                  if (new RegExp("(" + k + ")").test(format)) {
                         format = format.replace(RegExp.$1, RegExp.$1.length == 1
                                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                  }
           }
           return format;
    }
    function getHash(key, url) {
          var hash;
          if (!!url) {
              hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
              hash = (hash == url) ? "" : hash;
          } else {
              hash = self.location.hash;
          }

          hash = "" + hash;
          hash = hash.replace(/^[?#]/, '');
          hash = "&" + hash;
          var val = hash.match(new RegExp("[\&]" + key + "=([^\&]+)", "i"));
          if (val == null || val.length < 1) {
              return null;
          } else {
              return decodeURIComponent(val[1]);
          }
      }


      /**
 * 声明获取图片的方法
 * @param {Object} picUrl 图片的网络地址
 * @param {Object} defaultPic 默认图片
 * @param {Object} element 图片源元素
 */
function fetchImage(picUrl, defaultPic, element) {
    //将图片网络地址进行md5摘要。
    var filename = hex_md5(picUrl);
    element.setAttribute("src", defaultPic);
    //尝试加载本地图片
    plus.io.resolveLocalFileSystemURL("_downloads/" + filename, function(entry) {
        // 加载本地图片成功
        entry.file( function(file){
            if(file.size==0){
                //console.log("2.1图片为空显示默认");
                element.setAttribute("src", defaultPic);
            }else{
                var path = plus.io.convertLocalFileSystemURL("_downloads/" + filename);
                //console.log("2.1加载本地图片"+path);
                element.setAttribute("src", path);
            }
        });
    }, function(e) {
        //加载本地图片失败，本地没有该图片，尝试从网络下载图片并保存本地，保存文件名为url摘要md5值
        var dtask = plus.downloader.createDownload(picUrl, {filename:filename}, function(d, status) {
            // 下载完成
            if (status == 200) {
                if(d.downloadedSize==0){
                    //console.log("2.2图片为空显示默认");
                    element.setAttribute("src", defaultPic);
                }else{
                    //console.log("2.2下载网络文件成功"+d.url);
                    element.setAttribute("src", d.url); 
                }
            }
        });
        dtask.start();
    });
}
//document.writeln("您的操作系统是：" + detectOS()+'_+_'+browser.versions.iPhone);

// <div id="content">
// <h1>限时抢购啦！</h1>
// <p>还剩<span id="times"></span></p>
// </div>
// function fresh()
// {
//         var endtime=new Date("2110/11/06,12:20:12");
//         var nowtime = new Date();
//         var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
//         d=parseInt(leftsecond/3600/24);
//         h=parseInt((leftsecond/3600)%24);
//         m=parseInt((leftsecond/60)%60);
//         s=parseInt(leftsecond%60);
//         document.getElementById("times").innerHTML=h+"小时"+m+"分"+s+"秒";
//         if(leftsecond<=0){
//           document.getElementById("times").innerHTML="抢购已结束";
//           clearInterval(sh);
//         }
// }
// fresh();
// var sh;
// sh=setInterval(fresh,1000);

/**
 * 获取url参数
 */
function I(name) {
    var def;  //默认值
    if (typeof(arguments[1]) == "undefined") {
        def = '';
    } else {
        def = arguments[1];
    }
    var param = window.location.search;  //URL参数
    if (param == '') {
        return def;
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = param.substr(1).match(reg);
    if (r == null) {
        return def;
    }
    return (r[2]);
}
/**
 * 获取url参数数组
 */
function GetUrlPars() {
    var url = location.search;
    var Request = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            var sTemp = strs[i].split("=");
            Request[sTemp[0]] = (sTemp[1]);
        }
    }
    return Request;
}