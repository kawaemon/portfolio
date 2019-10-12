jQuery.Color.hook( "stroke fill" );

let github_icon, github_icon_bg, twitter_icon, twitter_icon_bg, intro_button, comingsoon, square;

$(function(){
    github_icon = $(".github-icon");
    github_icon_bg = $(".github-icon-background");
    twitter_icon = $(".twitter-icon");
    twitter_icon_bg = $(".twitter-icon-background");
    intro_button = $(".intro-icon");
    comingsoon = $(".comingsoon");
    square = $(".square");


    setTimeout(First_Square_Animation, 500);
    setTimeout(() => $(".icons").animate({opacity:1}, 2000), 1000);
    setTimeout(() => {Moving_Square_Animation();setInterval(Moving_Square_Animation, 6000);}, 2500);

    $(".name").animate({opacity: 1}, 2000);
    $(".footer").animate({opacity: 1}, 2000);

    twitter_icon.hover(() => Twitter_Icon_Hover_EventHandler(true), () => Twitter_Icon_Hover_EventHandler(false));
    github_icon.hover(() => Github_Icon_Hover_EventHandler(true), () => Github_Icon_Hover_EventHandler(false));
    intro_button.click(ComingSoon_Handler);
});

function First_Square_Animation(){
    square.animate({opacity: 1}, {
        duration: 2000,
        step: n => square.css({transform: "rotate(" + n * 45 + "deg)"})
    });
}

function Moving_Square_Animation() {
    square.animate({top: "-=1rem"}, 3000)
          .animate({top: "+=1rem"}, 3000);
}

function Twitter_Icon_Hover_EventHandler(t) {
    twitter_icon.stop().animate({fill: t ? "#1DA1F2" : "white"}, 200);
    twitter_icon_bg.stop().animate({opacity: t ? 1 : 0}, 200);
}

function Github_Icon_Hover_EventHandler(t) {
    github_icon.stop().animate({opacity: t ? 0 : 1}, 200);
    github_icon_bg.stop().animate({opacity: t ? 1 : 0}, 200);
}

let isViewable = false;
function ComingSoon_Handler() {
    if (isViewable) comingsoon.stop().animate({opacity: 0}, 200);
    else comingsoon.stop().animate({opacity: 1}, 200);

    isViewable = !isViewable;
}