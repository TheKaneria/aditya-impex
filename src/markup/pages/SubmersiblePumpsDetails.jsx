import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SubmersiblePumpsDetails extends Component {
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
                <h1 class="text-white">Submersible Pumps Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>SubmersiblePumpsDetails</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2 p-lg-3">
                  <div class="col-lg-6 m-b30">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Submersible Pumps Details
                    </h2>
                    <p>
                      Etting ourselves up as a major player in the industry, we
                      bring forth Submersible Pump. It is manufactured making
                      use of unmatched raw material ensuring its unrivaled
                      quality and durability. We leave no stone unturned in our
                      attempts to match our quality to the various parameters
                      and standards set by the industry. They are available at
                      economical rates. Our team of seasoned professionals takes
                      care of the designing and fabrication.
                    </p>
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Technical Specification
                    </h2>
                    <h4 class="text-black font-weight-600 m-b15">Motor :</h4>

                    <ul className="mx-3">
                      <li>
                        Body is of S.S. 304 Grade heavy duty pipe from top to
                        bottom.
                      </li>
                      <li>
                        Stator-Rotor are of imported high silicon stamping which
                        minimize the iron losses.
                      </li>
                      <li>
                        Coper strip (Rod) of Rotor is of pure E.C. Grade coper
                        as per IS std.
                      </li>
                      <li>
                        Winding wire is of tapin type having high reisting
                        insulating capacity up to 5000V.
                      </li>
                      <li>
                        Tafflon plate and S.S. Bearing as well as fibber plate &
                        Bronze bearing are used.
                      </li>
                      <li>Bushes are as per IS Std.</li>
                    </ul>
                    <p>
                      Pump (V-6) : Bowls, NRV, Suction, shaft, couple, clamping
                      strips, stud/nuts etc. Are made from S.S. 304 Grade
                      nonmagnetic noncorrosive material. This pump can be run in
                      sandy or muddy water without any wear & tear. (V-5 & V-4)
                      : Bowls made from Noryl GFN2-701 are inserted in S.S. 304
                      Grade pipe. V-4 Subersible Pumpsets are also available in
                      Brass Models (ie. NRV, Suction, Housing, Base, etc. Are
                      made from brass) Indkoyo characteristic performance
                      curves.
                    </p>
                    <ul className="mx-3">
                      <li>
                        Graph is of Head V/S discharges (H-Q). Discharge
                        fluctuate almost inversly proportionate to Head, So as
                        minor change occurs in efficiency in best performance
                        range. (ie. Discharge increases fremendously, if Head
                        reduces.)
                      </li>
                      <li>
                        Graph is of input power V/S discharge (W-Q). Slop is
                        very flat i.e. Minor increase in power consumption with
                        increases of discharge.
                      </li>
                      <li>Graph is overall efficiency V/S discharge (N-Q).</li>
                    </ul>
                    <p>
                      There is only opp. 5% fluctuation in oveall efficiency in
                      the event of 20% increase and 30% decrease in head from
                      Duty pt.
                    </p>
                    <ul className="mx-3">
                      <li>H- Total head of water in meter</li>
                      <li>N- Overall efficiency in %</li>
                      <li>Q- Discharge in Lpm.</li>
                      <li>W- Input Power in KW.</li>
                    </ul>
                    <p>
                      Conclusion : When the water level comes up, flow increases
                      much more (even in high head pump), so no need to change
                      pump.
                    </p>
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Submersible Cables:
                    </h2>
                    <br />
                    <p>
                      PVC Insulated & Sheathed Three Core Flat Cables as per IS
                      694/2010 are used to connect submersible pump motor with
                      supply lines, these cables are made keeping in mind the
                      severe operating conditions. The slot available in the
                      tube well being narrow the shape of the cables has to be
                      suited for such an application
                    </p>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      APPLICATION:
                    </h3>
                    <br />
                    <p>
                      Agriculture, Irrigation, Domestic Installation, Outdoor
                      application & Power Supply. The outer sheath of the cable
                      being made of special grade Abrasion resistant PVC makes
                      it impervious to water, grease, oil, etc making cables
                      highly durable.
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
                    </div>
                    <div class="row">
                      <div class="col-lg-12 m-b30">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img
                          alt=""
                          style={{ height: 300, width: 300 }}
                          src={require("../../images/Agriportfolio/NEW Submersible-Pump.png")}
                        />
                      </div>
                    </div>
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
                      <br />
                    </div>

                    <div class="col-lg-12 m-b30">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Agriportfolio/NEW 2 SUBMERSSIBLE PUMP.png")}
                      />
                    </div>
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
                    <div class="col-lg-12 m-b30">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Agriportfolio/submersible-water-pump-cable-500x500.jpg")}
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
export default SubmersiblePumpsDetails;
