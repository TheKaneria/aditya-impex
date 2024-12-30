import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class CentrifugalPumpDetails extends Component {
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
                <h1 class="text-white">Centrifugal Pumps Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Centrifugal Pumps Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <h2 class="text-black nana-font">
                  Coupled Centrifugal Water Pump:
                </h2>
                <div class="row p-3">
                  <div class="col-lg-6 m-b30">
                    {/* <div class="row"> */}
                    <br />
                    <div className="table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              PRIVATE ENGINE H.P.
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              ENGINE RPM
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              NO OF CYL.
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              PUMP SIZE MM
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              HEAD RANGE IN METER
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              DISCHARGE LIT./SEC
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>4.5</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>65*50</td>
                            <td style={{ border: "1px black solid" }}>
                              10 To 13
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              16 To 10
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>5.5</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>80*65</td>
                            <td style={{ border: "1px black solid" }}>
                              11 To 16
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              22 To 14
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>6.5</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>80*65</td>
                            <td style={{ border: "1px black solid" }}>
                              09 To 20
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              26 To 15
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>7.5</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>
                              100*80
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              09 To 15
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              31 To 14
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>8.5</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>
                              100*100
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              09 To 16
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              32 To 14
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>10.0</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>
                              125*125
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              07 To 17
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              52 To 29
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>6.5</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>
                              125*125
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              09 To 09
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              36 To 20
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>8.0</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>
                              150*150
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              06 To 19
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              37 To 22
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>20.0</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>
                              100*125
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              14 To 20
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              100 To 180m3/hr
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>28</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>
                              150*150
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              06 To 10
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              100L/S
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>28.0</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>
                              100*125
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              22 To 20
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              140 To 210m3/hr
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>28</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>80*80</td>
                            <td style={{ border: "1px black solid" }}>40</td>
                            <td style={{ border: "1px black solid" }}>
                              50m3/h
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>1500</td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>80*80</td>
                            <td style={{ border: "1px black solid" }}>
                              26 To 35
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              23 To 6 L
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black nana-font">
                      Centrifugal Water Pumps:
                    </h2>
                    <p>
                      For many years, we have been the biggest manufacturers,
                      exporters, and suppliers of Centrifugal Water Pump from
                      Gujarat, India. While we are famous for offering premium
                      quality Centrifugal Water Pump, our range of pumps is
                      known for delivering maximum output, and hassle-free
                      performance. The Centrifugal Water Pumps can be purchased
                      at economical rates in the market, and we package it using
                      high-grade resources and guarantee well-timed delivery of
                      the product to our esteemed clients. The Centrifugal Water
                      Pumps, supplied by us, is rigid in construction,
                      vibration-proof and easy to handle.
                    </p>

                    <h3 class="text-black nana-font">Design Features</h3>
                    <ul className="mx-3">
                      <li>
                        The pump is made for coupling with electric motor. high
                        speed diesel engine. The direction of rotation is
                        anti-clockwise viewing from drivers end. The pump is
                        rigid in construction. vibration proof and easy in
                        handling.
                      </li>
                      <li>
                        The pump is supported with robust bail bearings and
                        Tapper Roller bearings as per customers requirement.
                      </li>
                      <li>
                        Casing is made of high quality close grained cast iron
                        with well designed volute way ensuring smooth how with
                        gradual changes in velocity and is hydraulically tested
                        before final assembly.
                      </li>
                      <li>
                        Impeller is of single end suction, shrouded type made of
                        special Grey Iron with high finish and impeller is
                        dynamically as well as statically balanced Shaft is made
                        from high quality steel and accurately ground finished
                        within the manufacturing tolerances. and the size of the
                        shall is designed for transmitting maximum power without
                        vibrations.
                      </li>
                      <li>
                        Supporting frame is robustly constructed to carry shalt.
                        single as well as double beanogs and brass bush.
                      </li>
                      <li>
                        Slurring box is of liberal depth for accommodating
                        sufficient gland packing. Easy access to bluffing box is
                        an outstanding feature of Supporting Frame. Facilitating
                        convenient replacement of Gland packing.
                      </li>
                    </ul>
                    <h3 class="text-black nana-font">Specifications</h3>
                    <p>
                      "Universal" Centrifugal Water Pump Center Delivery Base
                      Plate Type Single Fast Flat Pulley
                    </p>
                    <div className="table-main">
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
                              Model
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Size
                            </th>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Prime Mover KW/HP
                            </th>
                            <th style={{ border: "1px black solid" }}>RPM</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>KCD</td>
                            <td style={{ border: "1px black solid" }}>KCD-3</td>
                            <td style={{ border: "1px black solid" }}>85*85</td>
                            <td style={{ border: "1px black solid" }}>
                              7.46(10)
                            </td>
                            <td style={{ border: "1px black solid" }}>1450</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>KCD</td>
                            <td style={{ border: "1px black solid" }}>KCD-4</td>
                            <td style={{ border: "1px black solid" }}>
                              101*101
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              10.44(14)
                            </td>
                            <td style={{ border: "1px black solid" }}>1450</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    {/* </div> */}

                    {/* <h2 class="text-black font-weight-600 m-b15">Centrifugal Pump Details</h2> */}
                    <h2 class="text-black nana-font">
                      Centrifugal Monoblock Pumps:
                    </h2>
                    <p>
                      Centrifugal Monoblock Pumps are replacing centrifugal
                      pumps at a number of places because of some of the
                      inherent advantages, such as
                    </p>
                    <ul className="mx-3">
                      <li>Low cost</li>
                      <li>No centrifugal switch</li>
                    </ul>
                    <h3 className="nana-font">
                      Salient Features of Centrifugal Monoblock Pumps
                    </h3>
                    <ul className="mx-3">
                      <li>Uni-casing no air lock problem</li>
                      <li>Balanced and rigged construction.</li>
                      <li>No centrifugal switch.</li>
                      <li>Less operational and maintenance cost.</li>
                    </ul>
                    <h3 className="nana-font">
                      Application Of Centrifugal Monoblock Pumps
                    </h3>
                    <p>
                      Industrial & public water supply schemes, Domestic water
                      supply, Lift irrigation schemes. Drip/ Sprinkler
                      Irrigation schemes, fire lighting, booster application,
                      cooling water. Circulation, Ornamental fountain
                      installation and air conditioning plants. Dewatering of
                      mines, offshore, platforms, etc.
                    </p>
                    <h3 className="nana-font">
                      Construction of Centrifugal Monoblock Pumps
                    </h3>
                    <p>
                      Wet squirrel cage induction type, water cooled, water
                      lubricated motor. All bearings are water lubricated.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-12 m-b30 d-flex d-lg-block justify-content-center align-self-center">
                        <div className="d-none d-lg-block">
                          <br />
                          <br /> <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <img
                          alt=""
                          className="single_prod_img"
                          style={{ height: 400, width: 400 }}
                          src={require("../../images/Agriportfolio/CENTRIFUGLE WITH PUMPSET.jpg")}
                        />
                      </div>

                      <div class="col-lg-12 m-b30 d-flex d-lg-block justify-content-center">
                        <div className="d-none d-lg-block">
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <img
                          alt=""
                          className="single_prod_img"
                          style={{ height: 400, width: 400 }}
                          src={require("../../images/Agriportfolio/CENTRIFUGAL WATER PUMP.jpg")}
                        />
                      </div>
                      <div class="col-lg-12 m-b30 d-flex d-lg-block justify-content-center">
                        <div className="d-none d-lg-block">
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                          <br /> <br /> <br /> <br /> <br /> <br /> <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <img
                          alt=""
                          className="single_prod_img"
                          style={{ height: 400, width: 400 }}
                          src={require("../../images/Agriportfolio/HORIZONTAL CENTRIFUGAL PUMP.jpg")}
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
export default CentrifugalPumpDetails;
