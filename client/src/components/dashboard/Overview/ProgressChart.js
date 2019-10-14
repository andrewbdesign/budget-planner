import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Helpers
import { numberWithCommas } from '../../../utils/numberFormatter';

let chartElement = null;

const ProgressChart = ({ goal: { goals, goalFocus } }) => {
  const chartEl = useRef(null);
  // eslint-disable-next-line
  const generateChart = () => {
    const options = {
      legend: { display: false },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70,
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            // return data
            return (
              data.labels[tooltipItem.datasetIndex] +
              ' $' +
              numberWithCommas(
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index],
              )
            );
          },
        },
      },
    };

    const { totalSaved, goalTarget } = goals[goalFocus];

    const data = {
      labels: ['Saved', 'Left to go'],
      datasets: [
        {
          label: 'Saved',
          backgroundColor: ['rgba(116, 103, 195, 1)', 'rgba(230, 126, 181, 1)'],
          hoverBackgroundColor: [
            'rgba(116, 103, 195, .7)',
            'rgba(230, 126, 181, .7)',
          ],
          borderColor: 'transparent',
          borderWidth: 0,
          data: [
            parseInt(totalSaved),
            parseInt(goalTarget) - parseInt(totalSaved),
          ],
        },
      ],
    };

    const chartRef = chartEl.current;
    chartRef.getContext('2d');

    if (chartElement) {
      chartElement.destroy();
    }
    chartElement = new Chart(chartRef, {
      data,
      options,
      type: 'doughnut',
    });
  };

  useEffect(() => {
    if (goals.length > 0) {
      generateChart();
    }
    // eslint-disable-next-line
  }, [goals, generateChart]);

  return (
    <div className="chart__container">
      <canvas ref={chartEl} id="my-chart" />
    </div>
  );
};

ProgressChart.propTypes = {
  goal: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  goal: state.goal,
});

export default connect(mapStateToProps)(ProgressChart);
