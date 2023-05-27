$(function () {
    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    let slideI = 0;
    setInterval(function () {
        if (slideI < 2) {
            slideI++;
        } else {
            slideI = 0;
        }
        console.log(slideI);
        $(".slider__img").animate({ height: 400 * slideI + "px" }, 500);
    }, 1000);
});
