const navList = document.getElementById('nav-list-mobile')
const navBtn = document.querySelector('#nav-btn')

navBtn.addEventListener('click', () => {
    navList.classList.toggle('hidden')
})