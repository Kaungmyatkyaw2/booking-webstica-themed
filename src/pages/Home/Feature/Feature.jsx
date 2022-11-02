import { AiFillStar } from 'react-icons/ai'
import { BsGeoAlt } from 'react-icons/bs'

const Feature = () => {

    const data = [
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/01.jpg',
            location : 'New York',
            hotel : 'Baga Comfort',
            price : '$455',
            rating : '4.5'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/02.jpg',
            location : 'California',
            hotel : 'New Apollo Hotel',
            price : '$585',
            rating : '4.8'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/03.jpg',
            location : 'Los Angeles',
            hotel : 'New Age Hotel',
            price : '$385',
            rating : '4.6'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/04.jpg',
            location : 'Chicago',
            hotel : 'Helios Beach Resort',
            price : '$665',
            rating : '4.8'
        },
    ]

  return (
    <div className='container-cus xl:py-[110px] py-[90px] lg:space-y-[30px]'>
        <h1 className='font-bold sm:text-[48px] text-[33px] text-center'>Featured Hotels</h1>
        <div className='w-full flex sm:justify-between justify-center  flex-wrap'>
          
          {
            data.map((i,index) => (
                <div key={index} className='lg:w-[23%] group cursor-pointer sm:w-[45%] w-[95%] space-y-[15px] lg:pt-0 pt-[50px]'>
                <div className="w-full relative rounded-[20px] overflow-hidden">
                 <img className='w-full hover:scale-[1.05] duration-500' src={i.img} alt="" />
                 <div className='bg-black px-[10px] py-[3px] rounded-full text-white text-[14px] w-fit flex items-center space-x-[6px] cursor-pointer absolute left-[5%] bottom-[5%]'><BsGeoAlt className='text-[17px]'/> <span>{i.location}</span></div>
                </div>
                <div className='w-full space-y-[5px] pr-[8px]'>
                    <h1 className='text-[21px] font-bold group-hover:text-primary duration-500'>{i.hotel}</h1>
                    <div className='flex items-center justify-between'>
                       <p className='text-green-500 text-[14px]'><span className='font-bold text-[17px]'>{i.price}</span> / starting at</p>
                       <p className='flex items-center space-x-[5px] font-bold text-[15px]'><span>{i.rating}</span><AiFillStar className='text-yellow-500'/></p>
                    </div>
                </div>
            </div>
            ))
          }

        </div>
    </div>
  )
}

export default Feature