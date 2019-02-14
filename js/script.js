var exit = document.getElementById('exit'); //crucecita
var hamburger = document.getElementById('menu-icon'); //menu hamburguesa
var menu = document.getElementById('menu');

exit.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
   menu.classList.toggle('active');
}