import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class PloughingDetailsPre extends Component {
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
                <h1 class="text-white">Ploughing Detail</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Ploughing Detail</li>
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
                    <h2 class="text-black font-weight-600 m-b15 nana-font mb-0 mb-md-2">
                      Ploughing Detail
                    </h2>
                    <br />

                    <h3 className="nana-font">OX Plough</h3>
                    {/* <div class="col-lg-12 m-b30">
                                        </div> */}
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
                      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;{" "}
                    </div>
                    <div className="d-flex justify-content-center">
                      <img
                        alt=""
                        style={{ height: 300, width: 300 }}
                        src={require("../../images/Agriportfolio/ox plough.jpg")}
                      />
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
export default PloughingDetailsPre;
