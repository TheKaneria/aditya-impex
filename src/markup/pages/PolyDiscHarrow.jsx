import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class PolyDiscHarrow extends Component {
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
                <h1 class="text-white">Harrows Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Post Harvesting</li>
                    <li> Harrows Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2 flex-lg-column flex-xl-row">
                  <div class="col-lg-12 col-xl-6 m-b30 d-flex flex-column justify-content-center ">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Hydraulic Harrow:
                    </h2>
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-xl-start">
                      <img
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/HYDRAULIC HARROW.jpg")}
                      />
                    </div>
                    <div className="table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>Variant</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAHHDDH 18</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAHHDDH 20</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAHHDDH 22</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAHHDDH 24</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAHHDDH 28</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Frame (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="5"
                            >
                              <center>100*100*6</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Axel (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="5"
                            >
                              <center>40</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Type Of Disc
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="5"
                            >
                              <center>
                                Notched Disc in front & Plain Disc in Rear{" "}
                              </center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Disc Diameter (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="5"
                            >
                              <center>610*10/660*6</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Bearing Hubs
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              6
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="4"
                            >
                              <center>8</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Disc Spacing(mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="5"
                            >
                              <center>228</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Width (mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>2100</td>
                            <td style={{ border: "1px black solid" }}>2300</td>
                            <td style={{ border: "1px black solid" }}>2500</td>
                            <td style={{ border: "1px black solid" }}>2700</td>
                            <td style={{ border: "1px black solid" }}>3100</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Weight (mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>1550</td>
                            <td style={{ border: "1px black solid" }}>1590</td>
                            <td style={{ border: "1px black solid" }}>1720</td>
                            <td style={{ border: "1px black solid" }}>1800</td>
                            <td style={{ border: "1px black solid" }}>1980</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Tractor Power (HP)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>75-95</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              <center>95-125</center>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Mounted Off Set Disc Harrow:
                    </h2>
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center ">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/MOUNTED OFF SET DISC HARROW.jpg")}
                      />
                    </div>
                    <br />
                    <div className="table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>Variant</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 12</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 14</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 16</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 18</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 20</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 22</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAMODH 24</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Frame (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>75*10 (Angle) & 100*50 (Channel)</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Axel (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>28 (Solid sq. Rod)</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Type Of Disc
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>
                                Notched Disc in front & Plain Disc in Rear Gang
                                of Boron Steel{" "}
                              </center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Disc Diameter (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>560*4/610*6</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Bearing Hubs
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              <center>4</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>6</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>8</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Disc Spacing(mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>228</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Width (mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>1420</td>
                            <td style={{ border: "1px black solid" }}>1630</td>
                            <td style={{ border: "1px black solid" }}>1850</td>
                            <td style={{ border: "1px black solid" }}>2060</td>
                            <td style={{ border: "1px black solid" }}>2280</td>
                            <td style={{ border: "1px black solid" }}>2500</td>
                            <td style={{ border: "1px black solid" }}>2700</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Weight (mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>400</td>
                            <td style={{ border: "1px black solid" }}>440</td>
                            <td style={{ border: "1px black solid" }}>510</td>
                            <td style={{ border: "1px black solid" }}>590</td>
                            <td style={{ border: "1px black solid" }}>620</td>
                            <td style={{ border: "1px black solid" }}>680</td>
                            <td style={{ border: "1px black solid" }}>740</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Tractor Power (HP)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              <center>35-55</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              <center>55-75</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>75-125</center>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <br />
                  </div>
                  <div class="col-lg-12 col-xl-6">
                    <div class="row">
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        Poly Disc Harrow:
                      </h2>
                      <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Harvesting/03 POLY DISC HARROW.jpg")}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="table-main">
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                <center>Variant</center>
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                <center>KAPDH 06</center>
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                <center>KAPDH 07</center>
                              </th>
                              <th style={{ border: "1px black solid" }}>
                                <center>KAPDH 08</center>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Frame (mm)
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="5"
                              >
                                <center>128 OD * 10 T Round Tubular</center>
                              </td>
                            </tr>

                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Type Of Disc
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="5"
                              >
                                <center>
                                  Boron Steel / High Carboon Steel
                                </center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Disc Diameter (mm)
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="5"
                              >
                                <center>610*6 / 660*6</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Coulter Disc (mm)
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="5"
                              >
                                <center>508*5</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Working Depth (mm)
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="5"
                              >
                                <center>150-200</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Working Width (mm)
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>1420</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>1620</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>1820</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Weight (Kg)
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>550</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>620</center>
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                <center>690</center>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Tractor Power (HP)
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="1"
                              >
                                <center>55-75</center>
                              </td>
                              <td
                                style={{ border: "1px black solid" }}
                                colspan="3"
                              >
                                <center>75-95</center>
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
export default PolyDiscHarrow;
