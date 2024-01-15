/* -------------------------- */
/* INICIALIZACION DE Animate On Scroll (AOS) */
/* -------------------------- */
AOS.init();

/* -------------------------- */
/* Ocultar y mostrar el boton ir arriba con jquery */
/* -------------------------- */

$(function() {
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        if(scrollTop >= 40) {
            $('.ir-arriba').fadeIn();
        } else {
            $('.ir-arriba').fadeOut();
        }
    });
});

/* -------------------------- */
/* Header animado con jquery */
/* -------------------------- */
$(window).scroll(function () {
    const nav = $('.encabezado');
    const scroll = $(window).scrollTop();
    if(scroll >= 100) {
        nav.addClass('fondo-menu');
    } else {
        nav.removeClass('fondo-menu');
    }
})