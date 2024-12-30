import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SolarHomeKit extends Component {
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
                <h1 class="text-white">Solar Home Kit Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Non Renewable Energy</li>
                    <li>Solar Home Kit Details</li>
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
                      Solar Home Kit Details:
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Renewable/solarkit.jpg")}
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <p>
                      A 500 Watt off grid solar system is designed to give power
                      supply for 4-5 hours to 2- 3 BHK homes in India having
                      severe power cuts and unreliable electricity supply. It is
                      a Small Power plant which can run a Peak Load up to 650
                      Watts. If you are living in a City or where Electricity is
                      available and Power cuts are frequent, The Solar Combo
                      helps you to save Electricity of almost 1.5 Units per day
                      which is used in battery charging.
                    </p>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Main Products:
                    </h3>
                    <ul className="mx-3">
                      <li>Inverter - 1100 VA (1 nos.)</li>
                      <li>Battery - 150 Ah (1 nos.)</li>
                      <li>Solar Panels - 540 Watt (180 watt * 3 nos.)</li>
                    </ul>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Subsidy:
                    </h3>
                    <ul className="mx-3">
                      <li>
                        Government of India does not offer any subsidy on off
                        grid solar systems.
                      </li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font ">
                      Running Load:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <ul className="mx-3">
                      <li>
                        Up to 650 watts of power with combination of - 2 Ceiling
                        Fans, 10 Led lights, 1 Television + 1 Laptop/Mobile
                        Charging.
                      </li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Backup Time:
                      </h3>
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                      </div>
                      <div className="table-main">
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Load
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                500 W
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                400 W
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                300 W
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                200 W
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                100 W
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Duration
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                2 hrs 10 mint
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                3 hrs
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                4 hrs 30 mints
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                7 hrs 30 mints
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                18 hrs 30 mint
                              </td>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                      </div>
                      <div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <br />

                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Technical Details:
                        </h3>
                        <br />

                        <table style={{ border: "1px black solid" }}>
                          <thead></thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Inverter Model
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                NXG 1100
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Inverter Capacity{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                1100 VA{" "}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Efficiency{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Inverter - 97%, Module 16%{" "}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                {" "}
                                Module Type
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                {" "}
                                Mono-Crystalline
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Battery Included{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Yes{" "}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Standard Installation Included{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}> No</td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Installation Package{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                {" "}
                                Panel stand, 10 meter wire along with
                                connectors, excluding fixing and wiring.
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
export default SolarHomeKit;
