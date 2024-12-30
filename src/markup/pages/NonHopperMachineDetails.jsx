import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class NonHopperMachine extends Component {
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
          <div
            class="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry">
                <h1 class="text-white">Non Hopper Concrete Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Non Hopper Concrete Machine Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2">
                  <div class="col-lg-6 m-b30">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Non Hopper Concrete Machine Details:
                    </h2>

                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <p>
                      The Non Hopper Concrete Mixer offered by us is exemplary
                      for its fine quality, and classic engineering. Our highly
                      skilled professionals work hard to process the Non Hopper
                      Concrete Mixer using advanced technology. While we are one
                      of the well-established manufacturers, exporters, and
                      suppliers of Non Hopper Concrete Mixer, we accept bulk
                      orders, too, and ensure speedy delivery of the product.
                      The unique selling point of Non Hopper Concrete Mixer is
                      that it is easy to operate, and delivers maximum output.
                      We are located in Gujarat, India.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row d-flex justify-content-center justify-content-lg-start">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 400, width: 400 }}
                        src={require("../../images/Construction/NON HOPPER CONCRETE MACHINE.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default NonHopperMachine;
