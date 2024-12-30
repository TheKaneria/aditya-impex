import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class HarvestingMachineRepare extends Component {
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
                <h1 class="text-white">Reaper and Digger Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Post Harvesting</li>
                    <li>Reaper and Digger Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row p-2">
                  <div class="col-lg-6 m-b30 ">
                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Groundnut Digger:
                    </h2>
                    <br />

                    <div class="col-lg-12 m-b30 d-flex d-xl-block justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/GROUNDNUT DIGGER.jpg")}
                      />
                    </div>
                    <br />

                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            <center>Variant</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KATOGD 01</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Lenght (mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>1828</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>1727</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Height (mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>1067</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Main Frame (mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>100*100*5</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Power Transmission
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>PTO Shaft - 540 RPM</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            {" "}
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>1372</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            {" "}
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>510</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tractor Power (HP)
                          </td>
                          <td style={{ border: "1px black solid" }}>
                            <center>35-55</center>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        Reaper:
                      </h2>
                      <br />

                      <div class="col-lg-12 m-b30 d-flex d-xl-block justify-content-center justify-content-lg-start">
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Harvesting/04 HARVESTING MACHINE REAPER.jpg")}
                        />
                        <br />
                        <br />
                        <br />
                      </div>
                      <br />

                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>Variant</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAR 04</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Engine Type
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>Air Cooled Diesel Engine</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Reaping Style
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>Side Lay</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Stubble Height (mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>100 (Adjustable)</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Efficiency
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>1 Acre / Hr</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Working Width (mm)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>1200</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Weight (Kg)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>200</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Engine Power (HP)
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              <center>5.5</center>
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
export default HarvestingMachineRepare;
