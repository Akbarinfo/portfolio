// let open = document.getElementById('id-menu');
// let navbox = document.getElementById('id-nav');
// let icon = document.getElementById('id-icon');

// let count = 0;
// open.addEventListener('click', function () {
//   navbox.classList.toggle('open');
//   if (count == 0) {
//     icon.style.fontSize = '32px';
//     icon.className = "bx bx-x";
//     count++;
//   } else {
//     icon.className = "bx bx-menu";
//     count = 0;
//   }
// })


let obtn = document.getElementById('id-open-menu');
let xbtn = document.getElementById('id-remove-menu');
let menubox = document.getElementById('id-menubox');

obtn.addEventListener(
  'click', function(){
    menubox.classList.add('opens');
    obtn.classList.add('open-btns')
  }
);

xbtn.addEventListener('click', function() {
  menubox.classList.remove('opens');
  obtn.classList.remove('open-btns')
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