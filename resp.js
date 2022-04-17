burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar-resp')
navlist = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


