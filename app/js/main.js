const headerBacground = document.querySelector('.header__bacground')
const body = document.querySelector('body')
const button = document.querySelector('.header__burger')
const headerMobil = document.querySelector('.header__mobile')


button.addEventListener('click',  function() {
	this.classList.toggle('header__burger_active')
	headerBacground.classList.toggle('header__bacground_active')
	body.classList.toggle('header__mobile_overflow')
	headerMobil.classList.toggle('header__mobile_active')
})












var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints:{
    1100: {
      slidesPerView: 6,
    },
    900: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".swiper-container-project", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints:{
    1230: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    },
  },
});











