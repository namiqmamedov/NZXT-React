import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../styles/product-tab.css";
import h9GpuCompatibility from "../../assets/images/thumbnail/h9-gpu-compatibility.png";
import h9FanCompatibility from "../../assets/images/thumbnail/h9-fan-compatibility.png";
import h9RadiatorCompatibility from "../../assets/images/thumbnail/h9-radiator-compatibility.png";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { ImShare } from "react-icons/im";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import feedbackImage01 from '../../assets/images/thumbnail/feedbackImage01.jpg'
import feedbackImage02 from '../../assets/images/thumbnail/feedbackImage02.jpg'
import feedbackImage03 from '../../assets/images/thumbnail/feedbackImage03.jpg'
import ReactReadMoreReadLess from "react-read-more-read-less";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";

const ProductTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                      <BsStarHalf />
                    </div>
                    <span className="review-total">11 Reviews</span>
                  </div>
                </div>
                <div className="review-filter">
                  <div className="title">Filter Reviews</div>
                  <div className="filter-index">
                    <Form.Select>
                      <option>Rating</option>
                      <option value="1">H9 Flow</option>
                      <option value="2">H9 Elite</option>
                    </Form.Select>
                    <Form.Select>
                      <option>Images & Videos </option>
                      <option value="1">H9 Flow</option>
                      <option value="2">H9 Elite</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="review-gallery">
                  <span className="review-total">11 Reviews</span>
                  <div className="review-main">
                  <div className="review-item">
                    <div className="review-header">
                      <span className="user-name">jahmensky l.</span>
                      <span className="review-date">
                      03/20/23
                      </span>
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
                    Best case in the market !! Inspired by the lian li but better made.
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
                    <span className="user-name">Sébastien M.</span>
                    <div className="star-index">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div className="context-title">
                    The look of that case
                    </div>
                    <div className="review-wrapper">
                      
                      <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                       The look of that case is incredible! Also the quality of product is very good.
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
                    <span className="user-name">Mark W.</span>
                    <div className="star-index">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
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
                      Bought the case and some of the legs came broken, asked to get it fixed and it’s been almost a month and still really haven’t heard anything. The case is proper up using square foam pads.
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
                    <span className="user-name">Trevor M.</span>
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
                      Case is quality built great looks lots of room for 40 series GPU excellent cable management set up in back all around top of the line case.
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
                    <span className="user-name">Benoit S.</span>
                    <div className="star-index">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillDislike/>
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
                      It will have been great with a couple of y splitter for the fan. My motherboard was limited with the number of fan.
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
                          <span className="count">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="user-name">Daniel H.</span>
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
                      Awesome fit and finish. Cable Management was fitted within. The ability to put fans on the bottom of the case allows these fans to blow directly into the my RXT 4090 video card fans. With vertical airflow through the case providing excellent cooling.
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
                    <span className="user-name">Quadgee C.</span>
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
                    <span className="user-name">Dave H.</span>
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
                      The only issue I found was the cover where the motherboard power cable passes through was a bit too narrow. I ended up adding right angle connectors on on the motherboard power cable and front usb connectors.
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
                          <span className="count">3</span>
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
              </TabPanel>
              <TabPanel value="4">Resources</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default ProductTab;
