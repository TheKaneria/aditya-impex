import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
const bg = require("../../images/banner/bnr4.jpg");

class LathMachine extends Component {
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
                <h1 class="text-white">Lath Machine Details</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Segments</li>
                    <li>Workshop Machinery</li>
                    <li>Lath Machine Details</li>
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
                    <h2 class="text-black font-weight-600 m-b15 nana-font nana-font">
                      Lath Machine Details:
                    </h2>
                    <br />
                    <p>
                      Keeping the ease of our customers in mind, we offer
                      customized solutions. Ethical business policies and
                      professional approaches are followed while working in
                      close coordination with our customers, committed to
                      attaining maximum customer approach and satisfaction. The
                      offered lathe machines are available with us in various
                      capacities and designs, which suit the requirements of our
                      valuable customers in the most efficient manner. The
                      offered lathe machines{" "}
                    </p>
                    <ul className="mx-3">
                      <li>Hardened bed ways</li>
                      <li>Chuck back plate 1 no</li>
                      <li>Centre adapter</li>
                      <li>Dead centres 2 nos</li>
                      <li>Tool Post Spanner</li>
                      <li>Motor pulley</li>
                      <li>Thread dial indicator</li>
                      <li>Change gear set – 1 (For metric and inch both)</li>
                      <li>Chip Tray</li>
                    </ul>
                    <br />
                    <h3 className="nana-font">Optional Accessories: </h3>
                    <ul className="mx-3">
                      <li>Face plate</li>
                      <li>Carrier plate</li>
                      <li>Steady rest</li>
                      <li>Follow rest</li>
                      <li>Taper turning attachment</li>
                      <li>Motorised coolant pump with tank and fittings</li>
                      <li>Rear tool post with extended cross slide</li>
                      <li>Chuck back plates (Extra)</li>
                      <li>
                        Electricals (Motor, Switch, wirings, V-belts and
                        fittings)
                      </li>
                      <li>Norton Gear Box</li>
                    </ul>
                    <br />
                  </div>
                  <div class="col-lg-6">
                    <div class="row d-flex justify-content-center justify-content-lg-center">
                      <img
                        alt=""
                        className="single_prod_img"
                        src={require("../../images/Workshop/LATHE MACHINE.jpg")}
                      />
                      <div>
                        <br />
                        <h3 className="nana-font">Salient Features:</h3>
                        <ul className="mx-3">
                          <li>
                            Head stock spindle are made by alloy steel &
                            precision grinding
                          </li>
                          <li>
                            Our ultimate goal is to win the full satisfaction of
                            our client and we are committed to thegoal.
                          </li>
                          <li>All rotating parts are balanced</li>
                          <li>
                            Rajkot head quarters will ship a needed replacement
                            part to the customer the same dayit’s ordered 99% of
                            the time.
                          </li>
                        </ul>
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
export default LathMachine;
