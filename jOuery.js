let scrollPrecentage = () =>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
}
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;
/*--menu-btn-fixed-when-scroll============*/
$(window).scroll(function(){
    if($(document).scrollTop() > 20){
        $('.navigation').addClass('fix-icon');
    }
    else{
        $('.navigation').removeClass('fix-icon');
    }
});
/*==popup-open==================================*/
$(document).on('click','.play-btn a',function(){
    $('.play').addClass('active-popup');
});
/*==popup-Close==================================*/
$(document).on('click','.close-movie',function(){
    $('.play').removeClass('active-popup');
});
/*==auto-play-when-popup-open===================*/
$('.play-btn a').click(function(){
    $('#m-video')[0].play();
});
/*==Close-video-when-poppup-close==============*/
$('.close-movie').click(function(){
    $('#m-video')[0].pause();
});