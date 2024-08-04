import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 3000, 4000, 5000, 4000, 6000, 8000, 9000, 15000, 10000, 6000, 4000],
        backgroundColor: 'rgba(106, 90, 205, 0.8)',
        barThickness: 17
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  
    scales: {
      x: {
        grid: {
          display: false,
        },
        categoryPercentage: 0.1,          
        barPercentage: 0.5, 
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#1f1f2e', padding: '23px', height: "240px", borderRadius: '10px' }}>
      <h2 style={{ color: '#FFFFFF' }}>Activity</h2>
      <div style={{ height: '150px' }}>
        <Bar data={data} options={options} style={{height:"300px"}} />
      </div>
    </div>
  );
};

export default ActivityChart;
