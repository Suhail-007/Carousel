const buttons = document.querySelectorAll('[data-carousel-btn]');

//Buttons
buttons.forEach(function(button) {
  button.addEventListener('click', () => {

    let offset = button.dataset.carouselBtn === 'next' ? 1 : -1;

    let slides = button.closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = document.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;

    if (newIndex >= slides.children.length) newIndex = 0;
    
    //animaton
    slides.children[newIndex].style.transition = '300ms opacity ease-in-out'
    activeSlide.style.transitionDelay = '0ms'

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})