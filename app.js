const x = document.querySelector(".calendar");
const z = document.querySelector(".days");
const monthYearDisplay = document.getElementById("monthYear");
const nextMonthDiv = document.querySelector(".nextMonth");

let months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

function initializeCalendar() {
  
  z.innerHTML = '';
  nextMonthDiv.innerText = '';

  
  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.innerText = i;
    z.appendChild(dayElement); 
  }

    let nextMonth = currentMonth + 1;
  let nextYear = currentYear;
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear++;
  }
  nextMonthDiv.innerText = `${months[nextMonth]} ${nextYear}`;
}

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
initializeCalendar();

document.getElementById('prevBtn').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11; 
    currentYear--;
  }
  initializeCalendar();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0; 
    currentYear++;
  }
  initializeCalendar();
});
