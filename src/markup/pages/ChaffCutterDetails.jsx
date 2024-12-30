import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class ChaffCutterDetails extends Component {
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
                <h1 class="text-white">Chaff Cutter Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Chaff Cutter Details</li>
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
                    <h2 class="text-black m-b15 nana-font">
                      Chaff Cutter Details:
                    </h2>
                    <br />

                    <table style={{ border: "1px black solid" }}>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Brand</td>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Automation Grade
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Semi-automatic
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Cutting Blade Material{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            High Carbon Steel
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <p>
                      Riding on unfathomable volumes of industrial expertise, we
                      are providing a broad array of{" "}
                      <strong>Electric Chaff Cutter.</strong>
                    </p>
                    <br />
                    <h4>Other Details:</h4>
                    <br />
                    <ul className="mx-3">
                      <li>
                        Chaff Cutter Machine Body Is made With MS Steel Material
                        So It Is Durable and Providing Long Life Duty.
                      </li>
                      <li>
                        Maximum Care IS Taken For The Safety Of operator While
                        designing the Machine.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Agriportfolio/charkho.jpeg")}
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
export default ChaffCutterDetails;
