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




const sections = document.querySelectorAll('.dc-section-container')
const aside = document.querySelector('.dc-aside-container')

const cargarImagen = (entradas)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }
    });
};
const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    threshold: 0.3
    })

sections.forEach(section =>{
    observador.observe(section)
})

observador.observe(aside)