
$('#slide1').click(function(){
    $('#slideDown1').fadeIn().css({display:'block'});
    $('#slideDown2').fadeOut().css({display:'none'});

});


$('#slide2').click(function(){
    $('#slideDown2').fadeIn().css({display:'block'});
    $('#slideDown1').fadeOut().css({display:'none'});
});