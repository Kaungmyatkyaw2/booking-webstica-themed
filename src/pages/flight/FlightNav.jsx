import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { BsArrowRight, BsSearch } from "react-icons/bs"
import { FaMoon, FaSun } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import DropDownItem from "../../components/DropDownItem"
import IconDrop from "../../components/IconDrop"
import { switchMode } from "../../store/main/Main"

const FlightNav = () => {


    const item = [
        {
            header : 'Listings',
            items : ['Hotel','Flight','Tour','Cab',"Add Listing",'Hero','Booking Confirmed'],
            more : [0,1,2,3,4]
        },
        {
            header: "Pages",
            items:["About","Contact","Contact 2","Authentication","Blog","Helps","F&Qs","Pricing","Error 404","Comming Soon"],
            more : [5,6,2,4,7]
        },
        {
            header : "Accounts",
            items : ["User Profile","Agent Dashboard","Master Admin"],
            more :[0,1]
        }
        
    ]

    const [show,setShow] = useState(false)
    const dispatch = useDispatch()
    const dark = useSelector(state => state.userAction.darkMode)

  return (
    <div className='w-full flex justify-center bg-white sticky top-0 left-0 dark:bg-dark dark:text-white z-[1000]'>
        <div className='xl:px-0 lg:px-[20px] sm:px-[25px] px-[15px] xl:w-[80%] w-full py-[20px] flex items-center font-dm sticky left-0 top-0'>
            <div className='xl:w-[25%] w-[50%]'>
                <img src={`${dark ? 'https://booking.webestica.com/assets/images/logo-light.svg' : 'https://booking.webestica.com/assets/images/logo.svg'}`} className='w-[130px]' alt="" />
            </div>
            <div className={`xl:w-[75%] w-full bg-white dark:bg-dark xl:flex ${show ? 'flex' : 'hidden'} duration-200 origin-top xl:items-center xl:justify-center xl:space-x-[28px] xl:flex-row flex-col xl:relative absolute xl:top-0 top-[84%] left-0 xl:space-y-0 space-y-[20px] xl:py-0 py-[30px] xl:px-0 px-[50px] xl:shadow-none shadow-xl`}>
                <DropDownItem check={true} item={item} />
                <div className="xl:relative xl:top-auto xl:left-auto top-0 left-0 group xl:mt-0">
                <h1 className='cursor-pointer flex items-center text-[20px]'>
                    <BiDotsHorizontalRounded/>
                </h1>
                <IconDrop/>
                </div>
            </div>
            <div className='xl:w-[25%] w-[50%] flex xl:justify-start justify-end space-x-[20px] items-center'>
                        
                <div className='text-[20px] xl:hidden block' onClick={() => setShow(!show)}>
                <AiOutlineMenu/>
                </div>

                <div onClick={() => dispatch(switchMode())}>

                        {
                            dark ? 
                                <FaMoon className='text-[22px]'/>
                                : 
                                <FaSun className='text-yellow-400 text-[25px]'/>


                        }

                </div>
                <BsSearch className='text-gray-500 text-[20px]'/>
                <button className='px-[10px] py-[5px] rounded-[5px] bg-primary text-white text-[13px] font-bold flex items-center space-x-[5px]'><BsArrowRight className='sm:text-[18px] text-[25px]'/> <span className='sm:block hidden'>Sign Up</span></button>
            </div>
        </div>
    </div>
  )
}

export default FlightNav