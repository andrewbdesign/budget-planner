import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Helpers
import { numberWithCommas } from '../../../utlis/numberFormatter';

const ProgressChart = ({ profile: { profile } }) => {
  const chartEl = useRef(null);

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

    const { totalSaved, goalTarget } = profile;
    const data = {
      datasets: [
        {
          data: [
            parseInt(totalSaved),
            parseInt(goalTarget) - parseInt(totalSaved),
          ],
          backgroundColor: ['rgba(116, 103, 195, 1)', 'rgba(230, 126, 181, 1)'],
          hoverBackgroundColor: [
            'rgba(116, 103, 195, .7)',
            'rgba(230, 126, 181, .7)',
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
    // eslint-disable-next-line
  }, []);

  return (
    <div className="chart__container">
      <canvas ref={chartEl} id="my-chart" />
    </div>
  );
};

ProgressChart.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(ProgressChart);
