  function fun1(){
                const a=[12,73,99,60,2];
                let len=a.length;
                let max=0;
                for(let i=0; i<len; i++){
                    if(max<a[i]){
                        max=a[i];
                    }
                }
                document.getElementById("d1").innerHTML=max;
            }
            function fun2(){
                const a=[12,73,99,60,2];
                let len=a.length;
                let min=65535;
                for(let i=0; i<len; i++){
                    if(min>a[i]){
                        min=a[i];
                    }
                }
                document.getElementById("d2").innerHTML=min;
            }
            function fun3(){
                const a=[12,33,99,62,77,87];
                let b=a.sort();
                let len=a.length;
                let str="";
                for(let i=0; i<len; i++){
                    str=str+b[i]+"&nbsp;&nbsp;&nbsp;&nbsp;";
                }
                document.getElementById("d3").innerHTML=str;
            }
/* 
極大值方法:
1.另max=0當參考值
2.採用for和if敘述找出最大值
max=0 if(max<a[i]) >>max=a[i]

極小值方法:
1.另min=65535當參考值
2.採用for和if敘述找出最小值
min=65535 if(min>a[i]) >>min=a[i]

排序:
陣列名稱.sort(); 正排序
*/
