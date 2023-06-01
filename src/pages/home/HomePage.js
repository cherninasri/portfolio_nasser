import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Banner from '../../components/banner/Banner'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'
import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
   
    <div className="max-w-screen-xl mx-auto">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer/>
    

    </div>
    </div>

  )
}

export default HomePage
