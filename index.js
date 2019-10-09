jQuery.Color.hook( "stroke fill" );

$(function(){
    setTimeout(First_Square_Animation, 500);
    setTimeout(function(){$(".icons").animate({opacity:1}, 2000)}, 1000);
    setTimeout(function() {
        Moving_Square_Animation();
        setInterval(Moving_Square_Animation, 6000);
    }, 2500);

    $(".name").animate({opacity: 1}, 2000);

    $(".twitter-icon").hover(
        function() {
            $(".twitter-icon").stop().animate({fill: "#1DA1F2"}, 200);
            $(".twitter-icon-background").stop().animate({opacity: 1}, 200);

        },
        function() {
            $(".twitter-icon").stop().animate({fill: "white"}, 200);
            $(".twitter-icon-background").stop().animate({opacity: 0}, 200);

        }
    )
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
