import React from 'react'

const ServiceCard= ({card,width,classes}) => {
  return (
    
      card.map((i,index) => (
          <div key={index} className={`${width} space-y-[10px] lg:pr-[10px] sm:pt-[25px] pt-[40px]`}>
              <div className={`w-[50px] h-[50px] ${i.color} bg-opacity-[0.3] ${classes} grid place-items-center`}>
              {i.icon}
              </div>
              <h1 className='font-bold text-[21px]'>{i.title}</h1>
              <p className='text-gray-500 text-[15px]'>{i.des}</p>

          </div>
      ))
     
  )
}

export default ServiceCard