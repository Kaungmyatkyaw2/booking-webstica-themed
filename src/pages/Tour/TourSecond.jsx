import React from 'react'
import Tag from './Tag'

const TourSecond = () => {
  const data = ['Taman Sari','The Grand Place','Glacier National Park','Machu Picchu','Parabanam Temple','Batu Gong','Barobadur Temple','Great Barrier Reef',"Argentine Patagonia"]
  return (
    <div className='container-cus pt-[20px] py-[100px]'>
    <div className='w-full flex lg:flex-row flex-col'>
        <h1 className='text-[30px] font-bold space-y-[-10px] mt-[15px] lg:ml-0 ml-[15px]'><span>Recent</span> <span className='lg:block'>Searches</span></h1>
        <div className='flex flex-wrap w-full items-center lg:pl-[50px] space-x-[15px]'>
           {
            data.map((i,index) => (
               <Tag title={i} />
            ))
           }
           <button className='px-[20px] py-[7px] text-primary bg-primary bg-opacity-[0.2] text-[13px] h-fit mt-[15px] ml-[15px] rounded-[5px]'>Clear all</button>
        </div>
    </div>
</div>  )
}

export default TourSecond