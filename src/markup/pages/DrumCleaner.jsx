import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class DrumCleaner extends Component {
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
                <h1 class="text-white">Drum Cleaner Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Other Harvesting Products</li>
                    <li>Drum Cleaner Machine Details</li>
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
                      Drum Cleaner Machine:
                    </h2>

                    <h3 className="nana-font">Product Details:</h3>
                    <br />

                    <table style={{ border: "1px black solid" }}>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Material
                          </td>
                          <td style={{ border: "1px black solid" }}>Steel</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Brand</td>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Capacity
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            2 Ton TO 40 Ton
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Model Number/Name{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>Various</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Usage/Application
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Pre Cleaning & Grading
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Voltage</td>
                          <td style={{ border: "1px black solid" }}>220 V</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Motor power
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            1 hp to 3 hp
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />

                    <p>
                      We are Manufacturer and exporter of Drum Cleaner These
                      Drum Cleaner and also enabled with inbuilt special rotary
                      sieves which offer high quality grading of various seeds
                      and food grains.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row d-flex justify-content-center">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/drum-cleaner-vibratory-separator-500x500.jpg")}
                      />
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
export default DrumCleaner;
