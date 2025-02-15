function updateClocks() {
    const now = new Date();

    // IST is UTC +5:30
    const istOffset = 5.5 * 60 * 60 * 1000; // in milliseconds
    const jstOffset = 9 * 60 * 60 * 1000; // in milliseconds

    const istDate = new Date(now.getTime() + istOffset);
    const jstDate = new Date(now.getTime() + jstOffset);

    updateAnalogClock(istDate, 'ist');
    updateAnalogClock(jstDate, 'jst');
}

function updateAnalogClock(date, prefix) {
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondHand = document.getElementById(`${prefix}-second-hand`);
    const minuteHand = document.getElementById(`${prefix}-minute-hand`);
    const hourHand = document.getElementById(`${prefix}-hour-hand`);

    const secondDeg = ((seconds / 60) * 360) + 90; // Adding 90 to offset rotation
    const minuteDeg = ((minutes / 60) * 360) + (seconds / 60) * 6 + 90; // Including seconds for smooth motion
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90; // Including minutes for smooth motion

    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update the clocks every second
setInterval(updateClocks, 1000);
updateClocks(); // Initial call to set the clock immediately
