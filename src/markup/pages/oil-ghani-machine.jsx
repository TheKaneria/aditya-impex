import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";

const bg = require("../../images/banner/bnr4.jpg");

class OilGhaniMachine extends Component {
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
                <h1 class="text-white">Oil Ghani Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Oil Ghani Machine Details</li>
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
                      Oil Ghani Machine:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div>
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
                            <td style={{ border: "1px black solid" }}>
                              1 Pair
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Automation Grade
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              20-60 ton/day
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Usage/Application
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Mustard Oil
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
                            <td style={{ border: "1px black solid" }}>240 V</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Design
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Standard
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Usage</td>
                            <td style={{ border: "1px black solid" }}>
                              Peanut Oil,Sunflower Oil,Cotton Seed Oil,Palm
                              Fruit Oil
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Number Of Phases
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Single Phase
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Motor</td>
                            <td style={{ border: "1px black solid" }}>2 HP</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              I deal in
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              New Only
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Material
                            </td>
                            <td style={{ border: "1px black solid" }}>C.I</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Bearings
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Roller Bearings
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Consumption Hp
                            </td>
                            <td style={{ border: "1px black solid" }}>2HP</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="d-none d-lg-block">
                        <br />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row d-flex justify-content-center ">
                      <img
                        alt=""
                        // style={{ height: 500, width: 500 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/oil-ghani-machine-500x500.png")}
                      />
                      <p>
                        The Oil Ghani Machine is used to extract oil from oil
                        seeds like Mustard, Sesame, Sunflower, etc. A ghani
                        consists of a large pestle and mortar rotated by
                        Electric Motor. Seed is fed slowly into the mortar and
                        the pressure exerted by the pestle breaks the cells and
                        releases the oil. Ghani technology is mainly restricted
                        to the Indian sub-continent. The demand of Mustard Oil
                        is increasing with the time. Refined Ghani, filtered,
                        double filtered mustard oil have given new thrust to its
                        market. Due to consumption in household and in pickle
                        industries it appears to be good scope for establishing
                        mustard oil industry.
                      </p>
                      <br />
                      <div class="col-md-12">
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Features:
                        </h3>
                        <ul className="mx-3">
                          <li>Highly efficient</li>
                          <li>Quality product</li>
                          <li>Highly reliable</li>
                        </ul>

                        <div className="d-none d-lg-block">
                          <br />
                        </div>

                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Additional Information:
                        </h3>
                        <ul className="mx-3">
                          <li>Item Code: 49</li>
                          <li>Production Capacity: 40Kg Per hour</li>
                          <li>Delivery Time: 7- 10 Days</li>
                          <li>Packaging Details: LOOSE</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default OilGhaniMachine;
