import React from 'react'
import HeaderThree from '../home-four/Header'
import HomeFiveBanner from './Banner'
import HomeFivePricing from './Pricing'
import HomeFiveHostingFeature from './HostingFeature'
import HomeFiveFlashSale from './FlashSale'
import HomeFiveHostingService from './HostingService'
// import HomeFiveHostingFeatureTwo from './HostingFeatureTwo'
import HomeFiveTestimonials from './Testimonials'
import HomeFiveBrand from './Brand'
import HomeFiveFaq from './Faq'
import HomeFiveBlog from './Blog'
import HomeThreeFooter from '../home-three/Footer'

function HomeFive() {
    return (
        <>
            <HeaderThree />
            <HomeFiveBanner />
            <HomeFivePricing />
            <HomeFiveHostingFeature />
            <HomeFiveFlashSale />
            <HomeFiveHostingService />
            {/* <HomeFiveHostingFeatureTwo /> */}
            <HomeFiveTestimonials />
            <HomeFiveBrand />
            <HomeFiveFaq />
            <HomeFiveBlog />
            <HomeThreeFooter />
        </>
    )
}

export default HomeFive