import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class PalmOilDetails extends Component {
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
                <h1 class="text-white">Palm Oil Milling Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Palm Oil Milling Details</li>
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
                      Palm Oil Milling Details:
                    </h2>
                    <br />
                    <div className="d-flex d-xl-block justify-content-center justify-content-xl-start">
                      <img
                        alt=""
                        // style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/paim-oil.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <br />
                    <p>
                      Oil Expeller Machine are used to Extract Oil form Seeds
                      Such as Mustard, Sun Flower, Sesame, and from other Food
                      Grains such as Groundnuts, Peanuts, Corn, etc.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      These Oil Expellers are available in Different Sizes and
                      Capacities.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Minimum Order Quantity
                            </td>
                            <td style={{ border: "1px black solid" }}>1 Set</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Usage</td>
                            <td style={{ border: "1px black solid" }}>
                              Palm Fruit Oil
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
                              Usage/Application
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              All Edible Oil
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Brand</td>
                            <td style={{ border: "1px black solid" }}>
                              Aditya
                            </td>
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
                              Condition
                            </td>
                            <td style={{ border: "1px black solid" }}>New</td>
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
                            <td style={{ border: "1px black solid" }}>
                              Number Of Phases
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              3 Phase
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Kettle/Cooker Type
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Round Kettle
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Voltage
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              440 Volt
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Color</td>
                            <td style={{ border: "1px black solid" }}>Green</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Material
                            </td>
                            <td style={{ border: "1px black solid" }}>Metal</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Motor</td>
                            <td style={{ border: "1px black solid" }}>
                              7.5 HP to 50 HP
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Automatic Grade
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Semi-Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              1-5 ton/day
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
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default PalmOilDetails;
