import React, { Component } from "react";
import { Link } from "react-router-dom";
// import {blogContent3,adityaGroupContent} from '../element/SliderContent'
// import Testimonial12 from '../element/testimonial12';
import { Parallax } from "react-parallax";

import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/skin/skin-1.css";
import "../../css/templete.min.css";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
import CounterSection from "../element/counterSection";

const bg = require("../../images/background/bg2.jpg");
const bg2 = require("../../images/background/bg4.jpg");
const bg3 = require("../../images/background/map-bg.png");
const bg4 = require("../../images/Aditya_Title_BG.jpg");

class Home extends Component {
  state = {
    isOpen: false,
  };

  // componentDidMount = () => {
  //     var head = document.head;
  //     var link = document.createElement("link");

  //     link.type = "text/css";
  //     link.rel = "stylesheet";
  //     link.href = "/skin/skin-1.min.css";

  //     head.appendChild(link);
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="skin-1">
        <Header />
        <Parallax bgImage={bg4} strength={0}>
          <div>
            <div className="hero-section pt-50 home-bnr1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="hero-content">
                      <h1 style={{ color: "black" }} className="title">
                        Aditya Envisioning Progress
                      </h1>
                      <div className="description">
                        Manufacturer & Exporter of all kind of Agriculture, Food
                        Processing & Engineering Machinery & Precision
                        Components
                      </div>
                      <div className="buttons">
                        <a href="#">Read More</a>
                        <Link to="/aboutus">About Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <img
                      src={require("../../images/main-slider/slide7.png")}
                      alt=""
                      style={{ zIndex: "-1", position: "relative" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <div class="page-content bg-white">
          <div class="content-block">
            <div class="section-full bg-gray content-inner about-carousel-ser">
              <div class="container">
                <div class="section-head text-center">
                  <h2 class="title">
                    Who We Are ? <br />
                  </h2>
                  <p>
                    <span class="text-primary">Aditya Impex</span>&nbsp; We are
                    well known Manufacturer & Exporter of all kind of
                    Agriculture, Food processing, Construction equipment,
                    Engineering Machinery & Precision Components.
                  </p>
                  <br />
                  <p>
                    We are one of the leading manufacture, founder and exporter
                    based at Rajkot, Gujarat, India, Mainly deal in below
                    segments to provide economical best technology solutions to
                    client in stipulated time frame by means of advance
                    technology operated by well-trained experienced technocrats.
                  </p>
                </div>
                {/* 
                                <AdityaSlider 
                                slidesToShow={3}
                                data={adityaGroupContent} /> */}
              </div>
            </div>

            <div
              class="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2"
              style={{ backgroundImage: "url(" + bg + ")" }}
            >
              <div class="container">
                <div class="row relative">
                  <div
                    class="col-md-12 col-lg-8 wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div class="contact-no-area">
                      <h2 class="title">A company who delivers promise</h2>
                      <div class="contact-no">
                        <div class="contact-left">
                          <h3 class="no">
                            <i class="sl-call-in"></i>+91 99133 44447
                          </h3>
                        </div>
                        <div class="contact-right">
                          <Link
                            to="/contactus"
                            class="site-button appointment-btn btnhover13"
                          >
                            Get Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-12 col-lg-4 contact-img-bx wow fadeInRight"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    {/* <img
                      src={require("../../images/Aditya impex Jpg/MAN (2).png")}
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="section-full bg-gray content-inner">
              <div class="container">
                <div class="section-head text-center">
                  <h2 class="title"> Our Services</h2>
                  <p>
                    We are well known Manufacturer & Exporter of all kind of
                    Agriculture, Food processing equipment & Engineering
                    Machinery & Precision Components. We are one of the leading
                    manufacture, founder and exporter based at Rajkot, Gujarat,
                    India, Mainly deal in below segments to provide economical
                    best technology solutions to client in stipulated time frame
                    by means of advance technology operated by well-trained
                    experienced technocrats.
                  </p>
                </div>
                <div class="section-content row">
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div class="icon-bx-wraper" data-name="01">
                      <div class="icon-lg">
                        <Link to="/agriculture-portfolio" class="icon-cell">
                          <i class="flaticon-engineer-1"></i>
                        </Link>
                      </div>
                      <div class="icon-content">
                        <h2 class="dlab-tilte">Agriculture Equipments</h2>
                        <p>
                          To deliver solution to farmers by providing best
                          economical,user friendly equipments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div class="icon-bx-wraper" data-name="02">
                      <div class="icon-lg">
                        <Link to="/harvesting-portfolio" class="icon-cell">
                          <i class="flaticon-conveyor-1"></i>
                        </Link>
                      </div>
                      <div class="icon-content">
                        <h2 class="dlab-tilte">Pre and Post Harvesting</h2>
                        <p>
                          To provide solution to farmer for bowing, growing,
                          cutting, threshing and processing equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    <div class="icon-bx-wraper" data-name="03">
                      <div class="icon-lg">
                        <Link to="/food-portfolio" class="icon-cell">
                          <i class="flaticon-fuel-station"></i>
                        </Link>
                      </div>
                      <div class="icon-content">
                        <h2 class="dlab-tilte">Food Processing Machinery</h2>
                        <p>
                          To provide hygienic food delivery to society by
                          providing food grade steel food processing equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.8s"
                  >
                    <div class="icon-bx-wraper" data-name="04">
                      <div class="icon-lg">
                        <Link to="/construction-portfolio" class="icon-cell">
                          <i class="flaticon-construction"></i>
                        </Link>
                      </div>
                      <div class="icon-content">
                        <h2 class="dlab-tilte">Construction Machinery</h2>
                        <p>
                          To provide economical best technology equipment to
                          construction industries
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-sm-12 service-box style3 "></div>
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div class="icon-bx-wraper" data-name="05">
                      <div class="icon-lg">
                        <Link to="/workshop-portfolio" class="icon-cell">
                          <i class="flaticon-factory"></i>
                        </Link>
                      </div>
                      <div class="icon-content mt-3">
                        <h2 class="dlab-tilte">Workshop Machinery</h2>
                        <p>
                          Encourage entrepreneurship by providing industrial
                          solutions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div class="icon-bx-wraper" data-name="06">
                      <div class="icon-lg">
                        <Link to="/renewable-portfolio" class="icon-cell">
                          <i class="flaticon-design-tools"></i>
                        </Link>
                      </div>
                      <div class="icon-content mt-5 ">
                        <h2 class="dlab-tilte">Renewable Energy</h2>
                        <p>
                          To provide cost Effective solution for power
                          generation Roof Top and Industrial projects, water
                          pumping, Domestic & Industrial lighting & support with
                          Environment saving Eco-Friendly Solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div class="icon-bx-wraper" data-name="07">
                      <div class="icon-lg">
                        <Link to="/component-portfoliot" class="icon-cell">
                          <i class="flaticon-engineer-1"></i>
                        </Link>
                      </div>
                      <div class="icon-content mt-5 ">
                        <h2 class="dlab-tilte">
                          Precision Components Developments
                        </h2>
                        <p>
                          We can Design , Develop & Produce Any Kind of
                          precision Components, Semi Assembly, Fully Finished
                          Assembly As Per Customer’s Drawing Or Sample bymeans
                          of reverse engineering.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div class="icon-bx-wraper" data-name="08">
                      <div class="icon-lg">
                        <Link to="/tender-portfolio" class="icon-cell">
                          <i class="flaticon-engineer-1"></i>
                        </Link>
                      </div>
                      <div class="icon-content mt-4 ">
                        <h2 class="dlab-tilte">Project Division</h2>
                        <p>
                          We are merchant exporters located in Mumbai, India and
                          are suppliers for various items as listed below to the
                          customers located in Tanzania, Kenya, Congo, Ethiopia,
                          Mozambique,Germany,Zambia , Belgium and Abu Dhabi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CounterSection backgroundImage={bg2} />

            {/* <div class="section-full bg-gray content-inner">
                            <div class="container">
                                <div class="section-head text-center ">
                                    <h2 class="title"> Meet The Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link to="/team-1">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic1.jpg")} class="lazy" data-src="images/our-team/pic1.jpg"/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link to="/team-1">Nashid Martines</Link></h4>
                                                <span class="dlab-position">Director</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link to="/team-1">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic2.jpg")} class="lazy" data-src="images/our-team/pic2.jpg"/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link to="/team-1">Konne Backfield</Link></h4>
                                                <span class="dlab-position">Designer</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link to="/team-1">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic3.jpg")} class="lazy" data-src="images/our-team/pic3.jpg"/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link to="/team-1">Hackson Willingham</Link></h4>
                                                <span class="dlab-position">Developer</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                                        <div class="dlab-box m-b30 dlab-team1">
                                            <div class="dlab-media">
                                                <Link to="/team-1">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic4.jpg")} class="lazy" data-src="images/our-team/pic4.jpg"/>
                                                </Link>
                                            </div>
                                            <div class="dlab-info">
                                                <h4 class="dlab-title"><Link to="/team-1">Konne Backfield</Link></h4>
                                                <span class="dlab-position">Manager</span>
                                                <ul class="dlab-social-icon dez-border">
                                                    <li><Link class="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link class="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link class="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link class="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/* <div class="section-full overlay-black-middle bg-secondry content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" style={{ backgroundImage: "url(" + bg3 + ")" }}> */}
            {/* <div class="container"> */}
            {/* <div class="section-head text-white text-center"> */}
            {/* <h2 class="title">What People Are Saying</h2> */}
            {/* <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p> */}
            {/* </div> */}
            {/* <div class="section-content"> */}

            {/* <Testimonial12/> */}

            {/* </div> */}

            {/* </div> */}
            {/* </div> */}

            {/* <div class="section-full content-inner bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s"> */}
            {/* <div class="container"> */}
            {/* <div class="section-head text-center"> */}
            {/* <h2 class="title">Latest blog post</h2> */}
            {/* <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p> */}
            {/* </div> */}

            {/* </div> */}
            {/* </div> */}

            {/* <div
              class="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div class="container">
                <div class="section-content">
                  <ClientSlider1 hideBorder />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer hideContactInfo displayNewsLetter />

        <ScrollToTop className="icon-up" />
      </div>
    );
  }
}
export default Home;
