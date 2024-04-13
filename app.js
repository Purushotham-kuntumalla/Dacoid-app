

const data = {
    labels: ['12:00', '6:00', '12:00', '6:00'],
    datasets: [{
      label: 'Calories',
      data: [900, 0, 900, 0], // replace with your own data
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(128, 153, 255, 1)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(128, 153, 255, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
}
  const options = {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

console.log(myChart)