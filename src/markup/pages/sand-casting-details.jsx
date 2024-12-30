import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SandCasting extends Component {
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
                <h1 class="text-white">Casting Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Precision Component Development</li>
                    <li>Casting Details</li>
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
                    <p class="text-black font-weight-400">
                      We can Design , Develop & Produce Any Kind of precision
                      Components, Semi Assembly, Fully FinishedAssembly As Per
                      Customer’s Drawing Or Sample bymeans of reverse
                      engineering 2D/3D Designing, Blue Rays scanning
                      technology, 3D printer for prototype making, CAD & CAM
                      software, storage data in ERP Software for traceability
                      and record keeping.
                    </p>

                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>

                    <h4>CASTING :</h4>
                    <p class="text-black font-weight-400">
                      {" "}
                      Sand Casting • Shell Core Casting • Investment Casting •
                      Gravity Die Casting • PDC Casting Job Capacity ranging
                      from 0.100kgs to 125 kgs
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Sand Casting :
                    </h2>
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 350, width: 350 }}
                        src={require("../../images/Component/SAND CASTING.jpg")}
                      />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 350, width: 350 }}
                        src={require("../../images/Component/SAND CASTING 2.jpg")}
                      />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 350, width: 350 }}
                        src={require("../../images/Component/SAND CASTING 1.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Shell Core Casting :
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        style={{ height: 300, width: 300 }}
                        className="single_prod_img"
                        src={require("../../images/Component/CASTING.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        style={{ height: 350, width: 350 }}
                        className="single_prod_img"
                        src={require("../../images/Component/CASTING 2.jpg")}
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
                        alt=""
                        style={{ height: 350, width: 350 }}
                        className="single_prod_img"
                        src={require("../../images/Component/CASTING 1.jpg")}
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
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Gravity Casting :
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      PDC Casting :
                    </h2>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div>
                        <h2 class="text-black font-weight-600 m-b15 nana-font">
                          Investment Casting :
                        </h2>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            style={{ height: 250, width: 250 }}
                            className="single_prod_img"
                            src={require("../../images/Component/inv 1.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 250, width: 250 }}
                            src={require("../../images/Component/inv 2.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            style={{ height: 250, width: 250 }}
                            className="single_prod_img"
                            src={require("../../images/Component/inv 3.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 250, width: 250 }}
                            src={require("../../images/Component/inv 4.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 250, width: 250 }}
                            src={require("../../images/Component/inv 5.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 310, width: 310 }}
                            src={require("../../images/Component/inv 6.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            style={{ height: 270, width: 270 }}
                            className="single_prod_img"
                            src={require("../../images/Component/inv 7.jpg")}
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
                            alt=""
                            style={{ height: 275, width: 275 }}
                            className="single_prod_img"
                            src={require("../../images/Component/inv 8.jpg")}
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
                            alt=""
                            style={{ height: 300, width: 300 }}
                            className="single_prod_img"
                            src={require("../../images/Component/inv 9.jpg")}
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
                            alt=""
                            style={{ height: 350, width: 350 }}
                            className="single_prod_img"
                            src={require("../../images/Component/INVESMENT 2.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 350, width: 350 }}
                            src={require("../../images/Component/INVESTMENT 3.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 350, width: 350 }}
                            src={require("../../images/Component/INVESTMENT.jpg")}
                          />
                        </div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-center">
                          <img
                            alt=""
                            className="single_prod_img"
                            style={{ height: 350, width: 350 }}
                            src={require("../../images/Component/INVESTMENT1.jpg")}
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
export default SandCasting;
