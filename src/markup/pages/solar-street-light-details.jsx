import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SolarStreetLight extends Component {
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
                <h1 class="text-white">Solar Street Light Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Non Renewable Energy</li>
                    <li>Solar Street Light Details</li>
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
                      Solar Street Light Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Renewable/solar-street-light copy.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      12w Solar Street Light
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      For 12 watt street solar LED light, the technical
                      specifications are as below. You can check and compare it
                      with other models of solar lights.
                    </p>
                    <br />
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            Particular
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Solar Light
                          </td>
                          <td style={{ border: "1px black solid" }}>12 watt</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Solar Panel
                          </td>
                          <td style={{ border: "1px black solid" }}>50 watt</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Solar Battery
                          </td>
                          <td style={{ border: "1px black solid" }}>40 AH</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            LED Bulb
                          </td>
                          <td style={{ border: "1px black solid" }}>14 Nos.</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            GI Pole{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>5 Meter</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Charge Controller
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            12 volt inbuilt
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Sensor</td>
                          <td style={{ border: "1px black solid" }}>
                            Dusk to Dawn inbuilt
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Accessories
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Panel structure, wire, connectors nut bolts etc.
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Backup Time
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            24 hours
                          </td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Warranty
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            5 years for complete{" "}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Delivery
                          </td>
                          <td style={{ border: "1px black solid" }}>7 days</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      15w Solar Street Light
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      This is the most common size of solar light. If you want
                      to install a solar light at your places, then 15 watt
                      solar light is best option for you. Various features of 15
                      watt solar light is given below.
                    </p>
                    <br />
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            Particular
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Solar Light
                          </td>
                          <td style={{ border: "1px black solid" }}>15 watt</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Solar Panel
                          </td>
                          <td style={{ border: "1px black solid" }}>75 watt</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Solar Battery
                          </td>
                          <td style={{ border: "1px black solid" }}>60 AH</td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            GI Pole{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>5 Meter</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Charge Controller
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            12 volt inbuilt
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Sensor</td>
                          <td style={{ border: "1px black solid" }}>
                            Dusk to Dawn inbuilt
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Accessories
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Panel structure, wire, connectors nut bolts etc.
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Backup Time
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            24 hours
                          </td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Warranty
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            5 years for solar panel.{" "}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Delivery
                          </td>
                          <td style={{ border: "1px black solid" }}>7 days</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div>
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          18w Solar Street Light
                        </h3>
                        <div className="d-none d-lg-block">
                          <br />
                        </div>
                        <p>
                          18 watt solar PV light is best solar solution to
                          illuminate your gardens, grounds, parks etc. The
                          specifications of 18 watt solar light is as mentioned
                          below.
                        </p>
                        <br />
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Particular
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Solar Light
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                18 watt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Solar Panel
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                75 watt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Solar Battery
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                60 AH
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                GI Pole{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                5 Meter
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Charge Controller
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                12 volt inbuilt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Sensor
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Dusk to Dawn inbuilt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Accessories
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Panel structure, wire, connectors nut bolts etc.
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Backup Time
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                24 hours
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Warranty
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                5 years for solar panel.{" "}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Delivery
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                7 days
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          24w Solar Street Light
                        </h3>
                        <div className="d-none d-lg-block">
                          <br />
                        </div>
                        <p>
                          A 24 watt solar street LED light is useful for
                          national highways, roads, factories and such places
                          where more light is required. 24 watt solar PV light
                          is available for Rs.21,000. You can check its
                          specification below.
                        </p>
                        <br />
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Particular
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Solar Light
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                24 watt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Solar Panel
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                100 watt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Solar Battery
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                75 AH
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                GI Pole{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                5 Meter
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Charge Controller
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                12 volt inbuilt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Sensor
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Dusk to Dawn inbuilt
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Accessories
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Panel structure, wire, connectors nut bolts etc.
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Backup Time
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                24 hours
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Warranty
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                5 years for solar panel.{" "}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Delivery
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                7 days
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
export default SolarStreetLight;
