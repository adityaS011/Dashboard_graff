import React from 'react';
import Link from 'next/link';

const UserProfilePage = () => {
  return (
    <div className='bg-gray-800 min-h-screen text-white p-4'>
      <h1 className='text-3xl font-bold mb-4'>User Profile</h1>

      
      <div className='bg-gray-700 p-4 rounded-lg mb-4'>
        <h2 className='text-xl font-bold mb-2'>User Profile Details</h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-300'>
            Name:
          </label>
          <p className='text-gray-100'>User</p>
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-300'>
            Email:
          </label>
          <p className='text-gray-100'>user@gmail.com</p>
        </div>
        <div className='mb-4'>
          <label htmlFor='bio' className='block text-sm font-medium text-gray-300'>
            Bio:
          </label>
          <p className='text-gray-100'>A research paper writer with a passion for exploring new ideas and sharing knowledge with the world.</p>
        </div>
      </div>

      <div className='bg-gray-700 p-4 rounded-lg mb-4'>
        <h2 className='text-xl font-bold mb-2'>Change Password</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='oldPassword' className='block text-sm font-medium text-gray-300'>
              Old Password:
            </label>
            <input
              type='password'
              id='oldPassword'
              name='oldPassword'
              className='mt-1 p-2 w-full rounded-md bg-gray-600 text-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='newPassword' className='block text-sm font-medium text-gray-300'>
              New Password:
            </label>
            <input
              type='password'
              id='newPassword'
              name='newPassword'
              className='mt-1 p-2 w-full rounded-md bg-gray-600 text-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-300'>
              Confirm Password:
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='mt-1 p-2 w-full rounded-md bg-gray-600 text-gray-100'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg'
          >
            Change Password
          </button>
        </form>
      </div>

      {/* Manage Subscription Plan Section */}
      <div className='bg-gray-700 p-4 rounded-lg mb-4'>
        <h2 className='text-xl font-bold mb-2'>Manage Subscription Plan</h2>
        <div className='mb-4'>
          <label htmlFor='currentPlan' className='block text-sm font-medium text-gray-300'>
            Current Plan:
          </label>
          <p className='text-gray-100'>Premium</p>
        </div>
        <div className='mb-4'>
          <label htmlFor='changePlan' className='block text-sm font-medium text-gray-300'>
            Change Plan:
          </label>
          <select
            id='changePlan'
            name='changePlan'
            className='mt-1 p-2 w-full rounded-md bg-gray-600 text-gray-100'
          >
            {/* Include subscription plan options */}
            <option value='basic'>Basic</option>
            <option value='premium'>Pro</option>
            <option value='enterprise'>Enterprise</option>
          </select>
        </div>
        <Link href="/subscription">
        <button
          type='button'
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg'
        >
          Update Subscription
        </button>
        </Link>
      </div>

      {/* Link Third-Party Accounts Section */}
      <div className='bg-gray-700 p-4 rounded-lg mb-4'>
        <h2 className='text-xl font-bold mb-2'>Link Third-Party Accounts</h2>
        <p className='text-gray-100 mb-4'>
          Link your account to third-party services for seamless integration.
        </p>
        <div className='flex space-x-4'>
          <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg'>
            Link Google
          </button>
          {/* Add more third-party account buttons */}
        </div>
      </div>

      {/* View Usage Statistics Section */}
      <div className='bg-gray-700 p-4 rounded-lg'>
        <h2 className='text-xl font-bold mb-2'>View Usage Statistics</h2>
        <p className='text-gray-100 mb-4'>
          Monitor your usage statistics to track your research activity.
        </p>
        {/* Include usage statistics components or charts */}
      </div>
    </div>
  );
};

export default UserProfilePage;
