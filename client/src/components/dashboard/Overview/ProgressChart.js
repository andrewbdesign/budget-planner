import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ProgressChart = () => {
  const chartEl = useRef(null);

  const generateChart = () => {
    const options = {
      legend: { display: false },
      // legend: {
      //   position: "top",
      //   align: "start",
      //   labels: {
      //     fontColor: "#818ca8",
      //   }
      // },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70,
    };
    const data = {
      datasets: [
        {
          data: [11000, 9000],
          backgroundColor: ['rgba(230, 126, 181, 1)', 'rgba(116, 103, 195, 1)'],
          hoverBackgroundColor: [
            'rgba(230, 126, 181, .7)',
            'rgba(116, 103, 195, .7)',
          ],
          borderColor: 'transparent',
          borderWidth: 0,
        },
      ],
      labels: ['Saved', 'Left to go'],
    };

    const chartRef = chartEl.current;
    chartRef.getContext('2d');

    new Chart(chartRef, {
      data,
      options,
      type: 'doughnut',
    });
  };

  useEffect(() => {
    generateChart();
  }, []);

  return (
    <div className="chart__container">
      <canvas ref={chartEl} id="my-chart" />
    </div>
  );
};

export default ProgressChart;
