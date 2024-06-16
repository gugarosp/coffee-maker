$(document).ready(function () {

    // Nav Scroll
    let scrollPosition = $(window).scrollTop();
    if (scrollPosition > 50) {
        $("nav").addClass("nav-scrolled");
    }

    $(window).on("scroll", function () {
        scrollPosition = $(window).scrollTop();
        if (scrollPosition > 75) {
            $("nav").addClass("nav-scrolled");
        } else {
            $("nav").removeClass("nav-scrolled");
        }
    });

    // Mobile Menu
    $("#mobile-menu").click(() => {
        $("nav").toggleClass("nav-opened");
        $("nav menu").toggleClass("d-none");
    });

});