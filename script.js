const ctx = document.getElementById('myChart');

let labels = ["10:19","10:20","10:21","10:22","10:23"];

let temperature = [42,43,42,44,43];
let current = [2.2,2.3,2.4,2.3,2.35];

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperature
            },
            {
                label: 'Current (A)',
                data: current
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Simulate Live Data
setInterval(() => {

    const now = new Date().toLocaleTimeString();

    labels.push(now);
    labels.shift();

    temperature.push(
        Number((40 + Math.random() * 5).toFixed(1))
    );
    temperature.shift();

    current.push(
        Number((2 + Math.random()).toFixed(2))
    );
    current.shift();

    // Update dashboard cards
    document.getElementById("temp").innerText =
        temperature[temperature.length - 1] + "°C";

    document.getElementById("current").innerText =
        current[current.length - 1] + "A";

    chart.update();

}, 3000);

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("show");
}
