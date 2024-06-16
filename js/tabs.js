$(document).ready(function () {
    // Tabs
    $(".tabs").map(function () {

        const changePage = 100;
        $(this).find(".tab-content").css("left", 0);
        
        $(this).find(".tab-buttons li").map(function (index) {
            $(this).attr("data-tab-index", index);

            $(this).find("span").click(function() {
                $(this).parents(".tab-buttons").find(".active-tab").removeClass("active-tab");
                $(this).addClass("active-tab");
                
                $(this).parents(".tabs").find(".tab-content").css("left", `-${Number($(this).parent().attr("data-tab-index")) * changePage }%`);
            });
        })

    });
});