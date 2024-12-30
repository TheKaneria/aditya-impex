import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class HydraulicDetails extends Component {
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
                <h1 class="text-white">Hydraulic Mixer Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Hydraulic Mixer Details</li>
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
                      Hydraulic Mixer Details:
                    </h2>
                    {/* <img alt=""style={{height: 400, width: 400 }} src={require("../../images/Aditya impex Jpg/concrete-mixers-machine-500x500.jpg")}/> */}

                    <br />
                    <p>
                      We are the name to reckon with bulk orders of Hydraulic
                      Concrete Mixer from Gujarat, India. We are one of the most
                      celebrated manufacturers, exporters and suppliers of
                      Hydraulic Concrete Mixer, and we have maintained our
                      reputation in the mar, and our distinct range of mixers is
                      processed using high-grade raw materials, and
                      quality-tested to deliver the perfect range. The Hydraulic
                      Concrete Mixer promises longer functional life, hasslefree
                      performance, and superior strket as we offer high-quality
                      products. The Hydraulic Concrete Mixer .
                    </p>
                  </div>

                  <div class="col-lg-6">
                    <br />
                    <div class="row d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Construction/concrete-mixers-machine-500x500.jpg")}
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
export default HydraulicDetails;
