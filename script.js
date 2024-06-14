const count-document.getElementById("count");

totalUpdate();

function totalUpdate(){
fetch("https://api.countapi.xyz/hit/swapnilsparsh/?amount=1")
.then(res->res.json())
.then(res)=>{
count.innerHTML=res.value;
val count, 0, res.value, 1000;
});

}



function val(obj,start,end,duration){
    let startStamp=null;
    const step=(st)=>{
        if(!startStamp) startingStamp=st;
        const progress=Math.min((st-startingStamp)/duration,1);
        obj.innerHTML=Math.floor(progress*(end-start) + start);
        if(progress<1){
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}