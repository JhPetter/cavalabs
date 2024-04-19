import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSections'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  )
}

export default Home
