function updateClock() {
    const hourElement = document.getElementById('hour');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const ampmElement = document.getElementById('ampm');

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   
    const ampm = hours >= 12 ? 'PM' : 'AM';

   
    hours = hours % 12;
    hours = hours ? hours : 12; 

    
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

   
    hourElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    ampmElement.textContent = ampm;
}


setInterval(updateClock, 1000);


updateClock();
