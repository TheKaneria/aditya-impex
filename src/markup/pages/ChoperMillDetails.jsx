import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class ChoperMillDetails extends Component {
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
                <h1 class="text-white">Chopper Mill Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Agriculture Equipments</li>
                    <li>Chopper Mill Details</li>
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
                      Chopper Mill Details:
                    </h2>
                    <br />
                    <h3 className="nana-font">TECHNICAL SPECIFICATION:</h3>
                    <br />
                    <ul className="mx-3">
                      <li>
                        RECOMMENDED PRIME MOVER 5/6.5 HP A/C DIESEL ENGINE OR 3
                        HP ELECTRIC MOTOR
                      </li>
                      <li>
                        PRODUCTION CAPACITY 120 TO 150 KGS PER HOURS BASED ON
                        CONDITION OF MEDIA AND WORKERS SKILL
                      </li>
                      <li>SPEED 3750 RPM</li>
                      <li>
                        WE CAN USED THIS MACHINE TO CHOP SOFT CROPS LIKE
                        CASSAVA, POTATO. MEAT, ETC.....
                      </li>
                      <li>
                        WE HAVE USED HARDEN BLADES WHICH PERFORM LONG LIFE OF
                        MACHINE
                      </li>
                      <li>APPROX WEIGHT 55 TO 60 KGS WITHOUT ENGINE</li>
                      <li>
                        CHOPPER COMPRISING OF STD ACC LIKE FEEDING HOPPER, FRAME
                        FOR FITTING ENGINE, VPULLEY FOR CHOPPER, SAFETY GUARD,
                        V-BELTS AND STD TOLL KIT.
                      </li>
                    </ul>
                    <br />
                    <h3 className="nana-font">SILENT FEATURES :</h3>
                    <br />
                    <ul className="mx-3">
                      <li>
                        WE HAVE DESIGNED HOOPER ACROSS THE LENGTH OF DRUM SO AS
                        WE CAN INPUT MAXIMUM MATERIAL AND CAN GET SUFFICIENT
                        OUTPUT.
                      </li>
                      <li>
                        WE HAVE DESIGNED CHASSIS OF THE CHOPPER IN SUCH A WAY
                        THAT YOU CAN GET SUFFICIENT RECOVERY OF FINISHED PRODUCT
                      </li>
                    </ul>
                    <br />
                    <p>tric motor or diesel engine, for your convenience</p>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <div className="d-none d-lg-block">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <div class="row justify-content-lg-center">
                      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                      <img
                        alt=""
                        style={{ height: 400, width: 400 }}
                        className="single_prod_img"
                        src={require("../../images/Agriportfolio/2.jpg")}
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
export default ChoperMillDetails;
