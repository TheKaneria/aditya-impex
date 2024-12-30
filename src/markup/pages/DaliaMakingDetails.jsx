import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Header from "../layout/header";
import Footer from "../layout/footer";
const bg = require("../../images/banner/bnr4.jpg");

class DaliaMakingDetails extends Component {
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
                <h1 class="text-white">Dalia Making Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Dalia Making Machine Details</li>
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
                      Dalia Making Machine Details:
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-xl-start">
                      <img
                        alt=""
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/dalia-making.jpg")}
                      />
                    </div>
                    <br />
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Details:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <p>
                      Daliya making Machine are used for making Daliya from
                      Wheat. It consists of a Wheat grinding MAchine and a Atta
                      Chalna Machine. Its avilable in different capacities
                      starting from 50kg per hour to 500kg per hour.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Minimum Order Quantity
                            </td>
                            <td style={{ border: "1px black solid" }}>1 Set</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Power</td>
                            <td style={{ border: "1px black solid" }}>2 hp</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              100kg - 1000kg per hour
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Installation Services Required(Y/N)
                            </td>
                            <td style={{ border: "1px black solid" }}>Yes</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Operation Mode{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Semi-Automatic
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Design
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Standard,Customized
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity (kg/hr){" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              100-150,150-200,0-50,50-100,200-250
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Use</td>
                            <td style={{ border: "1px black solid" }}>
                              Commercial
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Capacity (ton per day){" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              20 - 39,5 - 9,40 - 100,10 - 19,0 - 4
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Weight
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              750 kg
                            </td>
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
export default DaliaMakingDetails;
