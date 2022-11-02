import React from 'react'

const LastPart = () => {
  return (
    <div className='w-full flex-wrap flex justify-between items-center py-[20px] border-t border-gray-500 text-[15px] lg:space-y-0 space-y-[20px]'>
        <div className='lg:w-[50%] w-full flex lg:justify-start justify-center'>
            <p className='text-center'>Copyrights ©2022 Booking. All rights reserved.</p>
        </div>
        <div className='lg:w-[50%] w-full sm:space-x-[25px] space-x-[10px] lg:text-end text-center'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and conditions</a>
            <a href="#">Refund Policy</a>
        </div>
    </div>
  )
}

export default LastPart