import React from 'react';
import foodies1 from '../images/foodies1.jpg';
import foodies2 from '../images/foodies2.jpg';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={foodies1} alt='donut' className='h-full rounded mb-10 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Baked Donuts</h2>
          <p className='mb-2'> soft and fluffy cake donuts
            </p>
          <span>$16</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={foodies2} alt='cake' className='h-full rounded mb-10 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Cake Decorating</h2>
          <p className='mb-2'> Best dessert recipes and bakes</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
