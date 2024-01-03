import React, { useState } from 'react';
import BarChart from '@/components/BarChart';

const GraphsPage = () => {
  const [graphTitle, setGraphTitle] = useState('');
  const [graphDescription, setGraphDescription] = useState('');
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [graphSettings, setGraphSettings] = useState({
    layout: 'default',
    colors: 'blue',
  });

  const [chartData, setChartData] = useState({
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Downloads',
        data: [120, 180, 150, 200, 170, 220, 190], 
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.4)',
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Revenue',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });

  const [showChart, setShowChart] = useState(false);

  const handleTitleChange = (e) => {
    setGraphTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setGraphDescription(e.target.value);
  };

  const handlePaperSelection = (selected) => {
    setSelectedPapers(selected);
  };

  const getChartColor = (colorOption) => {
    switch (colorOption) {
      case 'blue':
        return 'rgb(53, 162, 235)';
      case 'red':
        return 'rgb(255, 99, 132)';
      default:
        return 'rgb(53, 162, 235)';
    }
  };

  const handlePreviewClick = () => {
    console.log('Preview clicked!');
    setShowChart(true); // Show the chart
  };
  const handleDeleteClick = () => {
    setShowChart(false); // Hide the chart
  };
  const handleSettingsChange = (settings) => {
    setGraphSettings(settings);

    if (settings.colors) {
      const chartColor = getChartColor(settings.colors);
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            borderColor: chartColor,
            backgroundColor: `rgba(${chartColor}, 0.4)`,
          },
        ],
      }));
    }
  };

  return (
    <main className='bg-slate-900 h-screen sm:h-[100] sm:min-w-full p-4 sm:p-8'>
      <div className='flex justify-between pb-6 text-slate-100'>
        <h2 className='text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Graphs</h2>
        <h2 className='text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Welcome Back, User</h2>
      </div>
      <div className='max-w-2xl mx-auto'>
        <label className='block text-white mb-2' htmlFor="graphTitle">Graph Title:</label>
        <input
          className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
          type="text"
          id="graphTitle"
          value={graphTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className='max-w-2xl mx-auto mt-4'>
        <label className='block text-white mb-2' htmlFor="graphDescription">Graph Description:</label>
        <textarea
          className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
          type="text"
          id="graphDescription"
          value={graphDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      
      <div className='max-w-2xl mx-auto mt-4'>
        <p className='text-white'>Configure Graph Settings - Layout, Colors, etc.</p>
        <div className="flex space-x-4">
          <select
            className="form-select w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 text-white"
            value={graphSettings.colors}
            onChange={(e) => handleSettingsChange({ ...graphSettings, colors: e.target.value })}
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="chart">Pie Chart</option>
          </select>
          {/* Add other settings input fields here */}
        </div>
      </div>
      <div className='max-w-2xl flex space-x-4 mx-auto mt-4'>
          <button
            className='text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r from-red-700 to-pink-500 hover:from-red-700 hover:to-pink-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
            onClick={handleDeleteClick}
          >
            Delete Graph
          </button>
          <button
            className='text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r from-green-700 to-teal-500 hover:from-green-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            onClick={() => { /* Logic to handle file upload */ }}
          >
            Upload Files
          </button>
        <button
          className='text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={handlePreviewClick}
        >
          Preview Graph
        </button>
      </div>
      <div className='max-w-2xl mx-auto mt-8'>
        {showChart && <BarChart data={chartData} options={chartOptions} />}
      </div>
    </main>
  );
};

export default GraphsPage;
