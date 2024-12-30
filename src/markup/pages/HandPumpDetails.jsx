import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class HandPumpDetails extends Component {
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
                <h1 class="text-white">Deepwell & Treadle Pump Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Deepwell & Treadle Pump Deatils</li>
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
                    <h2 class="text-black font-weight-600 m-b15 nana-font ">
                      Deepwell & Treadle Pump:
                    </h2>
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Salient Features & Technical Details:
                    </h2>
                    <br />
                    <ul className="mx-3">
                      <li>
                        Development of a sturdy and reliable community workshops
                        at low cost.
                      </li>
                      <li>
                        Fully fabricated steel structure (duly hot dip
                        galvanized) makes the above ground portion of pump very
                        sturdy and corrosion resistant.
                      </li>
                      <li>
                        Capable of drawing water from 5 to 90 meters operating
                        depths.
                      </li>
                      <li>
                        Reducing pumping effort to minimize the burden on women.
                      </li>
                      <li>
                        Easy installation and inexpensive maintenance at village
                        level, with little training.
                      </li>
                      <li>Suitable for open well installation.</li>
                      <li>Easy availability of spare parts.</li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Treadle Pump Details:
                    </h2>
                    <br />
                    <p>
                      The MoneyMaker Max Pump is a low-cost, human-powered
                      treadle pump designed by KickStart International for use
                      in irrigation by small scale farmers. KickStart aims to
                      help small-holder farmers to start family enterprises
                      using these pumps, thereby enabling the farmers to lift
                      their families out of poverty.
                    </p>
                    <br />
                    <h3 className="nana-font">Competitive landscape</h3>
                    <br />
                    <p>
                      Rock Water Pump, Vergnet-Hydro 60-2000 Pum Target user(s)
                      Small-scale farmers.
                    </p>
                    <br />
                    <h3 className="nana-font">
                      Distributors/implementing organizations
                    </h3>

                    <p>
                      In the countries surrounding each hub, KickStart maintains
                      a lighter staff footprint and works through networks of
                      partners and distributors that include: NGOs, Governments,
                      Churches, Farmer Organisations, UN Agencies and Bodies,
                      Agricultural dealers and local distributors.
                    </p>

                    <p>Aditya brand is a major distributor of the pump</p>
                    <br />
                    <h3 className="nana-font">Manufacturing/building method</h3>
                    <br />
                    <p>
                      Mass produced. KickStart uses an intermediary QC and
                      sourcing company in China to meet goals to reduce cost,
                      control quality, and expedite supply chain management.
                    </p>

                    <div class="col-lg-12 m-b30  d-flex d-lg-block justify-content-center align-self-center ">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 500, width: 500 }}
                        src={require("../../images/Agriportfolio/AFRIDEV.jpg")}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <br />
                    <div class="row">
                      <div class="col-lg-12 m-b30  d-flex d-lg-block justify-content-center align-self-center">
                        <img
                          alt=""
                          className="single_prod_img"
                          style={{ height: "500px", width: "500px" }}
                          src={require("../../images/Agriportfolio/INDIA MARK -2.jpg")}
                        />
                      </div>
                      <div class="col-lg-12 m-b30  d-flex d-lg-block justify-content-center align-self-center">
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <img
                          alt=""
                          className="single_prod_img"
                          style={{ height: "500px", width: "500px" }}
                          src={require("../../images/Agriportfolio/treadle-pump.jpg")}
                        />
                      </div>
                      {/* <div class="col-lg-12 m-b30">
                                                <img alt="" src={require("../../images/portfolio/HAND DEEPWELL SPARE PARTS.jpg")}/>
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
export default HandPumpDetails;
