'use strict'
const navSlide =()=>{
    const mobileMenu = document.querySelector('.mobile-menu');
    const navBar =document.querySelector('.nav-bar');
    
    mobileMenu.addEventListener('click', ()=>{
        navBar.classList.toggle('nav-active')
    })
}

navSlide()
