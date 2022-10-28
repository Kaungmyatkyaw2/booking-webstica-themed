import {BiDotsHorizontalRounded,BiChevronDown} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import {  useSelector } from 'react-redux'
import DropDownNav from '../../components/dropdown/DropDownNav'

const NavIconPart = () => {

    const item = [
        {
            header : "Listing",
            items : ['Hotel','Flight','Tour','Cab',"Add Listing",'Hero','Booking Confirmed'],
        },
        {
            header: "Pages",
            items:["About","Contact","Contact 2","Authentication","Blog","Helps","F&Qs","Pricing","Error 404","Comming Soon"]
        },
        {
            header: "Accounts",
            items:["User Profile","Agent Dashboard","Master Admin"]
        },
        {
            header:<BiDotsHorizontalRounded/>,
            items:["Support","Documentions","Rtl demo","Buy Booking","Components"]
        }
    ]

    const show = useSelector(state => state.userAction.leftDrop)

  return (

    <div className='flex items-center space-x-[30px]'>
        <div>
            <img src="https://booking.webestica.com/assets/images/logo.svg" className='w-[130px]' alt="" />
        </div>
        <div className='text-black text-[16px] font-[500]'>

           <DropDownNav title='Menu' icon={<AiOutlineMenu/>} action={true} />

           <div className={`w-full bg-white xl:flex ${show ? 'flex' : 'hidden'} xl:items-center xl:space-x-[28px] xl:flex-row flex-col xl:relative absolute top-[80%] left-0 xl:space-y-0 space-y-[20px] xl:py-0 py-[30px] xl:px-0 px-[50px] xl:shadow-none shadow-xl`}>
           {
            item.map((i,index) => (
            <div key={index} className='xl:relative xl:top-auto xl:left-auto top-0 left-0 group xl:mt-0'>
                <h1 className={`cursor-pointer flex items-center ${typeof i.header !== "string" && 'text-[20px]'}`}>
                    {i.header}
                    {typeof i.header == "string" && <BiChevronDown className='text-[22px]'/>}
                </h1>

                <div className='hidden group-hover:block xl:shadow-cus xl:absolute relative top-[100%] left-0 xl:w-[230px] w-full px-[10px] py-[10px] rounded-[8px] text-[16px] space-y-[10px] bg-white xl:border-none border'>
                    {
                        i.items?.map((e,index) => (
                            <h1 key={index} className='text-[16px] text-gray-500 flex items-center justify-between hover:bg-secondary hover:text-primary py-[5px] px-[10px] rounded-[8px]'><span>{e}</span><BiDotsHorizontalRounded className='text-[20px]'/></h1>
                        ))
                    }
                </div>

            </div>
            ))
           } 
           </div>
           
        </div>
    </div>

    )
}

export default NavIconPart