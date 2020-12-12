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

