import Chart from 'chart.js/auto'

// Chart #1 - Device Replacement Forecast
(async function() {
  const data = [
    { division: 2010, count: 10 },
    { division: 2011, count: 20 },
    { division: 2012, count: 15 },
    { division: 2013, count: 25 },
    { division: 2014, count: 22 },
    { division: 2015, count: 30 },
    { division: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('forecast'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.division),
        datasets: [
          {
            label: 'Device Replacement Forecast',
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
                    borderWidth: 1
          }
        ]
      }
    }
  );
})();

// Chart #2 - Device Count by Division
(async function() {
  const data = [
    { division: "Field", count: 1640 },
    { division: "Supply Chain", count: 574 },
    { division: "Dedicated", count: 5702 },
    { division: "Central Support", count: 898 },
  ];

  new Chart(
    document.getElementById('division-breakdown'),
    {
      type: 'bar',
      options: {
        animation: false,
        plugins: {
          legend: {
            display: false
          }
        }
      },
      data: {
        labels: data.map(row => row.division),
        datasets: [
          {
            label: '',
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
                    borderWidth: 1
          }
        ]
      }
    }
  );
})();