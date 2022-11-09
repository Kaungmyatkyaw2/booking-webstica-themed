import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Member = () => {

    const data = [
        {
          img : 'https://booking.webestica.com/assets/images/team/03.jpg',
          name : 'Larry Lawson',
          job :'Editor in Chief'
        },
        {
          img : 'https://booking.webestica.com/assets/images/team/04.jpg',
          name : 'Louis Ferguson',
          job :'Director Graphics'
        },
        {
          img : 'https://booking.webestica.com/assets/images/team/05.jpg',
          name : 'Louis Crawford',
          job :'Editor, Coverage'
        },
        {
          img : 'https://booking.webestica.com/assets/images/team/06.jpg',
          name : 'Frances Guerrero',
          job :'CEO, Coverage'
        }
      ]

  return (
    <div className="container-cus py-[60px] ">
          <h1 className="md:text-[48px] text-[34px] font-bold">Our Team</h1>
          <div className="flex flex-wrap w-full sm:justify-between justify-center lg:space-y-0 space-y-[40px] lg:mt-0 mt-[-40px]">
           
            {
              data.map((i,index) => (
                <div key={index} className="lg:w-[23.4%] sm:w-[45%] w-full cursor-pointer group lg:first-of-type:mt-0 mt-[40px]">
                <div className="w-full relative">
                  <img src={i.img} className="w-full rounded-[15px]" alt="" />
                  <div className="opacity-0 group-hover:opacity-[1] duration-500 bg-white absolute bottom-[20px] left-[20px] px-[20px] py-[10px] rounded-[5px] flex space-x-[30px]">
                    <FaFacebookF className="text-blue-600"/><FaInstagram className="text-pink-600"/><FaTwitter className="text-blue-400"/>
                  </div>
                </div>
                <h1 className="font-bold xl:text-[25px] sm:text-[20px] text-[25px] mt-[10px] mb-[7px]">{i.name}</h1>
                <p className="text-gray-500 text-[15px]">{i.job}</p>
              </div>
              ))
            }

          </div>
         </div>  )
}

export default Member