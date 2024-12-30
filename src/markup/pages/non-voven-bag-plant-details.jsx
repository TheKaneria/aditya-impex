import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class NonVovenBagPlant extends Component {
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
                <h1 class="text-white">Non Voven Bag Plant Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Non Voven Bag Plant Details</li>
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
                      Non Voven Bag Plant Details:
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start ">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/download (1).jpeg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Description:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>We are offering Non Woven Zipper Bag Making Machine.</p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Product Specification:
                      </h3>
                      <br />
                      <div className="table-main">
                        <table style={{ border: "1px black solid" }}>
                          <thead></thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Type Of Bag
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Zipper Bag
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Bag Material
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Non Woven
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Voltage
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                220V/380V
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Model Name/Number
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                KT-700ZB
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Power
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                10 kW
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Max Bag Length
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                100-500mm
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Machine Weight
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                2000 Kg
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Bag Width
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                800 mm
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Production Speed
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                17-100 pcs/ min
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Raw Material{" "}
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                CPP Film, PP Non Woven
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Material Thickness
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                30-60 gsm
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Ultrasonic Systems
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                8 Set
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Overall Size
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                7500*1600*1800mm
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Minimum Order Quantity
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                1 Set
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
export default NonVovenBagPlant;
