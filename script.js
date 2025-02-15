function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = ((seconds / 60) * 360) + 90; // 90 for rotation offset
    const minuteDeg = ((minutes / 60) * 360) + (seconds / 60) * 6 + 90; // Adding seconds to minutes
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90; // Adding minutes to hours

    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Call once to set the initial position
