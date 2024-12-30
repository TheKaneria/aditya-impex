import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class BarStock extends Component {
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
                <h1 class="text-white">Bar Stock Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Precision Component Development</li>
                    <li>Bar Stock Details</li>
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
                      Bar Stock Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>

                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        alt=""
                        src={require("../../images/Component/bar_stock_components.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        alt=""
                        src={require("../../images/Component/BIG.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <p>
                      Bar Stock is widely used in many industries and can be
                      seen in many different industrial processes. These
                      processes include forging, extrusion, machining, and many
                      more. In Forging, billets are heated to high temperatures
                      before a press pushes the work piece into the shape on the
                      die.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Ring Rolling Details:
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
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
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
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      High tangential strength and ductility make forged rings
                      well-suited for torque- and pressure-resistant components,
                      such as gears, engine bearings for aircraft, couplings,
                      rotor spacers, sealed discs and cases, flanges, pressure
                      vessels and valve bodies. Materials include not only
                      carbon and alloy steels, but also nonferrous alloys of
                      aluminum, copper and titanium, as well as nickel-base
                      alloys.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        Carbon Steel Details:
                      </h2>
                      <br />
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Carbon Steel Forging Options:
                      </h3>

                      <p>
                        Depending on your project needs there is a wide range of
                        available options when it comes to carbon steel grades.
                        All four grades can be heat treated to improve their
                        machinability, strength, and ductility. Our carbon steel
                        forging options include:
                      </p>
                      <br />
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Medium Carbon Steel:
                      </h3>
                      <p>
                        Medium grade carbon steel has approximately 0.29% to
                        0.54% carbon content with 0.60 to 1.65% manganese
                        content (e.g. AISI 1045 steel). This grade balances
                        ductility and strength and has good wear resistance; it
                        used for large parts, forging and car parts.
                      </p>
                      <br />
                      <div>
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Carbon Steel Grades:
                        </h3>
                      </div>
                      <div class="col-lg-6">
                        <ul className="mx-3">
                          <li>1030</li>
                          <li>1045</li>
                          <li>1117</li>
                        </ul>
                        <div className="d-none d-lg-block">
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <h2 class="text-black font-weight-600 m-b15 nana-font">
                          Alloy Steel Details:
                        </h2>
                      </div>

                      <br></br>

                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Alloy Steel Forgings
                      </h3>
                      <p>
                        Forged alloy steel is a steel that has had small amounts
                        of one or more alloying elements, other than carbon,
                        added to its overall content. These added elements can
                        include manganese, silicon, nickel, titanium, copper,
                        chromium, aluminum and more. These added elements create
                        specific properties for forgings that are not found in
                        regular carbon steel forgings. In addition, alloy steels
                        have become increasingly popular due to their
                        availability, lower economical cost, excellent
                        mechanical properties and ease of processing.
                      </p>

                      <br />

                      <p>
                        If you have any questions regarding custom alloy steel
                        forging contact us, or request a quote for an in-depth
                        price analysis.
                      </p>
                      <br />

                      <div class="col-lg-6 m-b30">
                        <h3 class="text-black font-weight-600 m-b15 nana-font">
                          Alloy Steel Grades
                        </h3>

                        <ul className="mx-3">
                          <li>4130</li>
                          <li>4140</li>
                          <li>4150</li>
                          <li>4340</li>
                          <li>4340AQ</li>
                          <li>A105</li>
                          <li>A182F22</li>
                          <li>A350LF2</li>
                          <li>Nitralloy 135MOD</li>
                        </ul>
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
                      </div>

                      {/* <div>
                        <h2 class="text-black font-weight-600 m-b15">
                          Non Alloy Steel Details:
                        </h2>
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
export default BarStock;
