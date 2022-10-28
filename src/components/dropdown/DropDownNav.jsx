import React from 'react'
import { useDispatch } from 'react-redux'
import { leftAction, rightAction } from '../../store/main/Main'

const DropDownNav = ({icon,title,action}) => {

    const dispatch = useDispatch()

  return (
    <div className='xl:hidden  flex items-center space-x-[10px]' onClick={() => {action ? dispatch(leftAction()) : dispatch(rightAction())}}>
        <div className='text-[20px]'>
            {icon}
        </div>
        <h1 className='sm:block hidden'>{title}</h1>
    </div>
  )
}

export default DropDownNav