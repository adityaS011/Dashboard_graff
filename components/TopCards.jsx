import React from 'react';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      <div className='lg:col-span-1 col-span-1 bg-gray-600 flex justify-between w-full border border-gray-800 p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>5,287</p>
          <p className='text-gray-200'>Published Papers</p>
        </div>
        <p className='bg-blue-200 flex justify-center items-center p-2  rounded-lg'>
          <span className='text-blue-700 text-lg'>+22%</span>
        </p>
      </div>
      <div className='lg:col-span-1 col-span-1 bg-gray-600 flex border-gray-800 justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>₹2,537,690</p>
          <p className='text-gray-200'>Total Revenue</p>
        </div>
        <p className='bg-blue-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-blue-700 text-lg'>+15%</span>
        </p>
      </div>
      <div className='lg:col-span-1 col-span-1 bg-gray-600 border-gray-800 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>2,345</p>
          <p className='text-gray-200'>Active Researchers</p>
        </div>
        <p className='bg-blue-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-blue-700 text-lg'>+10%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
