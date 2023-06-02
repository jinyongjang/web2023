$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul.sub").css("display", "flex");

        $(".nav > ul > li > ul.sub, .nav__bg").stop().fadeIn();

    })
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul.sub, .nav__bg").stop().fadeOut();
    })

    let slideI = 0
    setInterval(() => {
        if(slideI < 2){
            slideI++
        } else {
            slideI = 0
        }
        $(".slider .slider__wrap").animate({top:-400 * slideI + 'px'},500)
    }, 3000);

    $(".sectionImg a img").click(function(){
        $(".modal").stop().fadeIn();
    })
    $(".modal__close").click(function(){
        $(".modal").stop().fadeOut();
    })

    $(".cont__inner h3").click(function(){
        $(".cont__inner h3, .cont__inner ul").removeClass("on")
        $(this).addClass('on').next('ul').addClass('on')
    })

})