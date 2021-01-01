const modal = document.getElementById('contact-modal');
const sendBtn = document.getElementById('send');
const span = document.getElementsByClassName('close')[0];
const sendForm = document.getElementById('contact-form');
const inputContactName = document.getElementById('contact-name');
const inputEmail = document.getElementById('email');

sendBtn.addEventListener('click', showModalSend);
span.addEventListener('click', closeModal);

function showModalSend(e) {
    if(inputContactName.value != "" && inputEmail.value != "") {
        e.preventDefault();

        modal.style.display = 'block';
    }
}

function closeModal() {
    modal.style.display = 'none';
}