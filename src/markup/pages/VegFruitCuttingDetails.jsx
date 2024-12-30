import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class VegFruitCuttingDetails extends Component {
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
                <h1 class="text-white">Veg & Fruit Cutting Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Food Processing Machinery</li>
                    <li>Veg & Fruit Cutting Machine Details</li>
                  </ul>

                  <br />
                  <br />
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
                      Veg & Fruit Cutting Machine Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start ">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Food_PortFolio/vegetable and fruit cutting machine.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <br />
                    <h3 className="nana-font">Technical Specifications:</h3>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <table style={{ border: "1px black solid" }}>
                      <thead>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            SKU:
                          </th>
                          <td style={{ border: "1px black solid" }}>
                            GE779HL0FT17KNAFAMZ
                          </td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Product Line:{" "}
                          </th>
                          <td style={{ border: "1px black solid" }}>Acha</td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Weight (kg):
                          </th>
                          <td style={{ border: "1px black solid" }}>60</td>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                    <p>
                      In the school refectory, restaurant, hotel and food
                      processing plant, cutting vegetables undoubtedly is a kind
                      of heavy work. And the vegetable cutting machine can ease
                      this work, because it is widely used to cutting root,
                      stem, leaf vegetables, kelp and bean products into various
                      standard sizes.Large Capacity Vegetable Cutting Machine
                      Features▷Centrifugal slicing system is to slice potatoes,
                      carrots, ginger, etc. these hard vegetables.▷Vertical
                      blade is to processing leafy-soft vegetables and
                      vegetable-slices into different standard strips, cubes,
                      rhombuses.▷Slice thickness and cutting length can be
                      adjusted in the regular range▷The processed vegetables
                      have smooth surface, standard shape, intact texture and
                      fresh flavor▷Easy to operate, simple to maintain-
                      Material: Stainless Steel- size : 860mm*430mm*800mm-
                      Voltage : 220v- Power : 750 Watts- Frequency : 50hz- Net
                      weight : 85kg- production : 100- 300kg/hr- Barrel Diameter
                      : 200mm
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <h2 class="text-black font-weight-600 m-b15 nana-font">
                        Vegetable And Fruit Packing Machine:
                      </h2>
                      <div className="d-flex justify-content-center justify-content-lg-start ">
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Food_PortFolio/vegetable and fruit packing machine.png")}
                        />
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
export default VegFruitCuttingDetails;
