import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/skin/skin-1.css";
import "../../css/templete.min.css";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class AllTypePowerTools extends Component {
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
                <h1 class="text-white">All Type Of Power Tools Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Workshop Machinery</li>
                    <li>All Type Of Power Tools Details</li>
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
                      All Type Of Power Tools Details:
                    </h2>
                    <br />
                    <h4>Product Specification:</h4>
                    <br />
                    <table style={{ border: "1px black solid" }}>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Usage/Application{" "}
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            Industrial
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Warranty
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            6 months
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <h4>Product Description:</h4>
                    <br />
                    <p>
                      All Power Tools. 1 Angle Grinder. 2. Drill Machine. 3.
                      Miter Saw. 4. Marbal Cutter. 5.Blower. 6.Impact Drill.
                      7.Rotary Hammer
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
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        // className="single_prod_img"
                        src={require("../../images/Workshop/powertool.jpg")}
                      />
                      <br />
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
export default AllTypePowerTools;
