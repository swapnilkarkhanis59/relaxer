const text = document.querySelector('#text');
const container = document.querySelector('.container');

const totalTime = 7500, breatheTime = 3000, holdTime = 1500;

breathe()

function breathe() {
    text.innerText = 'Breathe in';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe out';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathe, totalTime);