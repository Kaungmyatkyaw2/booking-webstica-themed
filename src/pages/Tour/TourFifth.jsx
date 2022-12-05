import React from 'react'

const TourFifth = () => {


  const data = [
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/20.jpg',
      title : "Beach",
      count : '4,568'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/19.jpg',
      title : "Heritage",
      count : '2,845'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/18.jpg',
      title : "Desert",
      count : '1,587'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/17.jpg',
      title : "Tower",
      count : '968'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/16.jpg',
      title : "Mountain",
      count : '786'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/15.jpg',
      title : "Safari",
      count : '568'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/14.jpg',
      title : "Temple",
      count : '256'
    },
    {
      img : 'https://booking.webestica.com/assets/images/category/hotel/nearby/13.jpg',
      title : "Festival",
      count : '654'
    }
  ]

  return (

    <div className='container-cus'>
    <h1 className='title'>Top Categories</h1>
    <div className='w-full flex flex-wrap lg:justify-between md:justify-start justify-between space-y-[50px] mt-[-20px]'>
      {
        data.map((i,index) => (
          <div key={index} className='lg:w-[25%] md:w-[33.3%] sm:w-[48%] w-full flex-wrap flex items-center first-of-type:mt-[50px]'>
            <img src={i.img} className='md:w-[40%] sm:w-[full] rounded-[15px]' alt="" srcset="" />
            <div className='w-[60%] pl-[15px] md:pt-0 pt-[10px]'>
              <h1 className='font-bold text-[22px]'>{i.title}</h1>
              <p className='text-gray-600 text-[15px]'>{i.count} Places</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>    
)
}

export default TourFifth