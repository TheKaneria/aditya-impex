import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class GriddingMillDetails extends Component {
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
                <h1 class="text-white">Gridding Mill Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Gridding Mill Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-3">
                  <div class="col-lg-6 m-b30">
                    <div class="col-lg-12 m-b30">
                      <div class="row">
                        <div class="col-lg-12 m-b30">
                          <h2 class="text-black nana-font">
                            Corn Gridding Mill :
                          </h2>

                          <p>
                            With consistent focus on the current market, we
                            bring forth a unique range of Corn Grinding Mill.
                            Acknowledged for its outstanding features, this
                            grinding mill is accessible in various
                            specifications. Suitable for grinding corns, offered
                            grinding mill is designed by our industry-experts
                            using progressive machinery and high grade material.
                            This grinding mill can be availed by our clients at
                            affordable prices
                          </p>
                          <br />
                          <h3 className="nana-font">Features:</h3>
                          <ul className="mx-3">
                            <li> Trouble free performance</li>
                            <li>Robust design</li>
                            <li> Negligible maintenance</li>
                          </ul>
                          <div className="d-none d-lg-block">
                            <br />
                            <br />
                            <br />
                            <br />
                          </div>

                          <h2 class="text-black nana-font">
                            Emery Stone Mill:
                          </h2>

                          <h3 className="nana-font">Product Specifications:</h3>
                          <p>
                            Vertical danish type stone mills are made of cast
                            iron and steel fabrication. An adjustable and silent
                            and shaking device is provided for controlled
                            feeding. Stones are made of a special composition
                            which contains Carborandum and emery powder. Sealed
                            ball bearings are used to avoid dust or flour from
                            entering and jamming the bearings. Output / hour
                            (Kgs.) 250-300
                          </p>
                          <p>Diameter of Grinding Stone 16”</p>
                          <p>Power (BHP) 8bhp</p>
                          <p>RPM 600</p>
                          <div className="d-none d-lg-block">
                            <br />
                            <br />
                            <br />
                            <br />
                          </div>

                          <h2 class="text-black nana-font">Grinding Mill 1:</h2>
                          <div>
                            <br />
                            <h3 className="nana-font">
                              Product Specifications:
                            </h3>
                            <br />
                            <p>
                              Simple and robust construction. Easy to operate
                              and maintain.
                            </p>

                            <p>
                              Suitable for grinding maize and a host of other
                              cereals and spices. Driven by diesel
                              engine/electric motor. Capable of coarse and fine
                              grinding by adjusting the grinding plates.
                              Grinding plates are reversible and made of high
                              chrome special steel for long life.
                            </p>
                            <br />
                            <table style={{ border: "1px black solid" }}>
                              <thead>
                                <tr>
                                  <th
                                    style={{
                                      border: "1px black solid",
                                      paddingLeft: "1rem",
                                    }}
                                  >
                                    Type
                                  </th>
                                  <th
                                    style={{
                                      border: "1px black solid",
                                      paddingLeft: "1rem",
                                    }}
                                  >
                                    Plate Size
                                  </th>
                                  <th
                                    style={{
                                      border: "1px black solid",
                                      paddingLeft: "1rem",
                                    }}
                                  >
                                    Power
                                  </th>
                                  <th
                                    style={{
                                      border: "1px black solid",
                                      paddingLeft: "1rem",
                                    }}
                                  >
                                    Output
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ border: "1px black solid" }}>
                                    1A
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    10”{" "}
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    6HP
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    250-300 KGS
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ border: "1px black solid" }}>
                                    2A
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    12”
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    10HP
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    350-400 KGS
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ border: "1px black solid" }}>
                                    3A
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    14”
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    15HP
                                  </td>
                                  <td style={{ border: "1px black solid" }}>
                                    500-600 KGS
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <br />
                            <br />
                            <h2 class="text-black nana-font">
                              Grinding Mill 2:
                            </h2>
                            <br />

                            <h3 className="nana-font">
                              Product Specifications:
                            </h3>
                            <br />
                            <p>
                              This versatile machine is suitable for very small
                              scale use. It can be used to grind tomato, chilly,
                              corn, pepper, coffee, spices, sugar and cereals.
                              There is an option to operate by hand as well.
                              Output will vary accordingly. Power 2 hp
                            </p>
                            <p>Output 15-20 kgs/hour</p>
                            <p>RPM 600 rpm</p>
                            <p>Plate Size 7”</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="row">
                      <div class="col-lg-12 m-b30 d-flex justify-content-center align-item-center ">
                        <img
                          alt=""
                          style={{ height: 500, width: 500 }}
                          className="single_prod_img"
                          src={require("../../images/Food_PortFolio/corn-mill-500x500 copy.jpg")}
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 m-b30 d-flex justify-content-center align-item-center">
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/emery stone mill.jpg")}
                      />
                    </div>

                    <div class="col-lg-12 m-b30 ">
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="d-flex justify-content-center align-item-center">
                        <img
                          alt=""
                          style={{ height: 300, width: 300 }}
                          src={require("../../images/Food_PortFolio/grinding mills copy.jpg")}
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 m-b30">
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                      <div className="d-flex justify-content-center align-item-center">
                        <img
                          alt=""
                          style={{ height: 300, width: 300 }}
                          className="single_prod_img"
                          src={require("../../images/Food_PortFolio/grinding mill copy.jpg")}
                        />
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
export default GriddingMillDetails;
