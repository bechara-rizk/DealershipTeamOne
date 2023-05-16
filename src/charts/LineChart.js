import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      fill: false,
    },
    
  },
 

};

const labels = ['January', 'February', 'March', 'April', 'May'];

export const data = {
  labels ,
  datasets: [
      {
          label: 'Sales',
          fill: false,
          data: ['60',"72","55","85","75"],
          
          borderColor: '#454545', 
          
          borderWidth: 5
          
      },
      {
          label: 'Revenue',
          data: [19,32,55,45,85],
          fill: false,
          borderColor: '#9F210D', 
         
          borderWidth: 5
      },
  ],
};

const LineChart = () => {
  return (
    <div className="chart">
      <h2 style={{color: '#454545'}}>Sales Statistics</h2>
      <Line options={options} data={data}/>
    </div>
  )
}

export default LineChart;
