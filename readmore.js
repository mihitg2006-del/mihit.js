let rl=document.getElementById("rl");
let rm=document.getElementById("rm");
let content=document.getElementById("content");
let rmm=document.getElementById("rmm");
content.style.display="none";
rl.style.display="none";
rmm .style.display="block";
rm.addEventListener("click",function(){
    content.style.display="block";
    rm.style.display="none";
    rl.style.display="block";
    rmm.style.display="none";
})
rl.addEventListener("click",function(){
    content.style.display="none";
    rm.style.display="block";
    rl.style.display="none";
    rmm.style.display="block";
})

