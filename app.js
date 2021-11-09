let myMenu = document.getElementById("navMenu");
let para=document.getElementById('para')
let lastScroll=window.scrollY;
window.addEventListener('scroll',function(){
    if(lastScroll<window.scrollY){
        myMenu.style.height='70px';
    } else{
        myMenu.style.height='auto'
    }
    lastScroll=window.scrollY;
})



