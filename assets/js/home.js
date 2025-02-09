
function loading() {
    var tl = gsap.timeline()

tl.to("#yellow",{
    top: "-100%",
    delay: 0.2,
    duration: 0.6,
    ease: "expo.out"
})
tl.from("#yellow2",{
    top: "100%",
    delay: 1,
    duration: 0.6,
    opacity: 0,
    ease: "expo.out"
},"anim")

tl.to("#loader h1",{
    delay: 0.6,
    duration: 0.6,
    color: "black"
},"anim")

tl.to("#loader",{
    display: "none"
})
}
loading();

var elems = document.querySelectorAll("#elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})

