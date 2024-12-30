import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class CornOilDetails extends Component {
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
                <h1 class="text-white">Corn Oil Processing Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Corn Oil Processing Machine Details</li>
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
                      Corn Oil Processing Machine Details:
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start ">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/download2.jpeg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Details:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      These Expellers machines are used for extraction of Oils
                      From Seeds and Grains Such as Mustard Seeds, Sesame Seeds,
                      Groundnuts, Peanuts, etc.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
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
                            <td style={{ border: "1px black solid" }}>
                              Automatic Grade{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Semi-Automatic, Automatic
                            </td>
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
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              10 Ton / 24 Hour, 1-5 ton/day, 5-20 ton/day,
                              60-100 ton/day, 20-60 ton/day
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Usage</td>
                            <td style={{ border: "1px black solid" }}>
                              Corn oil
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
                              High Tensile Strength
                            </td>
                            <td style={{ border: "1px black solid" }}>Yes</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Condition
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
                              Motor % Pulley
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
export default CornOilDetails;
