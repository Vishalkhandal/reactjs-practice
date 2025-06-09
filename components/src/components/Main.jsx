import React from 'react'
import AboutCatering from './about-section/AboutCatering'
import MenuSection from './menu-section/MenuSection'
import ContactSection from './contact-section/ContactSection'

function Main() {
  return (
    <div>
        {/* <h1>Main Section</h1> */}
        <AboutCatering />
        <MenuSection />
        <ContactSection />  
    </div>
  )
}

export default Main