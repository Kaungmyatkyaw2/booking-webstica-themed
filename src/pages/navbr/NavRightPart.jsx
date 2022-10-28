import {FaHotel,FaPlane,FaGlobeAmericas,FaCarAlt} from 'react-icons/fa'
import {BiBell} from 'react-icons/bi'
import avatar from './../../assets/nav-avatar.jpg'
import {TbGridDots} from 'react-icons/tb'
import { useSelector } from 'react-redux'
import DropDownNav from '../../components/dropdown/DropDownNav'

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

    const show = useSelector(state => state.userAction.rightDrop)


  return (
    <div className='flex items-center xl:space-x-0 space-x-[15px]'>

        <div className={`w-full bg-white !scale-1 xl:flex ${show ? 'flex' :'hidden'} xl:flex-row flex-col xl:px-0 px-[20px] space-x-[8px] xl:relative absolute top-[100%] left-0 xl:space-y-0 space-y-[20px] xl:shadow-none shadow-xl`}>
            {
                items.map((i,index) => (
                   <a href="#" key={index} className={`${i.title === "Hotel" ? 'bg-secondary text-primary' : ''} flex items-center justify-center font-[500] space-x-[8px] px-[12px] py-[8px] rounded-[7px] text-[16px]`}>
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
            <img className='profile-img' src={avatar} alt=""/>
        </div>

    </div>
  )
}

export default NavRightPart