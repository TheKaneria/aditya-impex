import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class NeedleVibrator extends Component {
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
                <h1 class="text-white">Needle Vibrator Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Construction Machinery</li>
                    <li>Needle Vibrator Details</li>
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
                      Needle Vibrator Details:
                    </h2>

                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                    </div>
                    <p>
                      We are privileged to offer an extensive range of Needle
                      Vibrator to the clients. Being one among the crucial
                      manufacturers, suppliers and exporters of Needle Vibrator,
                      we offer superior quality products at industry leading
                      prices. Our distinctive range of Needle Vibrator is
                      manufactured using approved raw materials and checked
                      thoroughly for its quality. While we guarantee
                      high-efficiency products, we source the Needle Vibrator
                      from authentic vendors in the market. The Needle Vibrators
                      are closely examined to ensure defect-free delivery to our
                      clients, and these are available in various dimensions,
                      grades, colors and sizes. We are located in Gujarat, India
                    </p>
                  </div>

                  <div class="col-lg-6">
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        style={{ height: 400, width: 400 }}
                        src={require("../../images/Construction/NEEDEL VIBRATOR.jpg")}
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
export default NeedleVibrator;
