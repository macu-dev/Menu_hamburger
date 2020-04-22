const menuHamburger = document.querySelector('.hamburger-line');
menuHamburger.addEventListener('click', animationMenu);




function animationMenu(){
  if(menuHamburger.classList.contains('hl-active')){
    menuHamburger.classList.remove('hl-active');
  } else {
    menuHamburger.classList.add('hl-active');
  }
}