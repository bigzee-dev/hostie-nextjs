import React from 'react'
import HeaderOne from '../home-one/Header'
import KnowledgebaseBanner from './KnowledgebaseBanner'
import KnowledgebaseTab from './KnowledgebaseTab'
import HomeFourSupport from '../home-four/Support'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function Knowledgebase() {
  return (
    <>
        <HeaderOne />
        <KnowledgebaseBanner />
        <KnowledgebaseTab />
        <HomeFourSupport className="pb--60" children="bg-white" />
        <HomeEightCta />
        <HomeThreeFooter />
    </>
  )
}

export default Knowledgebase