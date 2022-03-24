
let windowSize = window.innerWidth;
 
// menu hamburger
const hamburgerMenu = document.querySelector('.hamburger')
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    hamburgerMenu.classList.toggle('is-active')
    let menu = document.querySelector('#list')
    menu.classList.toggle('active')
}
hamburgerMenu.addEventListener('click', toggleMenu)
hamburgerMenu.addEventListener('touchstart', toggleMenu)

// animação navbar

function validateSizeScroll() {
    let contactBar = document.querySelector('.header__contact');
    let navBar = document.querySelector('.header__nav__bg');
    let sizeH1ToTop = document.querySelector('.header__title');
    if (sizeH1ToTop.getBoundingClientRect().top <= 140) {
        contactBar.classList.add('header__contact__disabled');
        
        navBar.style.backgroundColor = 'rgba(12, 11, 9, 10)'
            
    }
    else {
        contactBar.classList.remove('header__contact__disabled');
        navBar.style.backgroundColor = 'rgba(12, 11, 9, 0.6)'
        
    }
   



}

window.addEventListener('scroll', validateSizeScroll)