import React, { useState, useRef } from 'react';

const Subscription = () => {
  const [currentPlan, setCurrentPlan] = useState('Basic');
  const basicRef = useRef(null);
  const proRef = useRef(null);
  const enterpriseRef = useRef(null);

  const handleUpgrade = (plan, ref) => {
    setCurrentPlan(plan);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gray-800 min-h-screen text-white p-4'>
      <h1 className='text-3xl font-bold mb-8'>Subscription Plans</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div ref={basicRef} className={`bg-gray-700 p-6 rounded-lg border-2 ${currentPlan === 'Basic' && 'border-blue-500'}`}>
          <h2 className='text-xl font-bold mb-4'>Basic Plan</h2>
          <p className='text-lg'>$4/month/user</p>
          <ul className='mt-4'>
            <li>Up to 10 graphs</li>
            <li>Up to 500 chatbot queries</li>
          </ul>
          {currentPlan === 'Basic' && <p className='text-sm mt-4'>Your Current Plan</p>}
          {currentPlan !== 'Basic' && (
            <button
              onClick={() => handleUpgrade('Basic', basicRef)}
              className='bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex'
            >
              Upgrade
            </button>
          )}
        </div>

        <div ref={proRef} className='bg-gray-700 p-6 rounded-lg'>
          <h2 className='text-xl font-bold mb-4'>Pro Plan</h2>
          <p className='text-lg'>$8/month/user</p>
          <ul className='mt-4'>
            <li>Up to 50 graphs</li>
            <li>Up to 1000 chatbot queries</li>
            <li>Email + live chat support</li>
          </ul>
          <button
            onClick={() => handleUpgrade('Pro', proRef)}
            className='bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex'
          >
            {currentPlan === 'Pro' ? 'Current Plan' : 'Upgrade'}
          </button>
        </div>

        <div ref={enterpriseRef} className='bg-gray-700 p-6 rounded-lg'>
          <h2 className='text-xl font-bold mb-4'>Enterprise Plan</h2>
          <p className='text-lg'>Contact for price</p>
          <ul className='mt-4'>
            <li>Unlimited graphs</li>
            <li>Ability to upload custom PDFs</li>
            <li>24/7 phone + email support</li>
          </ul>
          <button
            onClick={() => handleUpgrade('Enterprise', enterpriseRef)}
            className='bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white cursor-pointer w-32 my-4 p-3 rounded-lg flex'
          >
            {currentPlan === 'Enterprise' ? 'Current Plan' : 'Upgrade'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
