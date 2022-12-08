const header = document.querySelector("header");

/* ----------- Sticky Styling ----------- */

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

var cups = document.getElementById("cups");
var fragPerc = document.getElementById("fragStr");

var showFragrance = document.getElementById("showFragranceNums");

function calcFragrance(){
    var oz = cups.value * 8;
    var frag = oz * (fragPerc.value);
    frag /= 100;
    frag = frag.toFixed(2);
    showFragrance.innerHTML = "Amount of Fragrance to add: " + frag + "oz";
}

$('input[name="fragStr"]').on('change', function () {
    var oz = cups.value * 8;
    var frag = oz * (fragPerc.value);
    frag /= 100;
    frag = frag.toFixed(2);
    showFragrance.innerHTML = "Amount of Fragrance to add:  " + frag + "oz";
});


const
  range = document.getElementById('fragStr'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);