var myIndex = 1;
carousel(myIndex);

/*navigation bar*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
  } else {
    document.getElementById("myTopnav").style.top = "-190px";
  }
  prevScrollpos = currentScrollPos;
}

/*panellum*/
pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://i.ibb.co/JjywHB9/Street-View-360.jpg"
});

/*slide shows*/
function plusSlides(n) {
  carousel(myIndex += n);
}

function currentSlide(n) {
  carousel(myIndex = n);
}


function carousel(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {myIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  dots[myIndex-1].className += " active";
}


//navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
