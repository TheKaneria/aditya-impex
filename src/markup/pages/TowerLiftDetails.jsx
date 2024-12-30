import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class TowerLiftDetails extends Component {
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
                <h1 class="text-white">Tower Hoist Lift Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Tower Hoist Lift Details</li>
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
                      Tower Hoist Lift Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h4 class="text-black font-weight-600 m-b15">
                      Product Description
                    </h4>
                    <br />
                    <p>
                      Owing to the dedication of our diligent professionals, we
                      have earned a reputed name in manufacturing and supplying
                      the finest quality assortment of Column Type Tower Hoist.
                      Under the vigilance of skilled professionals, this machine
                      lift is manufactured using quality tested components and
                      modern technology. Widely known for various quality
                      attributes, this machine lift is available at nominal
                      prices. Used to mix the concrete effectively and properly,
                      this machine lift is available in different sizes and
                      specifications.
                    </p>
                    <br />
                    <h4 class="text-black font-weight-600 m-b15">Features</h4>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <ul className="mx-3">
                      <li>Rugged construction</li>
                      <li>Dimensionally stable</li>
                      <li>Easy installation</li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="row d-flex justify-content-center justify-content-lg-start">
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Construction/download1.jpeg")}
                        />
                      </div>
                      <br />
                      <br />
                      <h4 class="text-black font-weight-600 m-b15">
                        Product Specification
                      </h4>
                      <br />
                      <table style={{ border: "1px black solid" }}>
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Chain Length{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              2-4 (m)
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Brand</td>
                            <td style={{ border: "1px black solid" }}>
                              Aditya
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Trolley Option
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              With Trolley
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Usage/Application
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Construction
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Load Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              1-3 ton
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Minimum Order Quantity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              01 Piece
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
export default TowerLiftDetails;
