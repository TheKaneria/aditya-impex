import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "gmail",
        "YOUR_TEMPLATE_ID",
        e.target,
        "d9b2e0f5fc72cb94792110e8ff2028f3-us16"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <footer className="site-footer style1" style={{ marginTop: "15px" }}>
        <div className="dlab-newsletter">
          <div className="container footer_orange_container">
            <div className="ft-contact wow fadeIn footer_orange_flex_main">
              <div className="footer_orange_part_card_flex">
                <a href="https://www.google.com/maps/" target="_blank">
                  <img
                    src={require("../../images/icon/icon1.png")}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                </a>
                <div className="footer_orange_part_card_flex_inner">
                  <h4 className="title" style={{ color: "#fff" }}>
                    Address
                  </h4>
                  <p style={{ color: "#fff" }}>
                    "Mahavir" opp. Rajkamal Petrol pump, Gondal Road, Rajkot -
                    360004{" "}
                  </p>
                </div>
              </div>
              <div className="footer_orange_part_card_flex">
                <img
                  src={require("../../images/WhatsApp.png")}
                  style={{
                    height: "40px",
                    width: "40px",
                    // marginLeft: "-30px",
                    // marginTop: "-40px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <div className="footer_orange_part_card_flex_inner">
                  <h4 className="title" style={{ color: "#fff" }}>
                    Phone
                  </h4>
                  <p style={{ color: "#fff" }}>+91 99133 44447</p>
                  <p style={{ color: "#fff" }}>+91 99133 88887</p>
                </div>
              </div>
              <div className="footer_orange_part_card_flex">
                <img
                  src={require("../../images/icon/icon3.png")}
                  style={{ objectFit: "cover", height: "40px", width: "40px" }}
                  alt=""
                />
                <div className="footer_orange_part_card_flex_inner">
                  <h4 className="title" style={{ color: "#fff" }}>
                    Email Contact
                  </h4>
                  <p style={{ color: "#fff" }}>marketing@adityaimpex.biz</p>
                  <p style={{ color: "#fff" }}>sales@adityaimpex.biz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="widget widget_about">
                  <h4 className="footer-title">About Industry</h4>
                  <p>
                    Manufacturer & Exporter of all kind of Agriculture, Food
                    Processing & Engineering Machinery & Precision Components.
                  </p>
                  <Link to={"/aboutus"} className="readmore">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="widget">
                  <h4 className="footer-title">Usefull Link</h4>
                  <ul
                    className="list-2"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <li>
                      <Link to={"/aboutus"}>About Us</Link>
                    </li>
                    {/* <li>
                      <Link to={"/blog-grid-2"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/services-1"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"/portfolio-grid-2"}>Projects </Link>
                    </li>
                    <li>
                      <Link to={"/help-desk"}>Help Desk </Link>
                    </li>
                    <li>
                      <Link to={"/shop"}>Shop</Link>
                    </li> */}
                    <li>
                      <Link to={"/contactus"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="widget widget_subscribe">
                  <p>
                    If you have any questions. Subscribe to our newsletter to
                    get our latest products.
                  </p>
                  <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          required="required"
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="site-button fa fa-paper-plane-o"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-line">
          <div className="container">
            <div className="footer-bottom-in">
              <div className="footer-bottom-logo">
                <Link to={"/"}>
                  <img src={require("../../images/aditya_logo.png")} alt="" />
                </Link>
              </div>
              <div className="footer-bottom-social">
                <ul className="dlab-social-icon dez-border">
                  <li>
                    <Link className="fa fa-facebook" to={"/#"}></Link>
                  </li>
                  <li>
                    <Link className="fa fa-twitter" to={"/#"}></Link>
                  </li>
                  <li>
                    <Link className="fa fa-linkedin" to={"/#"}></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
