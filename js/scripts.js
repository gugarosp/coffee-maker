$(document).ready(function () {

    let scrollPosition = $(window).scrollTop();
    if (scrollPosition > 50) {
        $("nav").addClass("nav-scrolled");
    }

    $(window).on("scroll", function () {
        scrollPosition = $(window).scrollTop();
        if (scrollPosition > 50) {
            $("nav").addClass("nav-scrolled");
        } else {
            $("nav").removeClass("nav-scrolled");
        }
    });

});