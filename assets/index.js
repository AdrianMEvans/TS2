dateFns.isToday(new Date())
// create current date and time by using date-fns
const clock = document.querySelector(".clock");
// const datefns = require("date-fns");

const tick = () => {
    const now = new Date();
    // console.log(now);
    const h = dateFns.format(now, 'HH');
    const m = dateFns.format(now, 'mm');
    const s = dateFns.format(now, 'ss');
    const day = dateFns.format(now, 'dddd');
    const d = dateFns.format(now, 'Do');
    const mo = dateFns.format(now, 'MMMM');

    // create spans to display Date and time elememnts
    const html = `
    <span>Date: ${day} ${d} of ${mo}</span>
    <br><br>
    <span>Time: ${h}:</span><span>${m}:</span><span>${s}</span>
    `;
    // console.log(h,m,s)

    clock.innerHTML = html;
}

setInterval(tick, 1000);
const now = new Date();

const h = dateFns.format(now, 'HH');
const m = dateFns.format(now, 'mm');
const s = dateFns.format(now, 'ss');

const times = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];

for (let i = 0; i < times.length; i++) {
    const time = times[i];
    // console.log(time);
    // console.log(times[i]);
    let rowHtml = `
    <div class="row">
        <div class="col hour time-block" id="time${time}">
        ${time} : 00
        </div>
        <div class="col text-block">
            <textarea name="${time}" id="${time}" "cols="30" rows="0" placeholder="enter text here"></textarea>
        </div>
        <button class="col saveBtn btn-block" i:hover id="btn${time}"><i class="far fa-save"></i></button>  
    </div>`

    // console.log(rowHtml);
    let newRows = document.querySelector(".rowContainer");
    newRows.innerHTML += rowHtml;

    const myRow = document.querySelectorAll(".row");
    // console.log(myRow);

    // console.log(time);
}

let textAreaID = document.querySelectorAll("textarea")
// console.log(textAreaID);

// console.log(h);

const textDiv08 = document.getElementById("08");
const textDivAttribute08 = textDiv08.getAttribute("id")
// console.log(textDivAttribute08);

if (textDivAttribute08 == h) {
    textDiv08.parentElement.classList.add("present")
} else if (textDivAttribute08 > h) {
    textDiv08.parentElement.classList.add("future")
} else if (textDivAttribute08 < h) {
    textDiv08.parentElement.classList.add("past")
}

const textDiv09 = document.getElementById("09");
const textDivAttribute09 = textDiv09.getAttribute("id")
// console.log(textDivAttribute09);

if (textDivAttribute09 == h) {
    textDiv09.parentElement.classList.add("present")
} else if (textDivAttribute09 > h) {
    textDiv09.parentElement.classList.add("future")
} else if (textDivAttribute09 < h) {
    textDiv09.parentElement.classList.add("past")
}

const textDiv10 = document.getElementById("10");
const textDivAttribute10 = textDiv10.getAttribute("id")

if (textDivAttribute10 == h) {
    textDiv10.parentElement.classList.add("present")
} else if (textDivAttribute10 > h) {
    textDiv10.parentElement.classList.add("future")
} else if (textDivAttribute10 < h) {
    textDiv10.parentElement.classList.add("past")
}

const textDiv11 = document.getElementById("11");
const textDivAttribute11 = textDiv11.getAttribute("id")

if (textDivAttribute11 == h) {
    textDiv11.parentElement.classList.add("present")
} else if (textDivAttribute11 > h) {
    textDiv11.parentElement.classList.add("future")
} else if (textDivAttribute11 < h) {
    textDiv11.parentElement.classList.add("past")
}

const textDiv12 = document.getElementById("12");
const textDivAttribute12 = textDiv12.getAttribute("id")

if (textDivAttribute12 == h) {
    textDiv12.parentElement.classList.add("present")
} else if (textDivAttribute12 > h) {
    textDiv12.parentElement.classList.add("future")
} else if (textDivAttribute12 < h) {
    textDiv12.parentElement.classList.add("past")
}

const textDiv13 = document.getElementById("13");
const textDivAttribute13 = textDiv13.getAttribute("id")

if (textDivAttribute13 == h) {
    textDiv13.parentElement.classList.add("present")
} else if (textDivAttribute13 > h) {
    textDiv13.parentElement.classList.add("future")
} else if (textDivAttribute13 < h) {
    textDiv13.parentElement.classList.add("past")
}

const textDiv14 = document.getElementById("14");
const textDivAttribute14 = textDiv14.getAttribute("id")

if (textDivAttribute14 == h) {
    textDiv14.parentElement.classList.add("present")
} else if (textDivAttribute14 > h) {
    textDiv14.parentElement.classList.add("future")
} else if (textDivAttribute14 < h) {
    textDiv14.parentElement.classList.add("past")
}

const textDiv15 = document.getElementById("15");
const textDivAttribute15 = textDiv15.getAttribute("id")

if (textDivAttribute15 == h) {
    textDiv15.parentElement.classList.add("present")
} else if (textDivAttribute15 > h) {
    textDiv15.parentElement.classList.add("future")
} else if (textDivAttribute15 < h) {
    textDiv15.parentElement.classList.add("past")
}

const textDiv16 = document.getElementById("16");
const textDivAttribute16 = textDiv16.getAttribute("id")

if (textDivAttribute16 == h) {
    textDiv16.parentElement.classList.add("present")
} else if (textDivAttribute16 > h) {
    textDiv16.parentElement.classList.add("future")
} else if (textDivAttribute16 < h) {
    textDiv16.parentElement.classList.add("past")
}

const textDiv17 = document.getElementById("17");
const textDivAttribute17 = textDiv17.getAttribute("id")

if (textDivAttribute17 == h) {
    textDiv17.parentElement.classList.add("present")
} else if (textDivAttribute17 > h) {
    textDiv17.parentElement.classList.add("future")
} else if (textDivAttribute17 < h) {
    textDiv17.parentElement.classList.add("past")
}


$('.saveBtn').click(function () {
    const time = $(this).siblings('div.time-block').text();
    // console.log(time);
    const input = $(this).siblings('div.text-block').children("textarea").val();
    // console.log(input);
    localStorage.setItem(time, input);
 })