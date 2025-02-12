

function animateProgress(circle, percent) {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.transition = "stroke-dashoffset 1.5s ease-out";
  circle.style.strokeDashoffset = offset;
}

document.querySelectorAll('.progress-ring').forEach(circle => {
  const percent = parseInt(circle.getAttribute('data-percent'));
  animateProgress(circle, percent);
});



// line ghart =================================================

const graphLine = document.getElementById('line-graph').getContext('2d');

const gradientRed = graphLine.createLinearGradient(0, 0, 0, 400);
gradientRed.addColorStop(0.87, 'rgba(246, 196, 190, 0.60)');
gradientRed.addColorStop(0.19, 'rgba(255, 238, 236, 0.30)');

const gradientBlue = graphLine.createLinearGradient(0, 0, 0, 400);
gradientBlue.addColorStop(1, 'rgba(168, 226, 255, 0.60)');
gradientBlue.addColorStop(0.44, 'rgba(232, 249, 255, 0.60)');

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
      borderWidth: 3,
      fill: true,
      backgroundColor: gradientRed,
      tension: 0.4,
      pointStyle: false,

    }, {
      data: paid,
      borderColor: 'rgba(39, 179, 248, 1)',
      borderWidth: 3,
      fill: true,
      backgroundColor: gradientBlue,
      tension: 0.4,
      pointStyle: false,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: function (context) {
            let value = context.raw;
            let percent = ((value / 4) * 100).toFixed(0);
            return ` ${percent}%`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4
      },
    }
  }
});

window.addEventListener('resize', () => {
  lineGraph.resize();
});



// doughunt staff chart fop =====================================================

// const dispatcherGraph = document.getElementById('staff-chart-fop');

// const graphDispatcher = new Chart(dispatcherGraph, {
//   type: 'doughnut',
//   data: {
//     labels: ['64%', '36%'],
//     datasets: [{
//       label: ['КПФТС, середня З/П', 'Робітники, 8 537.73, середня ЗП'],
//       data: [74, 36],
//       backgroundColor: ['rgba(39, 179, 248, 1)', 'rgba(255, 255, 255, 1)'],
//       borderWidth: 0,
//       borderRadius: 5
//     }]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     width: 143,
//     height: 143,
//     cutout: "80%",
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   }
// });


// doughunt staff chart number =====================================================

// const dispatcherGraph = document.getElementById('staff-chart-num');

// const graphDispatcher = new Chart(dispatcherGraph, {
//   type: 'doughnut',
//   data: {
//     labels: ['76%', '24%'],
//     datasets: [{
//       label: ['КПФТС, середня З/П', 'Робітники, 8 537.73, середня ЗП'],
//       data: [76, 24],
//       backgroundColor: ['rgba(39, 179, 248, 1)', 'rgba(255, 255, 255, 1)'],
//       borderWidth: 0,
//       borderRadius: 5
//     }]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     width: 143,
//     height: 143,
//     cutout: "80%",
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   }
// });

// dispatcher chart =================================================================

// const dispatcherGraph = document.getElementById('graph-dispatcher');

// const graphDispatcher = new Chart(dispatcherGraph, {
//   type: 'doughnut',
//   data: {
//     labels: ['24%', '76%'],
//     datasets: [{
//       label: ['Виконані', 'Прийняті'],
//       data: [24, 76],
//       backgroundColor: ['rgba(39, 179, 248, 1)', 'rgba(255, 255, 255, 1)'],
//       borderWidth: 0,
//       borderRadius: 5
//     }]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     width: 143,
//     height: 143,
//     cutout: "80%",
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   }
// });


