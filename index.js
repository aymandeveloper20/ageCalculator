let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let display= document.getElementById("display");
let btn = document.getElementById("BtnDisplay");
let dayerror = document.getElementById("errorDay");
let montherror = document.getElementById("errorMonth");
let yearerror = document.getElementById("errorYear");

// =======================================
// IMPROVED WITH AI
// =======================================

function calcAge() {
    let error = false;
    let errorDay = document.getElementById("errorDay");
    let errorMonth = document.getElementById("errorMonth");
    let errorYear = document.getElementById("errorYear");
    let dayLabel = document.getElementById("dayLabel");
    let monthLabel = document.getElementById("monthLabel");
    let yearLabel = document.getElementById("yearLabel");

    if (!/^\d+$/.test(dayInput.value) || parseInt(dayInput.value) <= 0 || parseInt(dayInput.value) > 31) {
        errorDay.classList.add("show");
        errorDay.classList.remove("hide");
        errorDay.textContent = "Must be a valid Day";
        dayLabel.classList.add("errorlabel");
        dayLabel.classList.remove("normal");
        error = true;
    } else {
        errorDay.classList.add("hide");
        errorDay.classList.remove("show");
        dayLabel.classList.add("normal");
        dayLabel.classList.remove("errorlabel");
    }

    if (!/^\d+$/.test(monthInput.value) || parseInt(monthInput.value) <= 0 || parseInt(monthInput.value) > 12) {
        errorMonth.classList.add("show");
        errorMonth.classList.remove("hide");
        errorMonth.textContent = "Must be a valid Month";
        error = true;
        monthLabel.classList.add("errorlabel");
        monthLabel.classList.remove("normal");
    } else {
        errorMonth.classList.add("hide");
        errorMonth.classList.remove("show");
        monthLabel.classList.add("normal");
        monthLabel.classList.remove("errorlabel");
    }

    if (!/^\d+$/.test(yearInput.value) || parseInt(yearInput.value) < 1800) {
        errorYear.classList.add("show");
        errorYear.classList.remove("hide");
        errorYear.textContent = "Must be a valid Year";
        error = true;
        yearLabel.classList.add("errorlabel");
        yearLabel.classList.remove("normal");

    } else {
        errorYear.classList.add("hide");
        errorYear.classList.remove("show");
        yearLabel.classList.add("normal");
        yearLabel.classList.remove("errorlabel");
    }

if (!error) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const birthYear = parseInt(yearInput.value);
    const birthMonth = parseInt(monthInput.value);
    const birthDay = parseInt(dayInput.value);

    let age = year - birthYear;
    let ageMonth = month - birthMonth;
    let ageDay = day - birthDay;

    if (ageDay < 0) {
        ageDay += 30;
        ageMonth -= 1;
    }
    if (ageMonth < 0) {
        ageMonth += 12;
        age -= 1;
    }

    if (age < 0) {
        age = 0;
        ageMonth = 0;
        ageDay = 0;
    }

    displayAge(age, ageMonth, ageDay);
}
}
function displayAge(age, ageMonth, ageDay) {
    display.innerHTML = `<h3 id="yearsDisplay"><span>${age}</span>years</h3>
    <h3 id="monthsyearsDisplay"><span>${ageMonth}</span>months</h3>
    <h3 id="daysDisplay"><span>${ageDay}</span>days</h3>`;
}

btn.addEventListener("click", calcAge);