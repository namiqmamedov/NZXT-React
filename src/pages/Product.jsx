import React from "react";
import high from "../assets/videos/high.mp4";
import highSr from "../assets/videos/highSr.mp4";
import "../styles/product.css";
import performencePrimaryBg from "../assets/images/thumbnail/performancePrimaryBg.avif";
import performencePrimary from "../assets/images/thumbnail/performancePrimary.avif";
import panelPrimary from "../assets/images/thumbnail/panelPrimary.avif";
import componentPrimary from "../assets/images/thumbnail/componentPrimary.avif";
import meetTheFlow from "../assets/images/thumbnail/meet-the-flow.png";
import meetTheElite from "../assets/images/thumbnail/meet-the-elite.png";
import managementBG from "../assets/images/thumbnail/managementBG.png";
import dualChamberDesign from "../assets/images/thumbnail/h9-dual-chamber-design-primary.png";
import cableManagement from "../assets/images/thumbnail/h9-cable-management-bg.png";
import cableManagementSr from "../assets/images/thumbnail/h9-cable-management-bg-sr.png";
import airflowDiagram from "../assets/images/thumbnail/airflow-diagram.png";
import airflowDiagram2 from "../assets/images/thumbnail/airflow-diagram2.png";
import verticalGpu from "../assets/images/thumbnail/h9-vertical-gpu-bg.png";
import verticalGpuSr from "../assets/images/thumbnail/vertical-gpu.png";
import krakenZ73 from "../assets/images/thumbnail/h9-kraken-z73.png";
import fansPrimary from "../assets/images/thumbnail/fans-primary-web.png";
import bgCenter from "../assets/images/thumbnail/bg-center.png";
import nzxtLogo from "../assets/images/thumbnail/nzxtLogo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const Product = () => {
  return (
    <>
      <section className="product-wrapper">
        <div className="thumbnail-content">
          <div className="thumbnail-text">
            <h1>H9 Series</h1>
            <p>Dual Chamber Mid-Tower Cases</p>
          </div>
        </div>
        <video className="graphics-hd" src={high} autoPlay loop muted></video>
        <video className="graphics-hd-sr" src={highSr} autoPlay loop muted></video>
      </section>
      <section className="product-list">
        <div className="container">
          <div className="row">
            <div className="product-list-index">
              <div className="col-lg-4">
                <h1>THE NEW H9 SERIES</h1>
                <div>
                  The H9 Series is a true showcase for premium components while
                  keeping them cool with a capacity for 10 fans and numerous
                  radiator setup options.
                </div>
              </div>
              <div className="col-lg-8">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product__thumbnail">
        <img
          className="background-img"
          src={performencePrimaryBg}
          alt="Home Background Image"
        />
        <div className="container">
          <div className="row">
            <div className="product__content">
              <div className="product__text col-lg-12">
                <h3 className="title">Make Performance an Art</h3>
                <div className="subtitle">
                  The H9 is spacious mid-tower with powerful airflow and vibrant
                  style.
                </div>
              </div>
              <div className="product-img col-lg-12">
                <div className="image-block">
                  <picture>
                    <source
                      media="(min-width: 992px)"
                      srcset={performencePrimary}
                    />
                    <source
                      media="(max-width: 992px)"
                      srcset={performencePrimary}
                    />
                    <img
                      className="main-img"
                      src={performencePrimary}
                      alt="Main Image"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="center-index">
        <div className="card__main">
          <div style={{ backgroundColor: "#F1F5FE" }} className="card-full">
            <div className="card-full-content text-grey">
              <h3>Uninterrupted Glass Paneling</h3>
              <p>
                Featuring seamless glass paneling to showcase every angle of the
                most powerful components with a dual-chamber design to help
                increase cooling.
              </p>
            </div>
           <div className="image-item">
           <div className="image-center">
           <img
              className="background-img"
              src={panelPrimary}
              alt="Card Image"
            />
           </div>
           </div>
          </div>
          <div style={{ background: "#F1F5FE" }} className="card-full">
            <div className="card-full-content text-white order-1">
              <h3>Space for Powerful Components</h3>
              <p>
                The H9 has plenty of space for premium components, numerous
                radiator mounting options, and the ability to vertically mount a
                GPU.
              </p>
            </div>
            <div className="image-item">
           <div className="image-center">
            <img
              className="background-img"
              src={componentPrimary}
              alt="Card Image"
            />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-index">
        <h2 className="title">Meet the H9 Series</h2>
        <p className="subtitle">
          The H9 keeps things clean and simple while supporting powerful builds.
          Two versions are available, the H9 Flow and the H9 Elite.
        </p>
        <div className="container">
          <div className="row">
            <div className="card__main full">
              <div style={{ backgroundColor: "#F1F5FE" }} className="card-full">
                <div className="card-full-content text-grey">
                  <h3>Uninterrupted Glass Paneling</h3>
                  <p>
                    Featuring seamless glass paneling to showcase every angle of
                    the most powerful components with a dual-chamber design to
                    help increase cooling.
                  </p>
                </div>
             <div className="image-center">
                <img
                  className="background-img"
                  src={meetTheFlow}
                  alt="Card Image"
                />
                </div>
              </div>
              <div style={{ background: "#F1F5FE" }} className="card-full">
                <div className="card-full-content text-white">
                  <h3>Space for Powerful Components</h3>
                  <p>
                    The H9 has plenty of space for premium components, numerous
                    radiator mounting options, and the ability to vertically
                    mount a GPU.
                  </p>
                </div>
               <div className="image-center">
               <img
                  className="background-img"
                  src={meetTheElite}
                  alt="Card Image"
                />
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="center-thumbnail">
        <div className="center-index">
          <div
            className="product__item col-lg-7"
            style={{ background: "#F1F5FE" }}
          >
            <div className="container">
              <div className="row">
                <div className="product__content">
                  <div className="product__text col-lg-12">
                    <h3 className="title">Uninterrupted Glass Paneling</h3>
                    <div className="subtitle">
                      Featuring seamless glass paneling to showcase every angle
                      of the most powerful components with a dual-chamber design
                      to help increase cooling.
                    </div>
                  </div>
                  <div className="product-img col-lg-12">
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcset={panelPrimary}
                      />
                      <source
                        media="(max-width: 992px)"
                        srcset={panelPrimary}
                      />
                      <img
                        className="left-img"
                        src={panelPrimary}
                        alt="Main Image"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="product__item col-lg-5"
            style={{ background: "#F1F5FE" }}
          >
            <div className="container">
              <div className="product__content">
                <div className="product-img col-lg-12">
                  <picture>
                    <source
                      media="(min-width: 992px)"
                      srcset={componentPrimary}
                    />
                    <source
                      media="(max-width: 992px)"
                      srcset={componentPrimary}
                    />
                    <img
                      className="main-img"
                      src={componentPrimary}
                      alt="Main Image"
                    />
                  </picture>
                </div>
                <div className="product__text col-lg-12">
                  <h3 className="title">Space for Powerful Components</h3>
                  <div className="subtitle">
                    The H9 has plenty of space for premium components, numerous
                    radiator mounting options, and the ability to vertically
                    mount a GPU.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="center-thumbnail">
        <h2>Meet the H9 Series</h2>
        <p>The H9 keeps things clean and simple while supporting powerful 
          builds. Two versions are available, 
          the H9 Flow and the H9 Elite.</p>
        <div className="container">
          <div className="row">
            <div className="center-index">
              <div
                className="product__item col-lg-6"
                style={{ background: "#F1F5FE" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product__text col-lg-12">
                      <h3 className="title">H9 Flow</h3>
                      <div className="subtitle">
                        The H9 Flow features a perforated top panel, room for up
                        to 10 fans, and multiple radiator mounting options for
                        increased cooling.
                      </div>
                    </div>
                    <div className="product-img col-lg-12">
                      <picture>
                        <source
                          media="(min-width: 992px)"
                          srcset={meetTheFlow}
                        />
                        <source
                          media="(max-width: 992px)"
                          srcset={meetTheFlow}
                        />
                        <img
                          className="left-img"
                          src={meetTheFlow}
                          alt="Main Image"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product__item col-lg-6"
                style={{ background: "#F1F5FE" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product__text col-lg-12">
                      <h3 className="title">H9 Elite</h3>
                      <div className="subtitle">
                      The H9 Elite features a tempered glass top panel with
                      a uniquely clear radiator mounting bracket and a
                      built-in RGB and Fan Controller for enhanced lighting
                      customization.
                      </div>
                    </div>
                    <div className="product-img col-lg-12">
                      <picture>
                        <source
                          media="(min-width: 992px)"
                          srcset={meetTheElite}
                        />
                        <source
                          media="(max-width: 992px)"
                          srcset={meetTheElite}
                        />
                        <img
                          className="left-img"
                          src={meetTheElite}
                          alt="Main Image"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="center-thumbnail">
        <h2>Simplified Building</h2>
        <p>
          The H9 is easy to build in, with cable routing, a unique SSD hinge,
          and a dual-chamber design with plenty of space for premium components.
        </p>
        <div className="container">
          <div className="row">
            <div
              className="center-index full"
              style={{ backgroundImage: `url(${managementBG})` }}
            >
              <div
                className="product__item col-lg-6 col-12"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product__text col-lg-12">
                      <h3 className="title">Dual-Chamber Design</h3>
                      <div className="subtitle">
                        Utilizing a dual-chamber design, the H9 separates the
                        aesthetically pleasing components from the wires and
                        cables that can clutter up a build while keeping things
                        clean and cool by allowing more airflow options.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product__item col-lg-6 col-12"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product-img col-lg-12">
                      <picture>
                        <source
                          media="(min-width: 992px)"
                          srcset={dualChamberDesign}
                        />
                        <source
                          media="(max-width: 992px)"
                          srcset={dualChamberDesign}
                        />
                        <img
                          className="left-img"
                          src={dualChamberDesign}
                          alt="Main Image"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-thumbnail">
        <div className="container">
          <div className="row">
            <div
              className="center-index only-one"
              style={{ backgroundImage: `url()` }}
            >
              <div
                className="product__item col-lg-12"
                style={{ background: "transparent" }}
              >
                <div className="product__content">
                  <div className="product-img col-lg-12">
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcset={cableManagement}
                      />
                      <source
                        media="(max-width: 992px)"
                        srcset={cableManagement}
                      />
                      <img
                        className="left-img"
                        src={cableManagement}
                        alt="Main Image"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-thumbnail">
        <div className="container">
          <div className="row">
            <div className="center-index mini">
              <div
                className="product__item mini"
                style={{ backgroundImage: `url(${managementBG})` }}
              >
                <div className="item-thumbnail">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="w-12 h-12 fill-current mb-2 flex items-center justify-center mx-auto text-center"
                >
                  <path d="M19.623 0a1 1 0 011 1v20.496a1 1 0 01-1 1h-5.301v-1.088h-4.77v1.088H4.5a1 1 0 01-1-1V1a1 1 0 011-1h15.123zm-.501 1.5H5v19.496h14.122V1.5z"></path>
                  <path d="M14.824 19.909a1 1 0 011 1V23a1 1 0 01-1 1h-5.77a1 1 0 01-1-1v-2.091a1 1 0 011-1h5.77zm-.501 1.499h-4.77v1.091h4.77v-1.091zm-1.717-10.16a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1h3zm-.501 1.5h-2v2h2v-2zM6.657 4.831a1 1 0 100-2 1 1 0 000 2zm10.563 0a1 1 0 100-2 1 1 0 000 2zm0 15.078a1 1 0 100-2 1 1 0 000 2zm-10.563 0a1 1 0 100-2 1 1 0 000 2z"></path>
                </svg>
                </div>
                <h3>SSD Hinge</h3>
                <p>
                  The H9’s unique hinged door design offers easy access and
                  installation for up to 4 SSDs.
                </p>
              </div>
              <div
                className="product__item mini"
                style={{ backgroundImage: `url(${managementBG})` }}
              >
                <div className="item-thumbnail">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="w-12 h-12 fill-current mb-2 flex items-center justify-center mx-auto text-center"
                >
                  <path d="M7.78 19.952l1.16.952-2.385 2.904H3.697L1.34 20.9l1.165-.944 1.906 2.351h1.433l1.936-2.355zm13.901 0l1.16.952-2.386 2.904h-2.857L15.242 20.9l1.165-.944 1.906 2.351h1.433l1.936-2.355z"></path>
                  <path d="M23 0a1 1 0 011 1v18.923a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h22zm-.5 1.5h-21v17.923h21V1.5z"></path>
                </svg>
                </div>
                <h3>Dual-Chamber Layout</h3>
                <p>
                  The dual-chamber layout allows for radiator and fan mounting
                  on the bottom grill with plenty of clearance.
                </p>
              </div>
              <div
                className="product__item mini"
                style={{ backgroundImage: `url(${managementBG})` }}
              >
                <div className="item-thumbnail">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="w-12 h-12 fill-current mb-2 flex items-center justify-center mx-auto text-center"
                >
                 <path d="M11.998 23.594a.75.75 0 01-.743-.648l-.007-.102-.001-3.261-2.234 2.264-.084.073a.75.75 0 01-1.055-1.043l.072-.084 3.3-3.344.001-2.157L9.466 14.2l-1.842 1.099-1.157 4.593a.75.75 0 01-1.472-.266l.018-.1.79-3.142-2.788 1.663a.75.75 0 01-.852-1.23l.084-.058 2.816-1.68-3.087-.835a.75.75 0 01.292-1.468l.1.02 4.488 1.214 1.865-1.112v-1.95L6.959 9.925 2.382 11.14A.75.75 0 011.9 9.723l.097-.033 3.13-.832-2.805-1.632a.75.75 0 01.663-1.342l.091.045 2.835 1.65-.767-3.106a.75.75 0 011.425-.456l.031.097 1.115 4.515 1.803 1.049 1.729-1.043V6.557L7.946 3.214a.75.75 0 01.983-1.127l.084.073 2.235 2.263V1.156a.75.75 0 01.648-.743l.102-.007h.004l.102.007a.75.75 0 01.648.743v3.267l2.235-2.263.084-.073a.75.75 0 01.983 1.127l-3.3 3.343-.001 2.078 1.73 1.043 1.802-1.05L17.4 4.115l.03-.097a.75.75 0 011.426.456l-.767 3.106 2.835-1.65.091-.045a.75.75 0 01.663 1.342l-2.806 1.632 3.131.832.097.033a.75.75 0 01-.482 1.417l-4.577-1.216-1.762 1.025v1.949l1.865 1.112 4.488-1.214.1-.02a.75.75 0 01.292 1.468l-3.087.835 2.816 1.68.084.058a.75.75 0 01-.852 1.23l-2.789-1.663.791 3.142.018.1a.75.75 0 01-1.472.266L16.376 15.3l-1.842-1.1-1.781 1.093v2.157l3.301 3.344.073.084a.75.75 0 01-1.056 1.043l-.084-.073-2.234-2.264v3.261l-.008.102a.75.75 0 01-.743.648h-.004zM12 9.933l-1.779 1.073v1.897L12 13.993l1.779-1.09v-1.897l-1.78-1.073z"></path>
                </svg>
                </div>
                <h3>Cool Your Way</h3>
                <p>
                  The H9 offers plenty of room for numerous radiator mounting
                  options and sizes up to 360mm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-index">
        <h2 className="title">Focus Your Cooling</h2>
        <p className="subtitle">
          Configure the H9 for optimized CPU or GPU cooling depending on fan and
          radiator placement.
        </p>
        <div className="container">
          <div className="row">
            <div className="card__main full">
              <div style={{ backgroundColor: "#F1F5FE" }} className="card-full">
                <div className="card-full-content text-grey">
                  <h3>GPU Cooling</h3>
                  <p></p>
                </div>
           <div className="image-center">
                <img
                  className="background-img"
                  src={airflowDiagram2}
                  alt="Card Image"
                />
                </div>
              </div>
              <div style={{ background: "#F1F5FE" }} className="card-full">
                <div className="card-full-content text-white">
                  <h3>CPU Cooling</h3>
                  <p></p>
                </div>
           <div className="image-center">
                <img
                  className="background-img"
                  src={airflowDiagram}
                  alt="Card Image"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-thumbnail">
        <h2>Enhance Your H9</h2>
        <p>
          Get the most out of the H9 with these NZXT components and accessories.
        </p>
        <div className="container">
          <div className="row">
            <div
              className="center-index full"
              style={{ backgroundImage: `url()`, backgroundColor: "#F5F5F8" }}
            >
              <div
                className="product__item col-lg-6 col-12 order-1"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product__text col-lg-12">
                      <h3 className="title text-black">
                        Personalize the H9 With the Kraken Z73
                      </h3>
                      <div className="subtitle text-black"></div>
                      <div className="wrapper-item">
                        <div className="logo">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            class="fill-current h-12 w-12"
                          >
                            <path d="M11.998 23.594a.75.75 0 01-.743-.648l-.007-.102-.001-3.261-2.234 2.264-.084.073a.75.75 0 01-1.055-1.043l.072-.084 3.3-3.344.001-2.157L9.466 14.2l-1.842 1.099-1.157 4.593a.75.75 0 01-1.472-.266l.018-.1.79-3.142-2.788 1.663a.75.75 0 01-.852-1.23l.084-.058 2.816-1.68-3.087-.835a.75.75 0 01.292-1.468l.1.02 4.488 1.214 1.865-1.112v-1.95L6.959 9.925 2.382 11.14A.75.75 0 011.9 9.723l.097-.033 3.13-.832-2.805-1.632a.75.75 0 01.663-1.342l.091.045 2.835 1.65-.767-3.106a.75.75 0 011.425-.456l.031.097 1.115 4.515 1.803 1.049 1.729-1.043V6.557L7.946 3.214a.75.75 0 01.983-1.127l.084.073 2.235 2.263V1.156a.75.75 0 01.648-.743l.102-.007h.004l.102.007a.75.75 0 01.648.743v3.267l2.235-2.263.084-.073a.75.75 0 01.983 1.127l-3.3 3.343-.001 2.078 1.73 1.043 1.802-1.05L17.4 4.115l.03-.097a.75.75 0 011.426.456l-.767 3.106 2.835-1.65.091-.045a.75.75 0 01.663 1.342l-2.806 1.632 3.131.832.097.033a.75.75 0 01-.482 1.417l-4.577-1.216-1.762 1.025v1.949l1.865 1.112 4.488-1.214.1-.02a.75.75 0 01.292 1.468l-3.087.835 2.816 1.68.084.058a.75.75 0 01-.852 1.23l-2.789-1.663.791 3.142.018.1a.75.75 0 01-1.472.266L16.376 15.3l-1.842-1.1-1.781 1.093v2.157l3.301 3.344.073.084a.75.75 0 01-1.056 1.043l-.084-.073-2.234-2.264v3.261l-.008.102a.75.75 0 01-.743.648h-.004zM12 9.933l-1.779 1.073v1.897L12 13.993l1.779-1.09v-1.897l-1.78-1.073z"></path>
                          </svg>
                        </div>
                        <div className="content">
                          <h4>Cooling</h4>
                          <p>
                            NZXT's all-in-one (AIO) liquid cooler delivers
                            high-quality cooling potential.
                          </p>
                        </div>
                      </div>
                      <div className="wrapper-item">
                        <div className="logo">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            class="fill-current h-12 w-12"
                          >
                            <path d="M12 1.45c5.827 0 10.55 4.723 10.55 10.55 0 5.827-4.723 10.55-10.55 10.55-5.827 0-10.55-4.723-10.55-10.55C1.45 6.173 6.173 1.45 12 1.45zm0 1.5a9.05 9.05 0 100 18.1 9.05 9.05 0 000-18.1z"></path>
                            <path d="M12 6.197a5.803 5.803 0 110 11.606 5.803 5.803 0 010-11.606zm0 1.5a4.303 4.303 0 100 8.606 4.303 4.303 0 000-8.606zm-7.611.821a.75.75 0 011.38.588A7.366 7.366 0 005.18 12c0 .766.116 1.515.342 2.23a.75.75 0 11-1.43.452A8.889 8.889 0 013.68 12c0-1.211.243-2.39.708-3.482z"></path>
                            <path d="M16.906 6.543a.75.75 0 011.06.024 7.932 7.932 0 012.208 5.501 7.93 7.93 0 01-2.068 5.351.75.75 0 11-1.11-1.009 6.43 6.43 0 001.678-4.342c0-1.687-.649-3.27-1.792-4.464a.75.75 0 01.024-1.06zM2.078 2.863a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zm19.535 0a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zM2.078 22.583a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zm19.535 0a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032z"></path>
                          </svg>
                        </div>
                        <div className="content">
                          <h4>Cooling</h4>
                          <p>
                            NZXT's all-in-one (AIO) liquid cooler delivers
                            high-quality cooling potential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product__item col-lg-6 col-12"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product-img col-lg-12">
                      <picture>
                        <source media="(min-width: 992px)" srcset={krakenZ73} />
                        <source media="(max-width: 992px)" srcset={krakenZ73} />
                        <img
                          className="left-img"
                          src={krakenZ73}
                          alt="Main Image"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-thumbnail">
        <div className="container">
          <div className="row">
            <div
              className="center-index full"
              style={{
                backgroundImage: `url(${verticalGpu})`,
                backgroundColor: "#F5F5F8",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="product__item col-lg-6 col-12 order-0"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product__text col-lg-12">
                      <h3 className="title text-black">
                        Vertical GPU Mounting Kit
                      </h3>
                      <div className="subtitle text-black">
                        A solid steel bracket for vertically mounting your GPU,
                        supporting high-speed data transferral and backward
                        compatibility. This mount is ready for 40 series cards
                        with PCIe 4.0 supported riser cable with high-speed data
                        transferal.
                      </div>
                      <div className="link-item">
                        <a>
                          See Vertical GPU Mounting Kit
                          <MdKeyboardArrowRight />
                        </a>
                      </div>
                      <div className="wrapper-item">
                        <div className="logo"></div>
                        <div className="content">
                          <h4></h4>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product__item col-lg-6 col-12"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product-img col-lg-12">
                      <picture>
                        <source
                          media="(min-width: 992px)"
                          srcset={verticalGpuSr}
                        />
                        <source
                          media="(max-width: 992px)"
                          srcset={verticalGpuSr}
                        />
                        <img
                          className="left-img"
                          src={verticalGpuSr}
                          alt="Main Image"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-thumbnail">
        <div className="container">
          <div className="row">
            <div
              className="center-index full"
              style={{ backgroundImage: `url()`, backgroundColor: "#F5F5F8" }}
            >
              <div
                className="product__item col-lg-6 col-12 order-1"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product__text col-lg-12">
                      <h3 className="title text-black">A Colorful Trio</h3>
                      <div className="subtitle text-black">
                        The H9 Elite comes with three F120 RGB Duo fans,
                        offering vibrant lighting, quiet cooling, and colorful
                        customization.
                      </div>
                      <div className="wrapper-item">
                        <div className="logo">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            class="fill-current h-12 w-12"
                          >
                            <path d="M23.845 11.822C23.845 5.348 18.578 0 12.023 0 5.54 0 .2 5.27.2 11.822c0 6.505 5.29 11.823 11.823 11.823 6.497 0 11.822-5.284 11.822-11.822zm-12.591 3.265a3.35 3.35 0 01-2.503-4.002 3.35 3.35 0 014.043-2.526 3.351 3.351 0 012.485 4.065 3.351 3.351 0 01-4.025 2.463zm9.663 2.192L16.7 12.584a4.735 4.735 0 00-.257-2.474h5.875a10.39 10.39 0 01-1.401 7.17zm1.073-8.555h-6.38a4.727 4.727 0 00-1.353-1.08l4.354-3.91a10.47 10.47 0 013.38 4.99zm-4.538-5.812L12.745 7.14a4.728 4.728 0 00-2.48.28V1.537a10.38 10.38 0 017.187 1.375zM8.879 1.875v6.4a4.72 4.72 0 00-1.053 1.344L3.913 5.26a10.506 10.506 0 014.966-3.386zM3.094 6.423l4.239 4.72a4.737 4.737 0 00.287 2.438H1.737c-.415-2.4.013-4.95 1.357-7.158zm-1.018 8.543h6.4c.38.43.823.775 1.315 1.038l-4.354 3.909a10.507 10.507 0 01-3.36-4.947zm4.52 5.769l4.708-4.229a4.74 4.74 0 002.431-.263v5.873a10.367 10.367 0 01-7.14-1.381zm8.525 1.048V15.41a4.733 4.733 0 001.066-1.324l3.905 4.348a10.513 10.513 0 01-4.971 3.35z"></path>
                            <path d="M2.278 2.863a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zm19.535 0a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zM2.278 22.583a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zm19.535 0a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zM12.005 9.228a2.65 2.65 0 110 5.3 2.65 2.65 0 010-5.3zm0 1.5a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z"></path>
                          </svg>
                        </div>
                        <div className="content">
                          <h4>Optimal Cooling</h4>
                          <p>
                            Fan blade design delivers optimal balance between
                            airflow and high static pressure—ideal for use
                            anywhere in a PC
                          </p>
                        </div>
                      </div>
                      <div className="wrapper-item">
                        <div className="logo">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            class="fill-current h-12 w-12"
                          >
                            <path d="M12 6.25a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5zm0 1.5a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 12.5a.75.75 0 01.743.648l.007.102v2a.75.75 0 01-1.493.102L11.25 23v-2a.75.75 0 01.75-.75zm6.846-2.453l.084.073 1.4 1.4a.75.75 0 01-.976 1.133l-.084-.073-1.4-1.4a.75.75 0 01.976-1.133zM6.13 17.87a.75.75 0 01.073.976l-.073.084-1.4 1.4a.75.75 0 01-1.133-.976l.073-.084 1.4-1.4a.75.75 0 011.06 0zM3 11.25a.75.75 0 01.102 1.493L3 12.75H1a.75.75 0 01-.102-1.493L1 11.25h2zm20 0a.75.75 0 01.102 1.493L23 12.75h-2a.75.75 0 01-.102-1.493L21 11.25h2zM4.646 3.597l.084.073 1.4 1.4a.75.75 0 01-.976 1.133L5.07 6.13l-1.4-1.4a.75.75 0 01.874-1.197l.102.064zm15.684.073a.75.75 0 01.073.976l-.073.084-1.4 1.4a.75.75 0 01-1.133-.976l.073-.084 1.4-1.4a.75.75 0 011.06 0zM12 .25a.75.75 0 01.743.648L12.75 1v2a.75.75 0 01-1.493.102L11.25 3V1A.75.75 0 0112 .25z"></path>
                          </svg>
                        </div>
                        <div className="content">
                          <h4>Dazzling Customization</h4>
                          <p>
                            20 individually customizable RGB LEDs and dual-sided
                            lighting offer harmonized lighting effects and color
                            customization via NZXT CAM.
                          </p>
                          <div className="link-item">
                            <a>
                              See Vertical GPU Mounting Kit
                              <MdKeyboardArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product__item col-lg-6 col-12"
                style={{ background: "transparent" }}
              >
                <div className="container">
                  <div className="product__content">
                    <div className="product-img col-lg-12">
                      <picture>
                        <source media="(min-width: 992px)" srcset={fansPrimary} />
                        <source media="(max-width: 992px)" srcset={fansPrimary} />
                        <img
                          className="left-img"
                          src={fansPrimary}
                          alt="Main Image"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-grid-block">
        <div className="container">
          <div className="row">
            <div className="item-index">
              <div className="content-item">
              <div className="content-full col-lg-4 col-12" style={{backgroundColor: "#F5F5F8"}}>
                <img src={nzxtLogo} alt="NZXT Logo" title="NZXT Logo" />
                <h3>Better Together</h3>
                <p>
                Create the ultimate desk setup with our lineup; whether it is a 
                Canvas Monitor, a Capsule Mic, a Function Keyboard, or any of our 
                other great products, you can combine them to make
                 for a customizable and cohesive desktop environment.
                </p>
                <div className="content-btn">
                <Button variant="contained">Start Building</Button>
                </div>
              </div>
              </div>
              <div className="item-thumbnail col-lg-8 col-12">
                <img src={bgCenter} alt="Background Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
