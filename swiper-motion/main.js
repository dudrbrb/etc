var TLMAX = {
    Motion1: new TimelineMax(),
    Motion2: new TimelineMax(),
    Motion3: new TimelineMax(),
  };
  
  var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoHeight: true,
    hashNavigation: {
      replaceState: true,
      watchState: true
    },
    navigation: {
      nextEl: '.slide_next',
      prevEl: '.slide_prev',
    },
    on: {
      slideChangeTransitionStart: slideStartEvent,
      slideChangeTransitionEnd: slideEndEvent
    }
  });
  
  function slideStartEvent() {
    swipeIndex(this);
  }
  
  function slideEndEvent() {
    motionReset();
    scrollUp();
    
    //모션 실행
    var idx = this.realIndex;
    switch (idx) {
      case 0:
        SwiperMotion1(TLMAX.Motion1).play(0, false);
        break;
      case 1:
        SwiperMotion2(TLMAX.Motion2).play(0, false);
        break;
      case 2:
        SwiperMotion3(TLMAX.Motion3).play(0, false);
        break;
    }
  }
  
  //스와이프 모션 초기화 이벤트
  function motionReset() {
    TLMAX.Motion1.pause(0, false);
    TLMAX.Motion2.pause(0, false);
    TLMAX.Motion3.pause(0, false);
  
    /**
     * repeat:-1 같은 반복 모션의 reset은 경우에 따라서 사용하면 됨
     * 
     * reset을 시켜야 한다면 해당 object를 killTweensOf에 추가하고
     * 모션 실행하기 전 위치로 set 시켜야함 
     * 
     */
  
    // TweenMax.killTweensOf(obj);
    // TweenMax.set(obj, { opacity: 1, x: 0, y: 0, rotation: 0 })
  
  }
  
  function SwiperMotion1(tl) {
    tl.clear()
      .to('.ball', 0.5, { x: 50 })
      .to('.ball', 0.5, { y: 50 })
      .to('.ball', 0.5, { scale: 1.5 })
      .to('.ball', 0.5, { x: 100 })
      .to('.ball', 0.5, { y: 100 })
      .to('.ball', 0.5, { scale: 2 })
  
    return tl;
  }
  
  function SwiperMotion2(tl) {
    tl.clear()
      .to('.ball2', 1.0, { y: 200, ease: Bounce.easeOut })
  
    return tl;
  }
  
  function SwiperMotion3(tl) {
    /**
     * 참고사항!
     * swiper loop 내에 staggerTo를 사용할 땐 .swiper-slide-active를 지정해줘야 함
     * staggerTo의 obj가 복사된 swiper의 해당 obj도 포함시키기 때문
     */
    tl.clear()
    .staggerTo('.swiper-slide-active .box', 0.3, { y: 50, yoyo:true, repeat:1},0.15) 
  
    return tl;
  }
  
  function swipeIndex(e) {
    var idx = e.realIndex;
  }
  
  function scrollUp() {
    TweenMax.to('body,html', 0.4, {scrollTop: 0, ease: Power2.easeInOut})
  }
  