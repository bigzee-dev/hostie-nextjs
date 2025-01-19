import React from 'react'
import HeaderOne from '../home-one/Header'
import SharedHostingBanner from './SharedHostingBanner'
import HomeFourPricing from '../home-four/Pricing'
import HomeElevenWhyChoose from '../home-eleven/WhyChooseUs'
import SharedHostingAdvanceFeature from './SharedHostingAdvanceFeature'
import AboutTestimonials from '../about/Testimonial'
import PricingFaq from '../support/Faq'
import HomeBrand from '../home-one/Brand'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function SharedHosting() {
    return (
        <div className='shared-page page-template'>
            <HeaderOne />
            <SharedHostingBanner />
            <HomeFourPricing />
            <HomeElevenWhyChoose className="bg-white" />
            <SharedHostingAdvanceFeature />
            <AboutTestimonials className="bg-white" />
            <PricingFaq />
            <HomeBrand className="shared-page-bg pb-120" />
            <HomeEightCta />
            <HomeThreeFooter />
        </div>
    )
}

export default SharedHosting