import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class MustardOilMill extends Component {
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
                <h1 class="text-white">Mustard Oil Mill Machine</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Mustard Oil Mill Machine</li>
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
                      Mustard Oil Mill Machine:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div>
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Product Details:
                      </h3>

                      <br />

                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Minimum Order Quantity
                            </td>
                            <td style={{ border: "1px black solid" }}>1 Set</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Automation Grade
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Semi-Automatic, Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Design
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Standard
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Usage</td>
                            <td style={{ border: "1px black solid" }}>
                              Peanut Oil, Palm Fruit Oil, Sunflower Oil, Cotton
                              Seed Oil, Soybean Oil
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              1-5 ton/day, 5-20 ton/day, 20-60 ton/day, 60-100
                              ton/day, 100-200 ton/day, 80kg per hour - 5ton per
                              hour
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
                              Material
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              M.S & C.I
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="d-none d-lg-block">
                        <br />
                      </div>
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Specifications:
                      </h3>
                      <div className="d-none d-lg-block">
                        <br />
                      </div>
                      <ul className="mx-3">
                        <li>Chamber Size: 610 x 112mm</li>
                        <li>Capacity (Per Hour): 70 kg</li>
                        <li>Power Required (in B.H.P): 10H.P</li>
                        <li>Approximate Weight: 950 Kg.</li>
                        <li>Space required (For Fitting): 3 x 5 Meter</li>
                        <li>R.P.M. of main shaft: 35</li>
                        <li>R.P.M. of pulley: 175</li>
                        <li>Dia. of pulley: 56 cm</li>
                        <li>Face of Pulley: 10 cm</li>
                      </ul>
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div className="d-flex justify-content-center overflow-hidden">
                        <img
                          alt=""
                          // style={{ height: 500, width: 500 }}
                          className="single_prod_img"
                          src={require("../../images/Tender/mustard-oil-mill-500x500.jpg")}
                        />
                      </div>

                      <div class="col-md-12">
                        <p>
                          The Mustard Oil Mill Machine is known for cultivation
                          of oil seeds and extraction of oil from them form and
                          important part of Indian economy. Expellers are most
                          commonly used machines for oil extraction and are more
                          economical than Kolhus and Ghanies etc.
                        </p>
                        <div className="d-none d-lg-block">
                          <br />
                        </div>
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Features:
                        </h3>
                        <ul className="mx-3">
                          <li>Accurate dimensions</li>
                          <li>Longer service life</li>
                          <li>Efficient working</li>
                        </ul>
                        <div className="d-none d-lg-block">
                          <br />
                        </div>

                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Measurement:
                        </h3>
                        <ul className="mx-3">
                          <li>Length: 2 Meter</li>
                          <li>Breadth: 1 Meter</li>
                          <li>Height: 1.5 Meter</li>
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
export default MustardOilMill;
