import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Header from "../layout/header";
import Footer from "../layout/footer";
const bg = require("../../images/banner/bnr4.jpg");

class TurbinWaterPumpsDetails extends Component {
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
                <h1 class="text-white">Turbine Pumps Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Turbine Pumps Details</li>
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
                      Turbine Pumps Information
                    </h2>
                    <p>
                      While we are appreciated in the industry for offering
                      cost-effective Vertical Water Turbine Pumps, we are
                      counted amongst the major manufacturer, exporter and
                      supplier of pumps, and we only offer reliable products.
                      While our range of Vertical Water Turbine Pump promises
                      low maintenance cost, high performance, and optimum
                      functionality, we package the pumps using premium
                      packaging materials and ensure safe delivery. We also
                      accept bulk orders by the clients. We are based in
                      Gujarat, India.
                    </p>
                    <ul className="mx-3">
                      <li>
                        Typical Applications available - Semi-crossed, flat belt
                        driven Pump- by mens of a slow speed vertical Diesel
                        engine.
                      </li>
                      <li>
                        V-belt driven Pump - powered by an electric motorlBoth
                        motor and pump are mounted on a fabricated steel base.
                        Pump fitted with right angle gear drive - powered by a
                        multi-cylinder medium speed Diesel engine.
                      </li>
                      <li>
                        Alternatively it could be driven by an electric motor. A
                        further semi-crossed, flat belt driven Pump operating on
                        an open well-driven by a slow speed horizontal Diesel
                        engine. (A semicrossed V-belt could replace the flat
                        belt).
                      </li>
                      <li>
                        We are manufacturing 3" / 3.5" / 4.5" Vertical Turbine
                        Pumps.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <br />
                    <br />
                    <br />
                    <div class="row">
                      <div class="col-lg-12 m-b30">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Agriportfolio/turbine-pipe.jpg")}
                        />
                      </div>
                      <div class="col-lg-12 m-b30">
                        {/* <img alt="" src={require("../../images/portfolio/HAND DEEPWELL SPARE PARTS.jpg")}/> */}
                      </div>
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
export default TurbinWaterPumpsDetails;
