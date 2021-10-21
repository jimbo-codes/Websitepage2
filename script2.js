let featuredTitle = document.querySelector("h1");
featuredTitle.id = "featured-title";

let featuredTitle2 = document.querySelector("h2");
featuredTitle2.id = "featured-title2";

let featuredTitle3 = document.querySelector("h3");
featuredTitle3.id = "featured-title3";

setTimeout(function() {
    var elem4 = document.getElementById("featured-title3");
    elem4.style.color = "red";
}, 2000);

setTimeout(function() {
    var elem = document.getElementById("featured-title");
    elem.parentNode.removeChild(elem);
}, 4000);

setTimeout(function() {
    var elem2 = document.getElementById("featured-title2");
    elem2.parentNode.removeChild(elem2);
}, 4000);

setTimeout(function() {
    var elem3 = document.getElementById("featured-title3");
    elem3.parentNode.removeChild(elem3);
}, 4000);