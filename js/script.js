val = 0;
function sub() {
    val = val - 1;
    document.getElementById("value").innerHTML = val;
}
function plus() {
    val = val + 1;
    document.getElementById("value").innerHTML = val;
}
function func() {
    var total;
    total = val * 125.00;
    document.getElementById("results").innerHTML = "$125.00 " + " x " + val + " " + "$" + total + ".00";
    document.getElementById("results").style.color = "red";
}

// cart javascript start here=========>>>>>>>>>>>

document.getElementById('jcart').addEventListener('click', showHide());
function showHide() {
    var myfun = document.getElementById('hide');
    if (myfun.style.display == "none") {
        myfun.style.display = "block";
    }
    else {
        myfun.style.display = "none";
    }
}
// show hide function start here====>>>>>>>>>>>>>>>

var bars = document.getElementById("bars");
var cancel = document.getElementById("cancel");
var head = document.querySelector(".header");
bars.onclick = function () {
    bars.style.opacity = 0;
    head.classList.add("show");
    if (bars.style.opacity >= 0) {
        bars.style.opacity = 1;
    }
    else {
        bars.style.opacity = 0;
    }
}
cancel.onclick = function () {
    cancel.style.opacity = 1;
    head.classList.remove("show");
}

// sliding shose images javascript start here ====>>>>>>>>>>>>>>>>>>

var rev = 1;
function slide(a) {
    showimg(rev += a)
}
function showimg(a) {
    var i;
    const img = document.getElementsByClassName("first_shose");
    if (a > img.length) {
        rev = 1;
    }

    if (a < 1) {
        rev = img.length;
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    img[rev - 1].style.display = "block";
}