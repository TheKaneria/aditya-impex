import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class OilFilterDetails extends Component {
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
                <h1 class="text-white">Oil Filter Press Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Oil Filter Press Machine Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2">
                  <div class="col-lg-7 m-b30">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Oil Filter Press Machine :
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        // style={{ height: 500, width: 500 }}
                        className="single_prod_img"
                        src={require("../../images/Tender/oil-filter-press-machine-500x500.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <div>
                      <br />
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Product Details:
                      </h3>
                      <div className="d-none d-lg-block">
                        <br />
                      </div>
                      <div className="table-main">
                        <table style={{ border: "1px black solid" }}>
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Minimum Order Quantity
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                1 Unit
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Condition
                              </td>
                              <td style={{ border: "1px black solid" }}>New</td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Automatic Grade
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Semi-Automatic,Automatic
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Design
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                Standard
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Capacity
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                20kg Per Hour - 2 Ton Per Hour
                              </td>
                            </tr>
                            <tr>
                              <td style={{ border: "1px black solid" }}>
                                Voltage (V)
                              </td>
                              <td style={{ border: "1px black solid" }}>
                                220 Volt/ 440 Volt
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Unmatchable quality of Oil Filter Press Machine is offer
                      by our company. This Oil Filter Press Machine is known for
                      its high durable nature and high performance. Oil Filter
                      Press Machine is extensively used for transfer of oil from
                      storage tank to filter press.
                    </p>
                  </div>
                  <div className="col-lg-5 m-b30">
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Specifications:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            <center>Particulars in mm</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>Particulars in inches</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>No. of Plates</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>Type</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>305x305</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>12 x 12</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>12</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>355x355</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>14 x 14</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>14</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>406x406</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>16 x 16</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>16</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>457x457</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>18 x18</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>18</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>508x508</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>20 x 20</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>20</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>610x610</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>24 x 24</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>24</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>610x610</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>24 x 24</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>30</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>762x762</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>30 x 30</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>30</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>915x915</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>36 x 36</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>36</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>Recess</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>610x610</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>24 x 24</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>24</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>23 Frame</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>762x762</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>30 x 30</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>30</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>29 Frame</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            <center>915x915</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>36 x 36</center>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <cenetr>36</cenetr>
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>35 Frame</center>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <div class="col-lg-6">
                      <h3 class="text-black font-weight-600 m-b15 nana-font">
                        Features:
                      </h3>

                      <ul className="mx-3">
                        <li>Low maintenance</li>
                        <li>Efficient working</li>
                        <li>Highly demanded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer hideContactInfo displayNewsLetter />
      </>
    );
  }
}
export default OilFilterDetails;
