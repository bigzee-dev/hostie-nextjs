import React from 'react'
import HeaderOne from '../home-one/Header'
import FaqBanner from './FaqBanner'
import PricingFaq from '../support/Faq'
import FaqContact from './FaqContact'
import HomeThreeFooter from '../home-three/Footer'

function Faq() {
    return (
        <>
            <HeaderOne />
            <FaqBanner />
            <PricingFaq />
            <FaqContact />
            <HomeThreeFooter />
        </>
    )
}

export default Faq