$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    dotsSpeed: 700,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        1024:{
            items:3
        }
    }
})

function reveal() {
    document.getElementById("awrds").classList.toggle("show");
}

function tpabt() {
    document.getElementById("abt").scrollIntoView();
}

function tpvid() {
    document.getElementById("vid").scrollIntoView();
}

function tpmr() {
    document.getElementById("mr").scrollIntoView();
}

function tpmt() {
    document.getElementById("mt").scrollIntoView();
}