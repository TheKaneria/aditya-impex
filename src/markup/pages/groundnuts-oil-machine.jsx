import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class GroundnutsOilMachine extends Component {
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
                <h1 class="text-white">Groundnuts Oil Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Groundnuts Oil Machine Details</li>
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
                      Groundnuts Oil Machine:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div>
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Product Details:
                      </h3>
                      <br />
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
                              Automation Grade
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Automatic, Semi-Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Automatic Grade
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Automatic, Semi-Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              10 Ton / 24 Hour, 1-5 ton/day, 60-100 ton/day,
                              5-20 ton/day, 20-60 ton/day
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Usage</td>
                            <td style={{ border: "1px black solid" }}>
                              Palm Fruit Oil, Peanut Oil, Soybean Oil, Sunflower
                              Oil, MUSTARD OIL
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Brand</td>
                            <td style={{ border: "1px black solid" }}>
                              Aditya
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Power</td>
                            <td style={{ border: "1px black solid" }}>10-15</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Condition
                            </td>
                            <td style={{ border: "1px black solid" }}>Yes</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              High Tensile Strength
                            </td>
                            <td style={{ border: "1px black solid" }}>Yes</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Usage/Application
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Peanut Oil
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Driven Type
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              MOTOR & PULLEY
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Power Consumption
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              3 Phase 30 HP Motor
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Chamber
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Fabricated chamber
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="d-none d-lg-block">
                        <br />
                      </div>
                      <p>
                        These Expellers machines are used for extraction of Oils
                        From Seeds and Grains Such as Mustard Seeds, Sesame
                        Seeds, Groundnuts, Peanuts, etc.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
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
                      <br />
                    </div>
                    <div class="row d-flex justify-content-center ">
                      <img
                        alt=""
                        // style={{ height: 500, width: 500 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/groundnutsl-milling-machine-500x500.jpg")}
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
export default GroundnutsOilMachine;
