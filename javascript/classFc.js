function addClass(e, c) {
    e.classList.add(c);
    return e;
};

function removeClass(e, c) {
    e.classList.remove(c);
    return e;
};

function toggleClass(e, c) {
    e.classList.toggle(c);
    return e;
};

function hasClass(e, c) {
    return e.classList.contains(c); // true or false
};

// $(this).index() --> js
var btn = document.querySelectorAll('.pagi div');

[].forEach.call(btn, function(e){ 
  e.addEventListener("click", function(){
    console.log(getElementIndex(btn, e));
  }, false); 
});

function getElementIndex(e, range) {
    if (!!range) return [].indexOf.call(e, range);
    return [].indexOf.call(e.parentNode.children, e);
}