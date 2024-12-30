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

class AirCompressor extends Component {
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
                <h1 class="text-white">Air Compressor Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Workshop Machinery</li>
                    <li>Air Compressor Details</li>
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
                      Air Compressor Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <img
                      alt=""
                      className="single_prod_img"
                      src={require("../../images/Workshop/AIR COMPRESSOR copy.jpg")}
                    />
                    <br />
                    <br />
                    <br />
                    <h3 className="nana-font">Applications:</h3>
                    <ul className="mx-3">
                      <li>Spray Painting</li>
                      <li>Chemical Plants</li>
                      <li>Oil Extraction</li>
                      <li>Agriculture</li>
                      <li>Air Lift Pump</li>
                      <li>Air Cleaning</li>
                      <li>Liquid Transfer etc</li>
                    </ul>

                    <h3 className="nana-font">Optional Accessories:</h3>
                    <ul className="mx-3">
                      <li>Motor</li>
                      <li>Startor</li>
                      <li>V-belt</li>
                      <li>Air dryer</li>
                      <li>Moisture separator</li>
                      <li>Auto drain valve</li>
                    </ul>
                    <p>
                      Avail from us Single Stage Air Compressor that is ideal to
                      be used in a number of small industrial areas designed for
                      low pressure application. The offered range of Single
                      Stage Air Compressor is available in customized
                      specifications to match the varied requirements of the
                      clients. Single Stage Air Compressor is widely preferred
                      by clients for its smooth functioning, optimum performance
                      and durability. These compressors are used where the
                      pressure requirements are up to 9 Kg/Cm² air pressure.
                    </p>
                    <br />
                    <br />
                    <div className="table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>Model</th>
                            <th style={{ border: "1px black solid" }}>
                              Power/HP
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              Cylinder
                            </th>
                            <th style={{ border: "1px black solid" }}>RPM</th>
                            <th style={{ border: "1px black solid" }}>
                              Displacement-CFM
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              Displacement-LPM
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              Max Pressure-Kg/CM
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              Max Pressure-PSI
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              Receiver-Size
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              Receiver-Liters
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC528
                            </td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>750</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>140</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>10*10</td>
                            <td style={{ border: "1px black solid" }}>40</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC530
                            </td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>750</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>140</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>12*34</td>
                            <td style={{ border: "1px black solid" }}>62</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC540
                            </td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>750</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>140</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>14*36</td>
                            <td style={{ border: "1px black solid" }}>90</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC550
                            </td>
                            <td style={{ border: "1px black solid" }}>1.5</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>750</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>140</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>16*40</td>
                            <td style={{ border: "1px black solid" }}>130</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC552
                            </td>
                            <td style={{ border: "1px black solid" }}>1.5</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>750</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>140</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>18*40</td>
                            <td style={{ border: "1px black solid" }}>165</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC555
                            </td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>724</td>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>283</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>18*40</td>
                            <td style={{ border: "1px black solid" }}>165</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC530
                            </td>
                            <td style={{ border: "1px black solid" }}>1</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>750</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>140</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>16*40</td>
                            <td style={{ border: "1px black solid" }}>130</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC560
                            </td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>724</td>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>283</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>18*40</td>
                            <td style={{ border: "1px black solid" }}>165</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC565
                            </td>
                            <td style={{ border: "1px black solid" }}>2/3</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>724</td>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>283</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>18*46</td>
                            <td style={{ border: "1px black solid" }}>190</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC570
                            </td>
                            <td style={{ border: "1px black solid" }}>2/3</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>724</td>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>283</td>
                            <td style={{ border: "1px black solid" }}>9</td>
                            <td style={{ border: "1px black solid" }}>128</td>
                            <td style={{ border: "1px black solid" }}>18*52</td>
                            <td style={{ border: "1px black solid" }}>215</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC230
                            </td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>920</td>
                            <td style={{ border: "1px black solid" }}>20.70</td>
                            <td style={{ border: "1px black solid" }}>585</td>
                            <td style={{ border: "1px black solid" }}>5.62</td>
                            <td style={{ border: "1px black solid" }}>80</td>
                            <td style={{ border: "1px black solid" }}>18*46</td>
                            <td style={{ border: "1px black solid" }}>190</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC240
                            </td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>920</td>
                            <td style={{ border: "1px black solid" }}>20.70</td>
                            <td style={{ border: "1px black solid" }}>585</td>
                            <td style={{ border: "1px black solid" }}>5.65</td>
                            <td style={{ border: "1px black solid" }}>80</td>
                            <td style={{ border: "1px black solid" }}>18*52</td>
                            <td style={{ border: "1px black solid" }}>215</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              PAC250
                            </td>
                            <td style={{ border: "1px black solid" }}>7.5</td>
                            <td style={{ border: "1px black solid" }}>2</td>
                            <td style={{ border: "1px black solid" }}>865</td>
                            <td style={{ border: "1px black solid" }}>34</td>
                            <td style={{ border: "1px black solid" }}>965</td>
                            <td style={{ border: "1px black solid" }}>5.62</td>
                            <td style={{ border: "1px black solid" }}>80</td>
                            <td style={{ border: "1px black solid" }}>18*52</td>
                            <td style={{ border: "1px black solid" }}>215</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <br />

                      <img
                        alt=""
                        className="single_prod_img"
                        src={require("../../images/Workshop/AIR COMPRESSOR 1.jpg")}
                      />
                      <br />
                      <br />
                      <div>
                        <h3 className="nana-font">Standard Accessories:</h3>

                        <ul className="mx-3">
                          <li>Air cock</li>
                          <li>Drain valve</li>
                          <li>Safety valve</li>
                          <li>Pressure guage</li>
                          <li>Motor pulley</li>
                          <li>Motor slide rail</li>
                          <li>Air suction filter</li>
                          <li>Auto switch</li>
                          <li>Belt guard</li>
                        </ul>
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
export default AirCompressor;
