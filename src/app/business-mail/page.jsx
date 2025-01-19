import React from 'react'
import HeaderOne from '../home-one/Header'
import BusinessMailBanner from './BusinessMailBanner'
import BusinessMailFeature from './BusinessMailFeature'
import HomeFourPricing from '../home-four/Pricing'
import PricingFaq from '../support/Faq'
import HomeFourSupport from '../home-four/Support'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function BusinessMail() {
    return (
        <div className='page-template'>
            <HeaderOne />
            <BusinessMailBanner />
            <BusinessMailFeature />
            <HomeFourPricing />
            <PricingFaq />
            <HomeFourSupport className="black__friday--support" />
            <HomeEightCta className="pt--120" />
            <HomeThreeFooter />
        </div>
    )
}

export default BusinessMail