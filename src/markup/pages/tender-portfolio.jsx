import React, { Component } from "react";
import TenderDivPortfolio from "../element/tenderDivPortfolio";
import TenderSlider from "../element/tenderSlider";
import { tenderSliderContent } from "../element/SliderContent";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import CounterSection from "../element/counterSection";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class TenderPortfolio extends Component {
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
          <TenderSlider
            data={tenderSliderContent}
            contentWrapperCls="sliderStyle3"
            hideBtn
          />
          <TenderDivPortfolio col="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center" />
          {/* <AdityaCounterSection backgroundImage={bg2}/> */}
        </div>
        <CounterSection backgroundImage={bg2} />
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default TenderPortfolio;
