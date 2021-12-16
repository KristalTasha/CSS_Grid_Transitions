const container = document.querySelector('.search');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () =>{
    container.classList.toggle('active')
})