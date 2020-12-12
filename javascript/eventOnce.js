// target에 담아 여러가지 element에 한번에 이벤트 주기

btnColor.addEventListener('click', function(){
    var target = [addBtn, removeBtn, toggleBtn, checkBtn]
    target.forEach( t => t.style.display= "block")
})
