import React from 'react'
import HeaderOne from '../home-one/Header'
import DataCenterBanner from './DataCenterBanner'
import DataCenterFeature from './DataCenterFeature'
import DataCenterCdnFeature from './DataCenterCdnFeature'
import HomeFourSupport from '../home-four/Support'
import HomeData from '../home-one/Data'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function DataCenter() {
  return (
    <div>
        <HeaderOne />
        <DataCenterBanner />
        <DataCenterFeature />
        <DataCenterCdnFeature />
        <HomeFourSupport className="black__friday--support"  />
        <HomeData className="no-bg" />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DataCenter