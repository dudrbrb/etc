var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoHeight: true,
    hashNavigation: {
      replaceState: true,
      watchState: true,
    },
    navigation: {
      nextEl: '.slide_next',
      prevEl: '.slide_prev',
    },
    on:{
      slideChangeTransitionStart: slideStartEvent
    }
  });
  
  function slideStartEvent(){
    scrollUp();
  }
  
  function scrollUp() {
    TweenMax.to('body,html',0.2,{scrollTop:0})
  }
  
  $('.navi ul li').on('click',function(){
    var idx = $('.navi ul li').index(this) + 1;
    swiper.slideTo(idx);
  });