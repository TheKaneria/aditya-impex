import React, { Component } from "react";
import ComponentDevPortfolio from "../element/componentdevPortfolio";
import ComponentSlider from "../element/componentSlider";
import { componentSliderContent } from "../element/SliderContent";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import CounterSection from "../element/counterSection";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class ComponentPortfolio extends Component {
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
          <ComponentSlider
            data={componentSliderContent}
            contentWrapperCls="sliderStyle3"
            hideBtn
          />

          <ComponentDevPortfolio col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
        </div>
        <CounterSection backgroundImage={bg2} />
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default ComponentPortfolio;
