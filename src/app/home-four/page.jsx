import React from 'react'
import HeaderThree from './Header'
import HomeFourBanner from './Banner'
import HomeFourDomainChecker from './DomainChecker'
import HomeFourHostingFeatures from './HostingFeature'
import HomeFourPricing from './Pricing'
import HomeFourService from './Service'
import HomeFourSupport from './Support'
import HomeFourBlog from './Blog'
import HomeFourNewsletter from './Newsletter'
import HomeFourFooter from './Footer'

function HomeFour() {
    return (
        <>
            <HeaderThree />
            <HomeFourBanner />
            <HomeFourDomainChecker />
            <HomeFourHostingFeatures />
            <HomeFourPricing />
            <HomeFourService />
            <HomeFourSupport />
            <HomeFourBlog />
            <HomeFourNewsletter />
            <HomeFourFooter />
        </>
    )
}

export default HomeFour