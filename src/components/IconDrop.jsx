import React from 'react'
import { BsCardText, BsCloudDownload, BsFillPuzzleFill, BsLifePreserver, BsToggleOff } from 'react-icons/bs'

const IconDrop = () => {

    const icon = [
        {title : "Support",icon : <BsLifePreserver/>,class:'text-yellow-400'},
        {title:"Documentions",icon : <BsCardText/>,class:'text-red-400'},
        {title:"Rtl demo",icon : <BsToggleOff/>,class:'text-blue-400'},
        {title:"Buy Booking",icon:<BsCloudDownload/>,class:'text-green-400'},
        {title:"Components",icon:<BsFillPuzzleFill/>,class:'text-orange-400'},
    ]


  return (
    <div className='w-fit xl:scale-y-0 xl:opacity-0 xl:group-hover:opacity-[1] xl:group-hover:scale-y-[1] xl:block hidden group-hover:block duration-300 delay-100 origin-top xl:shadow-cus xl:absolute relative top-[100%] left-0 px-[10px] py-[20px] rounded-[8px] text-[16px] space-y-[10px] xl:border-none border z-[999] bg-white dark:bg-[#191B1D]' style={{transitionProperty:'opacity'}}>
                    {
                        icon?.map((e,index) => (
                            <h1 key={index} className='w-fit text-[16px] text-gray-500 flex items-center space-x-[20px] hover:bg-secondary dark:hover:bg-dark  hover:text-primary py-[5px] px-[10px] rounded-[8px]'>
                                <span className={`text-[15px] ${e.class}`}>{e.icon}</span>
                                <span>{e.title}</span>
                            </h1>
                        ))
                    }
                </div>
  )
}

export default IconDrop