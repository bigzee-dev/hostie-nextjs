import React from 'react'
import HeaderOne from '../home-one/Header'
import TechnologyBanner from './TechnologyBanner'
import TechnologyFeature from './TechnologyFeature'
import TechnologyPerfomance from './TechnologyPerfomance'
import TechnologyAboutSeller from './TechnologyAboutSeller'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function Technology() {
  return (
    <div>
        <HeaderOne />
        <TechnologyBanner />
        <TechnologyFeature />
        <TechnologyPerfomance />
        <TechnologyAboutSeller />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Technology