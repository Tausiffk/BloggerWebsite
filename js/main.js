$(document).ready(function(){
    $nav=$('.nav');
    $togglecollapse=$('.togglecollapse');

    $togglecollapse.click(function(){
        $nav.$toggleclass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-nav-prev'),$('.owl-nav-next')]
    });
})