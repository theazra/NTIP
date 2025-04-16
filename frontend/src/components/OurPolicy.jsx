import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
        <p className='font-semibold'>Easy Exchannge Policy</p>
        <p className='text-gray-400'>We offer haslle free exchange Policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
        <p className='font-semibold'>7 Days Retunr Policy</p>
        <p className='text-gray-400'>We provide 7 days Policy</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
        <p className='font-semibold'>Best Custumer policy</p>
        <p className='text-gray-400'>We offer haslle free exchange Policy</p>
      </div>
    </div>
  )
}

export default OurPolicy
