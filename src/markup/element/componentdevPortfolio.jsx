import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    name: "casting",
    casting: true,
    title: "Casting",
    // subTitle:"casting",
    route: "/sand-casting-details",
    imgUrl: require("../../images/Component/SAND CASTING 1.jpg"),
  },
  // {
  //   id: 2,
  //   name: "casting",
  //   casting: true,
  //   title:" Shell Core Casting",
  //   subTitle:"casting",
  //   route:"/shell-core-details",
  //   imgUrl: require("../../images/Aditya impex Jpg/CASTING 2.jpg")
  // },
  // {
  //   id: 3,
  //   name: "casting",
  //   casting: true,
  //   title:" Investment Casting",
  //   subTitle:"casting",
  //   route:"/investment-casting-details",
  //   imgUrl: require("../../images/Aditya impex Jpg/INVESTMENT.jpg")
  // },
  // {
  //   id: 4,
  //   name: "casting",
  //   casting: true,
  //   title:"  Gravity Casting ",
  //   subTitle:"casting",
  //   route:"/gravity-casting-details",
  //   imgUrl: require("../../images/portfolio/powertool.jpg")
  // },
  // {
  //   id: 5,
  //   name: "casting",
  //   casting: true,
  //   title:"PDC Casting",
  //   subTitle:"casting",
  //   route:"/pdc-casting-details",
  //   imgUrl: require("../../images/portfolio/motor.jpg")
  // },
  {
    id: 6,
    name: "forging",
    forging: true,
    title: "Forging",
    // subTitle:"forging",
    route: "/die-forging-details",
    imgUrl: require("../../images/Component/FORGING FLANGES.jpg"),
  },

  {
    id: 7,
    name: "Bar Stock",
    forging: true,
    title: "Bar Stock",
    // subTitle:"forging",
    route: "/bar-stock-details",
    imgUrl: require("../../images/Component/bar_stock_components.jpg"),
  },

  {
    id: 8,
    name: "Bearings",
    forging: true,
    title: "Bearings",
    // subTitle:"forging",
    route: "/bearing-details",
    imgUrl: require("../../images/Component/BEARINGS.jpg"),
  },

  // {
  //   id: 8,
  //   name: "forging",
  //   forging: true,
  //   title:"Ring rolling ",
  //   // subTitle:"forging",
  //   route:"/ring-rolling-details",
  //   imgUrl: require("../../images/portfolio/drill.jpg")
  // },
  // {
  //   id: 9,
  //   name: "barstoke",
  //   barstoke: true,
  //   title:"Carbon steel",
  //   // subTitle:"barstoke",
  //   route:"/carbon-steel-details",
  //   imgUrl: require("../../images/portfolio/drill.jpg")
  // },
  // {
  //   id: 10,
  //   name: "barstoke",
  //   barstoke: true,
  //   title:"Alloy steel",
  //   // subTitle:"barstoke",
  //   route:"/alloy-steel-details",
  //   imgUrl: require("../../images/portfolio/drill.jpg")
  // },
  // {
  //   id: 11,
  //   name: "barstoke",
  //   barstoke: true,
  //   title:" Non-Alloy steel ",
  //   // subTitle:"barstoke",
  //   route:"/non-alloy-steel-details",
  //   imgUrl: require("../../images/portfolio/drill.jpg")
  // },
];

// const FILTER_DEFS = {
//   agriculture: image => image.agriculture,
//   chemical: image => image.chemical,
//   mechanical: image => image.mechanical,
//   all: image => image
// };

const getFilterSections = (images) => {
  const filters = ["all"];
  images.map((image) => {
    if (filters.indexOf(image.name) === -1) {
      filters.push(image.name);
    }
  });
  return filters;
};

const filterImages = (filterKey, images) => {
  const list = images.filter((image) =>
    filterKey === "all" ? image : image.name === filterKey
  );

  return list;
};

const ComponentdevPortfolio = (props) => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all",
  });

  const { list, filterKey } = state;

  const filteredList = filterImages(filterKey, list);
  const filters = getFilterSections(images);
  const collumnCls = props.col
    ? props.col
    : "col-12 col-sm-6 col-lg-3 d-flex justify-content-center";

  return (
    <div class="content-block">
      <div
        class="section-full content-inner-2 portfolio text-uppercase bg-gray"
        id="portfolio"
      >
        <div class="container">
          <div class="site-filters clearfix center  m-b40">
            {/* FILTERS */}
            <ul class="filters" data-toggle="buttons">
              {filters.map((filter) => (
                <li
                  class="btn"
                  onClick={() => setState({ ...state, filterKey: filter })}
                >
                  <div className="site-button-secondry button-sm radius-xl">
                    <span>{filter}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* FILTERED PORTFOLIO LIST */}
          <div className="portfolio_area">
            <div className="row portfolio-grid">
              {filteredList.map((image) => (
                <div className={collumnCls}>
                  <div class="dlab-box dlab-gallery-box">
                    <div class="dlab-media dlab-img-overlay1 dlab-img-effect zoom">
                      <Link to="/portfolio-details">
                        {" "}
                        <img
                          src={image.imgUrl}
                          alt=""
                          style={{ height: 286 + "px", width: 286 + "px" }}
                        />{" "}
                      </Link>
                      <div class="overlay-bx">
                        <div class="overlay-icon">
                          <div class="text-white">
                            <Link to={image.route}>
                              <i class="fa fa-link icon-bx-xs"></i>
                            </Link>
                            <span class="check-km" title="Harvesting">
                              <i class="fa fa-picture-o icon-bx-xs"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dez-info p-a30 bg-white">
                      <p class="dez-title m-t0">{image.title}</p>
                      <p>
                        <small>{image.subTitle}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentdevPortfolio;
