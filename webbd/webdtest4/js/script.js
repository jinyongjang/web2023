// let i = 0
// setInterval(() => {
//     if(i < 2){
//         i++;
//     } else {
//         i = 0;
//     }
//     $(".slide__inner").animate({left:-2000 * i +"px"},500)
// }, 3000)

let y = 0
setInterval(() => {
    if(y < 2){
        y++;
    } else {
        y = 0
    }
    $(".card2__wrap").animate({left:-450 * y + "px"},300)
}, 3000)
