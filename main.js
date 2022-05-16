
//CAROUSEL
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slide's translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
})

//RANDOMIZE
// document.addEventListener("load", randomize(slides));
// const randomly = () => Math.random() - 0.5;

/*
const rdmSlide = [].concat(slides).sort((slides) => {
  Math.random() - 0.5;
});*/

// slides.sort(() => Math.random() - 0.5);


//current slide counter
let curSlide = 0;

//total number of slides
let maxSlide = slides.length - 1;

//event listener - next
document.getElementById("nxt").addEventListener("click", displayNext);

//event listener - previous
document.getElementById("prv").addEventListener("click", displayPrev);

//navigation functionality
  //next
function displayNext() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide ++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};

  //previous
function displayPrev() {

  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

  //RANDOMIZE
/*
function randomize(x) {
  x.forEach(() => Math.random() - .5);
}
*/



/*

var slider = document.querySelectorAll('slider');
var eachSlide = slider.children;
var frag = document.createDocumentFragment();
var newIndex = Math.floor(Math.random() * eachSlide.length);
while (eachSlide.length) {
  frag.append(eachSlide[newIndex]);
  alert(newIndex);
}
parent.appendChild(frag);
*/



//END CAROUSEL
