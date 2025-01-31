const fop = document.getElementById('graph-staff1');

const fopGraph = new Chart(fop, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: ['Робітники, 8 537.73, середня ЗП', 'КПФТС, середня З/П'],
      data: [64, 36],
      backgroundColor: ['rgba(39, 179, 248, 1)', 'rgba(255, 255, 255, 1)'],

    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    width: 143,
    height: 143,
    cutout: "80%",
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

const number = document.getElementById('graph-staff2');

const numberGraph = new Chart(number, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: ['Робітники, 8 537.73, середня ЗП', 'КПФТС, середня З/П'],
      data: [24, 76],
      backgroundColor: ['rgba(39, 179, 248, 1)', 'rgba(255, 255, 255, 1)'],

    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    width: 143,
    height: 143,
    cutout: "80%",
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

const graphLine = document.getElementById('line-graph').getContext('2d');

const gradient = graphLine.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 238, 236, 0.30)');
gradient.addColorStop(1, 'rgba(246, 196, 190, 0.60)');

const gradient2 = graphLine.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgba(232, 249, 255, 0.60)');
gradient2.addColorStop(1, 'rgba(168, 226, 255, 0.60)');

const xValues = ['01.24', '02.24', '03.24', '04.24', '05.24', '06.24', '07.24', '08.24', '09.24', '10.24', '11.24', '12.24'];

const accrued = [2, 2.1, 2.2, 2.2, 1.9, 2, 2.3, 2.3, 2.2, 2.7, 3.5, 3.4];
const paid = [1, 1.1, 1.2, 1.2, 1.5, 1.5, 1.3, 1.3, 1.3, 1.4, 1.5, 1.4];

const lineGraph = new Chart(graphLine, {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [{
      data: accrued,
      borderColor: 'rgba(186, 91, 80, 1)',
      borderWidth: 2,
      fill: true,
      backgroundColor: gradient,
      tension: 0.4,
      pointBorderWidth: 0,
    }, {
      data: paid,
      borderColor: 'rgba(39, 179, 248, 1)',
      borderWidth: 2,
      fill: true,
      backgroundColor: gradient2,
      tension: 0.4,
      pointBorderWidth: 0,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: 2,

    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        offset: false
      },
    }
  }
});

window.addEventListener('resize', () => {
  myChart.resize();
});
