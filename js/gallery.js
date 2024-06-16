$(document).ready(function () {
    // Gallery
    const changePage = 100;
    let currentPage = 1;

    $("#gallery-images").css("left", 0);
    $("#gallery-images").attr("data-max-page", Number($("#gallery-images img").length) / 2);

    $("#gallery-current-page").text(currentPage);
    $("#gallery-total-pages").text($("#gallery-images img").length);

    $("#gallery-to-left").click(function () {
        currentPage !== 1 ? currentPage-- : null;
        $(this).parents("#gallery").find("#gallery-images").css("left", `calc(-1 * (${(currentPage - 1) * changePage}%) - (${(currentPage - 1)} * 1.5rem)) `);
    
        $("#gallery-current-page").text(currentPage);
    });

    $("#gallery-to-right").click(function () {
        currentPage !== Number($("#gallery-images").attr("data-max-page")) ? currentPage++ : null;
        $(this).parents("#gallery").find("#gallery-images").css("left", `calc(-1 * (${(currentPage - 1) * changePage}%) - (${(currentPage - 1)} * 1.5rem)) `);
    
        $("#gallery-current-page").text(currentPage);
    });

});