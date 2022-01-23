let slides = document.getElementsByTagName("li");
let slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
var i;

if (slideIndex > slides.length-1)
{slideIndex = 0}

if (slideIndex < 0) {slideIndex = slides.length-1}

for (i = 0; i < slides.length; i++) {
slides[i].className = slides[i].className.replace(" active","");
}
  
slides[slideIndex].className += " active";
}

let next = document.querySelector('[data-carousel-btn="next"]')
next.addEventListener('click', () => {
		slideIndex++
		showSlides(1);
})


let prev = document.querySelector('[data-carousel-btn="prev"]')
prev.addEventListener('click', () => {
		slideIndex--
		showSlides(1);
})
