import { AiFillStar } from 'react-icons/ai'

const TourThird = () => {


    const data = [
        {
            img : 'https://booking.webestica.com/assets/images/category/tour/04.jpg',
            location : 'Lombok, Indonesia',
            price : '1385',
            rating : '4.3',
            duration : '6 days / 5 nights',
            type : "Adventure"
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/tour/03.jpg',
            location : 'Northern Lights Escape',
            price : '2596',
            rating : '4.5',
            duration : '8 days / 7 nights',
            type : "History"
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/tour/02.jpg',
            location : 'Essential Egypt',
            price : '1885',
            rating : '4.2',
            duration : '9 days / 8 nights',
            type : "Desert"
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/tour/01.jpg',
            location : 'Phi Phi Islands',
            price : '3585',
            rating : '4.6',
            duration : '9 days / 8 nights',
            type : "Beach"
        }
    ]


  return (
    <div className='container-cus'>
    <h1 className='sm:text-[48px] text-[30px] font-bold text-center pb-[20px]'>Our Best Package</h1>
    <div className='flex flex-wrap sm:justify-between justify-center'>
        {
            data.map((i,index) => (
                <div key={index} className='lg:w-[23%] group cursor-pointer sm:w-[45%] w-[95%] space-y-[15px] lg:pt-0 pt-[50px]'>
                        <div className="w-full relative rounded-[20px] overflow-hidden">
                        <img className='w-full hover:scale-[1.05] duration-500' src={i.img} alt="" />
                        
                        <div className=' toCenter rounded-[5px] bg-white text-[13px] text-black shadow-cus absolute top-0 right-0 translate-x-[-20px] translate-y-[100%] px-[10px] py-[2px] space-x-[10px]'><AiFillStar className='text-yellow-500 text-[16px]'/><span>{i.rating}</span></div>
                        <div className=' toCenter rounded-[5px] bg-black text-[13px] text-white shadow-cus absolute top-0 left-0 translate-x-[20px] translate-y-[100%] px-[10px] py-[2px] space-x-[10px]'><p>{i.type}</p></div>
                        <h1 className='absolute left-0 bottom-0 translate-x-[20px] translate-y-[-50%] text-black text-[14px] bg-white px-[15px] py-[2px] rounded-[5px]'>{i.duration}</h1>
                        
                        </div>
                        <div className='w-full space-y-[3px] pr-[8px]'>
                                <h1 className='text-[23px] font-bold group-hover:text-primary duration-500'>{i.location}</h1>
                            
                            <p className='text-green-500 font-bold text-[22px]'>${i.price} <span className='text-gray-500 font-light text-[13px] pl-[5px]'>Starting price</span></p>
                        </div>
                </div>
            ))
        }
    </div>
</div>  )
}

export default TourThird