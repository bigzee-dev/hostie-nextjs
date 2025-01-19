import HeaderOne from "../home-one/Header"
import PartnersBanner from "./PartnersBanner"
import PartnersFeature from "./PartnersFeature"
import HomeFourSupport from "../home-four/Support"
import AffiliateTestimonials from "../affiliate/AffiliateTestimonials"
import HomeEightCta from "../home-eight/Cta"
import HomeThreeFooter from "../home-three/Footer"

function Partner() {
    return (
      <div>
          <HeaderOne />
          <PartnersBanner />
          <PartnersFeature />
          <HomeFourSupport className="black__friday--support" />
          <AffiliateTestimonials />
          <HomeEightCta />
          <HomeThreeFooter />
      </div>
    )
  }
  
  export default Partner