import React, { useEffect } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './mains/Home'
import About from './mains/About'


const App = () => {

  useEffect(() => {
    Aos.init({duration:800})
  },[])




  return (
    <div className='w-full flex flex-col items-center'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>

      <button data-aos='fade-up' className='bg-primary sm:p-[20px] p-[10px] rounded-[5px] fixed bottom-[30px] right-[20px] text-[16px] text-white font-bold z-[999]'><BsArrowUp/></button>



    </div>
  )
}

export default App