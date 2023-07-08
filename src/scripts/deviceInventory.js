import Chart from 'chart.js/auto'

(async function(){
    console.log('Custom acquisitions JS file is firing!');
})();

(async function() {
  const data = [
    { year: 2023, count: 213 },
    { year: 2024, count: 246 },
    { year: 2025, count: 374 },
    { year: 2026, count: 256 },
    { year: 2027, count: 430 },
    { year: 2028, count: 304 },
    { year: 2029, count: 289 },
  ];

  new Chart(
    document.getElementById('deviceInventory'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Total Devices to Refresh',
            data: data.map(row => row.count),
            backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 2
          }
        ]
      }
    }
  );
})();