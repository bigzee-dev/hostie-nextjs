import React from 'react'
import HeaderTen from './Header'
import HomeTenBanner from './Banner'
import HomeTenWhyChoose from './WhyChooseUs'
import HomeTenPricing from './Pricing'
import HomeTenHostingFeature from './HostingFeature'
import HomeTestimonials from '../home-one/Testimonials'
import HomeTenSupport from './Support'
import HomeTenFaq from './Faq'
import HomeTenBrand from './Brand'
import HomeTenFooter from './Footer'

function HomeTen() {
    return (
        <>
            <HeaderTen />
            <HomeTenBanner />
            <HomeTenWhyChoose />
            <HomeTenPricing />
            <HomeTenHostingFeature />
            <HomeTestimonials />
            <HomeTenSupport />
            <HomeTenFaq />
            <HomeTenBrand />
            <HomeTenFooter />
        </>
    )
}

export default HomeTen