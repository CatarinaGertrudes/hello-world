const daysEl = document.getElementById ('days');
const hoursEl = document.getElementById ('hours');
const minutesEl = document.getElementById ('minutes');
const secondsEl = document.getElementById ('seconds');

const aniversario = "19 Apr 2021";

function countdown() {
    const aniversarioDate = new Date(aniversario);
    const currentDate = new Date();

    const totalSeconds = ((aniversarioDate - currentDate) / 1000)
    const days = Math.floor(((totalSeconds / 3600) / 24) )
    const hours = Math.floor(((totalSeconds / 3600) % 24))
    // em baixo aminha solução (verifiquei que funciona);
    // eu não entendo o que é o % que ele usa, apesar de ter entendido que se chama modulo e ter lido na net sobre isso
    // const hours2 = Math.floor((-days + ((totalSeconds / 3600) /24))*24)
    const minutes = Math.floor(((totalSeconds / 60) % 60))
    const seconds = Math.floor(((totalSeconds) % 60))

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time <10 ? `0${ time }` : time;
}

countdown();
setInterval(countdown, 1000)