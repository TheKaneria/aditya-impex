import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class PloughingDetails extends Component {
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
                <h1 class="text-white">Ploughs Detail</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Pre Harvesting</li>
                    <li>Ploughs Detail</li>
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
                      Chisal Plough
                    </h2>
                    <br />
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/CHISAL PLOUGH copy.jpg")}
                      />

                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <p>
                      Chisel Plough is used for the cultivation of soil without
                      needing plow in the field after harvesting. Main function
                      of this plough is to loosen and aerate the soils while
                      leaving crop residue at the top of the soil.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      MB Plough
                    </h2>
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/MB PLOUGH.jpg")}
                      />
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <p>
                      Mould Board Plough is designed to work in all types of
                      soil for breaking, turning & raising. The mould board
                      frame arrangement can withstand trashy conditions. Heavy
                      Duty frame with high ground clearance makes it easy for
                      the plough to work in field with a lot of crop residue.
                    </p>
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      OX Plough{" "}
                    </h2>
                    <br />
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Agriportfolio/ox plough.jpg")}
                      />
                    </div>
                    <ul className="mx-3">
                      <li>
                        Relying on our wide experience and skills in this field.
                      </li>
                      <li>
                        we are noted as one of the most prestigious
                        manufacturers, exporters and suppliers of Animal Driven
                        Plough/Ox Plough.
                      </li>
                      <li>
                        These are made with concept which reduces the load for
                        farm and agricultural animals. Available in latest and
                        rugged designs these can be availed as per the needs and
                        requirements
                      </li>
                      <li>
                        These are used in sowing, farming and many other farm
                        activities.
                      </li>
                      <li>
                        Animal Driven Plough/Ox Plough can be used in all types
                        of weather.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>Variant</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KACP 05</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KACP 07</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KACP 09</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KACP 11</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KACP 13</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KACP 15</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Frame (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>100*100*5 Tubular Frame</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Tines (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>40(Forged)</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Total Length (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>1500</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>1900</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>2400</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>2900</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>3500</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>4100</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Total Width (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>1200</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Depth (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>200-400</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Width (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>1200</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>1600</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>2100</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>2600</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>3200</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>3800</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Weight (Kg)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>410</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>510</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>610</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>750</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>850</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>950</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Mounted CAT
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7"
                            >
                              <center>CAT ||</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Tractor Power (HP)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="2"
                            >
                              <center>55-75</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="1"
                            >
                              <center>75-95</center>
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan="7;"
                            >
                              <center>95-125</center>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            <center>Variant</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KAMBP 02</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KAMBP 03</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KAMBP 04</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Frame (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>80*80*7 Tubular Frame</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Draw Bar Rod (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>32</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tines (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>36 (Profile cutting)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Mould Board (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>8</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Depth (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>280-350</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>630</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>930</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>1230</center>
                          </td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Mounted CAT
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>CAT ||</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>250</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>350</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>450</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tractor Power (HP)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>45-55</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>55-75</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>75-125</center>
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
        <Footer hideContactInfo displayNewsLetter />
        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default PloughingDetails;
