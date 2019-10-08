let SquareAnimationID;

$(function(){
    setTimeout(First_Square_Animation, 500);
    setTimeout(function() {
        Moving_Square_Animation();
        SquareAnimationID = setInterval(Moving_Square_Animation, 6000);
    }, 2500);
});

function First_Square_Animation(){
    $(".square").animate({opacity: 1}, {
        duration: 2000,
        step: function(n) {
            $(".square").css({transform: "rotate(" + n*45 + "deg)"})
        }
    })
}

function Moving_Square_Animation() {
    $(".square")
        .animate({top: "-=1rem"}, 3000)
        .animate({top: "+=1rem"}, 3000);


}