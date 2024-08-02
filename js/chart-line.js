var ctx = document.getElementById("chartLine").getContext("2d");

var gradient = ctx.createLinearGradient(2, 10, 10, 120);
gradient.addColorStop(0, "rgba(75, 192, 192, 0.3)");
gradient.addColorStop(1, "rgba(75, 192, 192, 0)");

const chartLine = new Chart(ctx, {
    type: "line",
    data: {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets: [
        {
        label: "Total Pesanan",
        data: [
            170, 220, 400, 300, 170, 250, 550, 580, 450, 470, 600, 500,
        ],
        backgroundColor: gradient,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        },
        {
        label: "Total Pendapatan",
        data: [
            150, 200, 250, 220, 180, 300, 300, 320, 250, 270, 320, 280,
        ],
        backgroundColor: gradient,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        },
        {
        label: "Pesanan Belum Selesai",
        data: [50, 20, 50, 20, 30, 50, 50, 60, 30, 40, 50, 40],
        backgroundColor: gradient,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        },
    ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
        radius: 0,
        hitRadius: 10,
        },
    },
    plugins: {
        legend: {
        display: false,
        },
    },
    scales: {
        y: {
        grid: {
            color: "rgb(209 213 219)",
            display: true,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
        x: {
        grid: {
            color: "rgb(209 213 219)",
            display: false,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
    },
    },
});