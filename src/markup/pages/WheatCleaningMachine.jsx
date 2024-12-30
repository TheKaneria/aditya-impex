import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class WheatCleaningMachine extends Component {
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
                <h1 class="text-white">Wheat Cleaning Machine Details:</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Other Harvesting Products</li>
                    <li>Wheat Cleaning Machine Details:</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2">
                  <div class="col-lg-6 m-b30 ">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Wheat Cleaning Machine:
                    </h2>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/02 GRAIN CLEANING MACHINE 1.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>

                    <h3 className="nana-font">Product Details:</h3>

                    <p>
                      We are master in presenting a wide range of customized and
                      quality assured Wheat Cleaning Machine. Less maintenance
                      is required in our Wheat Cleaning Machine. Also, we
                      manufacture this Machines by using cutting edge technology
                      and qualitative components.
                    </p>
                    <br />

                    <h3 className="nana-font">Features:</h3>
                    <ul className="mx-3">
                      <li>Easy installation</li>
                      <li>Efficient working</li>
                      <li>Light weight</li>
                    </ul>
                  </div>

                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Minimum Order Quantity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              1 Piece
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Motor Power
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              1.5-6 HP
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Use</td>
                            <td style={{ border: "1px black solid" }}>
                              Commercial
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Type </td>
                            <td style={{ border: "1px black solid" }}>
                              Semi-Automatic,Fully Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              100-200 (kg/hr)
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Brand</td>
                            <td style={{ border: "1px black solid" }}>
                              Aditya
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Operation Mode
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity ( ton per day)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              40 to 100,20 to 39
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Power Rating
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              11-15 HP,1-5 HP,6-10 HP
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Condition
                            </td>
                            <td style={{ border: "1px black solid" }}>New</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Voltage (V)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              440volt
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Automation Grade
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Color</td>
                            <td style={{ border: "1px black solid" }}>Metal</td>
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

        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default WheatCleaningMachine;
