let obtn = document.getElementById('id-open-menu');
let xbtn = document.getElementById('id-remove-menu');
let menubox = document.getElementById('id-menubox');
let body = document.getElementById('body');

obtn.addEventListener(
  'click', function(){
    menubox.classList.add('opens');
    obtn.classList.add('open-btns')
    body.classList.add('left');
  }
);

xbtn.addEventListener('click', function() {
  menubox.classList.remove('opens');
  obtn.classList.remove('open-btns');
  body.classList.remove('left');
});


let cursor = document.querySelector(".cursor");
let cursorSpot = document.querySelector(".cursor-spot");

document.addEventListener("mousemove", function(b){
  cursor.style.cssText = cursorSpot.style.cssText = "left: " + b.clientX + "px; top: " + b.clientY + "px;";

  const anchors =  document.querySelectorAll("a");
  for(let a of anchors) {
    a.onmouseover = () => {
      cursor.classList.add("chover")
    }
    a.onmouseout = () => {
      cursor.classList.remove("chover")
    }
  }
});



//Get the button
var topbutton = document.getElementById("id-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbutton.style.opacity = "1";
    topbutton.style.transition = "all 2s linner";
  } else {
    topbutton.style.opacity = "0";
    topbutton.style.transition = "all 2s linner";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}