import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class ColdStorage extends Component {
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
                <h1 class="text-white">Cold Storage Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Project Division</li>
                    <li>Cold Storage Details</li>
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
                      Cold Storage:
                    </h2>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <h3 class="text-black font-weight-600 m-b15 nana-font">
                      Product Details:
                    </h3>
                    <div className="d-none d-lg-block">
                      <br />
                    </div>
                    <p>
                      Cold storage industry is a very important and essential
                      industry. The temperature is maintained low with the help
                      of precision instruments. Cold storage is used to preserve
                      fruits and vegetables. Once they are kept in the cold
                      storage, they do not get spoiled even after many months.
                      This item, when needed, can be taken from the cold storage
                      and can be made available to consumers very easily. Cold
                      storage is a vital link between the production and
                      consumption of perishable products. Apart from the
                      conservation of perishables, the cold storage also help in
                      increasing the marketing period of these commodities and
                      ensure availability to the consumer over a long period. It
                      is also clear that the cold storage facility available in
                      various states of the country reveals wide variation. A
                      new entrepreneur can well venture into this field by
                      installing a project of cold storage to save the fruits
                      and vegetables from wastage.
                    </p>
                    <br />
                  </div>
                  <div class="col-lg-6 d-flex ">
                    <div class="row">
                      <div className="d-flex justify-content-center">
                        <img
                          alt=""
                          style={{ height: 400, width: 400 }}
                          className="single_prod_img"
                          src={require("../../images/Tender/COLD STORAGE PHOTOS.jpg")}
                        />
                      </div>
                      <br />
                      <div className="justify-content-center d-flex">
                        <img
                          alt=""
                          style={{ height: 450, width: 450 }}
                          className="single_prod_img"
                          src={require("../../images/Tender/cold-storage-2.png")}
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
export default ColdStorage;
