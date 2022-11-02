import React from 'react'

const CompanyCard = () => {
  return (
    <div className='container-cus'>

        <div className='w-full flex lg:justify-between sm:justify-center justify-between lg:space-x-0 sm:space-x-[4%] items-center flex-wrap sm:space-y-0 space-y-[40px]  sm:mt-0 mt-[-40px] sm:px-0 px-[25px]'>
        <img className='lg:w-[12%] sm:w-[22%] w-[45%] sm:pt-[0] pt-[40px]' src="https://booking.webestica.com/assets/images/client/01.svg" alt="" />
        <img className='lg:w-[12%] sm:w-[22%] w-[45%]' src="https://booking.webestica.com/assets/images/client/02.svg" alt="" />
        <img className='lg:w-[12%] sm:w-[22%] w-[45%]' src="https://booking.webestica.com/assets/images/client/03.svg" alt="" />
        <img className='lg:w-[12%] sm:w-[22%] w-[45%]' src="https://booking.webestica.com/assets/images/client/04.svg" alt="" />
        <img className='lg:w-[12%] sm:w-[22%] w-[45%] lg:pt-0 sm:pt-[20px]' src="https://booking.webestica.com/assets/images/client/05.svg" alt="" />
        <img className='lg:w-[12%] sm:w-[22%] w-[45%] lg:pt-0 sm:pt-[20px]' src="https://booking.webestica.com/assets/images/client/06.svg" alt="" />
        </div>

    </div>
  )
}

export default CompanyCard