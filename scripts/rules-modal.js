let modal = document.querySelector('.rules-modal');
let btn = document.querySelector('.btn-rules');
let close = document.querySelector('.rules-modal__content--close');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if(event.target === modal){
        toggleModal();
    }
}

btn.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
