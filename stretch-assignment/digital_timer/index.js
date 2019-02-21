const time = {
    setInterval: null,
    secondTens: 0,
    secondOnes: 0,
    msHundreds: 0,
    msTens: 0,
}

const updateTime = () => {
    document.getElementById('secondTens').textContent = time.secondTens;
    document.getElementById('secondOnes').textContent = time.secondOnes;
    document.getElementById('msHundreds').textContent = time.msHundreds;
    document.getElementById('msTens').textContent = time.msTens;
    return;
}

const runner = () => {
    if (time.secondTens >= 1) {
            document.querySelector('.digits').style = "color: red";
            return;
        }

        time.msTens += 1;
        updateTime();

        if (time.msTens >= 10) {
            time.msHundreds += 1;
            time.msTens = 0;
            updateTime();
        }

        if (time.msHundreds >= 10) {
            time.secondOnes += 1;
            time.msHundreds = 0;
            time.msTens = 0;
            updateTime();
        }

        if (time.secondOnes >= 10) {
            time.secondTens = 1;
            time.secondOnes = 0;
            time.msHundreds = 0;
            time.msTens = 0;
            updateTime();
            return;
        }
}

const buttons = document.querySelector('.buttons');

const start = document.createElement('button');
start.textContent = 'Start';
const reset = start.cloneNode();
reset.textContent = 'Reset'

buttons.appendChild(start);
buttons.appendChild(reset);

start.addEventListener('click', (e) => {
    e.target.setAttribute('disabled', true);
    time.setInterval = setInterval(runner, 10);
});

reset.addEventListener('click', (e) => {
    document.querySelector('.digits').style = "color: black";
    clearInterval(time.setInterval);
    time.setInterval = null;
    time.secondTens = 0;
    time.secondOnes = 0;
    time.msHundreds = 0;
    time.msTens = 0;
    updateTime();
    start.removeAttribute('disabled');
});

