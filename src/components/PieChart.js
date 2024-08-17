import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['red', 'green', 'yellow', 'blue'],
      },
    ],
  };

  return (
    <div>
      <div className='pichart'>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
