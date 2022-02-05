const closeE = document.getElementById('span')
const list = document.querySelector('.dc-header-list--ul')
const bars = document.querySelector('.dc-bars-button')

closeE.addEventListener('click',function(){
    list.classList.remove('show-menu')
    document.body.style.overflowY = "auto"
})

bars.addEventListener('click',function(){
    list.classList.add('show-menu')
    document.body.style.overflowY = "hidden"
})


