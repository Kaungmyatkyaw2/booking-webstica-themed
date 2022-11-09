import {FaHotel,FaPlane,FaGlobeAmericas,FaCarAlt} from 'react-icons/fa'
import {BiBell} from 'react-icons/bi'
import avatar from './../../../assets/nav-avatar.jpg'
import {TbGridDots} from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import DropDownNav from '../../../components/dropdown/DropDownNav'
import { BsBookmarkCheck, BsInfoCircle, BsPower } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai'
import { switchMode } from '../../../store/main/Main'
import { useState } from 'react'



const NavRightPart = () => {
    const items = [
        {
            title : "Hotel",
            icon : <FaHotel/>
        },
        {
            title : "Flight",
            icon : <FaPlane/>
        },
        {
            title : "Tour",
            icon : <FaGlobeAmericas/>
        },
        {
            title : "Cab",
            icon : <FaCarAlt/>
        },
    ]

    const profile = [
        {
            title : "My Bookings",
            icon : <BsBookmarkCheck/>
        },
        {
            title : "My Wishlist",
            icon : <AiOutlineHeart/>
        },
        {
            title : "Settings",
            icon : <AiOutlineSetting/>
        },
        {
            title : "Help Center",
            icon : <BsInfoCircle/>
        },
        {
            title : "Sign Out",
            icon : <BsPower/>
        }
    ]

    const show = useSelector(state => state.userAction.rightDrop)
    const dispatch = useDispatch()
    const [profileCard,setProfileCard] = useState(false)
    


  return (
    <div className='flex items-center xl:space-x-0 space-x-[15px]'>

        <div className={`xl:w-fit w-full bg-white dark:bg-dark !scale-1 xl:flex ${show ? 'flex' :'hidden'} xl:flex-row flex-col xl:px-0 px-[20px] space-x-[8px] xl:relative absolute top-[100%] left-0 xl:space-y-0 space-y-[20px] xl:shadow-none shadow-xl`}>
            {
                items.map((i,index) => (
                   <a href="#" key={index} className={`${i.title === "Hotel" ? 'bg-secondary dark:bg-primary dark:bg-opacity-[0.1] text-primary' : ''} flex items-center justify-center font-[500] space-x-[8px] px-[12px] py-[8px] rounded-[7px] text-[16px]`}>
                    <span className='text-[17px]'>{i.icon}</span>
                    <span>{i.title}</span>
                    </a>
                ))
            }
        </div>

        <DropDownNav title="Category" icon={<TbGridDots/>} action={false}/>

        <div className='flex space-x-[15px] items-center'>
            <div className='profile-img sm:!min-h-[43px] sm:!min-w-[43px] noti-ball'>
                <BiBell/>
            </div>
            <div className='profile-img' onClick={() => setProfileCard(prev => !prev)}>
                <img className='w-full h-full rounded-[10px]' src={avatar} alt=""/>
            </div>
        </div>

        <div className={`absolute bottom-[0px] dark:border border-gray-700 translate-y-[100.5%] translate-x-[-10px] xl:w-auto w-[250px] right-0 dark:bg-[#191B1D] bg-white shadow-cus px-[10px] py-[10px] rounded-[10px] ${profileCard ? "block" : "hidden"}`}>
            <div className='flex items-center space-x-[10px] px-[20px] pb-[10px] border-b border-gray-200'>
             <img src={avatar} className='w-[45px] h-[45px] rounded-full' alt="" />
             <div>
                <h1 className='font-bold text-[17px]'>Lori Ferguson</h1>
                <p className='text-[14px]'>example@gmail.com</p>
             </div>
            </div>
            <div className='px-[20px] space-y-[20px] py-[15px] border-b border-gray-200'>
                {
                    profile.map((i,index) => (
                        <div key={index} className='flex text-gray-500 items-center space-x-[10px]'>
                            <span className='text-[18px]'>
                            {
                                i.icon
                            }
                            </span>
                            <h1 className='font-medium text-gray-400 text-[15.5px]'>{i.title}</h1>
                        </div>
                    ))
                }
            </div>
            <div className='px-[20px] pt-[20px]'>
                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" id="default-toggle" className="sr-only peer" onChange={(e) => dispatch(switchMode())}  />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                </label>
            </div>
        </div>

    </div>
  )
}

export default NavRightPart