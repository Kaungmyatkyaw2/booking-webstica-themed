import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
const FlightFooter = () => {
  return (
<div className='container-cus bg-black py-[50px] rounded-t-[10px]'>
          <div className='w-full flex flex-wrap items-center justify-between space-y-[50px] px-[40px] text-gray-400'>
            <div className='flex lg:justify-start justify-center space-x-[30px] lg:w-[35%] w-full text-[15px]'>
              <a href="#">About</a>
              <a href="#">Policy</a>
              <a href="#">Terms & Condition</a>
            </div>
            <div className='lg:w-[30%] w-full flex flex-col items-center justify-center space-y-[10px]'>
              <img src="https://booking.webestica.com/assets/images/logo-light.svg" className='h-[60px]' alt="" />
              <p className=' text-[15px] text-center'>Copyrights ©2022 Booking. All rights reserved.</p>
            </div>
            <div className='flex lg:justify-end justify-center space-x-[30px] lg:w-[35%] w-full text-[20px]'>
              <a href="#"><FaFacebookF/></a>
              <a href="#"><BsTwitter/></a>
              <a href="#"><BsInstagram/></a>
              <a href="#"><FaLinkedinIn/></a>
              <a href="#"><BsGithub/></a>
            </div>
          </div>
        </div>  )
}

export default FlightFooter