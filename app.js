const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const arrowBtn = document.querySelector('.arrow');

const dayText = document.querySelector('.day span');
const monthText = document.querySelector('.month span');
const yearText = document.querySelector('.year span');

arrowBtn.addEventListener('click', calculateAge);


function calculateAge() {
    const today = new Date();

    yearText.textContent =  today.getFullYear() - +yearInput.value;
}