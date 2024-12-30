import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SeedCleaningMachine extends Component {
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
                <h1 class="text-white">Seed Cleaning Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Other Harvesting Products</li>
                    <li>Seed Cleaning Machine Details</li>
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
                      Seed Cleaning Machine :
                    </h2>
                    <br />

                    <h3 className="nana-font">Product Details:</h3>
                    <br />
                    <table style={{ border: "1px black solid" }}>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Brand</td>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Weight</td>
                          <td style={{ border: "1px black solid" }}>1700Kg</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Type</td>
                          <td style={{ border: "1px black solid" }}>
                            Fully Automatic
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Material
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Mild Steel
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Power Source{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Electric
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Frequency
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            50-60 Hz
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Brand</td>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Phase</td>
                          <td style={{ border: "1px black solid" }}>3 Phase</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Voltage</td>
                          <td style={{ border: "1px black solid" }}>
                            220-315 V
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Power </td>
                          <td style={{ border: "1px black solid" }}>5.5 HP</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Length </td>
                          <td style={{ border: "1px black solid" }}>14 feet</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Height </td>
                          <td style={{ border: "1px black solid" }}>12 feet</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Width </td>
                          <td style={{ border: "1px black solid" }}>8 feet</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Capacity{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            1200 kg/hr
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />

                    <p>
                      We are considered to be one of the most professional
                      manufacturers and suppliers of Multi-Purpose Seed Cleaning
                      Machine. This type of cleaning machine is best suited for
                      separating out the foreign particles from almost every
                      type of grains. There are lots of models available in our
                      wide gamut of Multi-purpose Big Cleaning Machine in
                      different possible specifications. Our all the
                      manufactured cleaning machines strictly conform to the
                      industrial standards and norms. All these machines are
                      excellent in durability, high in operational fluency and
                      precise in construction.
                    </p>
                    <br />
                    <br />
                    <br />
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
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <div class="row">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <img
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/SEED CLEANING MACHINE.jpg")}
                      />
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
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
                          <div className="d-flex justify-content-center justify-content-lg-start">
                            <img
                              alt=""
                              style={{ height: "400px", width: "400px" }}
                              className="single_prod_img"
                              src={require("../../images/Harvesting/multi pupose   grain cleaning machine.jpg")}
                            />
                          </div>
                          <br />
                        </div>
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
export default SeedCleaningMachine;
