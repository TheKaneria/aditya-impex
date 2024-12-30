import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SolarPump extends Component {
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
                <h1 class="text-white">Solar Pump Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Non Renewable Energy</li>
                    <li>Solar Pump Details</li>
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
                      Solar Pump Details:
                    </h2>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: "300px", width: "300px" }}
                        className="single_prod_img"
                        src={require("../../images/Renewable/SOLAR PUMP  NEW.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        // className="single_prod_img"
                        src={require("../../images/Renewable/solar.png")}
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="nana-font">APPLICATION AREA: </h3>
                    <p>
                      This project products are mainly used by dry region for
                      irrigation of agriculture. It can be used by human for
                      drinking water and living water use. The living condition
                      had been much improved. It also can be used for fountain.
                    </p>
                    <br />
                    <h3 className="nana-font">ACCESSORIES:</h3>
                    <p>
                      Pump Control, Screw, Cable connector, Water level sensor,
                      Cable for solar panel, Solar flashlight.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div>
                        <br />
                        <h3 className="nana-font">ADVANCED TECHNOLOGY</h3>
                        <br />
                        <h3 className="nana-font">1. Application innovation</h3>
                        <br />
                        <p>
                          Compared with the traditional alternating current
                          machine, the efficiency is improved 25% by the
                          permanent magnetism, direct current, brushless,
                          nonsensor motor
                        </p>
                        <br />
                        <h3 className="nana-font">2. Technique innovation</h3>
                        <br />
                        <p>
                          Compared with CVT technique, adopting MPPT technique,
                          using automatic follow max power point, the motor
                          efficiency can be improved 15%. Drive part adopts DSP
                          chip for main control technique, which achieved TMPPT
                          control and makes the system with high efficiency,
                          credibility and good price performance ratio.
                        </p>
                        <br />
                        <h3 className="nana-font">3. Technics innovation</h3>
                        <br />
                        <p>
                          Adopt double plastic package for Rotor and Stator,
                          Motor insulation 300 M W, the motor security was much
                          improved.
                        </p>
                        <br />
                        <h3 className="nana-font">4. Structure innovation</h3>
                        <p>
                          Water filling or oil filling, convent installation and
                          environmental protection 5. The materials of whole
                          body are made of stainless steel and bronze.
                        </p>
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
export default SolarPump;
