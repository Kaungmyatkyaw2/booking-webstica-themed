import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsCalendar, BsGeoAlt } from 'react-icons/bs'
import { FaSkating } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import FlightSelect from '../../components/FlightSelect'

const TourFirst = () => {
  return (
    <div className='container-cus py-[40px]'>

        <div className='w-full bg-green-500 tour-bg sm:px-[40px] px-[20px] py-[40px] pb-[100px] rounded-[10px] relative z-[-1]'>

           <div className='flex flex-wrap lg:pb-0 pb-[100px] md:space-y-0 space-y-[40px]'>
           <div className='lg:w-[65%] md:w-[50%] w-full'>
                <h1 className='font-bold lg:text-[53px] sm:text-[45px] text-[33px] text-white'>Life Is Adventure Make <span className='lg:block'>The Best Of It</span></h1>
                <p className='text-[15px] text-gray-200'>Planning for a trip? we will organize your best trip with the best destination and within the best budgets!</p>
            </div>
            <div className='lg:w-[35%] md:w-[50%] w-full flex md:justify-end justify-center'>
                <div className='rounded-[20px] p-[10px] lg:w-[70%] sm:w-[90%] w-full bg-white space-y-[20px] relative'>
                    <div className='w-full relative'>
                        <img className='w-full rounded-[20px] filter brightness-[60%]' src="https://booking.webestica.com/assets/images/category/tour/05.jpg" alt="" />
                        <h1 className='absolute left-0 bottom-0 translate-x-[20px] translate-y-[-50%] text-white font-medium text-[17px]'>5 Days / 4 Nights</h1>
                    </div>
                    <div className='space-y-[10px] px-[5px]'>
                        <div className='flex justify-between'>
                            <button className='bg-primary bg-opacity-[0.1] text-primary text-[13px] px-[10px] py-[3px] rounded-[5px]'>Adventure</button>
                            <div className='flex items-center space-x-[5px] text-[16.3px]'><AiFillStar className='text-yellow-500 text-[20px]'/> <span>4.5</span></div>
                        </div>
                        <h1 className='font-bold'>Maldives Sightseeing & Adventure Tour</h1>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-green-400 '><span className='font-bold text-[17px]'>$385</span> / person</h1>
                            <p className='text-gray-500 line-through'>$682</p>
                        </div>
                    </div>
                    <div className='absolute top-[0px] left-[-20px] translate-y-[-50%]'>
                        <div className='relative h-[70px]'>
                            <img src="https://booking.webestica.com/assets/images/element/05.svg" className='h-full' alt="" />
                            <h1 className='text-[19px] font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>40%</h1>
                        </div>
                    </div>
                </div>
            </div>
           </div>
            
        </div>


        <div className='sm:px-[40px] px-[20px] lg:mt-[-60px] mt-[-150px] z-[999]'>
            <div className=' flex justify-between items-center flex-wrap bg-white shadow-cus py-[20px] rounded-[10px] px-[20px]'>
                        <div className=' dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[28%] sm:w-[48%] w-full relative'>
                            <h1 className='flex items-center space-x-[10px]'><BsGeoAlt className='text-primary text-[17px]'/> <span>Location</span></h1>
                            <FlightSelect className="!bg-white border-b !rounded-none !text-[17px] !text-gray-500 !w-full dark:!bg-dark dark:!text-gray-400">Select Location</FlightSelect>
                        </div>
                        <div className=' dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[28%] sm:w-[48%] w-full sm:mt-0 mt-[20px]'>
                            <h1 className='flex items-center space-x-[10px]'><BsCalendar className='text-primary text-[17px]'/> <span>Date</span></h1>
                            <FlightSelect check={true} className="!bg-white border-b !rounded-none !text-[17px] !w-full !text-gray-500 dark:!bg-dark dark:!text-gray-400">Chosse a date</FlightSelect>
                        </div>
                        <div className=' dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[28%] w-full lg:mt-0 mt-[20px]'>
                            <h1 className='flex items-center space-x-[10px]'><FaSkating className='text-primary text-[17px]'/> <span>Tour Type</span></h1>
                            <FlightSelect className="!bg-white border-b !rounded-none !text-[17px] !text-gray-500 !w-full dark:!bg-dark dark:!text-gray-400">Select Type</FlightSelect>
                        </div>
                        <button className=' text-white rounded-[5px] py-[10px] px-[20px] h-fit bg-black text-center text-[14px] font-bold lg:w-auto w-full  lg:mt-0 mt-[20px]'>Take a Tour</button>
            </div> 
        </div>
    

    </div>
  )
}

export default TourFirst