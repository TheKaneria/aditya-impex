import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class CandleMakingMachine extends Component {
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
                <h1 class="text-white">Candle Making Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Candle Making Machine Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2">
                  <div class="col-lg-7 m-b30">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Candle Making Machine:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 500 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/new candle making machine photo.jpg")}
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
                      We offer a wide gamut of Candle Making Machine to our
                      Indian and global clients at budget-friendly rates in the
                      market. We are one of the major manufacturers, exporters
                      and suppliers of Candle Making Machine, and we excel in
                      offering the finest range of machine to the clients. We
                      have a team of experts who processes the Candle Making
                      Machine under advanced processing units and using
                      high-grade materials. The Candle Making Machine, supplied
                      by us, is in high demand as these are sturdy, and promise
                      longer functional life. We are located in Gujarat, India.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <ul className="mx-3">
                      <li>
                        Round Pillar type candle making machine. We are
                        manufacturing the candle making machine in different
                        models.
                      </li>
                      <li>
                        Our machine can make Round, Square & spiral type
                        candles. We are also manufacturing Taillight Candle
                        making machine in different models & designs. The
                        following is detail of our Round candle making machine.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-5">
                    <div class="row">
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Product specification:
                      </h3>
                      <br />
                      <div>
                        <div className="d-none d-lg-block">
                          <br />
                        </div>
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                <center>Diameter of candle</center>
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                <center>Height of candle</center>
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                <center>No. of pieces at one time</center>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>5.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>139.7 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>300</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>6.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>139.7 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>300</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>7 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>139.7 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>300</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>8 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>165.1 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>300</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>8.5 mm </center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>165.1 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>300</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>9.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>190.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>300</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>10.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>190.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>284</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>11 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>215.9 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>240</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>12 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>215.9 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>200</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>12.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>215.9 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>200</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>13.5 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>215.9 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>200</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>14 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>215.9 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>184</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>15 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>241.3 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>160</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>16 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>241.3 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>160</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>17 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>241.3 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>144</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>19 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>266.7 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>120</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>21 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>266.7 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>96</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>23 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>292.1 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>84</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>24 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>292.1 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>72</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                <center>25.4 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>304.8 mm</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>60</center>
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
export default CandleMakingMachine;
