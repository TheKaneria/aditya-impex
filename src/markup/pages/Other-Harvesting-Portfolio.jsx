import React, { Component } from "react";
// import HarvestPortfolio from '../element/harvestPortfolio';
// import PostHarvestPortfolio from '../pages/post-harvestPortfolio';
import OtherHarvestPortfolio from "../pages/other-harvestPortfolio";

import { OtherharvestingSliderContent } from "../element/SliderContent";
import HarvestingSlider from "../element/harvestingSlider";
import ScrollToTop from "../element/scrollToTop";
import Header from "../layout/header";
import CounterSection from "../element/counterSection";
import Footer from "../layout/footer";

const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class OtherHarvestingPortfolio extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <HarvestingSlider
          data={OtherharvestingSliderContent}
          contentWrapperCls="sliderStyle3"
          hideBtn
        />
        <div class="page-content bg-white">
          <OtherHarvestPortfolio col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
        </div>
        <CounterSection backgroundImage={bg2} />

        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default OtherHarvestingPortfolio;
