import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Downloads',
          data: [120, 180, 150, 200, 170, 220, 190], 
          borderColor: 'rgb(153, 162, 235)',
          backgroundColor: 'rgba(43, 162, 235, 0.4)',
              }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Paper Analytics'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full bg-slate-100 md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg '>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
