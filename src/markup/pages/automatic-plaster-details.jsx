import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class AutomaticPlaster extends Component {
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
                <h1 class="text-white">Automatic plaster Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Automatic plaster Machine Details</li>
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
                      Automatic Plaster Machine Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Details:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <ul className="mx-3">
                      <li>
                        Wet spraying of lime and cement mortars with any kind of
                        sand such as crushed rock sand, quarry sand, desert
                        sand, washed river or sea sand, dune sand etc, almost
                        all types of plaster and ready mixed plasters in sacks
                        for interiors and exteriors.
                      </li>
                      <li>Conveying floor screed.</li>
                      <li>
                        Conveying lightweight concrete, insulation materials
                        (pearlite etc.) and self-leveling floor screed.
                      </li>
                      <li>
                        Spraying cement mixes and mortar to coat cracks and
                        refurbish old buildings, bridges, tunnels etc.
                      </li>
                      <li>Spraying cement mixes on mesh panels.</li>
                      <li>
                        Conveying cement mixes, slurries and mortar for flooring
                        beds.
                      </li>
                      <li>
                        Conveying masonry mortar for building walls. injection
                        of cement grout.
                      </li>
                      <li>It can be used under silos.</li>
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                      </div>
                      <li>Double piston pump.</li>
                      <li>
                        Electric motor or diesel engine 29 hp with electric
                        start.
                      </li>
                      <li>Electric control panel for electric motor model.</li>
                      <li>
                        Chassis mounted on rubber tires with shock absorber
                        system.
                      </li>
                      <li>Mixer with 270 lit capacity.</li>
                      <li>
                        Restoration hopper under the mixer with mixing system to
                        keep the material in fluid condition.
                      </li>
                      <li>
                        2—cylinder built-in air compressor 7'50 litz’min for
                        spraying (it can also be used for operating spray jet to
                        clean after performance and pneumatic hammers to remove
                        old and dry plaster).
                      </li>
                      <li>Gear box with 3 speed level pulley.</li>
                      <li>
                        Over pressure safety device for automatic shut-down.
                      </li>
                      <li>Pneumatic start and stop remote control.</li>
                      <li>
                        Vibrating screen with 3,5 mm to 12 mm square mesh which
                        can be switched off.
                      </li>
                      <li>Water nozzle and irrigation system.</li>
                      <li>Rubber hoses with couplings (50m standard).</li>
                      <li>
                        Spray gun with different hole size nozzles according the
                        grain size ofthe pumpmg material.
                      </li>
                    </ul>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Combines unique advantages:
                    </h3>
                    <br />
                    <ul className="mx-3">
                      <li>It is powerful.</li>
                      <li>It can be used in a broad range of applications.</li>
                      <li>
                        It is equipped with advanced pump which provides smooth
                        pumping without interruptions.
                      </li>
                      <li>
                        It is ideal for the most difficutt materials in the most
                        difficult conditions.
                      </li>
                      <li>
                        complete and compact work station for mixing, restoring,
                        pumping and Spraying.
                      </li>
                    </ul>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Provides high performances:
                    </h3>
                    <ul className="mx-3">
                      <li>Large output</li>
                      <li>Long delivery distance</li>
                      <li>Big delivery height</li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <ul className="mx-3">
                      <li>It is reliable.</li>
                      <li>It requires minimum maintenance.</li>
                      <li>It has many features.</li>
                    </ul>
                    <br />

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Technical Data:
                    </h2>
                    <br />
                    <ul className="mx-3">
                      <li>/2 Double piston pump with 2 gravity valves</li>
                      <li>/4 Double piston pump with 4 gravity valves</li>
                      <li>/D Double piston pump with diesel engine</li>
                      <li>/E Double piston pump with electric motor</li>
                    </ul>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Construction/plaster.jpg")}
                      />
                      <br />
                      <div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="table-main">
                          <table style={{ border: "1px black solid" }}>
                            <thead>
                              <tr>
                                <th style={{ border: "1px black solid" }}>
                                  <center></center>
                                </th>
                                <th style={{ border: "1px black solid" }}>
                                  <center>AS 3000 / 2D</center>
                                </th>
                                <th style={{ border: "1px black solid" }}>
                                  <center>AS 3000 / 4D</center>
                                </th>
                                <th style={{ border: "1px black solid" }}>
                                  <center>AS 3000 / 2E</center>
                                </th>
                                <th style={{ border: "1px black solid" }}>
                                  <center>AS 3000 / 4E</center>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Motor
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>
                                    28 hp diesel engine with electric start
                                  </center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>
                                    28 hp diesel engine with electric start
                                  </center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>
                                    10 Kw electric motor with control panel
                                  </center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>
                                    10 Kw electric motor with control panel
                                  </center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Output*
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>0,9 - 5,2 m3/h</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>1.8 - 10,5 m3/h</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>1 - 5,4 m3/h</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>1,5 - 10 m3/h </center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Delivery pressure*
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>40 bar</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>40 bar</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>40 bar</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>40 bar</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Delivery height*
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 120 m</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 120 m</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 100 m</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 100 m</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Delivery distance*
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 350 m</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 350 m</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 300 m</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>up to 300 m</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Max. grain size*
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>8 - 10 mm</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>8 - 10 mm</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>8 - 10 mm</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>8 - 10 mm</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Air compressor
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>2 - cylinder 750 lit/min</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>2 - cylinder 750 lit/min</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>2 - cylinder 750 lit/min</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>2 - cylinder 750 lit/min</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Mixer capacity
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>270 lit</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>270 lit</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>270 lit</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>270 lit</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Hopper capacity
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>290 lit</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>290 lit</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>290 lit</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>290 lit</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Dimensions (L*W*H) cm
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>216*158*148</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>216*158*148</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>216*158*148</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>216*158*148</center>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ border: "1px black solid" }}>
                                  Weight
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>950 Kg</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>980 Kg</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>860 Kg</center>
                                </td>
                                <td
                                  style={{ border: "1px black solid" }}
                                  colspan=""
                                >
                                  <center>890 kg</center>
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
        </div>
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default AutomaticPlaster;
