import React from 'react'
import HeaderOne from '../home-one/Header'
import PricingBanner from '../pricing/Banner'
import HomeFourPricing from '../home-four/Pricing'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function PricingComparision() {
    return (
        <div className='page-template template-pricing'>
            <HeaderOne />
            <PricingBanner />
            <HomeFourPricing />
            <PricingFaq />
            <HomeEightCta />
            <HomeThreeFooter />
        </div>
    )
}

export default PricingComparision