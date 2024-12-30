import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class CpvcPipeDetails extends Component {
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
                  CPVC & Galvanized Pipes And Fittings Details
                </h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>CPVC & Galvanized Pipes And Fittings Details</li>
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
                      CPVC & Galvanized Pipes And Fittings Details:
                    </h2>
                    <br />
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Pipe Fittings made from Stainless Steel:
                    </h3>
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Galvanized Pipes:
                    </h2>
                    <br />

                    <div class="col-lg-12 m-b30 d-flex d-md-block justify-content-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 400, width: 400 }}
                        src={require("../../images/Agriportfolio/COL PIPE 2.png")}
                      />
                    </div>
                    <br />

                    <ul className="mx-3">
                      <li>Half Socket</li>
                      <li>Welding Nipple</li>
                      <li>Barrel Nipple</li>
                      <li>Straight Nipple</li>
                      <li>Hexagonal Nut</li>
                      <li>Double Nipple</li>
                      <li>Cap</li>
                      <li>Bushing</li>
                      <li>Reducing Nipple</li>
                      <li>Reducing Socket</li>
                      <li>Tee</li>
                      <li>Elbow</li>
                      <li>Street Elbow</li>
                      <li>Hexagonal Plug</li>
                      <li>Square Head Plug</li>
                      <li>Hose Nipple - Hexagonal Catch</li>
                      <li>Hose Nipple for Welding</li>
                      <li>Hose Nipple</li>
                      <li>Coupling, conical seat</li>
                      <li>Coupling, flat seat</li>
                      <li>Collar</li>
                    </ul>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Machined from:
                    </h3>
                    <ul className="mx-3">
                      <li>Hexagonal or Round Bar Stock</li>
                      <li>Forgings</li>
                      <li>Investment Casting</li>
                    </ul>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Threading:
                    </h3>
                    <ul className="mx-3">
                      <li>Withworth, NPT, NPTF, API, PS, PG</li>
                    </ul>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Material Approval:
                    </h3>
                    <ul className="mx-3">
                      <li>AD2000 and PED 97/23/EC, wherever applicable.</li>
                    </ul>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Pipe Fittings from Gunmetal Castings & SS Investment
                      Castings:
                    </h3>
                    <ul className="mx-3">
                      <li>Swivel Stub Assembly</li>
                      <li>Weld Stub Assembly</li>
                      <li>Lug Nuts</li>
                      <li>Connectors</li>
                      <li>Plugs</li>
                      <li>Hex Male</li>
                      <li>Female Liner</li>
                    </ul>

                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>

                    <div class="col-lg-12 m-b30">
                      {/* <img alt="" src={require("../../images/PVC-PIPE/COL PIPE 1.png")}/> */}
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        PVC Pipes & Fittings:
                      </h2>
                      <br />
                      <div class="col-lg-12 m-b30 d-flex justify-content-center">
                        <img
                          alt=""
                          className="single_prod_img"
                          style={{ height: 400, width: 400 }}
                          src={require("../../images/Agriportfolio/CPVC PIPE FITTING.jpg")}
                        />
                      </div>
                      <br />
                      <h3 class="text-black font-weight-600 m-b15">
                        Product Details:
                      </h3>
                      <br />
                      <table style={{ border: "1px black solid" }}>
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Single Hose Length{" "}
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
                        industrial ventilation, collecting dust with exhaust
                        fans in stone masoning, fiberglass, textiles, asbestos
                        processing and other industries, cooling of motors and
                        air intakes for all machineries, conveying warm air for
                        drying, vacuum cleaning equipments, air-conditions for
                        offices, kitchen-range overhead exhaust, etc
                      </p>

                      {/* <div class="col-lg-12 m-b30">
                                                <img alt="" src={require("../../images/PVC-PIPE/COL PIPE 2.png")}/>
                                            </div> */}
                      {/* <div class="col-lg-12 m-b30"> */}
                      {/* <img alt="" src={require("../../images/PVC-PIPE/COL PIPE.jpg")}/> */}
                      {/* </div> */}
                      {/* <div class="col-lg-12 m-b30">
                                                <img alt="" src={require("../../images/PVC-PIPE/CPVC PIPE FITTING 2.jpg")}/>
                                            </div> */}
                      {/* <div class="col-lg-12 m-b30">
                                                <img alt="" src={require("../../images/PVC-PIPE/CPVC PIPE FITTING.jpg")}/>
                                            </div> */}
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
export default CpvcPipeDetails;
