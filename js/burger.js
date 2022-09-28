// hamburger

$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('on');
        $('.burger').slideToggle();
    });
});



$(function(){
    $(window).on("resize", function(){
        if($(window).width()>768){
            $(".burger").css({display: "none"});
            $(".hamburger").removeClass("on");
        }
    });
});




