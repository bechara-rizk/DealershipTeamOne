import React from 'react';
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: 'white'
            }
        },
        x: {
            ticks: {
                color: 'white'
            }
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Customers',
            data: [20, 35, 25, 48, 62, 54, 72],
            borderColor: 'black', // trendline color
            backgroundColor: 'rgba(128, 128, 128, 0.2)', // grey area
        },
    ],
};


const AreaChart = () => {
    return (
        <div className='chart'>
            <h2 style={{color: 'black'}}>Customers</h2>
            <Line options={options} data={data} />
        </div>
    )
}

export default AreaChart;
