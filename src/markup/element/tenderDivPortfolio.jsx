import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    name: "solarsystem",
    solarsystem: true,
    title: "Pouch Powder Machine",
    // subTitle:"solarsystem",
    route: "/pouch-powder-details",
    imgUrl: require("../../images/Tender/powder-pouch-machine.png"),
  },
  {
    id: 2,
    name: "solarsystem",
    solarsystem: true,
    title: " Dal Mill Plant",
    // subTitle:"solar system",
    route: "/dal-mill-plant-details",
    imgUrl: require("../../images/Tender/download.jpeg"),
  },
  // {
  //     id: 3,
  //     name: "solarsystem",
  //     solarsystem: true,
  //     title:" Mini Sugar Plant",
  //     subTitle:"solar system",
  //     route:"/mini-suger-plant-details",
  //     imgUrl: require("../../images/portfolio/sugar-plant.jpg")
  // },
  {
    id: 4,
    name: "solarsystem",
    solarsystem: true,
    title: " Non Voven Bag Plant",
    // subTitle:"solar system",
    route: "/non-voven-bag-plant-details",
    imgUrl: require("../../images/Tender/download (1).jpeg"),
  },
  // {
  //     id: 5,
  //     name: "solarsystem",
  //     solarsystem: true,
  //     title:"Double Roller Mill Machine",
  //     subTitle:"solar system",
  //     route:"/double-roller-details",
  //     imgUrl: require("../../images/portfolio/double-roller.jpg")
  // },

  {
    id: 6,
    name: "solarsystem",
    solarsystem: true,
    title: "Sugar Plant Machinery",
    // subTitle:"solarsystem",
    route: "/suger-plant-machine-details",
    imgUrl: require("../../images/Tender/download (2).jpeg"),
  },
  {
    id: 7,
    name: "solarsystem",
    solarsystem: true,
    title: " Cup Filling & Sealing Machine",
    // subTitle:"solarsystem",
    route: "/cup-filling-details",
    imgUrl: require("../../images/Tender/download (3).jpeg"),
  },

  {
    id: 8,
    name: "solarsystem",
    solarsystem: true,
    title: "Water Bottle Machine",
    // subTitle:"solarsystem",
    route: "/water-bottle",
    imgUrl: require("../../images/Tender/Waterbottle Machine copy.jpg"),
  },

  {
    id: 9,
    name: "solarsystem",
    solarsystem: true,
    title: "Mini Oil Mill Plant",
    // subTitle:"solarsystem",
    route: "/tender-portfolio2",
    imgUrl: require("../../images/Tender/download (4).jpeg"),
  },

  {
    id: 10,
    name: "solarsystem",
    solarsystem: true,
    title: "Cold Storage",
    // subTitle:"solarsystem",
    route: "/cold-storage-details",
    imgUrl: require("../../images/Tender/COLD STORAGE PHOTOS.jpg"),
  },

  {
    id: 11,
    name: "solarsystem",
    solarsystem: true,
    title: "Generator",
    // subTitle:"solarsystem",
    route: "/generator-details",
    imgUrl: require("../../images/Tender/DIESEL GENERATOR copy.jpg"),
  },

  {
    id: 11,
    name: "solarsystem",
    solarsystem: true,
    title: "Candle Making Machine",
    // subTitle:"solarsystem",
    route: "/candle-making-details",
    imgUrl: require("../../images/Tender/new candle making machine photo.jpg"),
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

const TenderDivPortfolio = (props) => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all",
  });

  const { list, filterKey } = state;

  const filteredList = filterImages(filterKey, list);
  const filters = getFilterSections(images);
  const collumnCls = props.col
    ? props.col
    : "col-12 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center";

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

export default TenderDivPortfolio;
