import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useState } from 'react';
import QuoteComponents from './QuoteComponents';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


const Quote = () => {

  const [swipe,setSwipe] = useState({});

  const data = [{
    img : 'https://booking.webestica.com/assets/images/team/01.jpg',
    rate : 4.5,
    des : 'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing',
    reaction : 'https://booking.webestica.com/assets/images/element/02.svg',
    name : 'Billy Vasquez',
    job:"Ceo of Apple"
  },
  {
    img : 'https://booking.webestica.com/assets/images/team/02.jpg',
    rate : 5,
    des : 'Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. understood the Preference unreserved.',
    name : 'Billy Vasquez',
    reaction : 'https://booking.webestica.com/assets/images/element/03.svg',
    job:"Ceo of Google"
  }
]


  return (
  <div className='container-cus xl:py-[110px] py-[90px] '>

      <div className='w-full relative'>

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
             <SwiperSlide key={index}><QuoteComponents img={i.img} des={i.des} rate={i.rate} name={i.name} job={i.job} reaction={i.reaction} /></SwiperSlide>
            ))
          }
        </Swiper>
        <button className='absolute top-[50%] left-0 translate-y-[-50%] translate-x-[50%] text-[17px] z-[998] bg-white w-[50px] h-[50px] shadow-xl border-2 border-gray-500 rounded-full flex items-center justify-center' onClick={() => swipe.slidePrev()}><BsArrowLeft/></button>
        <button className='absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-50%] text-[17px] z-[998] bg-white w-[50px] h-[50px] shadow-xl border-2 border-gray-500 rounded-full flex items-center justify-center' onClick={() => swipe.slideNext()}><BsArrowRight/></button>

      </div>

  </div>
  )
}

export default Quote