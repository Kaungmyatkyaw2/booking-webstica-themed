import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const ThirdPart = () => {

    const img = ['paypal','visa','mastercard','expresscard']

  return (
    
             
    <div className="w-full flex sm:flex-row flex-col justify-between sm:space-y-0 space-y-[30px]">
    <div className="sm:w-[50%] w-full">
        <h1 className="text-white text-[21px] font-bold pb-[10px]">Payment & Security</h1>
        <div className="flex space-x-[15px]">
            {
                img.map((i,index) => (
                  <img key={index} className="h-[30px]" src={`https://booking.webestica.com/assets/images/element/${i}.svg`} alt="" />
                ))
            }
        </div>
    </div>
    <div className="w-[50%] flex flex-col sm:items-end items-start">
        <h1 className="text-white text-[21px] font-bold pb-[10px]">Follow us on</h1>
        <div className="flex space-x-[15px]">
            <div className="text-white bg-blue-500 px-[8px] py-[8px] rounded-[6px] w-fit text-[15px]"><FaFacebookF/></div>
            <div className="text-white bg-pink-500 px-[8px] py-[8px] rounded-[6px] w-fit text-[15px]"><FaInstagram/></div>
            <div className="text-white bg-sky-400 px-[8px] py-[8px] rounded-[6px] w-fit text-[15px]"><FaTwitter/></div>
            <div className="text-white bg-sky-600 px-[8px] py-[8px] rounded-[6px] w-fit text-[15px]"><FaLinkedinIn/></div>
        </div>
    </div>
  </div>
  )
}

export default ThirdPart