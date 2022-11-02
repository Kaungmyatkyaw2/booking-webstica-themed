import {FaHotel,FaPlane,FaGlobeAmericas,FaCarAlt} from 'react-icons/fa'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'


export const FirstPart = () => {

    const gpData = [
        {
            header : 'Pages',
            item : ['About us','Contact us','News and Blog','Meet a team']
        },
        {
            header : 'Link',
            item : ['Sign Up','Sign In','Privacy Policy','Terms','Cookies','Support']
        },
    ]

    const iconList = [
        {
            header : "Booking",
            item : [
                {
                title : "Hotel",
                icon : <FaHotel/>
                },
                {
                    title : "Flight",
                    icon : <FaPlane/>
                },
                {
                    title : 'Tour',
                    icon : <FaGlobeAmericas/>
                },
                {
                    title : 'Cabs',
                    icon : <FaCarAlt/>
                }
                ]
        },
        {
            header : 'Global Site',
            item : [{title:'India'},{title:'California'},{title:'Indonesia'},{title:'Canada'},{title:'Malaysia'}]
        }
    ]
  return (
    <div className='w-full flex justify-between flex-wrap xl:space-y-0 md:space-y-[40px] space-y-[50px]'>
    <div className='xl:w-[25%] lg:w-full space-y-[20px]'>
        <img className='w-[140px]' src="https://booking.webestica.com/assets/images/logo-light.svg" alt="" />
        <p className='text-[14px]'>Departure defective arranging rapturous did believe him all had supported.</p>
        <div className='space-y-[8px]'>
            <a href="#" className='flex hover:text-primary duration-500 items-center space-x-[10px] text-[15px]'><BsTelephone className='text-[16px]'/><span>+1234 568 963</span></a>
            <a href="#" className='flex hover:text-primary duration-500 items-center space-x-[10px] text-[15px]'><BsEnvelope className='text-[16px]'/><span>example@gmail.com</span></a>
        </div>
    </div>
    <div className='xl:w-[65%] w-full flex md:flex-nowrap flex-wrap'>
        {
            gpData.map((i,index) => (
                <div key={index} className='md:w-[25%] w-[50%]'>
                    <h1 className='font-bold text-[21px] pb-[25px] text-white'>{i.header}</h1>
                    <div className='space-y-[13px]'>
                    {
                        i.item.map((i,index) => (
                            <a key={index} href="#" className='hover:text-primary duration-500 text-[15px] block'>{i}</a>
                        ))
                    }
                    </div>
                </div>
            ))
        }
         {
                iconList.map((i,index) => (
                    <div key={index} className='md:w-[25%] w-[50%] md:mt-0 mt-[50px]'>
                        <h1 className='font-bold text-[21px] pb-[25px] text-white'>{i.header}</h1>
                        <div className='space-y-[13px]'>
                        {
                            i.item.map((i,index) => (
                                <a key={index} href="#" className='text-[15px] items-center flex space-x-[7px]'><span className='text-[17px]'>{i?.icon}</span><span>{i.title}</span></a>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
    </div>
</div>
  )
}
