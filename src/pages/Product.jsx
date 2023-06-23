import React from "react";
import high from "../assets/videos/high.mp4";
import "../styles/product.css";
import performencePrimaryBg from "../assets/images/thumbnail/performancePrimaryBg.avif";
import performencePrimary from "../assets/images/thumbnail/performancePrimary.avif";
import panelPrimary from "../assets/images/thumbnail/panelPrimary.avif";
import componentPrimary from "../assets/images/thumbnail/componentPrimary.avif";

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
      </section>
      <div className="center-thumbnail">
        <div
          className="product__item col-lg-6"
          style={{ background: "#F1F5FE" }}
        >
          <div className="container">
            <div className="row">
              <div className="product__content">
                <div className="product__text col-lg-12">
                  <h3 className="title">Uninterrupted Glass Paneling</h3>
                  <div className="subtitle">
                    Featuring seamless glass paneling to showcase every angle of
                    the most powerful components with a dual-chamber design to
                    help increase cooling.
                  </div>
                </div>
                <div className="product-img col-lg-12">
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
        <div
          className="product__item col-lg-6"
          style={{ background: "#F1F5FE" }}
        >
          <div className="container">
            <div className="row">
              <div className="product__content">
                <div className="product-img col-lg-12">
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
      </div>
    </>
  );
};

export default Product;
