import { BsArrowRight } from 'react-icons/bs'

const FlightSecond = () => {
  return (
    <div className='container-cus py-[30px] lg:space-y-[30px] space-y-[-10px]'>
        <h1 className='text-[29px] font-bold'>Special Offers</h1>
        <div className='w-full flex lg:space-x-[20px] xl:justify-start sm:justify-between justify-center flex-wrap lg:space-y-0 space-y-[50px] h-fit'>
            <div className='bg-[#E6F8F3] dark:bg-[#203433] shadow-sm space-y-[30px] xl:w-[25%] lg:w-[30%] sm:w-[48%] w-[95%] p-[20px] rounded-[15px] flex flex-col justify-between lg:mt-0 mt-[50px]'>
                <img className='w-[180px]' src="https://booking.webestica.com/assets/images/client/07.svg" alt="" />
                <div className='space-y-[-3px]'>
                    <p className='text-gray-500 text-[15.5px]'>Flat</p>
                    <h1 className='font-bold text-[29px]'>$899 off</h1>
                    <p className='font-medium'>On Domestic Flights</p>
                </div>
                <div className='toCenter !justify-between'>
                    <button className='px-[15px] py-[5px] rounded-[10px] border-dashed border-primary border-2 text-[20px] font-medium bg-primary bg-opacity-[0.2]'>LOG125F</button>
                    <button className='w-[50px] h-[50px] bg-white rounded-full text-black text-[17px] toCenter hover:bg-gray-300 hover:bg-opacity-[0.5]'><BsArrowRight/></button>
                </div>
            </div>
            <div className='bg-[#FBE9EB] dark:bg-[#35252B] flex flex-col justify-between shadow-sm space-y-[30px] xl:w-[25%] lg:w-[30%] sm:w-[48%] w-[95%] p-[20px] rounded-[15px]'>
                <img className='w-[180px]' src="https://booking.webestica.com/assets/images/client/08.svg" alt="" />
                <div className='space-y-[1px]'>
                    <p className='text-gray-500 text-[15.5px]'>Flat</p>
                    <h1 className='font-bold text-[29px]'>13% off</h1>
                    <p className='font-medium'>On Domestic Flights</p>
                </div>
                <div className='toCenter !justify-between'>
                    <button className='px-[15px] py-[5px] rounded-[10px] border-dashed border-primary border-2 text-[20px] font-medium bg-primary bg-opacity-[0.2]'>LOG125F</button>
                    <button className='w-[50px] h-[50px] bg-white rounded-full text-black text-[17px] toCenter hover:bg-gray-300 hover:bg-opacity-[0.5]'><BsArrowRight/></button>
                </div>
            </div>
            <div className='bg-[#E7F6F8] dark:bg-[#213238] flex flex-col justify-between shadow-sm space-y-[30px] xl:w-[25%] lg:w-[30%] sm:w-[48%] w-[95%] p-[20px] rounded-[15px]'>
                <img className='w-[180px]' src="https://booking.webestica.com/assets/images/client/09.svg" alt="" />
                <div className='space-y-[-3px]'>
                    <p className='text-gray-500 text-[15.5px]'>Flat</p>
                    <h1 className='font-bold text-[29px]'>$2,400 off</h1>
                    <p className='font-medium'>On International Flights</p>
                </div>
                <div className='toCenter !justify-between'>
                    <button className='px-[15px] py-[5px] rounded-[10px] border-dashed border-primary border-2 text-[20px] font-medium bg-primary bg-opacity-[0.2]'>LOG125F</button>
                    <button className='w-[50px] h-[50px] bg-white rounded-full text-black text-[17px] toCenter hover:bg-gray-300 hover:bg-opacity-[0.5]'><BsArrowRight/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightSecond