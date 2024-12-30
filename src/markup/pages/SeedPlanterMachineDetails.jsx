import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";

const bg = require("../../images/banner/bnr4.jpg");

class SeedPlanterMachineDetails extends Component {
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
                <h1 class="text-white">Seed Planter Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Pre Harvesting </li>
                    <li>Seed Planter Machine Details</li>
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
                      Riding Seed Planter:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/08 SEED PLANTER.jpg")}
                      />
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
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Walking Seed Planter:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/SEED PLANTER WALKING.jpg")}
                      />
                    </div>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <br />
                    <br />
                    <br />
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Description
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              KART - 8
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              NO. OF ROWS
                            </td>
                            <td style={{ border: "1px black solid" }}>8</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              ENGINE TYPE
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Air Cooled Diesel Engine
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              TANK CAPACITY(ltr)
                            </td>
                            <td style={{ border: "1px black solid" }}>4</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              ROW SPACING(mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>238</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PLANTING SPEED(m/s)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              0.44 - 0.54 m/s
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              LENGTH(mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>2500</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              WIDTH(mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>2131</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              HEIGHT(mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>1300</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              WORKING WIDTH(mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>220</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              RATED SPEED
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              2600 RPM
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              WEIGHT(kg.APP.)
                            </td>
                            <td style={{ border: "1px black solid" }}>305</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              TRACTOR POWER(HP)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              7.5 HP Engine
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
                    </div>
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Description
                          </th>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            KART - 8
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            NO. OF ROWS
                          </td>
                          <td style={{ border: "1px black solid" }}>4</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            ENGINE TYPE
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Air Cooled Petrol Engine
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            TANK CAPACITY(ltr)
                          </td>
                          <td style={{ border: "1px black solid" }}>4</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            FUEL EFFICIENCY
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            2.0 - 4.7 Kg/Ha
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            ROW SPACING(mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>300 mm</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            PLANTING SPEED(m/s)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            0.34 - 0.77 m/s
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            LENGTH(mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>2140</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            WIDTH(mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>1630</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            HEIGHT(mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>910</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            WORKING WIDTH(mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>170</td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            WEIGHT(kg.APP.)
                          </td>
                          <td style={{ border: "1px black solid" }}>160</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            TRACTOR POWER(HP)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            7.5 HP Engine
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
        <Footer />
      </>
    );
  }
}
export default SeedPlanterMachineDetails;
