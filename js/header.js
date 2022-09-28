$(document).scroll(function(){
    let scroll_value = $(window).scrollTop();
    // scrollTop() 網頁右邊的卷軸到最上端網頁的距離有多少
  
    if(scroll_value == 0){
      $('header').addClass('bg_transparent');
      $('header').removeClass('bg_color');
    }
    if(scroll_value > 100){
      $('header').removeClass('bg_transparent');
      $('header').addClass('bg_color');
    
    }
  });