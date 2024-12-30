import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../css/slider-animations.css";
import "../../css/homeslider.css";

class WorkshopSlider extends Component {
  render() {
    const sliderContent = this.props.data;
    const { btnText, hideBtn, show2Btn, btn2Text, contentWrapperCls } =
      this.props;
    const contentCls = contentWrapperCls || "";
    const btnCls = this.props.btnCls || "";

    return (
      <>
        <Slider className="slider-wrapper home-slider2">
          {sliderContent.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className={`inner ${contentCls}`}>
                {item.title && <h1>{item.title}</h1>}
                {item.description && <p>{item.description}</p>}

                {hideBtn ? (
                  ""
                ) : show2Btn ? (
                  <>
                    <button className={btnCls}>{btnText}</button>
                    <button className={btnCls}>{btn2Text}</button>
                  </>
                ) : (
                  <button className={btnCls}>{btnText}</button>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default WorkshopSlider;
