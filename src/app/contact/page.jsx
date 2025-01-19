import React from 'react'
import HeaderOne from '../home-one/Header'
import ContactBanner from './Banner'
import ContactInner from './Inner'
import HomeThreeFooter from '../home-three/Footer'

function Contact() {
  return (
    <div>
        <HeaderOne />
        <ContactBanner />
        <ContactInner />
        <HomeThreeFooter />
    </div>
  )
}

export default Contact