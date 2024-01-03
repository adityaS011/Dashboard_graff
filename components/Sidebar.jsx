import React from 'react';
import Link from 'next/link';
import { RxDashboard, RxPerson } from 'react-icons/rx';
import { IoSettingsSharp } from 'react-icons/io5';
import { GoRocket } from 'react-icons/go';
import { GoGraph } from 'react-icons/go';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='fixed md:w-40 w-16 min-h-screen bg-gray-900 md:pr-3 border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center md:m-3'>
          <Link href='/'>
            <div className='text-white hidden md:block shrink-0 text-2xl text-bold p-3 rounded-lg '>
              <img src='https://www.genoshi.io/logo.svg' className='h-8' alt='GRAFF' />
            </div>
          </Link>
          <Link href='/'>
            <div className='text-white shrink-0 text-2xl text-bold md:p-3  rounded-lg md:hidden'>
              <img src='https://www.genoshi.io/logo.svg' className='pt-3 pb-0  overflow-hidden w-14' alt='GRAFF' />
            </div>
          </Link>
          <span className='border-b-[1px] md:w-full p-2'></span>
          <Link href='/'>
            <div className='text-white flex cursor-pointer md:w-32 w-10 my-4 p-3 rounded-lg bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <RxDashboard size={20} /> <p className='md:pl-1 hidden md:block'>Dashboard</p>
            </div>
          </Link>
          <Link href='/profile'>
            <div className='text-white flex cursor-pointer my-4 p-3 md:w-32 w-10 rounded-lg bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <RxPerson size={20} /> <p className='pl-2 hidden md:block'>Profile</p>
            </div>
          </Link>
          <Link href='/subscription'>
            <div className='text-white cursor-pointer md:w-32 my-4 p-3 rounded-lg w-10 flex bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <GoRocket size={20} /> <p className='pl-2 hidden md:block'>Upgrade</p>
            </div>
          </Link>
          <Link href='/graphs'>
            <div className='text-white cursor-pointer md:w-32 my-4 p-3 rounded-lg flex w-10 bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <GoGraph size={20} /> <p className='pl-2 hidden md:block'>Graphs</p>
            </div>
          </Link>
          <Link href='/setting'>
            <div className='text-white cursor-pointer  md:w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r w-10 from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <IoSettingsSharp size={22} /> <p className='pl-2 hidden md:block'>Setting</p>
            </div>
          </Link>
        </div>
        <div className='h-screen'>@</div>
      </div>

      {/* Main Content */}
      <main className='md:ml-40 ml-16 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
