import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class ColdPressOilDetails extends Component {
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
                <h1 class="text-white">Cold Press Oil Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Cold Press Oil Machine Details</li>
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
                      Cold Press Oil Machine:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Details:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
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
                            Automatic, Semi-Automatic
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Capacity
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            1-5 ton/day, 5-20 ton/day
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Usage</td>
                          <td style={{ border: "1px black solid" }}>
                            Sunflower Oil, Palm Fruit Oil, Cotton Seed Oil,
                            Peanut Oil
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
                            440 volt
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Power Consumption
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            3 Phase 2 HP
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Motor</td>
                          <td style={{ border: "1px black solid" }}>
                            1440 rpm
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      These Oil Mills uses Technique of Cold press. Mostly
                      Manufactued in South India, we are Supplier of these
                      Machines in Eastern india. Available in Different
                      Capacities and Sizes.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row d-flex justify-content-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 500, width: 500 }}
                        src={require("../../images/Tender/cold press-processing-machine-500x500.jpg")}
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
export default ColdPressOilDetails;
