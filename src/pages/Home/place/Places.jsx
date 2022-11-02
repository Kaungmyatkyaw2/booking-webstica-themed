import React from 'react'

const Places = () => {

    const data = [
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/01.jpg',
            title:'San Fransico',
            des : '13 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/02.jpg',
            title:'Los Angeles',
            des : '25 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/03.jpg',
            title:'Miami',
            des : '45 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/04.jpg',
            title:'Sanjosh',
            des : '55 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/05.jpg',
            title:'New York',
            des : '1-hour min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/06.jpg',
            title:'North Justen',
            des : '2-hour min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/07.jpg',
            title:'Rio',
            des : '20 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/08.jpg',
            title:'Las Vegas',
            des : '3-hour drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/09.jpg',
            title:'Texas',
            des : '55 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/10.jpg',
            title:'Chicago',
            des : '13 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/11.jpg',
            title:'New Keagan',
            des : '35 min drive'
        },
        {
            img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/12.jpg',
            title:'Oslo',
            des : '1 hour 13 min drive'
        }
    ]

  return (
    <div className='container-cus pb-[60px]'>

        <h1 className='text-center  sm:text-[48px] text-[33px] font-bold'>Explore Nearby</h1>

        <div className='flex flex-wrap justify-between w-full space-y-[60px]'>

           {
            data.map((i,index) => (
                <div key={index} className='hover:text-primary duration-500 cursor-pointer xl:w-[15%] lg:w-[22%] sm:w-[30%] w-[50%] flex flex-col items-center space-y-[12px] first-of-type:pt-[60px]'>
                    <img className='xl:w-[130px] xl:h-[130px] sm:w-[80%] w-[85%] rounded-full' src={i.img} alt="" />
                    <h1 className='font-bold text-[21px] text-center'>{i.title}</h1>
                    <p className='text-gray-600 text-[15px]'>{i.des}</p>
                </div>
            ))
           }
            

        </div>

    </div>
  )
}

export default Places