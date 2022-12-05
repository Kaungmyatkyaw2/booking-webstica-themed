import React, { useEffect } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './mains/Home'
import About from './mains/About'
import Footer from './pages/Home/footer/Footer'
import { useSelector } from 'react-redux'
import Flight from './mains/Flight'
import FlightFirstFormOne from './pages/flight/FlightFirstFormOne'
import FlightFirstFormTwo from './pages/flight/FlightFirstFormTwo'
import Tour from './mains/Tour'


const App = () => {

  useEffect(() => {
    Aos.init({duration:800})
  },[])



  const dark = useSelector(state => state.userAction.darkMode)

  console.log(dark)


  return (
    <div className={`w-full flex flex-col items-center ${dark && 'dark' }`}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/`about' element={<About/>} />
          <Route path='/flight' element={<Flight/>}>
           <Route index element={<FlightFirstFormOne/>} />
           <Route path='two' element={<FlightFirstFormTwo/>} />
          </Route>
          <Route path='/tour' element={<Tour/>} />
        </Routes>
      </BrowserRouter>

      <button data-aos='fade-up' className='bg-primary sm:p-[20px] p-[10px] rounded-[5px] fixed bottom-[30px] right-[20px] text-[16px] text-white font-bold z-[999]'><BsArrowUp/></button>



    </div>
  )
}

export default App