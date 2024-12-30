import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class DIEForging extends Component {
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
                <h1 class="text-white">Forging Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Precision Component Development</li>
                    <li>Forging Details</li>
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
                    {/* <h2 class="text-black font-weight-600 m-b15">Forging Details:</h2> */}

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Closed Die Forging:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Closed die forgings pounds or presses metal between two
                      dies (called tooling) that contain a precut profile of the
                      desired part. Parts from a few ounces to 50,000 lbs. can
                      be made using this process.
                    </p>
                    <p>
                      Commonly referred to as closed-die forging, impression-die
                      forging of steel, aluminum, titanium and other alloys can
                      produce an almost limitless variety of forgings. The
                      closed die forgings are routinely produced on hydraulic
                      presses, mechanical presses and hammers.
                    </p>
                    <p>
                      Most engineering metals and alloys can be forged via
                      conventional closed die processes, among them: carbon and
                      alloy steels, tool steels, and stainless, aluminum and
                      copper alloys, and certain titanium alloys. Strain-rate
                      and temperature-sensitive materials (magnesium, highly
                      alloyed nickel-based super alloys, refractory alloys and
                      some titanium alloys) may require more sophisticated
                      forging processes and/or special equipment for forging in
                      closed dies.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Open Die Forging:
                    </h2>
                    <br />
                    <p>
                      Open die forging is performed between flat dies with no
                      precut profiles is the dies. Movement of the work piece is
                      the key to this method. Larger parts can be hammered or
                      pressed into shape this way.
                    </p>
                    <p>
                      Open-die forging can produce forgings from a few pounds up
                      to more than 150 tons. This process progressively works
                      the starting stock into the desired shape, most commonly
                      between flat-faced dies. In practice, open-die forging
                      comprises many process variations, permitting an extremely
                      broad range of shapes and sizes to be produced. In fact,
                      when design criteria dictate optimum structural integrity
                      for a huge metal component, practically all forgeable
                      ferrous and non-ferrous alloys can be open-die forged.
                    </p>
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Seamless Die Forging:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Seamless rolled ring forging is typically performed by
                      punching a hole in a thick, round piece of metal (creating
                      a donut shape), and then rolling and squeezing (or in some
                      cases, pounding) the donut into a thin ring.
                    </p>
                    <p>
                      The process starts with a circular perform of metal that
                      has been previously upset and pierced (using the open die
                      forging process) to form a hollow "donut". This donut is
                      heated above the recrystallization temperature and placed
                      over the idler or mandrel roll. This idler roll then move
                      under pressure toward a drive roll that continuously
                      rotates to reduce the wall thickness, thereby increasing
                      the diameters (I.D. and O.D.) of the resulting ring.
                    </p>
                    <p>
                      High tangential strength and ductility make forged rings
                      well-suited for torque- and pressure-resistant components,
                      such as gears, engine bearings for aircraft, couplings,
                      rotor spacers, sealed discs and cases, flanges, pressure
                      vessels and valve bodies. Materials include not only
                      carbon and alloy steels, but also non-ferrous alloys of
                      aluminum, copper and titanium, as well as nickel-base
                      alloys.
                    </p>
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Cold Forging:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Most forging is done as hot work but cold forging
                      encompasses many process likes bending, cold drawing, cold
                      heading, coining, extrusions and more, to yield a diverse
                      range of part shapes. The temperature of metals being cold
                      forged may range from room temperature to several hundred
                      degrees.
                    </p>
                    <p>
                      There are times when warm forging practices are selected
                      over cold forging especially for higher carbon grades of
                      steel or where in-process anneals can be eliminated. Often
                      chosen for integral design features such as built-in
                      flanges and bosses, cold forgings are frequently used in
                      automotive steering and suspension parts, antilock-braking
                      systems, hardware, defense components, and other
                      applications where high strength, close tolerances and
                      volume production make them an economical choice.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        src={require("../../images/Component/closed-die-froging.png")}
                      />
                      <div>
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            src={require("../../images/Component/open-die-forging.png")}
                          />
                        </div>
                      </div>
                      <div>
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            src={require("../../images/Component/seamless-forging.png")}
                          />
                        </div>
                      </div>
                      <div>
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            src={require("../../images/Component/cold-forging.png")}
                          />
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
export default DIEForging;
