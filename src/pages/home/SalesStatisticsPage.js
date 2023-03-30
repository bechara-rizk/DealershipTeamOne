import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Revenue',
      data: [10000, 20000, 15000, 30000, 25000, 20000, 35000, 40000, 30000, 45000, 50000, 35000],
      fill: false,
      borderColor: '#ff0000', // red
    },
    {
      label: 'Number of Cars Sold',
      data: [10, 15, 12, 20, 18, 14, 22, 25, 20, 28, 30, 24],
      fill: false,
      borderColor: '#ffffff', // white
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontColor: '#ffffff', // white
        },
        gridLines: {
          color: '#ffffff', // white
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: '#ffffff', // white
        },
        gridLines: {
          color: '#ffffff', // white
        },
      },
    ],
  },
  legend: {
    labels: {
      fontColor: '#ffffff', // white
    },
  },
};

const SalesStatisticsPage = () => {
  return (
    <div style={{ backgroundColor: '#000000' }}> {/* black */}
      <h1 style={{ color: '#ff0000' }}>Sales Statistics</h1> {/* red */}
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesStatisticsPage;
