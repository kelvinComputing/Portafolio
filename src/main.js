'use strict'

const typed = new Typed('.typed', {
  strings: [
    "Soy Desarrollador",
    "Apasionado al Mundo de la Web",
    "Soy Kelvin Contreras @kelvincomputing"
  ],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 58,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: true,
  cursorChar: '_',
});

const typed2 = new Typed('#form-name', {
  strings: ['Kelvin Contreras'],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 150,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const typed3 = new Typed('#form-email', {
  strings: ['kelvin@gmail.com'],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 150,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const typed4 = new Typed('#form-message', {
  strings: ['Message...'],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 150,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})
const menuItem = document.querySelectorAll('ul li a');
menuItem.forEach(element => {
  element.addEventListener('click', function () {
    menuItem.forEach(list => list.classList.remove('is-active'));

    this.classList.add('is-active');
  })
})