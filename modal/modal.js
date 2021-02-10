const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');

modalButton.addEventListener('click', ()=>{
    modal.classList.add('modal--hidden');
})