import React from 'react';
import Link from 'next/link';
import {  RxDashboard, RxPerson } from 'react-icons/rx';
import { IoSettingsSharp } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { GoGraph } from "react-icons/go";
const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-40  h-screen p-4 mr-4 dark:bg-gray-900 pr-3 border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>

            <div className=' text-white shrink-0 text-2xl text-bold p-3 rounded-lg inline-block'>
            <img src="https://www.genoshi.io/logo.svg" class="h-8" alt="GRAFF"/>
            </div>
          </Link>
          <span className='border-b-[1px]  w-full p-2'></span>
          <Link href='/'>
          <div className='text-white flex cursor-pointer w-32 sm-w-28 my-4 p-3 rounded-lg  bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <RxDashboard size={20} /> <p className="pl-1 ">Dashboard</p>
            </div>
          </Link>
          <Link href='/profile'>
            <div className='text-white flex cursor-pointer my-4 p-3 w-32 rounded-lg  bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              <RxPerson size={20} /> <p className="pl-2">Profile</p>
            </div>
          </Link>
          <Link href='/subscription'>
            <div className='text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <GoRocket size={20} /> <p className="pl-2">Upgrade</p>
            </div>

          </Link>
          <Link href='/graphs'>
            <div className='text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <GoGraph size={20} /> <p className="pl-2">Graphs</p>
            </div>
          </Link>
          <Link href='/setting'>
            <div className='text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <IoSettingsSharp size={22}/> <p className="pl-2">Setting</p>
            </div>
          </Link>
        </div>
      </div>
      <main className='pl-16 ml-24 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
