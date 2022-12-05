import { FiSend } from 'react-icons/fi'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
const TourFooter = () => {
  return (

    <div className='container-cus'>

    <div className='w-full rounded-t-[15px] bg-[#F5F5F6] py-[40px] sm:px-[40px] px-[20px] space-y-[30px]'>
      <div className='flex flex-wrap justify-between md:space-y-0 space-y-[30px]'>
        <div className='md:w-auto w-full space-y-[20px]'>
          <img src="https://booking.webestica.com/assets/images/logo.svg" className='h-[40px]' alt="" />
          <div className='space-y-[8px]'>
            <p className='text-[15px] text-gray-500'>Subscribe to Our Newsletter</p>
            <div className='flex md:w-[350px] w-full space-x-[20px] bg-white py-[10px] sm:px-[20px] px-[10px] rounded-[10px]'>
              <input type="text" className='outline-none bg-transparent placeholder:text-[15px] sm:w-[80%] w-full' placeholder='Enter your email' />
              <button className='bg-black rounded-[5px] py-[10px] px-[20px] text-[20px] font-bold text-white'><FiSend/></button>
            </div>
          </div>
        </div>
        <div className='md:w-auto w-full flex md:space-x-[100px] md:justify-start justify-between lg:pr-[30px]'>
          <div className='space-y-[20px] md:w-auto w-[50%]'>
            <h1 className='text-[23px] font-bold'>Page</h1>
            <ul className='text-gray-500 text-[14.5px] space-y-[10px]'>
              <li>Blog</li>
              <li>Account</li>
              <li>Contact us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className='space-y-[20px] md:w-auto w-[50%]'>
            <h1 className='text-[23px] font-bold'>Links</h1>
            <ul className='text-gray-500 text-[14.5px] space-y-[10px]'>
              <li>Sign up</li>
              <li>Sign in</li>
              <li>Privact Policy</li>
              <li>Terms</li>
              <li>Cookies</li>
              <li>Supports</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-between items-center border-t pt-[20px]'>
        <h1 className='text-[16px] text-gray-500 md:w-auto w-full text-center md:pb-0 pb-[20px]'>Copyrights ©2022 Booking. All rights reserved.</h1>
        <div className='flex lg:justify-end justify-center space-x-[20px] md:w-auto w-full text-gray-500 lg:pr-[30px]'>
          <a href="#"><FaFacebookF/></a>
          <a href="#"><BsTwitter/></a>
          <a href="#"><BsInstagram/></a>
          <a href="#"><FaLinkedinIn/></a>
          <a href="#"><BsGithub/></a>
        </div>
      </div>
    </div>

</div>
)
}

export default TourFooter