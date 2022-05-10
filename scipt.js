// Ham menu code
let hamMenu = document.querySelector('.ham__logo');
let linksContainer = document.querySelector('.header__ham--links-container');
let links = document.querySelectorAll('.header__ham--link-link');

hamMenu.addEventListener('click',e=>{
    for(let i = 0; i<links.length; i++){
        links[i].classList.toggle('header__ham--link-link-on')
    }
    linksContainer.classList.toggle('header__ham--links-container-on')
    // links.classList.toggle('header__ham--link-link-on')
})