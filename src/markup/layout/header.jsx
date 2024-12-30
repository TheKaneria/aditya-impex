import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
// import { PdfDocument } from "../../images/Aditya_Impex_Profile_Hyperlink.pdf";

class Header extends Component {
  // componentDidMount() {
  //   // var searchBtn = document.getElementById("quik-search-btn")
  //   // var searchPopup = document.querySelector(".dlab-quik-search")
  //   // var closeBtn = document.getElementById("quik-search-remove")

  //   // searchBtn.addEventListener('click', function () {
  //   //     searchPopup.style.display = "block"
  //   //     searchPopup.classList.add("On")
  //   // })

  //   // closeBtn.addEventListener('click', function () {
  //   //     searchPopup.style.display = "none"
  //   //     searchPopup.classList.remove("On")
  //   // })

  //   // sidebar open/close

  //   var btn = document.querySelector(".navicon");
  //   var nav = document.querySelector(".header-nav");

  //   function toggleFunc() {
  //     btn.classList.toggle("open");
  //     nav.classList.toggle("show");
  //   }

  //   btn.addEventListener("click", toggleFunc);

  //   // Sidenav li open close
  //   var navUl = [].slice.call(
  //     document.querySelectorAll(".header-nav > ul > li")
  //   );
  //   for (var y = 0; y < navUl.length; y++) {
  //     navUl[y].addEventListener("click", function () {
  //       checkLi(this);
  //     });
  //   }

  //   // function checkLi(current) {
  //   //   console.log("Current", current);
  //   //   const active = current.classList.contains("open");
  //   //   current.classList.add("active");

  //   //   navUl.forEach((el) => el.classList.remove("open"));
  //   //   // current.classList.remove('active');
  //   //   console.log(current.classList, "=====>>>>>>>>>>>>>>>");
  //   //   if (active) {
  //   //     current.classList.remove("open");
  //   //     current.classList.remove("active");
  //   //     console.log("active");
  //   //   } else {
  //   //     current.classList.add("open");
  //   //     console.log("close");
  //   //   }
  //   // }

  //   function checkLi(current) {
  //     // console.log("CCCCCC", current);

  //     const isActive = current.classList.contains("open");

  //     navUl.forEach((el) => el.classList.remove("open", "active"));

  //     if (!isActive) {
  //       // console.log("IS ACTive", isActive);
  //       current.classList.add("open", "active");
  //     }
  //   }
  //   var header = document.getElementById("navbarNavDropdown");
  //   // console.log("------>", header);
  //   var lis = document.getElementById("homedemo");
  //   for (var i = 0; i < lis.length; i++) {
  //     console.log("LLLLLLLLLL", lis[i]);

  //     // lis[i].addEventListener("click", function () {
  //     //   var current = document.getElementsByClassName("active");
  //     //   current.className = current.className.replace(" active", "");
  //     //   this.className += " active";
  //     // });
  //   }
  // }

  componentDidMount() {
    var btn = document.querySelector(".navicon");
    var nav = document.querySelector(".header-nav");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open/close using event delegation
    var navUl = document.querySelector(".header-nav > ul");

    navUl.addEventListener("click", function (e) {
      // Ensure the target is an `li` element
      var targetLi = e.target.closest("li");

      if (targetLi && navUl.contains(targetLi)) {
        // Check if this `li` has a submenu
        var hasSubmenu = targetLi.querySelector(".sub-menu");

        if (hasSubmenu) {
          e.preventDefault(); // Prevent navigation
          handleLiToggle(targetLi);
        }
      }
    });

    function handleLiToggle(current) {
      const isActive = current.classList.contains("open");

      // Close all other `li` elements at the same level
      Array.from(current.parentNode.children).forEach((sibling) => {
        sibling.classList.remove("open", "active");
      });

      // Toggle the clicked `li`
      if (!isActive) {
        current.classList.add("open", "active");
      }
    }
  }

  render() {
    return (
      <>
        <header class="site-header mo-left header">
          {/* <div class="top-bar">
                        <div class="container">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="dlab-topbar-left">
                                    <ul>
                                        <li><Link to={'/#'}>About Us</Link></li>
                                        <li><Link to={'/#'}>Refund Policy</Link></li>
                                        <li><Link to={'/#'}>Help Desk</Link></li>
                                    </ul>
                                </div>
                                <div class="dlab-topbar-right">
                                    <Link to={'/#'} class="site-button radius-no">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}

          <Sticky innerZ={999} enabled={true} top={50}>
            <div class="sticky-header main-bar-wraper navbar-expand-lg">
              <div class="main-bar clearfix ">
                <div class="container clearfix">
                  <div class="logo-header mostion">
                    <Link to={"/"}>
                      <img
                        src={require("../../images/aditya_logo.png")}
                        alt=""
                      />
                    </Link>
                  </div>

                  <button
                    class="navbar-toggler navicon justify-content-end"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  {/* <div class="extra-nav">
                                        <div class="extra-cell">
                                            <button id="quik-search-btn" type="button" class="site-button-link"><i class="la la-search"></i></button>
                                        </div>
                                    </div>

                                    <div class="dlab-quik-search ">
                                        <form action="#">
                                            <input name="search" value="" type="text" class="form-control" placeholder="Type to search" />
                                            <span id="quik-search-remove"><i class="ti-close"></i></span>
                                        </form>
                                    </div> */}

                  <div
                    class={`header-nav navbar-collapse collapse justify-content-end`}
                    id="navbarNavDropdown"
                  >
                    <div class="logo-header d-md-block d-lg-none">
                      <Link to={"/"}>
                        <img
                          src={require("../../images/aditya_logo.png")}
                          alt=""
                        />
                      </Link>
                    </div>
                    <ul class="nav navbar-nav">
                      <li class="active has-mega-menu homedemo" id="homedemo">
                        {" "}
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li class="has-mega-menu">
                        {" "}
                        <Link to={"/aboutus"}>About us</Link>
                      </li>
                      <li id="homedemo">
                        <Link to={"/agriculture-portfolio"}>
                          Segments<i class="fa fa-chevron-down"></i>
                        </Link>
                        <ul class="sub-menu">
                          <li>
                            <Link to={"/agriculture-portfolio"}>
                              <span> Agriculture Equipments </span>
                            </Link>
                          </li>
                          <li id="homedemo2" className="active open">
                            <Link to={"/harvesting-portfolio"}>
                              <span> Pre and Post Harvesting</span>
                              {/* <i class="fa fa-chevron-down"></i> */}
                            </Link>
                            <ul class="sub-menu">
                              <li>
                                <Link to={"/harvesting-portfolio"}>
                                  <span> Pre Harvesting</span>
                                </Link>
                              </li>
                              <li>
                                <Link to={"/post-harvesting-portfolio"}>
                                  <span> Post Harvesting</span>
                                </Link>
                              </li>
                              <li>
                                <Link to={"/other-harvesting-portfolio"}>
                                  <span> Other Harvesting Products</span>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to={"/food-portfolio"}>
                              <span> Food Processing Machinery</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/construction-portfolio"}>
                              <span> Construction Machinery</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/workshop-portfolio"}>
                              <span> Workshop Machinery</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/component-portfolio"}>
                              <span> Precision Component Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/renewable-portfolio"}>
                              <span> Non Renewable Energy</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/tender-portfolio"}>
                              <span> Project Division</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li class="has-mega-menu" id="homedemo">
                        {" "}
                        <a
                          href={require("../../images/Aditya_Impex_Profile_Hyperlink.pdf")}
                          download
                        >
                          Catalog
                        </a>{" "}
                      </li>
                      <li id="homedemo">
                        <Link to={"/contactus"}>Contact Us</Link>
                      </li>
                    </ul>
                    <div class="dlab-social-icon">
                      <ul>
                        <li>
                          <Link
                            class="site-button circle fa fa-facebook"
                            to={"/#"}
                          ></Link>
                        </li>
                        <li>
                          <Link
                            class="site-button  circle fa fa-twitter"
                            to={"/#"}
                          ></Link>
                        </li>
                        <li>
                          <Link
                            class="site-button circle fa fa-linkedin"
                            to={"/#"}
                          ></Link>
                        </li>
                        <li>
                          <Link
                            class="site-button circle fa fa-instagram"
                            to={"/#"}
                          ></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </header>
      </>
    );
  }
}
export default Header;
