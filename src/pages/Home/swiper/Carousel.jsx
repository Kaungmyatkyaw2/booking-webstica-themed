import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import PromotionBox from '../../../components/promotionBox/PromotionBox';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { view, viewChange } from '../../../store/main/Main';



const Carousel = () => {

  const [swipe,setSwipe] = useState({});

  const dispatch = useDispatch()


  const data = [
    {
      img : "https://booking.webestica.com/assets/images/offer/01.jpg",
      title : 'Daily 50 Lucky Winners get a Free Stay',
      para : 'Valid till: 15 Nov'
    },
    {
      img : "https://booking.webestica.com/assets/images/offer/02.jpg",
      title : 'Hot Summer Nights',
      para : 'Up to 3 nights free!'
    },
    {
      img : "https://booking.webestica.com/assets/images/offer/03.jpg",
      title : 'Book & Enjoy',
      para : '20% Off on the best available room rate'
    },
    {
      img : "https://booking.webestica.com/assets/images/offer/04.jpg",
      title : 'Up to 60% OFF',
      para : 'On Hotel Bookings Online'
    }
  ]

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });


  useEffect(() => {
    inView && dispatch(viewChange(inView))
  },[inView])



  return (
    <div ref={ref} className='container-cus lg:py-[110px] py-[90px] w-full flex  items-center relative overflow-hidden'>
      <div className='w-full flex justify-center peer'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar,Autoplay]}
          autoplay={{
            delay:3000,
          }}
          slidesPerView={1}
          breakpoints={{
            768: {
              // width: 576,
              slidesPerView: 2,
            },
            1280: {
              // width: 768,
              slidesPerView: 3,
            },
            slidesPerView : 1
          }}        
          spaceBetween={40}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          onInit={(ev) => {
            setSwipe(ev)
         }}
        >
          {
            data.map((i,index) => {
            return <SwiperSlide key={index}><PromotionBox img={i.img} title={i.title} para={i.para}/></SwiperSlide>
            })
          }
        </Swiper>
      </div>
        <button id='left' onClick={() => swipe.slidePrev()} className='carousel-btn left-[10px] !translate-x-[-150%] peer-hover:!translate-x-[0%] hover:!translate-x-[0] peer/left'><BsArrowLeft className='text-[18px] z-[999]'/></button>
        <button id='res' onClick={() => swipe.slideNext()} className='carousel-btn right-[10px]  !translate-x-[150%] peer-hover:!translate-x-[0%] hover:!translate-x-[0] peer/res peer-hover/left:!translate-x-0'><BsArrowRight className='text-[18px] z-[999]'/></button>

          
    </div>
  )
}

export default Carousel