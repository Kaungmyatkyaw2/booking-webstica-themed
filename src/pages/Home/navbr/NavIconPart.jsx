import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsLifePreserver,BsCardText,BsToggleOff,BsCloudDownload,BsFillPuzzleFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {  useSelector } from 'react-redux'
import DropDownNav from '../../../components/dropdown/DropDownNav'
import DropDownItem from '../../../components/DropDownItem'
import IconDrop from '../../../components/IconDrop'

const NavIconPart = () => {

    const item = [
        {
            header : "Listing",
            items : ['Hotel','Flight','Tour','Cab',"Add Listing",'Hero','Booking Confirmed'],
            more : [0,1,2,3,4]
        },
        {
            header: "Pages",
            items:["About","Contact","Contact 2","Authentication","Blog","Helps","F&Qs","Pricing","Error 404","Comming Soon"],
            more : [5,6,2,4,7]
        },
        {
            header: "Accounts",
            items:["User Profile","Agent Dashboard","Master Admin"],
            more : [0,1]
        }
    ]

    const icon = [
        {title : "Support",icon : <BsLifePreserver/>,class:'text-yellow-400'},
        {title:"Documentions",icon : <BsCardText/>,class:'text-red-400'},
        {title:"Rtl demo",icon : <BsToggleOff/>,class:'text-blue-400'},
        {title:"Buy Booking",icon:<BsCloudDownload/>,class:'text-green-400'},
        {title:"Components",icon:<BsFillPuzzleFill/>,class:'text-orange-400'},
    ]

    const show = useSelector(state => state.userAction.leftDrop)
    const dark = useSelector(state => state.userAction.darkMode)

  return (

    <div className='flex items-center space-x-[30px]'>
        <div>
          <img src={`${dark ? 'https://booking.webestica.com/assets/images/logo-light.svg' : 'https://booking.webestica.com/assets/images/logo.svg'}`} className='w-[130px]' alt="" />
        </div>
        <div className='text-black text-[16px] font-[500]'>

           <DropDownNav title='Menu' icon={<AiOutlineMenu/>} action={true} />

           <div className={`w-full bg-white dark:bg-dark dark:text-white xl:flex ${show ? 'flex' : 'hidden'} xl:items-center xl:space-x-[28px] xl:flex-row flex-col xl:relative absolute top-[84%] left-0 xl:space-y-0 space-y-[20px] xl:py-0 py-[30px] xl:px-0 px-[50px] xl:shadow-none shadow-xl`}>
            <DropDownItem item={item}/>
             <div className='xl:relative xl:top-auto xl:left-auto top-0 left-0 group xl:mt-0'>
                <h1 className='cursor-pointer flex items-center text-[20px]'>
                    <BiDotsHorizontalRounded/>
                </h1>

                <IconDrop/>

            </div>
           </div>
           
        </div>
    </div>

    )
}

export default NavIconPart