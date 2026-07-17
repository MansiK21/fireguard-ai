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
                label: 'Temperature',
                data: temperature
            },
            {
                label: 'Current',
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
        (40 + Math.random()*5).toFixed(1)
    );
    temperature.shift();

    current.push(
        (2 + Math.random()).toFixed(2)
    );
    current.shift();

    chart.update();

}, 3000);

options: {
    responsive: true,
    maintainAspectRatio: false
}
function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("show");
}
