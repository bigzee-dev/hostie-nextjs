import HeaderOne from "./home-one/Header";
import HomeBanner from "./home-one/Banner";
import HomeBrand from "./home-one/Brand";
import HomeHosting from "./home-one/Hosting";
import HomeAbout from "./home-one/About";
import HomeDomain from "./home-one/Domain";
import HomeService from "./home-one/Service";
import HomeData from "./home-one/Data";
import HomeFlashSale from "./home-one/FlashSale";
import HomeWhyChoose from "./home-one/WhyChoose";
import HomePlan from "./home-one/Plan";
import HomeTestimonials from "./home-one/Testimonials";
import HomeFaq from "./home-one/Faq";
import HomeCta from "./home-one/Cta";
import HomeFooter from "./home-one/Footer";

export default function Home() {
  return (
    <>
    <HeaderOne />
      <HomeBanner />
      <HomeBrand />
      <HomeHosting />
      <HomeAbout />
      <HomeDomain />
      <HomeService />
      <HomeData />
      <HomeFlashSale />
      <HomeWhyChoose />
      <HomePlan />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCta />
      <HomeFooter />
    </>
  );
}
