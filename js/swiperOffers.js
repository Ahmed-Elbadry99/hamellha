


//! Swiper Offers
$(document).ready(function(){
    $(".owl-carousel.owl-panner").owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        smartSpeed: 500, // سرعة حركة السلايد نفسها (كلما زادت تبقى أبطأ)
        autoplayTimeout: 3000, // المدة بين كل سلايد والتاني (بالمللي ثانية)
        autoplayHoverPause: true,
        dots: true,
    });
});