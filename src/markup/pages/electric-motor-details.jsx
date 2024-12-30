import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class ElectricMotor extends Component {
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
                <h1 class="text-white">Electric Motor Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Workshop Machinery</li>
                    <li>Electric Motor Details</li>
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
                      Electric Motor Details:
                    </h2>

                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Workshop/download3.jpeg")}
                      />
                    </div>
                    <br />
                    <p>
                      “ADITYA IMPEX’make Electric motors such are divided in
                      various category as induction motors, single phase, three
                      phase motors from 0.5 H.P to 20 H.P AC Induction motors
                      available with us are being largely used in various types
                      of applications like pumps, compressors, fans, blowers,
                      lathe machines, plastic & textile machinery, cement
                      plants, flour mills and paper mills etc. Backed by a team
                      of skilled professionals, our company is involved in the
                      manufacture and supply of a gigantic compilation of
                      Electric Motor. Manufactured in adherence to the present
                      industry guidelines, these efficient and sturdily
                      constructed motors are immensely popular for their
                      reliable operation and low maintenance. Clients can obtain
                      these at industry leading costs
                    </p>

                    <br />
                    <p>All dimensions are in mm.</p>
                    <p>
                      Available with 720 R.P.M., 960 R.P.M., 1440 R.P.M, 2800
                      R.P.M.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th
                              style={{ border: "1px black solid" }}
                              rowspan="2"
                            >
                              HP
                            </th>
                            <th
                              style={{ border: "1px black solid" }}
                              rowspan="2"
                            >
                              PHAS E
                            </th>
                            <th
                              style={{ border: "1px black solid" }}
                              rowspan="2"
                            >
                              K.W
                            </th>
                            <th
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              SHAFTDIAMETER
                            </th>
                            <th
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              APPROX WT.KG.
                            </th>
                          </tr>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              E Class
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              A Class
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              E Class
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              A Class
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>0.18</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>0.13</td>
                            <td style={{ border: "1px black solid" }}>11</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>8</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>0.25</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>0.18</td>
                            <td style={{ border: "1px black solid" }}>14</td>
                            <td style={{ border: "1px black solid" }}>14</td>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>11</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>0.5</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>0.37</td>
                            <td style={{ border: "1px black solid" }}>14</td>
                            <td style={{ border: "1px black solid" }}>19</td>
                            <td style={{ border: "1px black solid" }}>11</td>
                            <td style={{ border: "1px black solid" }}>13</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>0.75</td>
                            <td style={{ border: "1px black solid" }}>19</td>
                            <td style={{ border: "1px black solid" }}>24</td>
                            <td style={{ border: "1px black solid" }}>17</td>
                            <td style={{ border: "1px black solid" }}>19</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>1.5</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>1.1 </td>
                            <td style={{ border: "1px black solid" }}>24</td>
                            <td style={{ border: "1px black solid" }}>24</td>
                            <td style={{ border: "1px black solid" }}>19</td>
                            <td style={{ border: "1px black solid" }}>22</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>1.5</td>
                            <td style={{ border: "1px black solid" }}>24</td>
                            <td style={{ border: "1px black solid" }}>28</td>
                            <td style={{ border: "1px black solid" }}>22</td>
                            <td style={{ border: "1px black solid" }}>28</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>2.2</td>
                            <td style={{ border: "1px black solid" }}>28</td>
                            <td style={{ border: "1px black solid" }}>28</td>
                            <td style={{ border: "1px black solid" }}>29</td>
                            <td style={{ border: "1px black solid" }}>33</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>3.7</td>
                            <td style={{ border: "1px black solid" }}>28</td>
                            <td style={{ border: "1px black solid" }}>38</td>
                            <td style={{ border: "1px black solid" }}>40</td>
                            <td style={{ border: "1px black solid" }}>55</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>7.5</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>5.5</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>38</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>65</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>7.5 </td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>38</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>72</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>12.5</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>9.3</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>38</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>75</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>15</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>11</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>42</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>115</td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>20</td>
                            <td style={{ border: "1px black solid" }}>3</td>
                            <td style={{ border: "1px black solid" }}>15</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>42</td>
                            <td style={{ border: "1px black solid" }}>-</td>
                            <td style={{ border: "1px black solid" }}>130</td>
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
export default ElectricMotor;
