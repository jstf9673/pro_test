/* 
* @Author: anchen
* @Date:   2016-04-11 13:27:07
* @Last Modified by:   anchen
* @Last Modified time: 2016-04-11 13:49:09
*/

'use strict';
function huidu(src){
    //创建一个画布
    var canvas=document.createElement('canvas');
    var ctx=canvas.getContext('2d');
    var img=new Image();
    img.src=src;
    canvas.width=img.width;
    canvas.height=img.height;
    ctx.drawImage(img,0,0);  //将图片画在画布上
    var imgdata=ctx.getImageData(0,0,canvas.width,canvas.height);
    var data=imgdata.data;   //得到图像数据
    /*灰度处理：求r，g，b的均值，并赋回给r，g，b*/
    for(var i=0,n=data.length;i<n;i+=4){
        var average=(data[i]+data[i+1]+data[i+2])/3;
        data[i]=average;
        data[i+1]=average;
        data[i+2]=average;
    }
    ctx.putImageData(imgdata,0,0);
    /*返回处理之后的src*/
    return canvas.toDataURL();
}