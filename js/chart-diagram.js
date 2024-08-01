const myChart = new Chart("myChart", {
    type: "line",
    data: {
        labels:
            "Januari, Februari, Maret, April, Mei, Juni, Juli, Agustus, September, Oktober, November, Desember".split(","),
    datasets: [
        {
            label: "Total Project",
            data: [55, 60, 70, 65, 75, 80, 85, 90, 95, 100, 105, 110],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            fill: false,
            hidden: false
        },
        {
            label: "Completed Projects",
            data: [35, 40, 50, 45, 55, 60, 65, 70, 75, 80, 85, 90],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            fill: false,
            hidden: true
        },
        {
            label: "Running Projects",
            data: [5, 10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: false,
            hidden: true
        },
    ],
    },
    options: {
        responsive: true,
            maintainAspectRatio: false,
        plugins: {
            legend: {
            labels: {
                color: "black",
            },
        },
    },
    scales: {
        y: {
            ticks: {
                color: "rgba(75, 192, 192, 1)",
                beginAtZero: true,
            },
        },
        x: {
            ticks: {
                color: "rgba(75, 192, 192, 1)",
                beginAtZero: true,
            },
        },
    },
    },
});