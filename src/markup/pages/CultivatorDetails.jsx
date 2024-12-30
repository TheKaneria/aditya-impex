import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Header from "../layout/header";
import Footer from "../layout/footer";
const bg = require("../../images/banner/bnr4.jpg");

class CultivatorDetails extends Component {
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
                <h1 class="text-white">Cultivation Detail</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Pre Harvesting</li>
                    <li>Cultivation Detail</li>
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
                    {/* <h2 class="text-black font-weight-600 m-b15">Cultivation Detail</h2> */}
                    <br />

                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Rigid Cultivation
                    </h3>
                    <br />
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/RIGID CULTIVATOR copy.jpg")}
                      />
                      <br />
                      <br />
                      <br />
                    </div>

                    <p>
                      Rigid cultivator is capable to withstand tough working
                      conditions at soils. It is useful to break up hard soil
                      efficiently and uproots stubbles which leaves the ground
                      perfectly work. Also it is useful for stirring and
                      pulverizing the soil before planting.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Spring Cultivation
                    </h3>
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/SPRING CULTIVATOR copy.jpg")}
                      />

                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <p>
                      Spring cultivator is more complex in design and mainly
                      used to deliver sturdy performance at light, medium or
                      tough soil. Special type of springs help to simplify the
                      task by reducing the manual load. Owing to their design
                      structure, therse are ideal to be used in root obstructed
                      soil.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Row Crop Cultivation
                    </h3>
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/ROW CROP CULTIVATOR.jpg")}
                      />
                    </div>
                    <p>
                      Row Crop Cultivator gives a high work flow with very
                      reduced power consumption. It is capable to do quick &
                      efficient work. This Cultivator is also used as a
                      secondary source of tillage and functions by tilling the
                      soil in designated rows so as not to disturb them, The
                      main function of Row Crop Cultivator is to control weed
                      between the rows of an established crop.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
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
                    </div>
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>Variant</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KARC 09</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KARC 11</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KARC 13</center>
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
                              colspan="3"
                            >
                              <center>72*72*5 Tubular Frame</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Tines (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>25</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Shovels (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>8(EN-45)</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Width (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>1950</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>2362</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>2819</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Width (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>1805</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>2262</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>2719</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Weight (Kg)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>210</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>250</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>290</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Mounted CAT
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="3"
                            >
                              <center>CAT ||</center>
                            </td>
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
                              colspan="3"
                            >
                              <center>55-75</center>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                    </div>

                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            <center>Variant</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KASC 09</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KASC 11</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KASC 13</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Frame (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>
                              72*72*5 Tubular Frame / 50*50*10 Angle Frame
                            </center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tines (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>20(Forged)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Spring (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>9.5 WD, 50 OD, 27 Coils</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Shovels (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>8 (EN-45)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            {" "}
                            Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>1905</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>2362</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>2819</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>1805</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>2262</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>2719</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>170</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>217</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>264</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Mounted CAT
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>CAT ||</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tractor Power (HP)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="2">
                            <center>35-55</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>55-75</center>
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
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default CultivatorDetails;
