var mainSwiper = new Swiper('.mainSwiper', {
  loop:true,
  slidesPerView: 'auto',
  centeredSlides: true,
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

var naviSwiper = new Swiper('.naviSwiper', {
  loop:true,
  slidesPerView: 'auto',
  centeredSlides: true,
  hashNavigation: {
    replaceState: true,
    watchState: true,
  },
  on:{
    slideChangeTransitionStart: slideStartEvent
  }
})

mainSwiper.controller.control = naviSwiper;
naviSwiper.controller.control = mainSwiper;

function slideStartEvent(){
  scrollUp();
  naviActive(this);
}

function scrollUp() {
  TweenMax.to('body,html',0.2,{scrollTop:0})
}

function naviActive(e){
  var idx = e.realIndex + 1;
  $('.naviSwiper .swiper-slide').removeClass('on');
  $('.naviSwiper .nav' + idx).addClass('on');

  console.log(idx)
}

$('.naviSwiper .swiper-slide').on('click',function(){
  var idx = $('.naviSwiper .swiper-slide').index(this);
  mainSwiper.slideTo(idx);
});

