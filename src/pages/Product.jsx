import React from "react";
import high from "../assets/videos/high.mp4";
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
import airflowDiagram from "../assets/images/thumbnail/airflow-diagram.png";
import airflowDiagram2 from "../assets/images/thumbnail/airflow-diagram2.png";

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
        <video src={high} autoPlay loop muted></video>
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
            <img
              className="background-img"
              src={panelPrimary}
              alt="Card Image"
            />
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
            <img
              className="background-img"
              src={componentPrimary}
              alt="Card Image"
            />
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
                <img
                  className="background-img"
                  src={meetTheFlow}
                  alt="Card Image"
                />
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
                className="product__item col-lg-6"
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
                className="product__item col-lg-6"
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
        <p className="subtitle">Configure the H9 for optimized CPU or GPU cooling depending on fan and radiator placement.</p>
        <div className="container">
          <div className="row">
            <div className="card__main full">
              <div style={{ backgroundColor: "#F1F5FE" }} className="card-full">
                <div className="card-full-content text-grey">
                  <h3>GPU Cooling</h3>
                  <p></p>
                </div>
                <img
                  className="background-img"
                  src={airflowDiagram2}
                  alt="Card Image"
                />
              </div>
              <div style={{ background: "#F1F5FE" }} className="card-full">
                <div className="card-full-content text-white">
                  <h3>CPU Cooling</h3>
                  <p></p>
                </div>
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
    </>
  );
};

export default Product;
