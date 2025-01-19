import React from 'react'
import HeaderOne from '../home-one/Header'
import WordPressHostingBanner from './WordPressHostingBanner'
import WordPressHostingFeature from './WordPressHostingFeature'
import HomeFourPricing from '../home-four/Pricing'
import WordPressHostingFeatureTwo from './WordPressHostingFeatureTwo'
import WordPressHostingPlugins from './WordPressHostingPlugins'
import AboutTestimonials from '../about/Testimonial'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function WordPressHosting() {
    return (
        <div className='wordpress-hosting page-template'>
            <HeaderOne />
            <WordPressHostingBanner />
            <WordPressHostingFeature />
            <HomeFourPricing />
            <WordPressHostingFeatureTwo />
            <WordPressHostingPlugins />
            <AboutTestimonials className="bg-white pb--0" />
            <PricingFaq />
            <HomeEightCta />
            <HomeThreeFooter />
        </div>
    )
}

export default WordPressHosting