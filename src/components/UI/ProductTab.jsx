import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../styles/product-tab.css";
import { Link } from "react-router-dom";
import h9GpuCompatibility from "../../assets/images/thumbnail/h9-gpu-compatibility.png";
import h9FanCompatibility from "../../assets/images/thumbnail/h9-fan-compatibility.png";
import h9RadiatorCompatibility from "../../assets/images/thumbnail/h9-radiator-compatibility.png";
import { AiFillStar } from "react-icons/ai";
import { TbStarHalfFilled } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { ImShare } from "react-icons/im";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import feedbackImage01 from "../../assets/images/thumbnail/feedbackImage01.jpg";
import feedbackImage02 from "../../assets/images/thumbnail/feedbackImage02.jpg";
import feedbackImage03 from "../../assets/images/thumbnail/feedbackImage03.jpg";
import feedbackImage04 from "../../assets/images/thumbnail/feedbackImage04.jpg";
import feedbackImage05 from "../../assets/images/thumbnail/feedbackImage05.jpg";
import feedbackImage06 from "../../assets/images/thumbnail/feedbackImage06.jpg";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";

const ProductTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [page, setPage] = React.useState(1);
  const handleChangeNav = (event, value) => {
    setPage(value);
  };

  return (
    <section className="product-tab">
      <div className="container">
        <div className="row">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Overview" value="1" />
                  <Tab label="Tech Specs" value="2" />
                  <Tab label="Reviews" value="3" />
                  <Tab label="Resources" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="detail-index">
                  <h2>Details</h2>
                  <div className="detail-content">
                    <p>
                      The H9 Flow is designed to cool off powerful GPUs with its
                      expansive thermal capabilities, featuring the capacity for
                      ten fans and numerous 360mm radiator mounting options and
                      the perforated top panel takes cooling even further.
                    </p>
                    <ul>
                      <li>
                        Unique uninterrupted glass panel for a clear view of the
                        interior
                      </li>
                      <li>
                        Intuitive cable management and dual chamber design
                      </li>
                      <li>Room for ten fans or three 360mm Radiators</li>
                      <li>Perforated top panel for enhanced cooling</li>
                      <li>
                        Direct airflow to the GPU for handling high-powered
                        components
                      </li>
                      <li>
                        Enhanced experience with other products from the NZXT
                        ecosystem
                      </li>
                      <li>Includes four F Series 120mm Quiet Airflow fans</li>
                    </ul>
                  </div>
                </div>
                <div className="inside-index">
                  <h2>Inside the Box</h2>
                  <ul>
                    <li>
                      <p>
                        H9 Flow Case<span>1</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Front I/O split cables<span>1</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        120mm Quiet Airflow Fan (Case Version)<span>4</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Installation Accessories<span>1</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Manual<span>1</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="content-grid-block">
                  <div className="content-main">
                    <div className="content-block col-lg-6">
                      <h3>GPU Capacity</h3>
                      <div className="description">
                        The H9 Flow has 435mm of GPU clearance, offering room
                        for the latest NVIDIA 40 Series and AMD 7000 Series
                        cards.
                      </div>
                    </div>
                    <div className="thumbnail-index col-lg-6">
                      <img src={h9GpuCompatibility} alt="Image Card" />
                    </div>
                  </div>
                </div>
                <div className="content-grid-block">
                  <div className="content-main">
                    <div className="content-block col-lg-6 order-1">
                      <h3>Fan Capacity</h3>
                      <div className="description">
                        The H9 Flow has room for 10 fans. With the capacity for
                        3x120mm fans on the side, 3 x 120mm or 2x140mm on the
                        top and bottom, and 1 x120mm on the rear.
                      </div>
                    </div>
                    <div className="thumbnail-index col-lg-6">
                      <img src={h9FanCompatibility} alt="Image Card" />
                    </div>
                  </div>
                </div>
                <div className="content-grid-block">
                  <div className="content-main">
                    <div className="content-block col-lg-6">
                      <h3>Radiator Capacity</h3>
                      <div className="description">
                        The H9 Flow has room for up to a 360mm radiator on the
                        top, bottom, or side, and up to a 120mm radiator on the
                        rear.
                      </div>
                    </div>
                    <div className="thumbnail-index col-lg-6">
                      <img src={h9RadiatorCompatibility} alt="Image Card" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="spec-main">
                  <div className="left-side col-lg-6">
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>Key Specs</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Motherboard Support:</span>
                          Mini-ITX, Micro-ATX, ATX
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Enclosure Type:</span>
                          Mid-Tower
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Case Material:</span>
                          SGCC Steel, Ultra-clear Tempered Glass, Dark Tinted
                          Tempered Glass (Black only)
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>DIMENSIONS</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Height:</span>
                          495mm (With Feet)
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Width:</span>
                          290mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Depth:</span>
                          466mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Weight:</span>
                          12.1 kg
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>COMPATIBILITY & CLEARANCE</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Max CPU Cooler Clearance:</span>
                          Up to 165mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Max GPU Clearance:</span>
                          Up to 435mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>PSU Clearance:</span>
                          200mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Cable Management:</span>
                          91mm
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>FRONT I/O PORTS</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>USB 3.2 Gen 1 Type-A:</span>2
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Width:</span>
                          290mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>USB 3.2 Gen 2 Type-C:</span>1
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Headset Audio Jack:</span>1
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>EXPANSION SLOTS</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Standard:</span>7
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Vertical SLOTS:</span>0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="right-side col-lg-6">
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>DRIVE BAYS</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>2.5"</span>
                          4+2
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>3.5":</span>2
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>FAN SUPPORT</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Standard:</span>7
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Vertical SLOTS:</span>0
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>RADIATOR SUPPORT</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Side:</span>
                          Up to 360mm with Push/Pull
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Top:</span>
                          Up to 360mm
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Bottom:</span>
                          Up to 360mm
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>FAN SPECS</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Model:</span>
                          F120Q (Case Version)
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Speed:</span>
                          1200 ± 240RPM
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Airflow:</span>
                          62.18 CFM
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Static:</span>
                          1.05 mm - H2O
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Noise:</span>
                          25.1 dBA
                        </p>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-title">
                        <p>GENERAL</p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Warranty:</span>2 Years
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>Model Number:</span>
                          CM-H91FW-01 (White) / CM-H91FB-01 (Black)
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>UPC:</span>
                          810074842495 (White) / 810074842488 (Black)
                        </p>
                      </div>
                      <div className="spec-body">
                        <p>
                          <span>EAN:</span>
                          5056547202419 (White) / 5056547202402 (Black)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className="review-index">
                  <div className="review-count">
                    <span className="review-rating">4.5</span>
                    <div className="star-index">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <TbStarHalfFilled className="filled" />
                    </div>
                    <span className="review-total">11 Reviews</span>
                  </div>
                </div>
                <div className="review-filter">
                  <div className="title">Filter Reviews</div>
                  <div className="filter-index">
                    <Form.Select>
                      <option>Rating</option>
                      <option value="1">All</option>
                      <option value="2">5 Stars</option>
                      <option value="3">4 Stars</option>
                      <option value="4">3 Stars</option>
                      <option value="4">2 Stars</option>
                      <option value="4">1 Stars</option>
                    </Form.Select>
                    <Form.Select>
                      <option>Images & Videos </option>
                      <option value="1">All</option>
                      <option value="2">With Images & Videos</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="review-gallery">
                  <span className="review-total">11 Reviews</span>
                  <div className="review-main">
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">jahmensky l.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </div>
                      <div className="context-title">
                        Best case in the market
                      </div>
                      <div className="review-wrapper">
                        Best case in the market !! Inspired by the lian li but
                        better made.
                      </div>
                      <div className="review-image">
                        <img src={feedbackImage01} alt="Feedback Image" />
                        <img src={feedbackImage02} alt="Feedback Image" />
                        <img src={feedbackImage03} alt="Feedback Image" />
                      </div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">3</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Sébastien M.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <div className="context-title">The look of that case</div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          The look of that case is incredible! Also the quality
                          of product is very good.
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-image"></div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">0</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Mark W.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </div>
                      <div className="context-title">
                        Bought the case and some
                      </div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          Bought the case and some of the legs came broken,
                          asked to get it fixed and it’s been almost a month and
                          still really haven’t heard anything. The case is
                          proper up using square foam pads.
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">0</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Trevor M.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <div className="context-title">
                        Case is quality built great
                      </div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          Case is quality built great looks lots of room for 40
                          series GPU excellent cable management set up in back
                          all around top of the line case.
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-image">
                        <img src={feedbackImage04} alt="Feedback Image" />
                        <img src={feedbackImage05} alt="Feedback Image" />
                      </div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">0</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Benoit S.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillDislike />
                      </div>
                      <div className="context-title">
                        It will have been great
                      </div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          It will have been great with a couple of y splitter
                          for the fan. My motherboard was limited with the
                          number of fan.
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-image"></div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">4</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Daniel H.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <div className="context-title">
                        Awesome fit and finish. Cable
                      </div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          Awesome fit and finish. Cable Management was fitted
                          within. The ability to put fans on the bottom of the
                          case allows these fans to blow directly into the my
                          RXT 4090 video card fans. With vertical airflow
                          through the case providing excellent cooling.
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-image"></div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">0</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Quadgee C.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <div className="context-title">
                        Love the product and your
                      </div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          Love the product and your company
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-image"></div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">0</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="user-name">Dave H.</span>
                        <span className="review-date">03/20/23</span>
                      </div>
                      <div className="star-index">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <div className="context-title">
                        Best looking case I've ever seen
                      </div>
                      <div className="review-wrapper">
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                        >
                          The only issue I found was the cover where the
                          motherboard power cable passes through was a bit too
                          narrow. I ended up adding right angle connectors on on
                          the motherboard power cable and front usb connectors.
                        </ReactReadMoreReadLess>
                      </div>
                      <div className="review-image">
                        <img src={feedbackImage06} alt="Review Image" />
                      </div>
                      <div className="review-footer">
                        <div className="share">
                          <ImShare />
                          <span className="label">Share</span>
                        </div>
                        <div className="like-item">
                          <div className="like-sum">
                            <AiFillLike />
                            <span className="count">1</span>
                          </div>
                          <div className="dislike-sum">
                            <AiFillDislike />
                            <span className="count">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-review">
                  <Stack spacing={2}>
                    <Pagination
                      count={2}
                      page={page}
                      onChange={handleChangeNav}
                    />
                  </Stack>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <h2 className="download-text">Downloads</h2>
                <div className="documentation">
                  <h3>DOCUMENTATION</h3>
                  <div className="document-wrapper">
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          English Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Spanish Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          German Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Portuguese Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Traditional Chinese Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.8 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          French Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Korean Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Italian Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Japanese Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.6 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="document-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="pdf-icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 22.25a.75.75 0 0 1-.75-.75v-19a.75.75 0 0 1 .75-.75h7.487a.75.75 0 0 1 .525.215l5.514 5.415a.75.75 0 0 1 .224.535V21.5a.75.75 0 0 1-.75.75h-13zm-2.25-.75a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V7.915a2.25 2.25 0 0 0-.673-1.605L14.563.895A2.25 2.25 0 0 0 12.987.25H5.5A2.25 2.25 0 0 0 3.25 2.5v19z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M6.485 18h.924v-1.26h.702c.942 0 1.698-.504 1.698-1.476v-.012c0-.858-.606-1.452-1.608-1.452H6.485V18zm.924-2.082v-1.284h.714c.462 0 .75.222.75.636v.012c0 .36-.27.636-.732.636h-.732zM10.193 18h1.638c1.32 0 2.232-.918 2.232-2.1v-.012c0-1.182-.913-2.088-2.232-2.088h-1.638V18zm.924-.834v-2.532h.713c.756 0 1.267.522 1.267 1.266v.012c0 .744-.51 1.254-1.266 1.254h-.714zm3.469.834h.924v-1.626h2.004v-.84H15.51v-.894h2.274v-.84h-3.198V18z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M20.75 12V9.071A1.75 1.75 0 0 0 19 7.321h-5.071a.25.25 0 0 1-.25-.25V2a1.75 1.75 0 0 0-1.75-1.75H9v1.5h2.929a.25.25 0 0 1 .25.25v5.071c0 .967.783 1.75 1.75 1.75H19a.25.25 0 0 1 .25.25V12h1.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="document-content">
                        <Link
                          target="_blank"
                          to={
                            "https://www.datocms-assets.com/34299/1673509560-case_h9-flow_digital-manual-fr-220929.pdf"
                          }
                        >
                          Simplified Chinese Manual
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="download-icon"
                          >
                            <path d="M12.031.072C5.441.072.098 5.414.098 12.005c0 6.59 5.343 11.933 11.933 11.933s11.934-5.342 11.934-11.933c0-6.59-5.343-11.933-11.934-11.933zm0 1.5c5.762 0 10.434 4.67 10.434 10.433 0 5.762-4.672 10.433-10.434 10.433S1.598 17.768 1.598 12.005c0-5.762 4.671-10.433 10.433-10.433z"></path>
                            <path d="M12.031 6.782a.75.75 0 01.743.648l.007.102v7.135l3.193-3.192a.75.75 0 01.977-.073l.084.073a.75.75 0 01.073.976l-.073.084-4.473 4.474a.75.75 0 01-.977.072l-.084-.072-4.473-4.474a.75.75 0 01.976-1.133l.084.073 3.193 3.192V7.532a.75.75 0 01.75-.75z"></path>
                          </svg>
                        </Link>
                        <div className="size">
                          <p>
                            20.8 MB <span></span>(pdf)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default ProductTab;
