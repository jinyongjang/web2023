$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul.sub").stop().fadeIn();
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul.sub").stop().fadeOut();
    });


    let slideI = 0;
    setInterval(()=>{
        if(slideI < 2){
            slideI++;
        } else{
            slideI = 0;
        }
        $(".slide ul").animate({top:-100*slideI + "%"},500)
    },3000)
});

