import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SolarSystem extends Component {
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
                <h1 class="text-white">Solar System Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Non Renewable Energy</li>
                    <li>Solar System Details</li>
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
                      Solar System Details:
                    </h2>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Solar Panel 330W / 24V Poly
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <ul className="mx-3">
                      <li>Poly crystalline Cells type Panel</li>
                      <li>Capacity - 330 W, 24V</li>
                      <li>
                        Voltage: Voltage at Max Power (Vmax) - 38.03V, Open
                        Circuit Voltage (Voc) - 45.53V
                      </li>
                      <li>
                        Current: Current at Max Power (imax) - 8.68A, Short
                        Circuit Current (isc) - 9.22A
                      </li>
                      <li>25 years performance warranty.</li>
                      <li>Compliance to IEC standards.</li>
                      <li>Best in Class conversion efficiency.</li>
                      <li>
                        Anti-reflective coating and back surface (BSF) for more
                        light absorption
                      </li>
                      <li>
                        Advanced EVA (ethyl vinyl acetate) encapsulation to give
                        better protection to modules.
                      </li>
                      <li>
                        High strength light-weight aluminum frame design for
                        high torsion resistance against winds and snow loads.
                      </li>
                      <li>
                        PID resistance Technology (Potential-Induced
                        Degradation) for safety against substantial power loss
                        due to stray currents triggered by certain climate
                        conditions.
                      </li>
                      <li>
                        Excellent Low light performance in low visibility in
                        clouds, evening, and morning.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 400, width: 400 }}
                            src={require("../../images/Renewable/solarpanel copy.jpg")}
                          />
                        </div>
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
export default SolarSystem;
