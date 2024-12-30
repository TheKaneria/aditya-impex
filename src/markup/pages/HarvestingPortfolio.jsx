import React, { Component } from "react";
import { harvestingSliderContent } from "../element/SliderContent";
import HarvestingSlider from "../element/harvestingSlider";

import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
import CounterSection from "../element/counterSection";
import HarvestPortfolio from "../element/HarvestPortfolio";
const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class HarvestingPortfolio extends Component {
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
          data={harvestingSliderContent}
          contentWrapperCls="sliderStyle3"
          hideBtn
        />
        <div class="page-content bg-white">
          <HarvestPortfolio col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
        </div>
        <CounterSection backgroundImage={bg2} />

        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default HarvestingPortfolio;
