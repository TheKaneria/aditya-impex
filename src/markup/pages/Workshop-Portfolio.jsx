import React, { Component } from "react";
import WorkshPortfolio from "../element/workshPortfolio";
import WorkshopSlider from "../element/workshopSlider";
import { workshopSliderContent } from "../element/SliderContent";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import CounterSection from "../element/counterSection";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class WorkshopPortfolio extends Component {
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
          <WorkshopSlider
            data={workshopSliderContent}
            contentWrapperCls="sliderStyle3"
            hideBtn
          />

          <WorkshPortfolio col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
        </div>
        <CounterSection backgroundImage={bg2} />
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default WorkshopPortfolio;
