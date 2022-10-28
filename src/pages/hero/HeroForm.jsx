import { BiCalendarAlt, BiSearch } from 'react-icons/bi'
import { BsGeoAlt, BsPerson } from 'react-icons/bs'
import HeroSecInput from '../../components/input/HeroSecInput'

const HeroForm = () => {
  return (

    <div className='lg:absolute xl:w-[80%] lg:w-[95%] xl:px-0 lg:px-[20px] w-full bottom-0 left-0 space-y-[15px] lg:mt-0 mt-[-35px]'>
        <h1 className='text-[16.4px] font-bold lg:block hidden'>Check Availability</h1>
        <div className='w-full bg-white lg:space-x-[25px] lg:space-y-0 space-y-[40px] flex lg:flex-row flex-col  lg:items-center lg:py-[32px] py-[45px] px-[20px] rounded-[10px] shadow-cus relative'>
           <HeroSecInput label="Location" placeholder="Select Location" value="" icon={<BsGeoAlt/>}/>
           <HeroSecInput label='Check in - out' value="19 Sep to 28 Sep" placeholder="Select Date" icon={<BiCalendarAlt/>}/>
           <HeroSecInput label='Guests & rooms' value="2 Guests 1 Room" placeholder="Select Room" icon={<BsPerson/>}/>
           <div className='bg-primary w-[55px] h-[55px] rounded-full flex items-center justify-center absolute lg:bottom-auto bottom-0 lg:translate-y-0 translate-y-[50%]  lg:right-0 right-[50%] sm:translate-x-[50%] translate-x-[50%]'>
            <BiSearch className='text-[25px] text-white'/>
           </div>
        </div>
    </div> 
 )
}

export default HeroForm