jQuery.Color.hook( "stroke fill" );

$(function(){
    setTimeout(First_Square_Animation, 500);
    setTimeout(() => $(".icons").animate({opacity:1}, 2000), 1000);
    setTimeout(() => {Moving_Square_Animation();setInterval(Moving_Square_Animation, 6000);}, 2500);

    $(".name").animate({opacity: 1}, 2000);
    $(".twitter-icon").hover(Twitter_Icon_Hover_EventHandler, Twitter_Icon_HoverOut_EventHandler);
    $(".github-icon").hover(Github_Icon_Hover_EventHandler, Github_Icon_HoverOut_EventHandler);
});

function First_Square_Animation(){
    $(".square").animate({opacity: 1}, {
        duration: 2000,
        step: n => $(".square").css({transform: "rotate(" + n * 45 + "deg)"})
    });
}

function Moving_Square_Animation() {
    $(".square")
        .animate({top: "-=1rem"}, 3000)
        .animate({top: "+=1rem"}, 3000);
}

function Twitter_Icon_Hover_EventHandler() {
    $(".twitter-icon").stop().animate({fill: "#1DA1F2"}, 200);
    $(".twitter-icon-background").stop().animate({opacity: 1}, 200);
}

function Twitter_Icon_HoverOut_EventHandler() {
    $(".twitter-icon").stop().animate({fill: "white"}, 200);
    $(".twitter-icon-background").stop().animate({opacity: 0}, 200);
}

function Github_Icon_Hover_EventHandler() {
    $(".github-icon").stop().animate({opacity: 0}, 200);
    $(".github-icon-background").stop().animate({opacity: 1}, 200);
}

function Github_Icon_HoverOut_EventHandler() {
    $(".github-icon").stop().animate({opacity: 1}, 200);
    $(".github-icon-background").stop().animate({opacity: 0}, 200);
}