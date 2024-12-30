import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class PaverBlock extends Component {
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
                <h1 class="text-white">Pever Block Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Pever Block Machine Details</li>
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
                      Pever Block Machine Details:
                    </h2>
                    <br />

                    <p>
                      Our company is involved in manufacturing, trading and
                      supplying Automatic Paver Blocks Making Machine that comes
                      in rugged construction. Owing to the 10,000 to 25,000 Fly
                      Ash Bricks 6000Pcs to 18,000 Paver Blocks in 8 Hrs. bricks
                      production and 400 Liters of oil tank capacity, the
                      proffered construction machine is highly demanded in
                      market. The proposed selection requires 28 HP of power.
                      Before the final send off, the series is checked for its
                      flawlessness.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <h3 className="nana-font">Features:</h3>

                    <ul className="mx-3">
                      <li>Longer service life</li>
                      <li>Ruggedly constructed</li>
                      <li>Less maintenance needed</li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <h3 className="nana-font">Specifications:</h3>
                    <ul className="mx-3">
                      <li>
                        Construction: Maximum High Pressure Tonege: 100 to 120
                        Tons
                      </li>
                      <li>Power Required : 28 HP- 32 H.P</li>
                      <li>
                        (Main Press: 10Hp, Pan Mixer-2 Nos-15 Hp,Vibrator-1 Hp)
                      </li>
                      <li>
                        Manufacturing Capacity: Fly Ash Bricks 6,8, 10,12, 14,16
                        Pcs(In One Operation) And Paver Blocks: 6,8,10 12 Paver
                        Blocks of 60mm 80 mm In One Operation
                      </li>
                      <li>
                        Facilitys: Fly Ash Bricks Making Machine Single Feeder
                        Facilites For Production Of Fly Ash Bricks
                      </li>
                      <li>
                        Production: Fly Ash Bricks 10,000 to 25,000 pcs in 8 hrs
                        Paver Blocks 6,000 to 18,000 Paver Blocks in 8 Hrs.
                      </li>
                      <li>(In Shift 8 Hours)</li>
                      <li>Bricks Size: 230x 100 x 75, 250 x 125 x 75</li>
                      <li>Oil Tank Capacity: 400 Liters</li>
                      <li>Superiors Vibration in Brick Press</li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Construction/PAVERS BLOCK MACHINE.jpg")}
                      />
                      <div>
                        <div className="d-none d-lg-block">
                          <br />
                          <br />
                          <br />
                        </div>
                        <br />
                        <h3 className="nana-font">Product Details:</h3>
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
                                1 Set
                              </td>
                            </tr>
                            <tr>
                              <th
                                style={{
                                  border: "1px black solid",
                                  paddingLeft: "1rem",
                                }}
                              >
                                Capacity (Bricks per Hour){" "}
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                500-1000,1000-1500,1500-2000
                              </td>
                            </tr>
                            <tr>
                              <th
                                style={{
                                  border: "1px black solid",
                                  paddingLeft: "1rem",
                                }}
                              >
                                Raw Material
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Cement, Stone Dust
                              </td>
                            </tr>
                            <tr>
                              <th
                                style={{
                                  border: "1px black solid",
                                  paddingLeft: "1rem",
                                }}
                              >
                                Automation{" "}
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                Semi-Automatic
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
                                Capacity{" "}
                              </th>
                              <td style={{ border: "1px black solid" }}>
                                1000-1500
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
        </div>
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default PaverBlock;
