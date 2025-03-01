const start = document.querySelector('.start');
const lap = document.querySelector('.lap');
const reset = document.querySelector('.reset');
const lap_board = document.querySelector('.lap-board')

let timer = false;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let lapstime = 0;
let lapCount = 0;
let currentTime;

start.addEventListener('click', ()=>{
    if(!timer){
        timer = true;
        start.textContent = ''
        start.textContent = 'Pause'
        stopWatch();
    }
    else{
        timer = false;
        start.textContent = ''
        start.textContent = 'Start'
    }
})
lap.addEventListener('click', ()=>{
    if(timer){

    lapCount++;
    const lapDiv = document.createElement('div');
    lapDiv.className = "flex gap-40 mb-4 bg"
    lapDiv.innerHTML = `
        <p>${lapCount}.<span class="ml-6">Lap ${lapCount}</span></p>
        <p>${currentTime}</p>
    `;
    lap_board.appendChild(lapDiv);
    }

})
reset.addEventListener('click', ()=>{
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapstime = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    start.textContent = ''
    start.textContent = 'Start'
    lap_board.textContent = ''
})

function stopWatch() {
    if (timer) {
        count++;
        lapstime++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        currentTime = formatTime(hrString, minString, secString)
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
function formatTime(hour, minute, second) {
    return `${hour}:${minute}:${second}`
}