 var crsr = document.querySelector("#cursur")
var blurcrsr = document.querySelector("#cursur-blur")
document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
     blurcrsr.style.left = dets.x-160 + "px"
    blurcrsr.style.top = dets.y-160 + "px"
    
}) 
  
var h4all = document.querySelectorAll(".nav h3")

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale =3;
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale =1;
        crsr.style.border = "1px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


gsap.to(".nav",{
    
backgroundColor:'#000',
height:"100px",
duration: 1,
scrollTrigger:{
    trigger:".nav",
    scroller:"body",
   // markers:"true",
    start:"top -10%",
    end : "end -11%",
    scrub : 1
}

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

gsap.from("#about-us-in,#about-us img",{
    y:90,
    opacity:0,
    duration: 1,
    scrollTrigger :{
        trigger:"#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 55%",
        scrub:3
    }
})

gsap.from("#card-section,.card img",{
  
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: "#card-section",
        scroller:"body",
        start:"top 80%",
        end :"top 70%",
        scrub:2
    }
})
 
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start :"top 60% ",
        end: "top 55%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start :"top 90% ",
        end: "top 80%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start: "top 80%",
        end : "top 75%",
        scrub:1
    }
})