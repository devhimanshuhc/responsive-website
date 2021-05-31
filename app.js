const menu= document.querySelector('#mobile-menu');
const menuLinks= document.querySelector('.navbar__menu');
const navLogo= document.querySelector('#navbar__logo');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const hightlightMenu= () =>{
    const elen= document.querySelector('.highlight');
    const homeMenu= document.querySelector('#home-page');
    const aboutMenu= document.querySelector('#about-page');
    const servicesMenu= document.querySelector('#services-page');
    let scrollPos= window.scrollY;
    console.log(scrollPos);

    //adds hightlight when scroll
    if (window.innerwWidth >960 && scrollPos<600){
        homeMenu.classList.add('.highlight');
        aboutMenu.window.classList.remove('.highligh');
        return;
    }    
    else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('.highlight');
        homeMenu.classList.remove('.highlight');
        servicesMenu.classList.remove('.highlight');
        return;
    }

    else if(window.innerWidth >960 && scrollPos<1400){
        servicesMenu.classList.add('.highlight');
        aboutMenu.classList.remove('.highlight');
        return;
    }
     
    if((elen && window.innerWidth<960 && scrollPos<600) || elen){
        elen.classList.remove('.highlight');

    }
    
}

window.addEventListener('scroll', hightlightMenu);
window.addEventListener('click', hightlightMenu);

//clase mobile menu
const hideMobileMenu= ()=>{
    const menuBars= document.querySelector('.is-active')
    if(innerWidth<= 760 && menuBars ){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active')

    }
}

menuLinks.addEventListener('click', hideMobileMenu)
menuLinks.addEventListener('click', hideMobileMenu)
