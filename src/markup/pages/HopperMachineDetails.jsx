import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class HopperMachine extends Component {
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
                <h1 class="text-white">Hopper Concrete Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Hopper Concrete Machine Details</li>
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
                      Hopper Concrete Machine Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <p>
                      As our name tops the list of the most notable
                      manufacturers, suppliers, and exporters of Hopper Concrete
                      Mixer from Gujarat, India, our manufacturing unit, and
                      proficient team of labors prudently manufactures the
                      Hopper Concrete Mixer using advanced technology. There is
                      exceptionally high demand in the market for the Hopper
                      Concrete Mixer as it is of the highest quality and
                      promises hassle-free performance. The Hopper Concrete
                      Mixer can be purchased at cost-effective prices, and it
                      ensures longer shelf life.
                    </p>
                  </div>

                  <div class="col-lg-6">
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Construction/HOPPER CONCRETE MIXER MACHINE.jpg")}
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
export default HopperMachine;
