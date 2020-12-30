jQuery(function($) {
    'use strict';
    Owl_Carousel();
});


var Owl_Carousel = function() {
    $('#projects .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dot: true,
        // nav: true,
        // navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });
}