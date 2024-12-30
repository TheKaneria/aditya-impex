import React, { Component } from "react";
import Counter from "./counter";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// to="https://www.youtube.com/watch?v=_FRZVScwggM"

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { backgroundImage } = this.props;
    return (
      <div
        className="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head text-white">
                <span
                  onClick={this.openModal}
                  className="popup-youtube video play-btn"
                >
                  <span>
                    <i className="fa fa-play"></i>
                  </span>
                  Play Now
                </span>

                <ModalVideo
                  channel="youtube"
                  allowFullScreen
                  isOpen={this.state.isOpen}
                  videoId="_FRZVScwggM"
                  onClose={this.closeModal}
                />

                <h2 className="title">
                  We're thriving and building better products
                </h2>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row sp20">
                <div
                  className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-bx-wraper center counter-style-5 customClass">
                    <div className="icon-xl m-b20">
                      <span className="icon-cell">
                        <i className="flaticon-factory"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="dlab-separator bg-primary"></div>
                      <Counter count={10000} />
                      <p style={{ marginTop: "10px" }}>
                        Manufacturing Plant Capacity Sq. Meter
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-bx-wraper center counter-style-5 customClass">
                    <div className="icon-xl m-b20">
                      <span className="icon-cell">
                        <i className="flaticon-construction"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="dlab-separator bg-primary"></div>
                      <Counter count={3000} />
                      <p style={{ marginTop: "10px" }}>Build Area Sq. Meter </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-bx-wraper center counter-style-5 customClass">
                    <div className="icon-xl m-b20">
                      <span className="icon-cell">
                        <i className="flaticon-worker"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="dlab-separator bg-primary"></div>
                      <Counter count={12} />
                      <p style={{ marginTop: "10px" }}>Skilled Workers</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-bx-wraper center counter-style-5 customClass">
                    <div className="icon-xl m-b20">
                      <span className="icon-cell">
                        <i className="flaticon-settings"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="dlab-separator bg-primary"></div>
                      <Counter count={6} />
                      <p style={{ marginTop: "10px" }}>
                        Technical Expert Staff
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-bx-wraper center counter-style-5 customClass">
                    <div className="icon-xl m-b20">
                      <span className="icon-cell">
                        <i className="flaticon-conveyor-1"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="dlab-separator bg-primary"></div>
                      <Counter count={4} />
                      <p style={{ marginTop: "10px" }}>Commercial</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-4 m-b30 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-bx-wraper center counter-style-5 customClass">
                    <div className="icon-xl m-b20">
                      <span className="icon-cell">
                        <i className="flaticon-conveyor-1"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <div className="dlab-separator bg-primary"></div>
                      <Counter count={3} />
                      <p style={{ marginTop: "10px" }}>Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterSection;
