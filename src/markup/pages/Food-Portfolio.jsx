import React, { Component } from "react";
import FoodProPortfolio from "../element/FoodProPortfolio";
import FoodSlider from "../element/FoodSlider";
import { foodSliderContent } from "../element/SliderContent";
import ScrollToTop from "../element/scrollToTop";
import CounterSection from "../element/counterSection";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");
const bg2 = require("../../images/background/bg4.jpg");

class FoodPortfolio extends Component {
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
        <FoodSlider
          data={foodSliderContent}
          contentWrapperCls="sliderStyle3"
          hideBtn
        />

        <div class="page-content bg-white">
          <FoodProPortfolio col="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" />
        </div>
        <CounterSection backgroundImage={bg2} />
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default FoodPortfolio;
