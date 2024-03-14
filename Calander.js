const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const PrevNextIcon = document.querySelectorAll(".icons span");
const AllDays = document.querySelectorAll(".days");

// Getting new date, current year, and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),    // retrieving first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();   // retrieving last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();   // retrieving last day of month
    lastDateofPrevMonth = new Date(currYear, currMonth, 0).getDate();   // retrieving last date of last month
    let liTag = "";
  
  
    for (let i = firstDayofMonth; i > 0; i--) {                                 // Previous month's days
      liTag += `<li class="inactive">${lastDateofPrevMonth - i + 1}</li>`;
    }
  
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;                            // Active Class as well as days of the month
      }
    for (let i = lastDayofMonth; i < 6; i++) {                                  // next month's days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    days.innerHTML = liTag;
  }
  
renderCalendar();

PrevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      // Adding event on icons
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
      
      if(currMonth<0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
      }
      
      renderCalendar();
    });
  });





