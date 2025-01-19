import React from 'react'

import HeaderOne from '../home-one/Header'
import DomainTransferBanner from './DomainTransferBanner'
import DomainTransferService from './DomainTransferService'
import DomainTransferList from './DomainTransferList'
import DomainTransferWhy from './DomainTransferWhy'
import HomeFourSupport from '../home-four/Support'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function DomainTransfer() {
    return (
      <div className='page-template template-resell'>
          <HeaderOne />
          <DomainTransferBanner />
          <DomainTransferService />
          <DomainTransferList />
          <DomainTransferWhy />
          <HomeFourSupport className="black__friday--support"  />
          <PricingFaq />
          <HomeEightCta />
          <HomeThreeFooter />
      </div>
    )
  }

export default DomainTransfer