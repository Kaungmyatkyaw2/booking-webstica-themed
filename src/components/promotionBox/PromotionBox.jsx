import React from 'react'

const PromotionBox = ({img,title,para}) => {
  return (
    <div className='cursor-pointer flex sm:flex-row flex-col justify-center items-center w-[100%] rounded-[20px] overflow-x-hidden border xl:h-[130px] md:h-[150px] max-h-[500px]'>
      <div className='sm:w-[50%] w-full sm:h-full h-[90%]'>
        <img className='h-full w-full object-cover' src={img} alt="" />
      </div>
      <div className='sm:w-[50%] w-full sm:py-0 py-[20px] sm:px-[10px] px-[10px] space-y-[10px]'>
        <h1 className='font-bold text-[15px]'>{title}</h1>
        <p className='text-gray-500 text-[14px]'>{para}</p>
      </div>
    </div>
      )
}

export default PromotionBox