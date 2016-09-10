        // 删除指定数组元素 
        // 调用方法
        // var arr=[1,2,3,4,5];
        // arr.remove(3);
        // Array.prototype.indexOf = function(val) {
        //     for (var i = 0; i < this.length; i++) {
        //         if (this[i] == val) return i;
        //     }
        //     return -1;
        // };
        // Array.prototype.remove = function(val) {
        //     var index = this.indexOf(val);
        //     if (index > -1) {
        //         this.splice(index, 1);
        //     }
        // };
        // Array.prototype.remove=function(obj){
        //     for(var i =0;i <this.length;i++){
        //         var temp = this[i];
        //         if(!isNaN(obj)){
        //             temp=i;
        //         }
        //         if(temp == obj){
        //             for(var j = i;j <this.length;j++){
        //                 this[j]=this[j+1];
        //             }
        //             this.length = this.length-1;
        //         }   
        //     }
        // }
        window.onload = function () {
            // 获取元素
            var all = document.getElementById('all');
            var list = document.getElementById('list');
            var tr=list.getElementsByTagName('li');
            var inputs = list.getElementsByClassName('check');
            var total = document.getElementById('total');
            getTotal();
            function getTotal(){
                var ret = 0;
                var price=0;
                for(var i=0;i<inputs.length;i++)
                {
                    if(inputs[i].checked)
                    {
                        ret++;
                    }
                }
                for (var i = 0, len = tr.length; i < len; i++) {
                    if (tr[i].getElementsByTagName('input')[0].checked) {
                        price += parseFloat(tr[i].getElementsByClassName('new')[0].innerHTML)*tr[i].getElementsByTagName('input')[1].value;

                    }
                }
                total.innerHTML = price.toFixed(2);
            }
            function getSubtotal(tr) {
                var price = tr.getElementsByClassName('new')[0]; //单价
                var countInput = tr.getElementsByTagName('input')[1]; //数目input
                var subtotal = parseFloat(price.innerHTML)*parseInt(countInput.value); //小计td
            }
            // 全选事件
            all.onchange = function (){
               for(var i=0;i<inputs.length;i++)
               {
                   inputs[i].checked = this.checked;
               }
               getTotal();
            }

            // 每个选项的事件
           for(var i=0;i<inputs.length;i++){
              inputs[i].onchange=function ()
              {
                  getTotal();
                  if(!this.checked)
                  {
                     all.checked=false;
                  }else if(this.checked){

                  }
               getTotal();
              }
           }
               for (var i = 0; i < tr.length; i++) {
        //将点击事件绑定到tr元素
        tr[i].onclick = function (e) {
            var e = e || window.event;
            var el = e.target || e.srcElement; //通过事件对象的target属性获取触发元素
            var cls = el.className; //触发元素的class
            var countInout = this.getElementsByTagName('input')[1]; // 数目input
            var value = parseInt(countInout.value); //数目
            //通过判断触发元素的class确定用户点击了哪个元素
            switch (cls) {
                case 'sub': //点击了加号
                    countInout.value = value + 1;
                    getSubtotal(this);
                    break;
                case 'reduce': //点击了减号
                    if (value > 1) {
                        countInout.value = value - 1;
                        getSubtotal(this);
                    }
                    break;                    
            }
            getTotal();
        }
    }
        } 
        function add_cart(param,cartType){
            $.ajax({
                url: test_url+'action=8402',
                type: 'get',
                dataType: 'jsonp',
                jsonp:'callback',
                data: {userId: storage.getItem('userId'),goodsId:param,'goodsColor':'','goodsNum':'1','cartType':cartType,'shopId':shopId},
                success:function(res){show_cart(cartType);window.location.reload();},
                error:function(err){alert('err');}
            });  
        }
        
        function clear_cart(cartType){
            $.ajax({
                url: test_url+'action=8403',
                type: 'get',
                dataType: 'jsonp',
                jsonp:'callback',
                data: {'userId':storage.getItem('userId'),'cartType':cartType,'shopId':shopId},
                success:function(res){
                    if(res.code=='0000'){
                        alert(res.message);
                        show_cart(cartType);
                    }else{alert(res.message);}
                },
                error:function(err){
                    alert('err');
                }
            });                
        }
// function commit(rese){
//     var par=JSON.stringify(rese);
//     $.ajax({
//         url: local_url+'action=8417',
//         type: 'post',
//         dataType: 'jsonp',
//         jsonp:'callback',
//         data: {'param': par},
//         success:function(res){
//             if(res.code=='0000'){
//                 var paras;
//                 alert(res.resultList[0]);
//                 paras=JSON.stringify(res.resultList[0]);
//                 // alert(res.message);
//                 for(var i=0;i<res.resultList.length;i++){
//                     // paras+=JSON.stringify(res.resultList[i]);
//                 }
//                 setCookie('paras',paras);
//                 alert(getCookie('paras'));

//                 window.location.href='confirm.html';
//             }
//         },
//         error:function(err){
//             alert('err');
//         }
//     });    
// }