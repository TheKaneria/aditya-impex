import React, { useEffect } from "react";
import Header from "../layout/header";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";

const bg = require("../../images/banner/bnr4.jpg");

const Petertypeenginedetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h1 class="text-white">Peter Type Engine Detail:</h1>
              <div class="breadcrumb-row">
                <ul class="list-inline">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Segments</li>
                  <li>Agriculture Equipments</li>
                  <li>Peter Type Engine Detail</li>
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
                    Peter Type Engine Detail
                  </h2>
                  <br />

                  <div class="col-12 col-lg-8 m-b30 d-flex justify-content-center">
                    <br />
                    <img
                      alt=""
                      style={{ height: 300, width: 300 }}
                      src={require("../../images/Agriportfolio/01_petter_type_engine.jpg")}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="d-none d-lg-block">
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
                <div class="col-lg-6">
                  <br />
                  <br />
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
                            Brand
                          </th>
                          <td style={{ border: "1px black solid" }}>Aditya</td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Automation Grade
                          </th>
                          <td style={{ border: "1px black solid" }}>
                            Manual, Automatic
                          </td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Power Source
                          </th>
                          <td style={{ border: "1px black solid" }}>Diesel</td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Speed Range In RPM{" "}
                          </th>
                          <td style={{ border: "1px black solid" }}>1500</td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Number Of Cylinder
                          </th>
                          <td style={{ border: "1px black solid" }}>1 and 2</td>
                        </tr>
                        <tr>
                          <th
                            style={{
                              border: "1px black solid",
                              paddingLeft: "1rem",
                            }}
                          >
                            Power
                          </th>
                          <td style={{ border: "1px black solid" }}>
                            3.5-22 hp
                          </td>
                        </tr>
                        {/* <tr>
                                                    <th style={{ border: "1px black solid" }}>Tolerance</th>
                                                    <td style={{ border: "1px black solid" }}>20 Microns</td>
                                                </tr> */}
                      </thead>
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>

                    <br />

                    <p>
                      The Petter Type Diesel Engines offered by us are suitable
                      for almost all sizes of engine and depends on the type,
                      speed and the effort of engine. These are extremely
                      durable, and precision engineered. Our team of efficient
                      engineers designs the entire range meticulously. Further,
                      these are stringently checked to ensure that the best and
                      flawless range reaches the market.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Petertypeenginedetails;
