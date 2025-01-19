import React from 'react'
import HeaderOne from '../home-one/Header'
import DomainCheckerBanner from './Banner'
import HomeElevenDomainPricing from '../home-eleven/DomainPricing'
import DomainCheckerPricing from './Pricing'
import HomeElevenWhyChoose from '../home-eleven/WhyChooseUs'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function DomainChecker() {
  return (
    <div className='page-template template-resell'>
        <HeaderOne />
        <DomainCheckerBanner />
        <HomeElevenDomainPricing />
        <DomainCheckerPricing />
        <HomeElevenWhyChoose />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DomainChecker