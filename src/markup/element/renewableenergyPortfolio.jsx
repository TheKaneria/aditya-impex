import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    name: "solarsystem",
    solarsystem: true,
    title: " Solar Home Kit",
    // subTitle:"solar system",
    route: "/solarhomekit-details",
    imgUrl: require("../../images/Renewable/solarkit.jpg"),
  },
  {
    id: 2,
    name: "solarsystem",
    solarsystem: true,
    title: " Solar Pump",
    // subTitle:"solar system",
    route: "/solar-pump-details",
    imgUrl: require("../../images/Renewable/solar-pump copy.jpg"),
  },
  {
    id: 3,
    name: "solarsystem",
    solarsystem: true,
    title: " Solar System",
    // subTitle:"solar system",
    route: "/solar-system-details",
    imgUrl: require("../../images/Renewable/solarpanel copy.jpg"),
  },
  {
    id: 4,
    name: "solarsystem",
    solarsystem: true,
    title: "Solar Lantern",
    // subTitle:"solar system",
    route: "/solar-lantern-details",
    imgUrl: require("../../images/Renewable/download.jpeg"),
  },
  {
    id: 5,
    name: "solarsystem",
    solarsystem: true,
    title: "Solar Street Light",
    // subTitle:"solarsystem",
    route: "/solar-street-light-details",
    imgUrl: require("../../images/Renewable/solar-street-light copy.jpg"),
  },
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

const RenewableenergyPortfolio = (props) => {
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

export default RenewableenergyPortfolio;
