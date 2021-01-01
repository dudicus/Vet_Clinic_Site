
const modal = document.getElementById('submit-modal');
const bookBtn = document.getElementById('book');
const span = document.getElementsByClassName('close')[0];
const bookForm = document.getElementById('appointment-form');
const sendForm = document.getElementById('contact-form');
const inputName = document.getElementById('name');
const inputPetName = document.getElementById('pet-name');
const inputPhone = document.getElementById('phone-number');
const inputDate = document.getElementById('appointment-date');
const inputTime = document.getElementById('appointment-time');
let modalContent = document.getElementById('modal-content');

bookBtn.addEventListener('click', showModalBook);
span.addEventListener('click', closeModal);

function showModalBook(e) {
    if(inputName.value != "" && inputPetName.value != "" && inputPhone != "" && inputDate.value != "" && inputTime.value != "") {
        e.preventDefault();

        let date = inputDate.value;
        let time = inputTime.value;
        let hours = Number(time.substring(0, 2));
        let minutes = Number(time.substring(3));
        let ampm = "AM"

        if(minutes >= 0 && minutes <= 9) {
            minutes = `0${minutes}`;
        }

        if( Number(hours > 12)) {
            hours -= 12;
            time = `${hours}:${minutes}`;
            ampm = "PM";
        }

        modal.style.display = 'block';
        modalContent.innerHTML = `Your appointment is at ${time} ${ampm} on ${date}`;
    }    
}

function closeModal() {
    modal.style.display = 'none';
}