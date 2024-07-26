import './home-main.css';
import Nav from "./Home/nav";
import HeroText from "./Home/hero-text";
import HeroVid from './Home/hero-video';
import SvgFlex from './Home/svg-flex';
import UiUsage from './Home/ui-usage';
import NavBlack from './Home/nav-2';
import Footer from './Home/footer'
import ScrollCarousel from './scroll-slider';
import Tools from './Home/tools'
import Test from './Home/test';
import Document from './Home/document';
import Share from './Home/share';
import Automate from './Home/automate';
import AutomateSlider from './Home/automate-slider';
import Review from './Home/review';
import Developer from './Home/developer'
// import Community from './Home/community'
function HomeMain() {
  return (
    <div className="home-main">
      <div class="home-texture" id='demo'>
        <Nav />
        <HeroText />
        <HeroVid />
        <SvgFlex />
      </div>
      <NavBlack />
      <UiUsage />
     <div class="slider">
     <ScrollCarousel />
     </div>
      <div class="border-1">
        <Tools />
      </div>
      <div class="border-1">
        <Test />
      </div>
      <div class="border-1">
        <Document />
      </div>
      <div class="border-1 share-hidden">
        <Share />
      </div>
      <Automate/>
      <AutomateSlider/>
      <div class="border-1">
        <Review />
      </div>
      <Developer />
      <Community/>
      <Footer />
    </div>
  );
}
export default HomeMain;