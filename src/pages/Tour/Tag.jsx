import { useState } from 'react'
import { BsX } from 'react-icons/bs'

const Tag = ({title}) => {

    const [show,setShow] = useState(false)

  return (
    <div className={`ounded-[5px] bg-gray-200 bg-opacity-[0.5] px-[20px] py-[7px] h-fit text-gray-500 mt-[15px] first-of-type:ml-[15px] ${show ? 'hidden' :'block'}`}>
    <p className='flex items-center text-[13px] space-x-[10px]'><span>{title}</span><span onClick={() => setShow(true)}><BsX className='text-[28px] text-gray-400 cursor-pointer'/></span></p>
</div>  )
}

export default Tag