function updateClocks() {
    const istClock = document.getElementById('ist-clock');
    const jstClock = document.getElementById('jst-clock');

    const now = new Date();

    // IST is UTC +5:30
    const istOffset = 5.5 * 60 * 60 * 1000; // in milliseconds
    const jstOffset = 9 * 60 * 60 * 1000; // in milliseconds

    const istDate = new Date(now.getTime() + istOffset);
    const jstDate = new Date(now.getTime() + jstOffset);

    istClock.textContent = istDate.toLocaleTimeString('en-IN', { hour12: false });
    jstClock.textContent = jstDate.toLocaleTimeString('en-JP', { hour12: false });
}

// Update the clocks every second
setInterval(updateClocks, 1000);
updateClocks(); // Initial call to set the clock immediately
