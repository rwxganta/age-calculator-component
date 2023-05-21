const dayText = document.querySelector('.day span');
const monthText = document.querySelector('.month span');
const yearText = document.querySelector('.year span');
const arrowBtn = document.querySelector('.arrow');

arrowBtn.addEventListener('click', calculateAge);


function calculateAge() {
    const dayInput = document.getElementById('day').value.trim();
    const monthInput = document.getElementById('month').value.trim();
    const yearInput = document.getElementById('year').value.trim();

    if (!dayInput || !monthInput || !yearInput) return;
    if (isNaN(dayInput) || +dayInput < 1 || +dayInput > 31) return;
    if (isNaN(monthInput) || +monthInput < 1 || +monthInput > 12) return;
    if (isNaN(yearInput) || +yearInput > new Date().getFullYear()) return;

    const today = moment();
    const age = moment(`${+yearInput}-${+monthInput}-${+dayInput}`);
    const diff = moment.preciseDiff(today, age, true);

    const { years, months, days } = diff;

    dayText.textContent = days;
    monthText.textContent = months;
    yearText.textContent = years;
}