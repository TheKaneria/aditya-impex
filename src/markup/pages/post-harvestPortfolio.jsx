import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    name: "system",
    system: true,
    route: "/dripp-system-details",
    title: "Dripp Irrigation System",
    // subTitle:"System",
    imgUrl: require("../../images/Harvesting/01 DRIPP IRRIGATION SYSTEM PHOTOS 3.jpg"),
  },
  // {
  //   id: 2,
  //   name: "cleaner",
  //   cleaner: true,
  //   route:"",
  //   title:"Grain Cleaner",
  //   subTitle:"cleaner",
  //   imgUrl: require("../../images/Aditya impex Jpg/02 GRAIN CLEANING MACHINE 1.jpg")
  // },
  {
    id: 3,
    name: "plough",
    plough: true,
    route: "/poly-dics-harrow-details",
    title: "Harrows",
    // subTitle:"plough",
    imgUrl: require("../../images/Harvesting/03 POLY DISC HARROW.jpg"),
  },
  {
    id: 4,
    name: "system",
    system: true,
    route: "/harvesting-machine-repare-details",
    title: "Reaper and Digger",
    // subTitle:"System",
    imgUrl: require("../../images/Harvesting/04 HARVESTING MACHINE REAPER.jpg"),
  },
  //   {
  //     id: 5,
  //     name: "plough",
  //     plough: true,
  //     route:"/cultivator-details",
  //     title:"Cultivator",
  //     subTitle:"plough",
  //     imgUrl: require("../../images/Aditya impex Jpg/05 CULTIVATOR.jpg")
  //   },
  //   {
  //     id: 6,
  //     name: "plough",
  //     plough: true,
  //     route:"/ploughing-details",
  //     title:"Ploughing",
  //     subTitle:"plough",
  //     imgUrl: require("../../images/Aditya impex Jpg/06 PLOUGHING.jpg")
  //   },
  //   {
  //     id: 7,
  //     name: "system",
  //     system: true,
  //     route:"/seed-drill-details",
  //     title:"Seed Drill Machine",
  //     subTitle:"System",
  //     imgUrl: require("../../images/Aditya impex Jpg/07 seed-drill-machine.jpg")
  //   },
  //   {
  //     id: 8,
  //     name: "cutter",
  //     cutter: true,
  //     route:"",
  //     title:"Seed Planter Machine",
  //     subTitle:"Cutter",
  //     imgUrl: require("../../images/Aditya impex Jpg/08 SEED PLANTER.jpg")
  //   },
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

const PostHarvestPortfolio = (props) => {
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
                      <Link to={image.route}>
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

                            <span class="check-km" title="havrvesting">
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

export default PostHarvestPortfolio;
