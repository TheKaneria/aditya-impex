import React, { Component } from "react";
import Header from "../layout/header";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
const bg = require("../../images/banner/bnr4.jpg");

class ListerDetails extends Component {
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
                <h1 class="text-white">Lister Type Engine</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Lister Type Engine</li>
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
                      Lister Type Engine
                    </h2>

                    <img
                      alt=""
                      className="single_prod_img"
                      style={{ height: 400, width: 400 }}
                      src={require("../../images/Agriportfolio/07_Lister_type_engine.jpg")}
                    />
                    <br />
                    <h2 class="text-black font-weight-600 m-b15 fs-sm-3 nana-font">
                      Diesel Engine Specification:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                    </div>

                    <div className="table-main">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>No</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>Particulars</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center></center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>6/1</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>8/1</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>10/1 CBW</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>12/1 TRB CBW</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>15/1 TRB CBW</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>18/1 TRB CBW</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>01</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Rated Horse Power
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              B.H.P
                            </td>
                            <td style={{ border: "1px black solid" }}> 6</td>
                            <td style={{ border: "1px black solid" }}> 8</td>
                            <td style={{ border: "1px black solid" }}> 10</td>
                            <td style={{ border: "1px black solid" }}> 12</td>
                            <td style={{ border: "1px black solid" }}> 15</td>
                            <td style={{ border: "1px black solid" }}> 18</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>02</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Maximum Gross Power
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              B.H.P./kw
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              6/4.4
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              8/5.9
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              10/7.35
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              12/8.8
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              15/11.03
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              18/13.25
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>03</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Rated Speed
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              R.P.M.
                            </td>
                            <td style={{ border: "1px black solid" }}> 650</td>
                            <td style={{ border: "1px black solid" }}> 850</td>
                            <td style={{ border: "1px black solid" }}> 1000</td>
                            <td style={{ border: "1px black solid" }}> 1000</td>
                            <td style={{ border: "1px black solid" }}> 1000</td>
                            <td style={{ border: "1px black solid" }}> 1000</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>04</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Cylinder Position
                            </td>
                            <td style={{ border: "1px black solid" }}> </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Vertical
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Vertical
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Vertical
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Vertical
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Vertical
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Vertical
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>05</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              No. of Cylinder
                            </td>
                            <td style={{ border: "1px black solid" }}> </td>
                            <td style={{ border: "1px black solid" }}> One</td>
                            <td style={{ border: "1px black solid" }}> One</td>
                            <td style={{ border: "1px black solid" }}> One</td>
                            <td style={{ border: "1px black solid" }}> One</td>
                            <td style={{ border: "1px black solid" }}> One</td>
                            <td style={{ border: "1px black solid" }}> One</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>06</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Cyl. Bore & Stroke
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Inch m.m.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              4.5 X 5.5 114.3 X 139.7
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              4.5 X 5.5 114.3 X 139.7
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              4.75 X 5.5 120 X 139.7
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              5.12 X 5.5 130 X 139.7
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              5.12 X 5.5 130 X 139.7
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              5.12 X 6.3 130 X 160
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>07</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Flywheel Dimension & Face
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Inch m.m.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              23.62 X 3.5 600 X 89
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              23.62 X 3.5 600 X 89
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              20.23 X 3.74 514 X 95
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              23.62 X 4 600 X 100
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              23.62 X 4 600 X 100
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              23.62 X 4 600 X 100
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>08</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Foundation Stud Hole Center Distance
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Inch m.m.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              13 X 13 330 X 330
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              13 X 13 330 X 330
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              13 X 13 330 X 330
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              13 X 13 330 X 330
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              13 X 13 330 X 330
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              13 X 13 330 X 330
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>09</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Crankshaft Center Dist. from Base
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Inch m.m.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              12.5 318
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              12.5 318
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              12.5 318
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              13.5 343
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              13.5 343
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              13.5 343
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>10</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Engine Total Height
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Inch m.m.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              40 1016
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              40 1016
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              40 1016
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              40 1016
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              40 1016
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              41 1042
                            </td>
                          </tr>

                          <tr>
                            <td style={{ border: "1px black solid" }}>11</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Fuel Oil Tank Capacity
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Liter{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}> 12</td>
                            <td style={{ border: "1px black solid" }}>12</td>
                            <td style={{ border: "1px black solid" }}>12</td>
                            <td style={{ border: "1px black solid" }}> 12</td>
                            <td style={{ border: "1px black solid" }}>12</td>
                            <td style={{ border: "1px black solid" }}>12</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>12</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Lub. Oil Cap. in Chamber
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Liter{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}> 5</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}> 5</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                            <td style={{ border: "1px black solid" }}>5</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>13</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Torque of Engine
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              N-m. Kg-m.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              64.676.46
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              66.32 6.63
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              70.22 7.02
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              84.32 8.6
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              105.33 10.75
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              126.4 12.9
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>14</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              C. C. of Engine
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              Liter{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              1.432
                            </td>
                            <td style={{ border: "1px black solid" }}>1.432</td>
                            <td style={{ border: "1px black solid" }}>1.58</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              1.853
                            </td>
                            <td style={{ border: "1px black solid" }}>1.954</td>
                            <td style={{ border: "1px black solid" }}>2.223</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>15</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Engine Net Weight
                            </td>
                            <td style={{ border: "1px black solid" }}>kgs. </td>
                            <td style={{ border: "1px black solid" }}>310</td>
                            <td style={{ border: "1px black solid" }}>320</td>
                            <td style={{ border: "1px black solid" }}>335</td>
                            <td style={{ border: "1px black solid" }}> 335</td>
                            <td style={{ border: "1px black solid" }}>370</td>
                            <td style={{ border: "1px black solid" }}>395</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>16</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Engine Gross Weight
                            </td>
                            <td style={{ border: "1px black solid" }}>kgs. </td>
                            <td style={{ border: "1px black solid" }}>410</td>
                            <td style={{ border: "1px black solid" }}>420</td>
                            <td style={{ border: "1px black solid" }}>435</td>
                            <td style={{ border: "1px black solid" }}>435</td>
                            <td style={{ border: "1px black solid" }}>470</td>
                            <td style={{ border: "1px black solid" }}>495</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>17</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Size of Wooden Case
                            </td>
                            <td style={{ border: "1px black solid" }}>cms. </td>
                            <td style={{ border: "1px black solid" }}>
                              96 X 72 X 112
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              96 X 72 X 112
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              96 X 72 X 112
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              96 X 72 X 112
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              96 X 72 X 112
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              96 X 72 X 112
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>18</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Volume / case
                            </td>
                            <td style={{ border: "1px black solid" }}>m3 </td>
                            <td style={{ border: "1px black solid" }}>0.774</td>
                            <td style={{ border: "1px black solid" }}>0.774</td>
                            <td style={{ border: "1px black solid" }}>0.774</td>
                            <td style={{ border: "1px black solid" }}>0.774</td>
                            <td style={{ border: "1px black solid" }}>0.774</td>
                            <td style={{ border: "1px black solid" }}>0.774</td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>19</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              S.F.C. at full Load & Std. Ref. Condition
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              gms/kw/hr. gms/bhp/hr.{" "}
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              268 197
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              268 197
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              268 197
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              268 197
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              275 202
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              275 202
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>20</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Comp. Ratio
                            </td>
                            <td style={{ border: "1px black solid" }}> </td>
                            <td style={{ border: "1px black solid" }}>1:18</td>
                            <td style={{ border: "1px black solid" }}>1:18</td>
                            <td style={{ border: "1px black solid" }}>1:18</td>
                            <td style={{ border: "1px black solid" }}>1:18</td>
                            <td style={{ border: "1px black solid" }}>
                              1:18.5
                            </td>
                            <td style={{ border: "1px black solid" }}>
                              1:15.5
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>21</td>
                            <td style={{ border: "1px black solid" }}>
                              {" "}
                              Ignition
                            </td>
                            <td style={{ border: "1px black solid" }}> </td>
                            <td style={{ border: "1px black solid" }}>IDI</td>
                            <td style={{ border: "1px black solid" }}>IDI</td>
                            <td style={{ border: "1px black solid" }}>IDI</td>
                            <td style={{ border: "1px black solid" }}>IDI</td>
                            <td style={{ border: "1px black solid" }}>DI</td>
                            <td style={{ border: "1px black solid" }}>DI</td>
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
      </>
    );
  }
}

export default ListerDetails;
