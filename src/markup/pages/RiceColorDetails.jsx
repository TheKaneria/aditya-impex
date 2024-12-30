import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class RiceColorDetails extends Component {
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
                <h1 class="text-white">Rice Color Sorter Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Rice Color Sorter Machine Details</li>
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
                      Rice Color Sorter Machine Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start ">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/download1.jpeg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <h3 className="nana-font">Product Details:</h3>

                    <p>
                      We are Premium Supplier of Rice Colour Sorter Machines of
                      Many Companies like Genn, Orange, Mark, Apple, QED, etc.
                    </p>
                    <p>Available Capacity: 1 Ton - 8 Ton</p>
                    <p>
                      Other Optional Machines required for Setting up Colour
                      Sorter Machines are:
                    </p>
                    <p>
                      Air Compressors, Air Receiver, Chiller, Silos or Stoage
                      Tanks, 4 Nos. Elevators, A.C Cabin for Fitting Colour
                      Sorter Machine, etc.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
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
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Minimum Order Quantity
                            </th>
                            <td style={{ border: "1px black solid" }}>1 Set</td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Material
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              Stainless Steel
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Capacity
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              1 TPH - 8 TPH
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Usage/Application{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              for Sorting of food garins such as Rice, Pulses,
                              etc.
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Brand
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              All Indian & Chinese Brands are Available
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Model{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              As Per Company Standard Models
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Automation Grade{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              Fully Automatic
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Power{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              10HP to 60 HP
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Voltage{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              440 Volt
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              CCD Sensor{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>Yes</td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              LCD Touch Screen Interface
                            </th>
                            <td style={{ border: "1px black solid" }}>Yes</td>
                          </tr>
                        </thead>
                        <tbody></tbody>
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
export default RiceColorDetails;
