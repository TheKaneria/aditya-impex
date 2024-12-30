import React, { Component } from "react";
import { Link } from "react-router-dom";
import { adityaGroupContent } from "../element/SliderContent";
import AdityaSlider from "../element/adityaSlider";

import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/skin/skin-1.css";
import "../../css/templete.min.css";
import ScrollToTop from "../element/scrollToTop";
import Footer from "../layout/footer";
import Header from "../layout/header";
var bnr3 = require("./../../images/banner/bnr3.jpg");

class Aboutus extends Component {
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
            style={{ backgroundImage: "url(" + bnr3 + ")" }}
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry">
                <h1 class="text-white">About us</h1>
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <Link to={"/index.html"}>Home</Link>
                    </li>
                    <li>About us </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-block">
            <div class="section-full content-inner bg-white">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-12 m-b30">
                    <div class="our-story">
                      <span>OUR STORY</span>
                      <br />
                      <h2 class="title">
                        Running a <br />
                        successful business <br />
                        <span class="text-primary">since 1980</span>
                      </h2>
                      <br />
                      <br />
                      <h2 class="title">ADITYA GROUP</h2>
                      <p>
                        “ADITYA” Group having wide experience of more than 40
                        years in the field of engineering products Manufacturing
                        & Export operated by well-trained experienced
                        technocrats.
                      </p>
                      {/* <Link to={"/#"} class="site-button">Read More</Link> */}
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 m-b30 our-story-thum">
                    <img
                      src={require("../../images/about/pic6.jpg")}
                      className="radius-sm single_prod_img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="section-full bg-gray content-inner about-carousel-ser">
              <div class="container">
                {/* <div class="section-head text-center">
                                    <h2 class="title">Why Customer Love To  <br /><span class="text-primary">Choose Us</span></h2>
                                    <p>
                                        “ADITYA” Group having wide experience of more than 40 years
                                        in the field of engineering products Manufacturing & Export
                                        operated by well-trained experienced technocrats.
                                    </p>
                                </div> */}

                <AdityaSlider slidesToShow={3} data={adityaGroupContent} />
              </div>
            </div>

            {/* <div class="section-full box-about-list"> */}
            {/* <div class="row spno"> */}
            {/* <div class="col-lg-6 col-md-12"> 
                                    <img src={require("../../images/about/pic3.jpg")} alt="" class="img-cover"/> 
                                </div> */}
            {/* <div class="col-lg-6 col-md-12 bg-primary"> */}
            {/* <div class="max-w700 m-auto p-tb50 p-lr20"> */}
            {/* <div class="text-white">
                                            <h2>We're thriving and building <br/>better products</h2>
                                        </div> */}
            {/* <div class="icon-bx-wraper m-b30 left"> */}
            {/* <div class="icon-md"> 
                                                <Link to={"/#"} class="icon-cell text-white">
                                                    <i class="flaticon-factory"></i>
                                                </Link> 
                                            </div> */}
            {/* <div class="icon-content">
                                                <h4 class="dlab-tilte">Material Engineering</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div> */}
            {/* </div> */}
            {/* <div class="icon-bx-wraper m-b30 left"> */}
            {/* <div class="icon-md"> 
                                                <Link to={"/#"} class="icon-cell text-white">
                                                    <i class="flaticon-settings"></i>
                                                </Link> 
                                            </div> */}
            {/* <div class="icon-content">
                                                <h4 class="dlab-tilte">Chemical Research</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div> */}
            {/* </div> */}
            {/* <div class="icon-bx-wraper left"> */}
            {/* <div class="icon-md"> 
                                                <Link to={"/#"} class="icon-cell text-white">
                                                    <i class="flaticon-worker"></i>
                                                </Link> 
                                            </div> */}
            {/* <div class="icon-content">
                                                <h4 class="dlab-tilte">Petroleum Engineering</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

            <div class="section-full bg-gray content-inner">
              <div class="container">
                <div class="section-head text-center">
                  <h1
                    style={{ fontSize: 45, marginbottom: 20 }}
                    class="title nana-font"
                  >
                    Our Services
                  </h1>
                  <br />
                  <p style={{ fontSize: 17 }}>
                    We are well known Manufacturer & Exporter of all kind of
                    Agriculture, Food processing equipment & Engineering
                    Machinery & Precision Components. We are one of the leading
                    manufacture, founder and exporter based at Rajkot, Gujarat,
                    India, Mainly deal in below segments to provide economical
                    best technology solutions to client in stipulated time frame
                    by means of advance technology operated by well-trained
                    experienced technocrats.
                  </p>
                  <br />
                  <br />
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
                        <Link to="/component-portfolio" class="icon-cell">
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

            {/* <div class="section-full about-progress">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-7 col-md-12 bg-white">
                                        <div class="max-w700  m-auto content-inner"> */}
            {/* <div class="section-head">
                                                <h2 class="title">We provide the exceptional service we'd want to experience ourselves</h2>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                                            </div> */}
            {/* <div class="about-progress-box">
                                                <h6 class="text-primary">Web Development<span class="progress-num pull-right">85%</span></h6>
                                                <div class="about-progress-bar bg-gray-dark">
                                                    <div class="about-progress bg-primary wow slideInLeft" data-wow-delay="0.2s" data-wow-duration="2s" style={{width:"85%"}}></div>
                                                </div>
                                            </div> */}
            {/* <div class="about-progress-box">
                                                <h6 class="text-primary">Web Designer<span class="progress-num pull-right">80%</span></h6>
                                                <div class="about-progress-bar bg-gray-dark">
                                                    <div class="about-progress bg-primary wow slideInLeft" data-wow-delay="0.4s" data-wow-duration="2s" style={{width:"85%"}}></div>
                                                </div>
                                            </div> */}
            {/* <div class="about-progress-box">
                                                <h6 class="text-primary">Performance<span class="progress-num pull-right">75%</span></h6>
                                                <div class="about-progress-bar bg-gray-dark">
                                                    <div class="about-progress bg-primary wow slideInLeft" data-wow-delay="0.6s" data-wow-duration="2s" style={{width:"85%"}}></div>
                                                </div>
                                            </div> */}
          </div>
        </div>
        {/* <div class="col-lg-5 col-md-12 p-a0">
                                        <img src={require("../../images/about/pic5.jpg")} alt="" class="img-cover "/> 
                                    </div> */}
        {/* </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        <Footer hideContactInfo displayNewsLetter />

        <ScrollToTop className="icon-up" />
      </>
    );
  }
}
export default Aboutus;
