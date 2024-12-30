import React, { Component } from "react";
import TenderDivPortfolio2 from "../element/tenderDivPortfolio2";
import TenderSlider from "../element/tenderSlider";
import { tenderSliderContent } from "../element/SliderContent";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import CounterSection from "../element/counterSection";
import Header from "../layout/header";

const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class TenderPortfolio2 extends Component {
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
          <TenderDivPortfolio2 col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
          <CounterSection backgroundImage={bg2} />
        </div>
        <CounterSection backgroundImage={bg2} />
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default TenderPortfolio2;
