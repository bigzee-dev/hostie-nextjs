import React from 'react'
import HeaderOne from '../home-one/Header'
import PaymentMethodBanner from './PaymentMethodBanner'
import PaymentMethodOption from './PaymentMethodOption'
import HomeFourSupport from '../home-four/Support'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function PaymentMethod() {
    return (
        <div className='page-template template-pricing'>
            <HeaderOne />
            <PaymentMethodBanner />
            <PaymentMethodOption />
            <HomeFourSupport className="black__friday--support" />
            <PricingFaq />
            <HomeEightCta />
            <HomeThreeFooter />
        </div>
    )
}

export default PaymentMethod