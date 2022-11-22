let daysEl = document.getElementById("days")
let hoursEl = document.getElementById('hours')
let minEl = document.getElementById('min')
let secondEl = document.getElementById('second')

let birthday = '23 Nov 2022'
function countdown(){
    let birthdayDate = new Date(birthday)
    let currentDate = new Date()

    let milisecond = (birthdayDate - currentDate) / 1000

    let day = Math.floor(milisecond / 3600 /24);

    let hours = Math.floor(milisecond / 3600) %24;

    let min = Math.floor(milisecond / 60 ) % 60;

    let second = Math.floor(milisecond ) % 60;

    daysEl.innerHTML = format(day)
    hoursEl.innerHTML = format(hours)
    minEl.innerHTML = format(min)
    secondEl.innerHTML = format(second)
}

function format(time){
    return time < 10 ? `0${time}` : time
}

countdown()
setInterval(countdown,1000)
