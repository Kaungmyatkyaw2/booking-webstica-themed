import React from 'react'
import { FaHandHoldingHeart, FaHandHoldingUsd } from 'react-icons/fa'

const Download = () => {
  return (
    <div className='bg-gray-100 dark:bg-[#2A2C31] w-full flex justify-center'>
        <div className='container-cus py-[50px] space-y-[30px]'>

            <div className='flex flex-wrap w-full justify-between md:space-y-0 space-y-[25px]'>
                <div className='md:w-[49%] w-full flex items-center space-x-[15px] bg-white dark:bg-dark py-[30px] px-[20px] rounded-[15px] shadow-sm'>
                    <FaHandHoldingHeart className='text-[43px]'/>
                    <div className='space-y-[5px]'>
                        <h1 className='text-[21px] font-bold'>24x7 Help</h1>
                        <p className='text-[14px] text-gray-500'>If we fall short of your expectation in any way, let us know</p>
                    </div>
                </div>
                <div className='md:w-[49%] w-full flex items-center space-x-[15px] bg-white dark:bg-dark py-[30px] px-[20px] rounded-[15px] shadow-sm'>
                    <FaHandHoldingUsd className='text-[43px]'/>
                    <div className='space-y-[5px]'>
                        <h1 className='text-[21px] font-bold'>Payment Trust</h1>
                        <p className='text-[14px] text-gray-500'>All refunds come with no questions asked guarantee</p>
                    </div>
                </div>
            </div>

            <div className='w-full space-y-[17px]'>
                <h1 className='text-[22px] font-bold'>Download app</h1>
               <div className='w-full flex space-x-[20px]'>
                    <div className='lg:w-[20%] md:w-[25%] sm:w-[35%] w-[45%]'>
                            <img className='w-full cursor-pointer' src="https://booking.webestica.com/assets/images/element/google-play.svg" alt="" />
                    </div>
                    <div className='lg:w-[20%] md:w-[25%] sm:w-[35%] w-[45%]'>
                        <img className='w-full cursor-pointer' src="https://booking.webestica.com/assets/images/element/app-store.svg" alt="" />
                    </div>
               </div>
            </div>

        </div>
    </div>
  )
}

export default Download