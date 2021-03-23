window.addEventListener('load', function(){ 
    // 이미 화면에 보여지는 요소들은 나타나게
    ScrollMotion();
    
    // 스크롤시 나타나게
    window.addEventListener('scroll', ScrollMotion());
})

function ScrollMotion(){
    const element = document.querySelectorAll('.first-element');
    const element2 = document.querySelectorAll('.second-element');
    let eleOffsetArr = [];

    // 요소별 y값 구하기
    element.forEach(function(e){
      var eleOffset = e.offsetTop - e.offsetHeight - 500;
      eleOffsetArr.push(eleOffset)
    });

    // tweenMax의 stagger와 같은 모션 구현
    // 요소가 다를 때
    eleOffsetArr.forEach(function(ele, idx){
      if( window.scrollY > ele ){  // 요소의 높이값을 넘어섰을 떄
          element[idx].style.cssText = 'opacity:1; transform: translateY(0);'
          setTimeout(function() {
            element2[idx].style.cssText = 'opacity:1; transform: translateY(0);'
          }, 300);
      }
    });

    //  요소가 같을 때엔 더 간결이 쓸 수 있따
    eleOffsetArr.forEach(function(ele, idx){
      setTimeout(function () {
        ele.style.cssText = "opacity: 1; transform: translateY(0px);"
      }, 300 * idx)
    })
}