const time = {
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

setInterval(() => {
    if (time.secondTens >= 1) {
        document.querySelector('.digits').style = "color: red";
        return;
    }
    time.msTens += 1;

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
}, 10);

document.getElementById('secondTens').addEventListener('change', (e) => {
    console.log('10 seconds');
});