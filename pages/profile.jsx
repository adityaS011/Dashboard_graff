import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <div className='flex justify-between p-4 text-slate-100'>
        <h2 className='text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Profile</h2>
        <h2 className='text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Welcome Back, User</h2>
      </div>

      <div className='rounded-lg bg-blue-800  p-4 mx-3 mb-4 sm:mb-0 sm:mr-4'>
          <p className='text-white'>Name: User</p>
          <p className='text-white'>Email: user@gmail.com</p>
          <p className='text-white'>Bio: A research paper writer with a passion for exploring new ideas and sharing knowledge with the world.</p>
        </div>
        <div className='flex flex-col rounded mx-5 mt-2 bg-gray-700 justify-between p-4 text-slate-100'>
        <div className='flex flex-col sm:flex-row'>
          {/* Action buttons */}
          <Link href='/graphs' className='text-white px-2 mb-2 sm:mb-0'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg'>Create Graph</button>
          </Link>

          <Link href='/graphs' className='text-white px-2 mb-2 sm:mb-0'>
            <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg'>Share Graph</button>
          </Link>

          <Link href='/graphs' className='text-white px-2'>
            <button className='bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg'>Upload Papers</button>
          </Link>
        </div>
      </div>

      {/* Customer List Section */}
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-slate-700 overflow-y-auto'>
          <div className='my-3 text-slate-100 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2   items-center justify-between cursor-pointer'>
                <div className='flex items-center '>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4 md:text-sm'>{order.name.first + ' ' }</p>
                </div>
                <p className='text-gray-600 text-xs md:text-lg pr-2 sm:text-left text-right'>{order.name.last}@gmail.com
                <button className='mt-2 md:hidden text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Delete</button></p>
                <p className='hidden md:flex'>{order.date}</p>
                <div className='md:flex hidden justify-between items-center'>
                  <p >{order.method}</p>
                  <button className='text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
