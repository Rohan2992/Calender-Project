//jshint esversion:6

const currentDate = document.querySelector(".current-Date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
// anonymous function
const renderCalender = () => {

    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let Litag = "";
    console.log(firstDayOfMonth);
    for (let i = firstDayOfMonth; i > 0; i--) {
        Litag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        Litag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        Litag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }
    daysTag.innerHTML = Litag;
    let today = new Date().getDate();
    currentDate.innerText = `${months[currMonth]} ${today}, ${currYear}`;
};

// console.log(dateToShow);
// console.log(prevNextIcon);

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalender();
    });
});

renderCalender();