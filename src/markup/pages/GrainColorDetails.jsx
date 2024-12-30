import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class GrainColorDetails extends Component {
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
                <h1 class="text-white">Grain Color Sorter Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Grain Color Sorter Machine Details</li>
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
                      Grain Color Sorter Machine Details:
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
                        src={require("../../images/Food_PortFolio/grain-color-sorter-500x500.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                    <h3 className="nana-font">Product Details:</h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Pulses Sorter machine is used for Colour Corting of
                      Pulses. Theses colour sorting Machines are used in
                      capacities starting 500kg per hour to 10 Ton Per Hour.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br /> <br /> <br /> <br /> <br /> <br />
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
                            <td style={{ border: "1px black solid" }}>
                              1 Unit
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Channel/Frame{" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>40/60</td>
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
                              0.4 to 1 t/hr
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              CCD Sensor
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
                              230 V AC, 50 Hz
                            </td>
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
export default GrainColorDetails;
