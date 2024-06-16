$(document).ready(function () {
    // Carrousel
    $(".carrousel").map(function () {
    
        const changePage = 100;
        let currentPage = 1;
    
        $(this).attr("data-max-page", $(".carrousel").length);
        $(this).find(".carrousel-item-wrapper").css("left", 0);
    
        $(this).find(".carrousel-to-left").unbind('click').bind("click", function () {
            currentPage !== 1 ? currentPage-- : null;
            $(this).parents(".carrousel").find(".carrousel-item-wrapper").css("left", `-${(currentPage - 1) * changePage}%` );

            $(this).parents(".carrousel").find(".carrousel-page-active").removeClass("carrousel-page-active");
            $(this).parents(".carrousel").find(`.carrousel-pagination button:nth-child(${currentPage})`).addClass("carrousel-page-active")
        
        })
    
        $(this).find(".carrousel-to-right").unbind('click').bind("click", function () {
            currentPage !== Number($(this).parents(".carrousel").attr("data-max-page")) ? currentPage++ : null;
            $(this).parents(".carrousel").find(".carrousel-item-wrapper").css("left", `-${(currentPage - 1) * changePage}%` );

            $(this).parents(".carrousel").find(".carrousel-page-active").removeClass("carrousel-page-active");
            $(this).parents(".carrousel").find(`.carrousel-pagination button:nth-child(${currentPage})`).addClass("carrousel-page-active")
        })
        
    })
});