let four= document.getElementById("four") 
let five= document.getElementById("five") 
let six= document.getElementById("six") 

function main()
{
     let g=new Date();

     let a=g.getDate();
     let b=g.getMonth()+1;
     let c=g.getFullYear();

     let d=g.getHours();
     let e=g.getMinutes();
     let f=g.getSeconds();

     let h=g.getDay();
     let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     five.innerHTML=a+"/"+b+"/"+c  
     four.innerHTML=d+":"+e+":"+f
     six.innerHTML=day[h]
}
setInterval(main,1000)