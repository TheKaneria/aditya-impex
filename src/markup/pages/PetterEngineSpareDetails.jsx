import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Header from "../layout/header";
import Footer from "../layout/footer";
const bg = require("../../images/banner/bnr4.jpg");

class PetterEngineSpareDetails extends Component {
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
                <h1 class="text-white font-weight-200 m-b10">
                  Petter Type Engine Spares Details{" "}
                </h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Petter Type Engine Spares Details</li>
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
                    <h2 class="text-black font-weight-600 m-b10 nana-font">
                      Petter Type Engine Spares Details
                    </h2>
                    <br />
                    <h3 className="nana-font"> Diesel Engine Spares </h3>
                    <h6>
                      Diesel engines just like any other machine needs to
                      replace spares due to wear and tear of parts and we do
                      have solution to supply Diesel Engine spare parts for
                      Diesel Engines, Generator set , Water Pumps etc.
                    </h6>
                    <h6>
                      We can supply wide range of Petter spares and we carry a
                      stock of some old and rare spare parts like O/S 12HP,
                      14HP, 16HP, 18HP & TV-2 Engine Parts
                    </h6>
                    <h6>
                      Further we can also customize or procure diesel engine
                      parts as per your sample, design, drawing etc.
                    </h6>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <br />
                    <br />
                    <br />

                    <div class="col-lg-12 m-b30">
                      <img
                        alt=""
                        className="single_prod_img"
                        src={require("../../images/Agriportfolio/02_petter-type_engine_spares.jpg")}
                      />
                    </div>
                    <div class="col-lg-12 m-b30">
                      {/* <img alt="" src={require("../../images/portfolio/HAND DEEPWELL SPARE PARTS.jpg")}/> */}
                    </div>
                  </div>
                </div>
                <div class="row mx-3">
                  <div class="col-lg-3">
                    <ul>
                      <li>Connecting Rod</li>
                      <li>Camshaft Gears</li>
                      <li>Valve Rocker</li>
                      <li>Valve Tappet</li>
                      <li>Taper Roller Bearing</li>
                      <li>Valve Sets</li>
                      <li>Piston</li>
                      <li>Fuel Filters</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul>
                      <li>Cylinder Blocks</li>
                      <li>Crankshaft Gears</li>
                      <li>Bearings</li>
                      <li>Fuel Injections like Nozzle, Plunger, D.Valve</li>
                      <li>Exhaust Silencer</li>
                      <li>Oil Seals</li>
                      <li>Piston Rings</li>
                      <li>Fly wheel</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul>
                      <li>Cylinder Liner – Sleeves</li>
                      <li>Fuel Tanks</li>
                      <li>Liner Piston Set</li>
                      <li>Engine Valve</li>
                      <li>Crankcase</li>
                      <li>Valve Guide</li>
                      <li>Bushes</li>
                      <li>Rocker Assembly & Parts</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul>
                      <li> Cylinder heads</li>
                      <li> Camshafts</li>
                      <li> Oil Filters</li>
                      <li> Thrust Washers</li>
                      <li> Fuel Pump</li>
                      <li> Piston Pin</li>
                      <li>Air Cleaner</li>
                    </ul>
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
export default PetterEngineSpareDetails;
