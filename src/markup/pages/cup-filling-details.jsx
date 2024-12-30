import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class CupFilling extends Component {
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
                <h1 class="text-white">
                  Cup Filling & Sealing Machine Details
                </h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Cup Filling & Sealing Machine Details</li>
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
                      Cup Filling & Sealing Machine Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div class="d-flex justify-content-center">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/download (3).jpeg")}
                      />
                    </div>
                    <br />
                    <h3 className="nana-font">Product Details:</h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>Brand</th>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            Automation Grade
                          </th>
                          <td style={{ border: "1px black solid" }}>
                            Automatic
                          </td>
                        </tr>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            Material
                          </th>
                          <td style={{ border: "1px black solid" }}>
                            Mild Steel
                          </td>
                        </tr>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            Voltage (V)
                          </th>
                          <td style={{ border: "1px black solid" }}>220</td>
                        </tr>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            Usage/Application
                          </th>
                          <td style={{ border: "1px black solid" }}>
                            Industrial
                          </td>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h3 className="fs-4">
                        Fully AutomaticTray Sealing MachineVP
                        600-Vacuum/GasFlush(MAP)/Skin Packing
                      </h3>
                      <br />
                      <br />
                      <h3 className="nana-font">Applications:</h3>
                      <br />
                      <p>
                        Online Meal Packing,Sweets Packing MAP,Ready made
                        Meals,Salads Packing etc.
                      </p>
                      <br />
                      <h3 className="nana-font">Features:</h3>
                      <br />
                      <p>
                        Output : 1000 - 5000 Trays/hr Sturdy construction with
                        stainless steel cover Vacuum with Gas Flushing /Gas
                        Flushing funciton selection Heating element with teflon
                        coating and AL anodized Quick interchangeable mould /
                        sealing tool design Fully safety guard defense for
                        security Accurate film rewinding system design Film feed
                        controlled by sensor, encorder, or time (available for
                        plain film and printed film
                      </p>
                      <br />
                      <h3 className="nana-font">MAP Result:</h3>
                      <br />
                      <p>
                        Inert gases: nitrogen, carbon dioxide, noble gases
                        Option residual oxygen level:achieved up to 0.1%
                      </p>
                      <br />
                      <div class="col-lg-6">
                        <h3 className="nana-font">Optional Function:</h3>

                        <ul className="mx-3">
                          <li>1.Vacuum + Gas flushing(MAP)</li>
                          <li>2.Gas flushing(MAP) only</li>
                          <li>3.Inside cutting</li>
                          <li>4.Skin pack</li>
                          <li>5.UV light sterilizer</li>
                        </ul>
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
export default CupFilling;
