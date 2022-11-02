import { BiChevronDown, BiDotsHorizontalRounded } from "react-icons/bi"
import { NavLink } from "react-router-dom"

const DropDownItem = ({item,check}) => {
  return (

    
        item.map((i,index) => (
        <div key={index} className='xl:relative xl:top-auto xl:left-auto top-0 left-0 group xl:mt-0'>
            <h1 className={`cursor-pointer flex items-center ${typeof i.header !== "string" && 'text-[20px]'}`}>
                {i.header}
                {(typeof i.header == "string" && i?.items?.length != 0 ) && <BiChevronDown className='text-[22px]'/>}
            </h1>

            {
                i?.items?.length != 0 && 
                <div className={`xl:scale-y-0 xl:opacity-0 xl:group-hover:opacity-100 xl:group-hover:scale-y-[1] xl:block hidden group-hover:block duration-300 delay-100 origin-top xl:shadow-cus xl:absolute relative top-[100%] left-0 ${i.more?.length === 0 ? 'xl:w-[150px]' : 'xl:w-[230px]'} w-full px-[10px] py-[10px] rounded-[8px] text-[16px] space-y-[10px] bg-white xl:border-none border z-[999]`} style={{transitionProperty:'opacity'}}>
                {
                    i.items?.map((e,index) => (
                        <NavLink to={e.toLowerCase()} key={index} className='text-[16px] text-gray-500 flex items-center justify-between hover:bg-secondary hover:text-primary py-[5px] px-[10px] rounded-[8px]'><span>{e}</span>{i.more.includes(index) ? <BiDotsHorizontalRounded className='text-[20px]'/> : null}</NavLink>
                    ))
                }
            </div>

            }
        </div>
        ))
       

  )
}

export default DropDownItem