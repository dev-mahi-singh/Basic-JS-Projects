let inp=document.querySelector("input");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    if(inp.type=="password"){
    btn.textContent="Hide";
    inp.type="text";
    }
    else{
       btn.textContent="Show";
    inp.type="password"; 
    }
}); 