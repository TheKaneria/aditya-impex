import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class RoundBar extends Component {
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
                <h1 class="text-white">Round Bar Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Round Bar Details</li>
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
                    <h2 class="text-black  m-b15 nana-font">
                      Round Bar Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Customized alloy steel for any application under one roof
                      since we have all the facilities and technical know-how
                      in-house. We have smaller batch sizes compared to other
                      mills (8 tons compared to 30 tons of other mills), so
                      buyers looking to buy smaller quantities can also come to
                      us and get all they need at very economical prices. Your
                      complete one-stop mill for all your steel needs sourcing
                      directly from the original manufacturer. Buy all your
                      alloy steel from us in any quantity and get freedom from{" "}
                    </p>
                    <br />
                    <h2 class="text-black  m-b15 nana-font">
                      Steel Round Bar:
                    </h2>
                    <br />
                    <div class="col-lg-6 m-b30 d-flex justify-content-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        src={require("../../images/Agriportfolio/steel_pipe.jpeg")}
                      />
                    </div>
                    <br />
                    <p>
                      Kisco supplies the best Steel round bars for a multitude
                      of applications and in various grades in carbon steel,
                      alloy steel, tool steel, die steel, case carburizing steel
                      etc.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h2 class="text-black  m-b15 nana-font">
                        Round Bars In Various Sizes:
                      </h2>
                      <br />
                      <table style={{ border: "1px black solid" }}>
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Hot Rolled
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              32 to 180
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Hot Forged
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              100 to 450
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <h2 class="text-black  m-b15 nana-font">
                        Application And End-Use:
                      </h2>
                      <br />
                      <p>
                        Various companies use our steel round bars for making
                        final products in industries such as Oil and Gas, Power,
                        Mining, Engineering Goods, Fasteners, Railways, Defence,
                        Load cells, Toolings etc
                      </p>
                      <br />
                      <h2 class="text-black  m-b15 nana-font">
                        Different Grades And International Specifications:
                      </h2>
                      <br />
                      <p>
                        We are manufacturing bars in various grades and
                        exporting them worldwide. We are a leading exporter of
                        economic and best quality bars to Czech Republic, UK,
                        etc. We manufacture the following popularly used grades:
                        EN19, EN24, EN25, EN26, EN30, EN31, EN36C, EN39, EN 40,
                        EN41B, EN42, EN8, EN9, EN14A, EN15, EN16, EN18, EN47,
                        EN100, EN351, EN353, EN354, EN355, C22E, C25E, C30, C35E
                      </p>

                      <div class="col-lg-12 m-b30">
                        {/* <img alt="" src={require("../../images/portfolio/HAND DEEPWELL SPARE PARTS.jpg")}/> */}
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
export default RoundBar;
