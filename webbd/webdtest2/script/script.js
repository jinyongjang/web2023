$(function(){
    $(".nav ul li").mouseover(function(){
        $(".navBg, .nav>ul>li>ul.sub").show()
    })
    $(".nav ul li").mouseout(function(){
        $(".navBg, .nav>ul>li>ul.sub").hide()
    })

    let slideI = 0
    setInterval(() => {
        if(slideI < 2){
            slideI++
        } else {
            slideI = 0
        }
        $(".slide .slide__wrap").animate({left:-100 * slideI + 'vw'},500)
    }, 5000);
})