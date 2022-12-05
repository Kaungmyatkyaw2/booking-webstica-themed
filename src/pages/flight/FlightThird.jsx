import { AiFillStar } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
const FlightThird = () => {
    const data = [
        {
          img : "https://booking.webestica.com/assets/images/category/flight/01.jpg",
          rating : 4.5,
          location : "Thailand",
          des : 'The next flight is on 29th Dec',
          check : true
        },
       
        {
          img : "https://booking.webestica.com/assets/images/category/flight/02.jpg",
          rating : 4.3,
          location : "Maldives",
          des : '2 flights every week'
        },
        {
          img : "https://booking.webestica.com/assets/images/category/flight/03.jpg",
          rating : 4.2,
          location : "Hong Kong",
          des : 'Daily 1 Flight',
          check : true
        },
        {
          img : "https://booking.webestica.com/assets/images/category/flight/04.jpg",
          rating : 4.5,
          location : "Switzerland",
          des : 'Filling fast,next availabel flight on 2nd Oct'
        }
      ]
      
  return (
<div className='container-cus py-[80px] xl:space-y-[50px]'>
          <h1 className='sm:text-[48px] text-[30px] font-bold text-center'>Popular Destinations</h1>
          <div className='w-full flex sm:justify-between justify-center flex-wrap'>
            {
              data.map((i,index) => (
                <div key={index} className='lg:w-[23%] group cursor-pointer sm:w-[45%] w-[95%] space-y-[15px] lg:pt-0 pt-[50px]'>
                      <div className="w-full relative rounded-[20px] overflow-hidden">
                      <img className='w-full hover:scale-[1.05] duration-500' src={i.img} alt="" />
                      {
                        i.check && 
                      <div className='w-[45px] h-[45px] toCenter rounded-full bg-white text-[15px] text-black shadow-cus absolute top-0 right-0 translate-x-[-50%] translate-y-[50%]'><BsInfoCircle/></div>
                      }
                      </div>
                      <div className='w-full space-y-[3px] pr-[8px]'>
                          <div className='flex items-center justify-between'>
                            <h1 className='text-[23px] font-bold group-hover:text-primary duration-500'>{i.location}</h1>
                            <p className='flex items-center space-x-[5px] font-bold text-[15px]'><span>{i.rating}</span><AiFillStar className='text-yellow-500'/></p>
                          </div>
                          <p className='text-gray-500 text-[15px]'>{i.des}</p>
                      </div>
                </div>
              ))
            }
          </div>
        </div>  )
}

export default FlightThird