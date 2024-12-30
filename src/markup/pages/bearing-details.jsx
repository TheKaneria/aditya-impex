import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class BearingDetails extends Component {
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
                <h1 class="text-white">Bearing Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Precision Component Development</li>
                    <li>Bearing Details</li>
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
                      Bearing:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Component/BEARINGS.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <br />
                    <p>
                      Different types of Bearing Manufacturer, Exporter,
                      Supplier Likes
                    </p>
                    <ul className="mx-3 mx-md-0">
                      <li>Tapered roller bearing</li>
                      <li>Spherical roller bearing</li>
                      <li>Pillow block bearing</li>
                      <li>Thrust roller bearing</li>
                      <li>Ball bearing</li>
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
                    <div class="row d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Component/bearings-2041355.jpg")}
                      />
                      <div></div>
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
export default BearingDetails;
