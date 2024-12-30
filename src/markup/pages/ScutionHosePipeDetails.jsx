import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class ScutionHosePipeDetails extends Component {
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
                <h1 class="text-white">Suction & Delivery Hose Pipe Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Suction & Delivery Hose Pipe Details</li>
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
                    <h2 class="text-black font-weight-600 nana-font m-b15 nana-font">
                      Suction & Delivery Hose Pipe Details
                    </h2>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 300, width: 300 }}
                        className="single_prod_img"
                        src={require("../../images/Agriportfolio/pvc-flat-hose-pipe-500x500.jpg")}
                      />
                    </div>
                    <br />
                    <br />
                    <br />

                    <h3 className="nana-font">Product Details:</h3>
                    <br />
                    <table style={{ border: "1px black solid" }}>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Color</td>
                          <td style={{ border: "1px black solid" }}>Blue</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Size</td>
                          <td style={{ border: "1px black solid" }}>
                            1 inch, 3 inch, 2 inch
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Single Hose Length
                          </td>
                          <td style={{ border: "1px black solid" }}>20m-30m</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <p>
                      PVC Flat Hose is a superior replacement to conventional
                      cotton/kisan/Lapeta hose pipes. It is the first and only
                      product made in India of this kind.
                    </p>
                    <br />
                    <p>
                      Composition : The hose is composed of flexible PVC with
                      synthetic yarn reinforcement to provide extra strength.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Hose Pipe
                    </h2>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 300, width: 300 }}
                        className="single_prod_img  "
                        src={require("../../images/Agriportfolio/download3.jpeg")}
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3 className="nana-font">Product Details:</h3>

                    <br />

                    <table style={{ border: "1px black solid" }}>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Single Hose Length
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            12m-20m, 20m-30m
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>Size</td>
                          <td style={{ border: "1px black solid" }}>
                            3 inch, 2 inch, 1 inch
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <p>
                      Ideal for Light Duty collection conveying of Air, Gases,
                      Dust and Light materials. Used for conduits of air,
                      industrial ventilation, collecting dust with exhaust fans
                      in stone masoning, fiberglass, textiles, asbestos
                      processing and other industries, cooling of motors and air
                      intakes for all machineries, conveying warm air for
                      drying, vacuum cleaning equipments, air-conditions for
                      offices, kitchen-range overhead exhaust, etc.
                    </p>
                    <div class="col-lg-12 m-b30">
                      {/* <img alt="" src={require("../../images/portfolio/AFRIDEV.jpg")}/> */}
                    </div>
                    <div class="col-lg-12 m-b30">
                      {/* <img alt="" src={require("../../images/portfolio/HAND DEEPWELL SPARE PARTS.jpg")}/> */}
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
export default ScutionHosePipeDetails;
