// *****addClass*****
// css 클래스를 추가하는 함수로, e(=element)와 c(=class명)를 받도록 한다.
function addClass(e, c) {
    e.className += " " + c;
};

// *****removeClass*****
// css 클래스를 제거하는 함수로, e(=element)와 c(=class명)를 받도록 한다. 
// removeClass 함수의 경우는 addClass와는 조금 다르게 className이 중간에 있을수도 있으므로 그러한 것들을 고려해야한다. 
// RegExp로 구현한다면 쉽게 구현이 가능하다.

function removeClass(e, c) {
    var check = new RegExp("(\\s|^)" + c + "(\\s|$)");
    e.className = e.className.replace(check, " ").trim();
};


// *****toggleClass*****
// css 클래스가 있으면 켜주고 없으면 추가하는 함수로,e(=element)와 c(=class명)를 인자로 받는다. 
// toggleClass의 경우 위의 두 함수를 사용할수도 있지만 어짜피 removeClass와 같은 RegExp를 하나 사용해야하는데다 간단하므로 
// 위의 함수들을 굳이 안쓰고 그냥 구현해도 그다지 길어지지 않는다.

function toggleClass(e, c) {
    var check = new RegExp("(\\s|^)" + c + "(\\s|$)");
    if (check.test(e.className)) {
        e.className = e.className.replace(check, " ").trim();
    } else {
        e.className += " " + c;
    }
}


// *****hasClass*****

if ( (" " +e.className + " ").replace(/[\n\t]/g, " ").indexOf(" "+ c+" ") > -1 ){
    alert( e+'에 '+ c +' 클래스가 있습니다')
} 