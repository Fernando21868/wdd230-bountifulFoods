const hamburger = document.querySelector('.hamburgerBtn');
const mediaQuery = window.matchMedia('(min-width: 64rem)')

function myFunction(mediaQuery) {
  document.getElementById('primaryNav').classList.remove('open');
  document.querySelector('.hamburgerBtn').classList.remove('open');
  document.querySelector('main').classList.remove('open');
}

myFunction(mediaQuery)
mediaQuery.addListener(myFunction)

function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.querySelector('.hamburgerBtn').classList.toggle('open');
  document.querySelector('main').classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
