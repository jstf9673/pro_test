Array.prototype.arrUniq = function() {
	var temp,arrVal,
		array = this,
		arrClone = array.concat(),//克隆数组
		typeArr = {//数组原型
			'obj' : '[object Object]',
			'fun' : '[object Function]',
			'arr' : '[object Array]',
			'num' : '[object Number]'
	    	},
		ent = /(\u3000|\s|\t)*(\n)+(\u3000|\s|\t)*/gi;//空白字符正则

	//把数组中的object和function转换为字符串形式
	for(var i = arrClone.length; i--;){
		arrVal = arrClone[i];
		temp = Object.prototype.toString.call(arrVal);

		if(temp == typeArr['num'] && arrVal.toString() == 'NaN'){
			arrClone[i] = arrVal.toString();
		}

		if(temp == typeArr['obj']){
			arrClone[i] = JSON.stringify(arrVal);
		}

		if(temp == typeArr['fun']){
			arrClone[i] = arrVal.toString().replace(ent,'');
		}
	}

	//去重关键步骤
	for (var i = arrClone.length; i--;) {
  		arrVal = arrClone[i];
  		temp = Object.prototype.toString.call(arrVal);

  		if(temp == typeArr['arr']) arrVal.arrUniq();//如果数组中有数组，则递归
		if (arrClone.indexOf(arrVal) != arrClone.lastIndexOf(arrVal)) {//如果有重复的，则去重
			array.splice(i,1);
    			arrClone.splice(i, 1);
  		}
  		else{
  			if(Object.prototype.toString.call(array[i]) != temp){
  				//检查现在数组和原始数组的值类型是否相同，如果不同则用原数组中的替换，原因是原数组经过了字符串变换
  				arrClone[i] = array[i];
  			}
 		}
    }
    return arrClone;
}
