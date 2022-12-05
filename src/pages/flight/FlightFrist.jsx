import FlightSelect from '../../components/FlightSelect'
import { NavLink, Outlet } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const FlightFrist = () => {
  return (
    <div className='container-cus py-[20px]'>
        <div className='w-full flight flex flex-col justify-center items-center space-y-[40px] rounded-[10px] overflow-hidden pt-[120px] pb-[50px] relative'>
            <h1 className='dark:text-black font-bold sm:text-[64px] text-[35px] text-center'>Ready to take off?</h1>
            <div className='xl:w-[90%] w-[95%] lg:space-y-[40px] space-y-[20px] bg-white dark:bg-[#191B1D] py-[30px] pb-[50px] px-[20px] rounded-[10px] relative'>
                <div className='w-full flex lg:flex-row flex-col lg:space-y-0 space-y-[20px] justify-between'>
                    <div className='flex items-center rounded-[5px] overflow-hidden w-fit text-[15px]'>
                        <NavLink end to='/flight' className='bg-gray-200 dark:bg-[#464950] switch px-[20px] h-fit py-[10px] font-[600] text-black dark:text-white'>One Way</NavLink>
                        <NavLink end to='/flight/two' className='bg-gray-200 dark:bg-[#464950] switch px-[20px] h-fit py-[10px] font-[600] text-black dark:text-white'>Round Trip</NavLink>
                    </div>
                    <div className='flex lg:space-x-[20px] lg:space-y-0 space-y-[20px] lg:flex-nowrap flex-wrap'>
                        <FlightSelect className='lg:!w-[230px] !w-full dark:bg-[#2A2C31] dark:text-gray-400'>Select Class</FlightSelect>
                        <FlightSelect className='lg:!w-[230px] !w-full dark:bg-[#2A2C31] dark:text-gray-400'>Select Travellers</FlightSelect>
                    </div>
                </div>

                <Outlet/>
                
                <svg className="h-full absolute lg:top-[-40px] top-[-20px] left-0 translate-x-[-30%] fill-white" viewBox="0 0 12.9 324">
						<path className="fill-white dark:fill-[#191B1D]" d="M9.8,316.4c1.1-26.8,2-53.4,1.9-80.2c-0.1-18.2-0.8-36.4-1.2-54.6c-0.2-8.9-0.2-17.7,0.8-26.6 c0.5-4.5,1.1-9,1.4-13.6c0.1-1.9,0.1-3.7,0.1-5.6c-0.2-0.2-0.6-1.5-0.2-3.1c-0.3-1.8-0.4-3.7-0.4-5.5c-1.2-3-1.8-6.3-1.7-9.6 c0.9-19,0.5-38.1,0.8-57.2c0.3-17.1,0.6-34.2,0.2-51.3c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.8,0-1.6,0-2.4c0-0.5,0-1.1,0-1.6 c0-1.2,0-2.3,0.2-3.5H0v11.8c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V31c3.3,0,6.1,2.7,6.1,6.1S3.3,43.3,0,43.3v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 s-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V324h9.5C9.6,321.4,9.7,318.8,9.8,316.4z"></path>
			    </svg>
                <svg className="h-full absolute lg:top-[-40px] top-[-20px] right-0 translate-x-[30%] rotate-[180deg] fill-white" viewBox="0 0 12.9 324">
						<path className="fill-white dark:fill-[#191B1D]" d="M9.8,316.4c1.1-26.8,2-53.4,1.9-80.2c-0.1-18.2-0.8-36.4-1.2-54.6c-0.2-8.9-0.2-17.7,0.8-26.6 c0.5-4.5,1.1-9,1.4-13.6c0.1-1.9,0.1-3.7,0.1-5.6c-0.2-0.2-0.6-1.5-0.2-3.1c-0.3-1.8-0.4-3.7-0.4-5.5c-1.2-3-1.8-6.3-1.7-9.6 c0.9-19,0.5-38.1,0.8-57.2c0.3-17.1,0.6-34.2,0.2-51.3c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.8,0-1.6,0-2.4c0-0.5,0-1.1,0-1.6 c0-1.2,0-2.3,0.2-3.5H0v11.8c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V31c3.3,0,6.1,2.7,6.1,6.1S3.3,43.3,0,43.3v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 s-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V324h9.5C9.6,321.4,9.7,318.8,9.8,316.4z"></path>
			    </svg>
                <button className='font-[600] px-[15px] py-[10px] text-[15px] rounded-[5px] absolute bottom-0 right-[30px] translate-y-[50%] bg-primary text-white toCenter space-x-[30px]'><span>Find Ticket</span> <BsArrowRight/></button>
            </div>
            
        </div>
    </div>
    )
}

export default FlightFrist