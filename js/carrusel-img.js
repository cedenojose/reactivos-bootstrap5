$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-circle-left" aria-hidden="true" title="Anterior"></i>', '<i class="fa fa-circle-right" aria-hidden="true" title="Siguiente"></i>'],
        navClass: ['owl-prev', 'owl-next'],
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
                margin: 20,
            },
            800: {
                items: 3,
                margin: 20,
            },
            1000: {
                items: 4,
                margin: 20,
            }
        },
    });
});

