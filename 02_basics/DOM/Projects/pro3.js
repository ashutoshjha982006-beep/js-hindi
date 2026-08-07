const clock=document.getElementById('clock')

setInterval(function(){
    let d=new Date();
    clock.innerHTML=d.toLocaleTimeString();
},1000);