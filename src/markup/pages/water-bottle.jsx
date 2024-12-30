import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class WaterBottle extends Component {
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
                <h1 class="text-white">Water Bottle Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Water Bottle Machine Details</li>
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
                      Water Bottle Machine Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>

                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Specification:
                    </h3>
                    <br />
                    <table style={{ border: "1px black solid" }}>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Water Source
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Borewell Water
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Installation Services Required
                          </td>
                          <td style={{ border: "1px black solid" }}>Yes</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Filtration Capacity (litre/hr)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            250-500, 500-1000, 1000-5000, 5000-10000, 1000
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Certifications
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            ISI, BIS
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Laboratory
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Chemical Laboratory, Microbiological Laboratory
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Chilling Capacity (in tons){" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            3 Ton, 5 Ton
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Chiller Capacity (in Liters)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            1000 L, 2000 L
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Bottle Filling Capacity (Bottles/min)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            50 Bottle/min
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Number of Membranes in RO
                          </td>
                          <td style={{ border: "1px black solid" }}>2, 3, 4</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Control Panel
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            With Control Panel
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Water Purification Process
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            RO, Ozonation, Carbon Filtration, Chlorination
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Installation/Civil Work
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Installation Available
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Overall Dimensions (LxBxH) in meters
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Customised
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
                            Approximate Power Consumption (in kW)
                          </td>
                          <td style={{ border: "1px black solid" }}>7.5</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Manufacturing Lead Time
                          </td>
                          <td style={{ border: "1px black solid" }}>3 week</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Bottle Sizes
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            0-500 ml, 500ml-1 litre, 1 litre-5 litre, 10 litre-
                            20 litre
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Condition
                          </td>
                          <td style={{ border: "1px black solid" }}>New</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Minimum Order Quantity
                          </td>
                          <td style={{ border: "1px black solid" }}>1 Unit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Description:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      We offer 60 bpm bottle filling machine. 60 bpm bottle
                      filling machine is use for water treatment plant to pack
                      water bottle 200ml to 2 liter. 60 bpm bottle filling
                      machine is fully automatic rinsing filling capping system.
                    </p>
                    <div class="row d-flex justify-content-center ">
                      <img
                        alt=""
                        style={{ height: 500, width: 500 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/Waterbottle Machine copy.jpg")}
                      />
                      <div className="d-none d-lg-block">
                        <br />
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
export default WaterBottle;
