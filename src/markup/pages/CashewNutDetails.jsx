import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class CashewNutDetails extends Component {
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
                <h1 class="text-white">Cashew Nut Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Cashew Nut Machine Details</li>
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
                      Cashew Nut Machine Details:
                    </h2>
                    <div className="d-flex justify-content-center justify-content-lg-start ">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/CASHEW NUT MACHINE PHOTO.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <h3 className="nana-font">Product Details:</h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      We provide turnkey project starting with 320kg, 640kg,
                      1000kg , 2000kg & 4000kg raw cashew nuts processing per
                      shift. We gives complete training & installation services
                      to our customer free of cost. We guide our customer in A
                      to Z things of starting cashew processing business in
                      India and abroad. We have supply more than 250 projects in
                      last 5 years. We are the leading mfg. Of cashew processing
                      plant and machinery in India.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Minimum Order Quantity
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              1 Piece
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Automatic Grade
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              Semi-Automatic, Automatic
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Capacity (kg/hr)
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              50/hour
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Brand
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              Aditya
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Voltage(V)
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              220-420V
                            </td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Power(KW){" "}
                            </th>
                            <td style={{ border: "1px black solid" }}>20</td>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px black solid",
                                paddingLeft: "1rem",
                              }}
                            >
                              Shelling Capacity(Kg/hr)
                            </th>
                            <td style={{ border: "1px black solid" }}>
                              20, 25
                            </td>
                          </tr>
                        </thead>
                        <tbody></tbody>
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
export default CashewNutDetails;
