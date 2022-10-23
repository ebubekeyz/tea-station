// Footer year

const dateYear = document.querySelector('.year');

const date = new Date();
const year = date.getFullYear();

dateYear.textContent = year;

// nav button
const navButton = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');

navButton.addEventListener('click', function () {
  navbar.style.transform = 'translateX(0)';
});

navClose.addEventListener('click', function () {
  //   navbar.style.display = 'none';
  navbar.style.transform = 'translateX(-100%)';
});
