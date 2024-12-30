import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

const bg = require("../../images/banner/bnr1.jpg");

class Contact2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Contact Us</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to="index">Home</Link>
                    </li>
                    <li>Contact Us </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-full content-inner contact-page-8 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="row p-2">
                    <div className="col-lg-12 col-md-12 m-b30">
                      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5
                            className="dlab-tilte"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span className="icon-sm text-primary">
                              <i className="ti-location-pin"></i>
                            </span>
                            Company Address
                          </h5>
                          <p>
                            "Mahavir" opp. Rajkamal Petrol pump, Gondal Road,
                            Rajkot - 360004
                          </p>
                          <h5
                            className=" dlab-tilte "
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span className="icon-sm text-primary">
                              <i
                                className="ti-alarm-clock"
                                style={{ color: "#ff5e14", fontSize: "30px" }}
                              ></i>{" "}
                            </span>
                            Office Hours
                          </h5>
                          <p className="m-b0">Mon To Sat - 10.00 - 07.00</p>
                          <p>Sunday - Close</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 m-b30">
                      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5
                            className="dlab-tilte"
                            style={{ alignItems: "center", display: "flex" }}
                          >
                            <span className="icon-sm text-primary">
                              <i className="ti-email"></i>
                            </span>
                            E-mail
                          </h5>
                          <p className="m-b0">marketing@adityaimpex.biz</p>
                          <p className="m-b0">sales@adityaimpex.biz</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 m-b30">
                      <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary">
                              <i className="ti-mobile"></i>
                            </span>
                            Phone Numbers
                          </h5>
                          <p className="m-b0">+91-99133 44447</p>
                          <p className="m-b0">+91-99133 88887</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 m-b30">
                  <form
                    className="inquiry-form wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h3 className="title-box font-weight-300 m-t0 m-b10 nana-font">
                      Let's Convert Your Idea into Reality{" "}
                      <span className="bg-primary"></span>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-user text-primary"></i>
                            </span>
                            <input
                              name="dzName"
                              type="text"
                              required
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-mobile text-primary"></i>
                            </span>
                            <input
                              name="dzOther[Phone]"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-email text-primary"></i>
                            </span>
                            <input
                              name="dzEmail"
                              type="email"
                              className="form-control"
                              required
                              placeholder="Your Email Id"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-check-box text-primary"></i>
                            </span>
                            <input
                              name="dzOther[Subject]"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Upload File"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-file text-primary"></i>
                            </span>
                            <input
                              name="dzOther[Subject]"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Upload File"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-agenda text-primary"></i>
                            </span>
                            <textarea
                              name="dzMessage"
                              rows="4"
                              className="form-control"
                              required
                              placeholder="Tell us about your project or idea"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center col-lg-12 col-md-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button button-md"
                        >
                          <span>Get A Free Quote!</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Contact2;
