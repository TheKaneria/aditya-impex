import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Header from "../layout/header";
import Footer from "../layout/footer";

const bg = require("../../images/banner/bnr4.jpg");

class PouchPowder extends Component {
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
                <h1 class="text-white">Pouch Powder Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Pouch Powder Machine Details</li>
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
                      Pouch Powder Machine Details:
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/powder-pouch-machine.png")}
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      USE FOR : TEA, TOBECCO, PANMASALA, NAMKIN, HINA POWDER,
                      TURMERIC, CHILLY, CORIANDER, CHUMIN POWDER, WASHING POWDER
                      Etc. SIMILAR PRODUCTS
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div>
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Product Specification:
                        </h3>
                        <br />
                        <table style={{ border: "1px black solid" }}>
                          <thead></thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Filling Range
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                100 TO 1000 Grams
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Filling Speed
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                1500 to 4000 Pouches per Hour
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Pouch Material
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Heat Sealable Flexible Laminated Paper
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Power
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                230 V Single phase 50-60 Hz
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Heater
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Round type 230 Watts Cartridge type 230 Watts
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Motor
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                230 watts 1/2 H.P. Single phase 1440 RPM 110
                                watts 1/8 H.P. Single phase 144
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Pouch Size
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Width :- 25mm To 250mm Bag Length :- 25 to 400mm
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                M/C. Size
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Depth – 980, Width – 750, Height – 1660mm
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Weight
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                310 Kgs. Approx
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
export default PouchPowder;
