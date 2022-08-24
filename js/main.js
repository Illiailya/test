'use strict';

$(function () {
	// Бургер
	$('.burger').on('click', function () {
		$('.burger').toggleClass('burger--active');
		$('.menu__list').toggleClass('menu__list--active');
		$('body').toggleClass('lock');
	})
});

let scrollpos = window.scrollY;
const test = document.querySelector('.test');
console.log(test);
const scrollChange = 1;
// const add_class_on_scroll = () => test.classList.add('test--red');
// const remove_class_on_scroll = () => test.classList.remove("test--red");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
		 test.classList.add('test--red')
		}
  else { 
		test.classList.remove('test--red') }
})