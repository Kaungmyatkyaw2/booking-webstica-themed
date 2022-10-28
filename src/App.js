import React from 'react'
import Hero from './pages/hero/Hero'
import Navbar from './pages/navbr/Navbar'

const App = () => {
  return (
    <div className='w-full flex flex-col items-center'>

      <Navbar/>
      <Hero/>

    </div>
  )
}

export default App