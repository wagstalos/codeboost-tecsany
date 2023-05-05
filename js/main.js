const botoes = document.getElementById("menu-mob");
const menuMobile = document.getElementById("menu-mobile");

botoes.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});


//Swiper
const swiper = new Swiper(".swiper", {
  // effect: "flip",
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
  },
});


const backgroundMain = document.getElementById('main');
const elipseGreen = document.getElementsByClassName('elipse-green');
swiper.on('slideChange', function() {
  // Verifica se o slide atual é o último slide
  if (swiper.isEnd) {
    // Executa algo quando o último slide é exibido
    console.log('O último slide foi exibido!');
    elipseGreen[0].style.display = 'none';
    backgroundMain.style.background = 'linear-gradient(360deg, #FFF0F0 0%, rgba(255, 231, 231, 0) 101.57%)';
  }else{
    elipseGreen[0].style.display = 'block';
    backgroundMain.style.background = 'linear-gradient(360deg, #F5F9F3 0%, rgba(245, 249, 243, 0) 101.57%)';
  }
});