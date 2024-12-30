import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class Generator extends Component {
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
                <h1 class="text-white">Generator Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Generator Details</li>
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
                      Generator:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Diesel Generator:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 450, width: 450 }}
                        src={require("../../images/Tender/DIESEL GENERATOR copy.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Details:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Minimum Order Quantity
                          </td>
                          <td style={{ border: "1px black solid" }}>1 Set</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Cooling System
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Air Cooling,Water Cooling
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Noise Level
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Silent or Soundproof
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Genset Rating KVA
                          </td>
                          <td style={{ border: "1px black solid" }}>2.2 kva</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Power</td>
                          <td style={{ border: "1px black solid" }}>Vspower</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Brand</td>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Engine Power
                          </td>
                          <td style={{ border: "1px black solid" }}>5 hp</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Fuel Type
                          </td>
                          <td style={{ border: "1px black solid" }}>Diesel</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Number of Cylinder
                          </td>
                          <td style={{ border: "1px black solid" }}>1</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Output Type
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            AC Single Phase
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Rated Speed
                          </td>
                          <td style={{ border: "1px black solid" }}>1500</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Engine Model{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            vspower 006
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Fuel Tank Capacity
                          </td>
                          <td style={{ border: "1px black solid" }}>4 liter</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            No. of Phase
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            1 single
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Phase</td>
                          <td style={{ border: "1px black solid" }}>1</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Output Voltage{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>240</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Bore & Stroke Size
                          </td>
                          <td style={{ border: "1px black solid" }}>85 mm</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Alternator
                          </td>
                          <td style={{ border: "1px black solid" }}>vspower</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Warranty
                          </td>
                          <td style={{ border: "1px black solid" }}>1 year</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Amps</td>
                          <td style={{ border: "1px black solid" }}>12</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Condition
                          </td>
                          <td style={{ border: "1px black solid" }}>New</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <ul className="mx-3">
                      <li>2.2 kva singal air cool gen set</li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      <div>
                        <h2 class="text-black font-weight-600 m-b15 nana-font">
                          Silent Generator:
                        </h2>
                      </div>

                      <br />

                      <div className="d-flex justify-content-center justify-content-lg-start">
                        <img
                          alt=""
                          style={{ height: 450, width: 450 }}
                          className="single_prod_img"
                          src={require("../../images/Tender/GNERATOR SET SILENT copy.jpg")}
                        />
                      </div>
                      <div>
                        <br />
                        <br />
                        <br />
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Product Details:
                        </h3>
                      </div>
                      <br />
                      <div>
                        <div className="d-none d-lg-block">
                          <br />
                        </div>
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Minimum Order Quantity
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                1 Unit
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Power
                              </td>
                              <td style={{ border: "1px black solid" }}>10</td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Voltage
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                415 V
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Phase
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Three
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Usage/Application
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Construction
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Brand
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Aditya
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Fuel type
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Diesel
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Type
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Automatic, Semi-automatic, Manual
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Frequency
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                50 Hz
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Rated Power
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                24kW / 30kva
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Speed
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                1500 r/min
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <br />
                      <p>We are offering a wide range of Silent Generator.</p>
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
export default Generator;
