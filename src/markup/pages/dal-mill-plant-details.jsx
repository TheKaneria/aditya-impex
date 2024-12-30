import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class DalMillPlant extends Component {
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
                <h1 class="text-white">Dal Mill Plant Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Dal Mill Plant Details</li>
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
                      Dal Mill Plant Details:
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/DAL MILL PLANT 2 copy.jpg")}
                      />
                    </div>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/download.jpeg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <p className="mt-4">
                      This Mini Dal Machine has production capacity of 500kg per
                      hour. It consists of Daal Cleaning Machine, Daal Dehusking
                      Machine and Polisher Machine. It also has 2 Nos. of
                      Elevators for Material handling. It can be used for all
                      kind of Pulses such as moong, arhar, masoor, chana, etc.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h3 className="nana-font">Product Details:</h3>
                      <br />
                      <div className="table-main">
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Minimum Order Quantity
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                1 Unit
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Type of pulses
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Moong, Masoor, Urad, Chana, Arhar
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Automation Grade
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Automatic, Semi-Automatic
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Pulses Type
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Chana, Masoor, Moong, All Kinds, Toor
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Design
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Standard
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Machines Included
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Grinding Machines, Elevator Machine, Roller
                                Machine, Polishing Machines
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Recovery of head pulses
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                80 - 90%, More than 90%
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Motor type{" "}
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Single phase, Three phase
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Motor power
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                9-12 HP, 3-6 HP, More than 12 HP, 6-9 HP, 1-3 HP
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Recovery of broken pulses
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                2-3%
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>RPM</th>
                              <td style={{ border: "1px black solid" }}>
                                Less than 400, 601-900, 401-600
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Machine Material
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Mild Steel
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Power
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                1-3 HP, 4-5 HP, 10 HP, 6-7 HP, 8-9 HP
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Power Consumption
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                3 HP, 1 HP, 2 HP
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Auxiliary
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Daal Polisher And Daal Dryer
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Cleaning capacity
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                500Kg Per Hour
                              </td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Condition
                              </th>
                              <td style={{ border: "1px black solid" }}>New</td>
                            </tr>
                            <tr>
                              <th style={{ border: "1px black solid" }}>
                                Raw Material
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                All Kinds Of Pulses
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>
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
export default DalMillPlant;
