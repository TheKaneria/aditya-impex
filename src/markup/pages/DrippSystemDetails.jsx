import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class DrippSystemDetails extends Component {
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
                <h1 class="text-white">Dripp Irrigation System Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Post Harvesting</li>
                    <li>Dripp Irrigation System Details</li>
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
                      Dripp Irrigation System Details:
                    </h2>
                    <br />

                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Harvesting/01 DRIPP IRRIGATION SYSTEM PHOTOS 3.jpg")}
                      />
                    </div>
                    <br />
                    <br />

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      What is drip irrigation?
                    </h2>

                    <p>
                      Drip irrigation is the most efficient water and nutrient
                      delivery system for growing crops. It delivers water and
                      nutrients directly to the plant’s roots zone, in the right
                      amounts, at the right time, so each plant gets exactly
                      what it needs, when it needs it, to grow optimally. Thanks
                      to drip irrigation, farmers can produce higher yields
                      while saving on water as well as fertilizers, energy and
                      even crop protection products.
                    </p>
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      How does it work?
                    </h2>
                    <p>
                      Water and nutrients are delivered across the field in
                      pipes called ‘dripperlines’ featuring smaller units known
                      as ‘drippers’. Each dripper emits drops containing water
                      and fertilizers, resulting in the uniform application of
                      water and nutrients direct to each plant's root zone,
                      across an entire field.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        Why do farmers prefer drip irrigation?
                      </h2>

                      <p>
                        The reason is simple. Drip Irrigation not only delivers
                        greater ROI compared to other of irrigation methods, it
                        also gives farmers an efficient and simple way to
                        operate their farms.
                      </p>
                      <ul className="mx-3">
                        <li>Higher consistent quality yields</li>
                        <li>
                          Huge water savings: no evaporation, no run off, no
                          waste
                        </li>
                        <li>
                          100% land utilization - drip irrigates uniformly in
                          any topography and soil type
                        </li>
                        <li>
                          Energy savings: drip irrigation works on low pressure
                        </li>
                        <li>
                          Efficient use of fertilizer and crop protection, with
                          no leaching
                        </li>
                        <li>
                          Less dependency on weather, greater stability and
                          lower risks
                        </li>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                        </div>
                      </ul>
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        Why the world needs drip irrigation?
                      </h2>
                      <p>
                        By 2050, there’ll be 10 billion people living on our
                        planet, and 20% less arable land per person to grow
                        enough calories. Include increasing water scarcity, and
                        it’s clear why we need a way to increase agricultural
                        productivity and resource efficiency. That’s where drip
                        irrigation fits in, changing the economics of global
                        agriculture by allowing farmers to produce more calories
                        per hectare and cubic meter of water.
                      </p>
                      <ul className="mx-3">
                        <li>
                          Reduce impact of drought and climate change on food
                          production
                        </li>
                        <li>
                          Avoid contamination of ground water and rivers caused
                          by fertilizer leaching
                        </li>
                        <li>
                          Support rural communities, reduce poverty, reduce
                          migration to cities
                        </li>
                      </ul>
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
export default DrippSystemDetails;
