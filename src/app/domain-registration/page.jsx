import React from 'react'
import HeaderOne from '../home-one/Header'
import DomainRegistrationBanner from './DomainRegistrationBanner'
import HomeTwoHostingFeature from '../home-two/Feature'
import HomeFourSupport from '../home-four/Support'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function DomainRegistration() {
  return (
    <div className='page-template template-resell'>
        <HeaderOne />
        <DomainRegistrationBanner />
        <HomeTwoHostingFeature />
        <HomeFourSupport className="black__friday--support"  />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DomainRegistration