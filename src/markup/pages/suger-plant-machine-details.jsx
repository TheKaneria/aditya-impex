import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class SugerPlantMachinery extends Component {
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
                <h1 class="text-white">Suger Plant Machinery Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Suger Plant Machinery Details</li>
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
                      Suger Plant Machinery Details:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h3 className="nana-font">Product Details:</h3>
                    <ul className="mx-3">
                      <li>Automatic GradeAutomatic</li>
                      <li>ComputerizedYes</li>
                      <li>Product TypeMini Sugar Plants</li>
                      <li>Voltage220 to 415 Volt (v)</li>
                      <li>MaterialMS steel</li>
                      <li>Delivery Time1 Months</li>
                      <li>Main Domestic MarketAll India</li>
                      <li>Supply Ability5 Per Month</li>
                      <li>Offered By aditya impex</li>
                      <li>Product Added OnSep 28, 2010</li>
                      <li>Last Updated OnMay 18, 2019</li>
                      <li>BrandMICROTECH ENGINEERS</li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h3 className="nana-font">Company Details:</h3>
                    <p>
                      Armed with highly qualified and experienced industry
                      professionals, our company Microtech Engineers is world
                      over recognized for its best manufacturing practices. We
                      are counted amo ng top ranking manufacturers, exporters &
                      suppliers specializing in products like SUGAR PL ANT
                      (MINI), JAGGERY POWDER PLANT and JAGGERY PLANT. These
                      products are wi dely chosen among numerous customers owing
                      to their durability, sturdiness, and amazing pe rformance
                      during usage. Founded in 2010, our company is a fast
                      growing organization that al ways keeps customer
                      satisfaction as its prime concern dur
                    </p>
                    <ul className="mx-3">
                      <li>BUSINESS TYPEExporter, Manufacturer, Supplier</li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div class="row">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="d-flex justify-content-center ">
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Tender/download (2).jpeg")}
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
export default SugerPlantMachinery;
