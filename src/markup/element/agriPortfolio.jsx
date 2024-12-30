import React, { useState } from "react";
import { Link } from "react-router-dom";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// import Lightbox1 from "react-lightbox-component";

const images = [
  {
    id: 1,
    name: "engine",
    engine: true,
    title: "Petter type Engine",
    subTitle: "Engine",
    route: "/peter-type-engine-details",
    imgUrl: require("../../images/Agriportfolio/01_petter_type_engine.jpg"),
  },
  {
    id: 2,
    name: "engine",
    engine: true,
    title: "Lister type Engine",
    subTitle: "Engine",
    route: "/lister-details",
    imgUrl: require("../../images/Agriportfolio/07_Lister_type_engine.jpg"),
  },
  {
    id: 3,
    name: "spares",
    spares: true,
    title: "Petter type Engine Spares",
    subTitle: "Spares",
    route: "/petter-engine-spare-details",
    imgUrl: require("../../images/Agriportfolio/02_petter-type_engine_spares.jpg"),
  },
  {
    id: 4,
    name: "spares",
    spares: true,
    title: " Lister type Engine Spares",
    subTitle: "Spares",
    route: "/lister-engine-spare-details",
    imgUrl: require("../../images/Agriportfolio/08 _LISTE_ENGINE_SPARE_PARTS.jpg"),
  },
  {
    id: 9,
    name: "pumps/pipes",
    pipes: true,
    title: "Turbine Pumps",
    subTitle: "Pumps",
    route: "/Turbin-Water-Pumps-Details",
    imgUrl: require("../../images/Agriportfolio/turbine-pipe.jpg"),
  },
  {
    id: 5,
    name: "pumps/pipes",
    pipes: true,
    title: "Centrifugal Pumps",
    subTitle: "Pumps",
    route: "/centrifugal-pump-details",
    imgUrl: require("../../images/Agriportfolio/09_CENTRIFUGAL_PUMP.jpg"),
  },
  {
    id: 16,
    name: "pumps/pipes",
    pipes: true,
    title: " Submersible Pumps",
    subTitle: "Pumps",
    route: "/Submersible-Pumps-Details",
    imgUrl: require("../../images/Agriportfolio/NEW Submersible-Pump.png"),
  },
  {
    id: 13,
    name: "pumps/pipes",
    pipes: true,
    title: "  Deepwell & Treadle Pump",
    subTitle: "Pumps/Pipes",
    route: "/hand-pump-details",
    imgUrl: require("../../images/Agriportfolio/deepwell-treadle-pump.jpg"),
  },
  {
    id: 7,
    name: "pumps/pipes",
    pipes: true,
    title: "Suction & Delivery Hose Pipe",
    subTitle: "Pipes",
    route: "/suction-hose-pipe-details",
    imgUrl: require("../../images/Agriportfolio/suction-delivery-hose-pipe.jpg"),
  },
  {
    id: 10,
    name: "pumps/pipes",
    pipes: true,
    title: "CPVC & Galvanized Pipes And Fittings",
    subTitle: "Pipes",
    route: "/cpvc-pipe-details",
    imgUrl: require("../../images/Agriportfolio/cpvc copy.jpg"),
  },
  {
    id: 14,
    name: "plough",
    plough: true,
    title: "Ploughing",
    subTitle: "Plough",
    route: "/ploughing-details-pre",
    imgUrl: require("../../images/Agriportfolio/ox plough.jpg"),
  },
  {
    id: 12,
    name: "cutter",
    cutter: true,
    title: " Chaff Cutter",
    subTitle: "Cutter",
    route: "/chaff-cutter-details",
    imgUrl: require("../../images/Agriportfolio/charkho.jpeg"),
  },
  {
    id: 8,
    name: "cutter",
    cutter: true,
    title: "Chopper Mill",
    subTitle: "Cutter",
    route: "/choper-mill-details",
    imgUrl: require("../../images/Agriportfolio/2.jpg"),
  },
  {
    id: 15,
    name: "bars",
    bars: true,
    title: " Round Bar",
    subTitle: "Bars",
    route: "/round-bar-details",
    imgUrl: require("../../images/Agriportfolio/steel_pipe.jpeg"),
  },
  // {
  //   id: 6,
  //   name: "pumps/pipes",
  //   pipes: true,
  //   title:"Money Maker Treadle Pump",
  //   subTitle:"Pumps/Pipes",
  //   route:"/hand-pump-details",
  //   imgUrl: require("../../images/Aditya impex Jpg/13.jpg")
  // },

  // {
  //   id: 11,
  //   name: "pumps/pipes",
  //   pipes: true,
  //   title:"Horizontal Centrifugal Pump",
  //   subTitle:"Pumps/Pipes",
  //   route:"/hand-pump-details",
  //   imgUrl: require("../../images/portfolio/horizontal-cpump.jpg")
  // },
];

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

export class LightboxExample {
  constructor(props) {
    // super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
        {/* {isOpen && (
          
        )} */}
      </div>
    );
  }
}
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
const img = (images) => {
  const imgList = [];
  images.filter((img) => {
    imgList.push(img.imgUrl);
  });
  console.log(imgList);

  return imgList;
};

// const lightImage = (props) => {
//   return (
//     <Lightbox1
//       images={[
//         {
//           src: props["imgUrl"],
//         },
//       ]}
//       thumbnailWidth="286px"
//       thumbnailHeight="286px"
//     />
//   );
// };

const AgriPortfolio = (props) => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all",
    isVisible: false,
    slide: 0,
    url: "",
  });

  const isOpen = false;

  const { list, filterKey, isVisible, slide, url } = state;

  const filteredList = filterImages(filterKey, list);
  const filters = getFilterSections(images);
  const collumnCls = props.col
    ? props.col
    : "col-12 col-sm-6 col-lg-3 d-flex justify-content-center";
  const image = img(images);
  // showSlide = (slide) => {
  //   setState({
  //     isVisible: !isVisible,
  //     slide: slide
  //   });
  // }

  return (
    <div class="content-block">
      <fsLightbox
        toggler={isVisible}
        slide={slide}
        sources={image}
      ></fsLightbox>
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
              {filteredList.map((image, index) => (
                <div className={collumnCls}>
                  <div class="dlab-box dlab-gallery-box">
                    <div class="dlab-media dlab-img-overlay1 dlab-img-effect zoom">
                      <Link to={image.route}>
                        <img
                          src={image.imgUrl}
                          alt=""
                          style={{ height: 286 + "px", width: 286 + "px" }}
                        />
                      </Link>
                      <div class="overlay-bx">
                        <div class="overlay-icon">
                          <div class="text-white">
                            <Link to={image.route}>
                              <i class="fa fa-link icon-bx-xs"></i>
                            </Link>

                            <span
                              class="check-km"
                              title="Agriculture"
                              onClick={() => {
                                setState({
                                  ...state,
                                  isVisible: !isVisible,
                                  slide: index,
                                  url: image.imgUrl,
                                });
                              }}
                            >
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

export default AgriPortfolio;
