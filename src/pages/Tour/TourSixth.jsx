import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useState } from 'react'
const TourSixth = () => {

  const [swipe,setSwipe] = useState({});


  const data = [
    {
    img : 'https://booking.webestica.com/assets/images/team/01.jpg',
    person : 'Louis Ferguson',
    title : 'Farther-related bed and passage comfort civilly.'
    },
    {
      img : 'https://booking.webestica.com/assets/images/team/02.jpg',
      person : 'Louis Stevens',
      title : 'Farther-related bed and passage comfort civilly.'
      }
]
  return (
        <div className='container-cus py-[100px]'>
          <div className='w-full flex flex-wrap justify-between md:space-y-0 space-y-[30px]'>
                <div className='lg:w-[33%] w-full space-y-[30px]'>
                    <h1 className='lg:text-[40px] text-[35px] font-bold !text-start w-[95%]'>Discover the best places to visit🔥</h1>
                    <div className='flex justify-between w-full'>
                        <div className='flex space-x-[-10px]'>
                        <img className='w-[50px] rounded-full' src="https://booking.webestica.com/assets/images/avatar/01.jpg" alt="" srcset="" />
                        <img className='w-[50px] rounded-full' src="https://booking.webestica.com/assets/images/avatar/02.jpg" alt="" srcset="" />
                        <img className='w-[50px] rounded-full' src="https://booking.webestica.com/assets/images/avatar/03.jpg" alt="" srcset="" />
                        <img className='w-[50px] rounded-full' src="https://booking.webestica.com/assets/images/avatar/04.jpg" alt="" srcset="" />
                        <div className='toCenter h-[50px] w-[50px] bg-black text-white rounded-full text-[14px]'>16+</div>
                        </div>
                        <div className='toCenter space-x-[10px] text-[20px] font-bold'><AiFillStar className='text-yellow-500 text-[25px]'/><span>4.5</span></div>
                    </div>
                    <button className='btn-secondary tracking-widest toCenter space-x-[20px]'><span>Explore places</span> <BsArrowRight/></button>
                </div>
                <div className='lg:w-[64%] w-full flex flex-wrap justify-between md:space-y-0 space-y-[30px]'>
                    <div className='md:w-[48%] w-full space-y-[30px]'>
                        <img src="https://booking.webestica.com/assets/images/category/tour/06.jpg" className='w-full object-cover rounded-[10px]' alt="" />
                        <div className=' relative'>


                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                            autoplay={{
                                delay:3000,
                            }}
                            slidesPerView={1}       
                            loop={true}
                            onInit={(ev) => {
                                setSwipe(ev)
                            }}
                            >

                        {
                            data.map((i,index) => (
                            <SwiperSlide key={index}> 
                            <div className='w-full flex items-center'>
                                <img src={i.img} className='w-[30%] rounded-[15px]' alt="" />
                                <div className='w-[70%] px-[20px] space-y-[3px]'>
                                    <p className='text-gray-500 text-[14px]'>{i.title}</p>
                                    <h1 className='font-bold'>{i.person}</h1>
                                </div>
                            </div>
                            </SwiperSlide>
                            ))
                        }

                        </Swiper>

                        
                            <div className='absolute top-0 left-0 w-full h-full flex justify-between z-[88] items-center px-[10px] overflow-hidden group'>
                            <button onClick={() => swipe.slidePrev()} className='text-[17px] z-[998] text-white bg-black bg-opacity-[0.5] dark:bg-[#191B1D] w-[30px] h-[30px] shadow-xl rounded-full flex items-center justify-center translate-x-[-200%] group-hover:translate-x-0 duration-300' ><BsArrowLeft/></button>
                            <button onClick={() => swipe.slideNext()} className='text-[17px] z-[998] text-white bg-black bg-opacity-[0.5] dark:bg-[#191B1D] w-[30px] h-[30px] shadow-xl rounded-full flex items-center justify-center translate-x-[200%] group-hover:translate-x-0 duration-300'><BsArrowRight/></button>
                            </div>

                        </div>
                    </div>
                    <div className='md:w-[48%] w-full space-y-[30px]'>
                        <img src="https://booking.webestica.com/assets/images/gallery/02.jpg" className='w-full rounded-[15px]' alt="" />
                        <img src="https://booking.webestica.com/assets/images/gallery/03.jpg" className='w-full rounded-[15px]' alt="" />
                    </div>
                </div>
          </div>
        </div>  
        )
}

export default TourSixth