import React, { Component } from "react";
import RenewableenergyPortfolio from "../element/renewableenergyPortfolio";
import RenewableSlider from "../element/renewableSlider";
import { renewableSliderContent } from "../element/SliderContent";
import ScrollToTop from "../element/scrollToTop";
import CounterSection from "../element/counterSection";
import Footer from "../layout/footer";
import Header from "../layout/header";

const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class RenewablePortfolio extends Component {
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

        <div class="page-content bg-white">
          <RenewableSlider
            data={renewableSliderContent}
            contentWrapperCls="sliderStyle3"
            hideBtn
          />
          <RenewableenergyPortfolio col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
          {/* <AdityaCounterSection backgroundImage={bg2}/> */}
        </div>
        <CounterSection backgroundImage={bg2} />
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default RenewablePortfolio;
