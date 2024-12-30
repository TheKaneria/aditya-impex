import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SeedDrillDetails extends Component {
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
                <h1 class="text-white"> Drill Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Pre Harvesting</li>
                    <li> Drill Details</li>
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
                      Animal Operated Drill
                    </h2>
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/ANIMAL OPERATED DRILL.jpg")}
                      />
                    </div>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <p>
                      Animal Drawn Seed Drill is generally used by farmers with
                      small land holding. This type of implements can be used in
                      the countries where animals are highly preferred for
                      farming.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Mini Tiller Oprated Seed Drill
                    </h2>
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/MINI TILLER OPRATED SEED DRILL.jpg")}
                      />
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <p>
                      Mini Tiller Operated Seed Drill is used for sowing multi
                      crops in the fields. It is attached with Mini Tiller and
                      can be benifical for small land holding farmers. It is
                      economical in cost and it is affordable by small land
                      holding farmers.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Power Tiller Operated Seed Cum Fertilizeer Drill
                    </h2>
                    <br />
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/POWER TILLER OPERATED SEED CUM FERTILIZEER DRILL.jpg")}
                      />
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <p>
                      Power Tiller Operated Seed Cum Fertilizer Drill enables
                      directly sowing of the seeds without prior seed bed
                      preparation. The implement is used for seeds and
                      fertilizers operation together. This machine can easily be
                      attached with Power Tiller.
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Tractor Operated Seed Drill
                    </h2>
                    <br />
                    <h3 className="nana-font">Pneumatic Seed Drill</h3>
                    <br />

                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/PNEUMATIC SEED DRILL FERTILIZER DRILL.jpg")}
                      />
                      <br />
                      <br />
                    </div>
                    <p>
                      Pneumatic Seed Planter is developed to meet the changing
                      agricultural conditions and competitive environment.
                      Sowing of seed through vacuum reduces wastage of seed &
                      assure precision planting. It ensure pneumatic
                      districution of seed and thus enables the farmer to
                      achieve high yields out of the field
                    </p>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <h2 class="text-black font-weight-600 m-b15 nana-font">
                      Seed Cum Fertyilizer Drill
                    </h2>
                    <br />
                    <div class="col-lg-12 m-b30 d-flex justify-content-center justify-content-lg-start">
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Harvesting/SEED CUM FERTILIZER DRILL.jpg")}
                      />
                      <div className="d-none d-lg-block">
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <br />
                    <p>
                      Seed cum Fertilizer Drill is highly efficient seed
                      planting implement used for sowing of wide variety of
                      seeds. This machine enables us to sow directly after
                      harvesting without prior seed bed preparation which saves
                      seeds, tractor working time & labour.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      <table style={{ border: "1px black solid" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px black solid" }}>
                              <center>Variant</center>
                            </th>
                            <th style={{ border: "1px black solid" }}>
                              <center>KAADSD 05</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ border: "1px black solid" }}>Frame</td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>MS Iron Pipe</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              No. of Tines
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>5</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Tines Type
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>Profile Cutting</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Seed Spacing
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>Adjustable</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Ground Wheel
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>1</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Seed Box Capacity (Kg)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>5 - 7</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Drilling Depth (mm)
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>Adjustable</center>
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
                              <center>1800</center>
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
                              <center>60</center>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px black solid" }}>
                              Operation
                            </td>
                            <td
                              style={{ border: "1px black solid" }}
                              colspan=""
                            >
                              <center>1 Animal / 2 Animal Drawn </center>
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
                            <center>KAMTOSD 03</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tines Type
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>Profile Cutting / Zero Tillage</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Seed Box Capacity (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>5</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Drilling Depth (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>20-100 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Plant to Plant Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>25-250 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Row to Row Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>100-600 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>600</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>40</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Mini Tiller (HP)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>5 - 12</center>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
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
                            <center>KAPTOSCFD 05</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tines Type
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>Profile Cutting / Zero Tillage</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Seed & Fertilizer Box Capacity (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>20</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Drilling Depth (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>20-100 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Row to Row Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>100-800 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Plant to Plant Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>25-250 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>800</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Ground Wheel (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>450 (1 Wheel)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>120</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Power Tiller (HP)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>10-25</center>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
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
                            <center>KAPSCFD 04</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Frame (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>102*104*6 T Square Frame</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Furrow Opener (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>305*3 T Disc Type</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Seed Hopper Capacity (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>10</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Fertilizer Hopper Capacity (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>70</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Drilling Depth (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>20-100 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Plant to Plant Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>100-400 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Row to Row Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>500-2000 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>2000</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>580</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tractor Power (HP)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>55-95</center>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <table
                      className="table-main"
                      style={{ border: "1px black solid" }}
                    >
                      <thead>
                        <tr>
                          <th style={{ border: "1px black solid" }}>
                            <center>Variant</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KASCFDR 09</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KASCFDR 11</center>
                          </th>
                          <th style={{ border: "1px black solid" }}>
                            <center>KASCFDR 13</center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Frame (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>60*60*5 Tubular Frame</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Seed box (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>MS Galvanize</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Seed & Fertilizer Box Capacity (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>70</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Seed Drilling Depth (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>20-100 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Plant to Plant Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>25-250 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Row to Row Spacing (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>100-2000 (Adjustable)</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Working Width (mm)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>2000</center>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Weight (Kg)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>310</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="1">
                            <center>350</center>
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="">
                            <center>390</center>
                          </td>
                        </tr>

                        <tr>
                          <td style={{ border: "1px black solid" }}>
                            Tractor Power (HP)
                          </td>
                          <td style={{ border: "1px black solid" }} colspan="3">
                            <center>35-55</center>
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
export default SeedDrillDetails;
