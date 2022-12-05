import FlightSelect from '../../components/FlightSelect'
import { FiSend } from 'react-icons/fi'
import { BsArrowLeftRight, BsCalendar, BsGeoAlt } from 'react-icons/bs'

const FlightFirstFormTwo = () => {
  return (
<div className='flex justify-between flex-wrap'>
                    <div className='bg-[#F5F5F6] dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[24%] sm:w-[48%] w-full relative'>
                        <h1 className='text-gray-500 flex items-center space-x-[5px] text-[15px]'><BsGeoAlt/> <span>From</span></h1>
                        <FlightSelect className="!bg-white !text-[17px] !w-full dark:!bg-dark dark:!text-gray-400">Select Location</FlightSelect>
                        <button className='w-[40px] h-[40px] flex justify-center items-center text-black text-[15px] bg-white rounded-full absolute top-[50%] sm:right-0 right-[50%] sm:translate-x-[75%] translate-x-[50%] sm:translate-y-[-75%] translate-y-[70%] shadow-cus z-[999]'><BsArrowLeftRight/></button>
                    </div>
                    <div className='bg-[#F5F5F6] dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[24%] sm:w-[48%] w-full sm:mt-0 mt-[20px]'>
                        <h1 className='text-gray-500 flex items-center space-x-[5px] text-[15px]'><FiSend/> <span>Departure</span></h1>
                        <FlightSelect className="!bg-white !text-[17px] !w-full dark:!bg-dark dark:!text-gray-400">Select Location</FlightSelect>
                    </div>
                    <div className='bg-[#F5F5F6] dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[24%] sm:w-[48%] w-full lg:mt-0 mt-[20px]'>
                        <h1 className='text-gray-500 flex items-center space-x-[5px] text-[15px]'><BsCalendar/> <span>To</span></h1>
                        <FlightSelect className="!bg-white !text-[17px] !w-full dark:!bg-dark dark:!text-gray-400" check={true}>Select Date</FlightSelect>
                    </div>
                    <div className='bg-[#F5F5F6] dark:bg-[#2a2c31] px-[10px] py-[10px] rounded-[10px] space-y-[10px] lg:w-[24%] sm:w-[48%] w-full lg:mt-0 mt-[20px]'>
                        <h1 className='text-gray-500 flex items-center space-x-[5px] text-[15px]'><BsCalendar/> <span>Departure</span></h1>
                        <FlightSelect className="!bg-white !text-[17px] !w-full dark:!bg-dark dark:!text-gray-400" check={true}>Select Date</FlightSelect>
                    </div>
                    
                </div>   )
}

export default FlightFirstFormTwo