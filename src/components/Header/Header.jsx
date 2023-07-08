import React, { useState } from "react";
import "../../styles/header.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import Overlay from "../../components/UI/Overlay/Overlay";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import dropdownImg01 from "../../assets/images/thumbnail/h7-nav-cta.png";
import dropdownImg02 from "../../assets/images/thumbnail/dropdownImg02.png";
import dropdownImg03 from "../../assets/images/thumbnail/dropdownImg03.png";
import dropdownImg04 from "../../assets/images/thumbnail/dropdownImg04.png";
import itemMini01 from "../../assets/images/thumbnail/itemMini01.avif";
import itemMini02 from "../../assets/images/thumbnail/itemMini02.avif";
import itemMini03 from "../../assets/images/thumbnail/itemMini03.avif";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import HamburgerMenu from "../UI/HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="nav__top">
        <p>All PCs Built in 2 Business Days</p>
      </div>
      <HamburgerMenu />
      <div className="main__nav">
        <div className="start__main">
          <div className="nav-logo">
            <Link to={""}>
              <svg
                viewBox="0 0 94 24"
                width="1em"
                height="1em"
                class="w-20 h-4 fill-current text-white"
              >
                <path
                  d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <ul>
            <li onClick={toggleOverlay}>
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Gaming PCs
                  <IoIosArrowDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="dropdown-center">
                    <div className="dropdown-main">
                      <div className="dropdown-item">
                        <div className="item-header">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-darkreader-inline-fill=""
                          >
                            <path d="M22.219 7.583H8.699a1.75 1.75 0 00-1.749 1.75v7.876c0 .966.783 1.75 1.75 1.75h13.519a1.75 1.75 0 001.75-1.75V9.333a1.75 1.75 0 00-1.75-1.75zm-13.52 1.5h13.52a.25.25 0 01.25.25v7.876a.25.25 0 01-.25.25H8.699a.25.25 0 01-.25-.25V9.333a.25.25 0 01.25-.25zm9.581 11.903a.75.75 0 01.103 1.493l-.102.007h-5.643a.75.75 0 01-.102-1.494l.102-.006h5.643z"></path>
                            <path d="M15.46 17.459a.75.75 0 01.742.648l.007.102v2.821a.75.75 0 01-1.493.102l-.007-.102v-2.82a.75.75 0 01.75-.75zM8.882 2c.824 0 1.446.703 1.512 1.55l.006.15v4.633H9V3.7c0-.161-.06-.262-.099-.291l-.02-.009H1.519c-.025 0-.09.074-.111.21L1.4 3.7v16c0 .161.06.262.099.291l.02.009h7.363c.025 0 .09-.074.111-.21L9 19.7v-1.749h1.4V19.7c0 .86-.576 1.612-1.375 1.693l-.143.007H1.518c-.824 0-1.446-.703-1.512-1.55L0 19.7v-16c0-.86.576-1.612 1.375-1.693L1.518 2h7.364z"></path>
                            <path d="M7.2 5.5a.7.7 0 01.095 1.394L7.2 6.9h-4a.7.7 0 01-.095-1.394L3.2 5.5h4zm-2 6a.7.7 0 01.095 1.394L5.2 12.9h-2a.7.7 0 01-.095-1.394L3.2 11.5h2z"></path>
                          </svg>
                          BUILD A CUSTOM PC{" "}
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="1em"
                            height="1em"
                            data-darkreader-inline-stroke=""
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="item-header">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-darkreader-inline-fill=""
                          >
                            <path d="M22.219 7.583H8.699a1.75 1.75 0 00-1.749 1.75v7.876c0 .966.783 1.75 1.75 1.75h13.519a1.75 1.75 0 001.75-1.75V9.333a1.75 1.75 0 00-1.75-1.75zm-13.52 1.5h13.52a.25.25 0 01.25.25v7.876a.25.25 0 01-.25.25H8.699a.25.25 0 01-.25-.25V9.333a.25.25 0 01.25-.25zm9.581 11.903a.75.75 0 01.103 1.493l-.102.007h-5.643a.75.75 0 01-.102-1.494l.102-.006h5.643z"></path>
                            <path d="M15.46 17.459a.75.75 0 01.742.648l.007.102v2.821a.75.75 0 01-1.493.102l-.007-.102v-2.82a.75.75 0 01.75-.75zM8.882 2c.824 0 1.446.703 1.512 1.55l.006.15v4.633H9V3.7c0-.161-.06-.262-.099-.291l-.02-.009H1.519c-.025 0-.09.074-.111.21L1.4 3.7v16c0 .161.06.262.099.291l.02.009h7.363c.025 0 .09-.074.111-.21L9 19.7v-1.749h1.4V19.7c0 .86-.576 1.612-1.375 1.693l-.143.007H1.518c-.824 0-1.446-.703-1.512-1.55L0 19.7v-16c0-.86.576-1.612 1.375-1.693L1.518 2h7.364z"></path>
                            <path d="M7.2 5.5a.7.7 0 01.095 1.394L7.2 6.9h-4a.7.7 0 01-.095-1.394L3.2 5.5h4zm-2 6a.7.7 0 01.095 1.394L5.2 12.9h-2a.7.7 0 01-.095-1.394L3.2 11.5h2z"></path>
                          </svg>
                          PREBUILT GAMING PCS{" "}
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="1em"
                            height="1em"
                            data-darkreader-inline-stroke=""
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div className="item-body">
                          <Link>
                            <img src={itemMini01} alt="Menu Image" />
                            <div className="content">
                              <span className="title">Player: One</span>
                              <span className="desc">H5 Flow PCs</span>
                            </div>
                          </Link>
                          <Link>
                            <img src={itemMini02} alt="Menu Image" />
                            <div className="content">
                              <span className="title">Player: Two</span>
                              <span className="desc">H5 Elite PCs</span>
                            </div>
                          </Link>
                          <Link>
                            <img src={itemMini03} alt="Menu Image" />
                            <div className="content">
                              <span className="title">Player: Three</span>
                              <span className="desc">
                                H7 Flow and Elite PCs
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-thumbnail"
                      style={{ background: "#6712E5" }}
                    >
                      <div className="dropdown__thumbnail-content">
                        <p className="text-center text-white">
                          Power Up Your Prebuilt
                        </p>
                        <p className="text-center text-white">
                          More Options.Greater Performance
                        </p>
                      </div>
                      <img src={dropdownImg01} alt="Dropdown Image" />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={toggleOverlay}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Components
                  <IoIosArrowDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="dropdown-center">
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.416 3.34a2.755 2.755 0 110 5.51 2.755 2.755 0 010-5.51zm0 1.5a1.255 1.255 0 100 2.51 1.255 1.255 0 000-2.51zm.147 15.037l1.19.913-2.226 2.9H3.455l-2.225-2.9 1.19-.913 1.774 2.312h1.593l1.776-2.312zm14.197 0l1.19.913-2.225 2.9h-3.072l-2.225-2.9 1.19-.913 1.774 2.312h1.593l1.776-2.312zm-7.082-6.645v1.5H.942v-1.5h13.736zm8.272 0v1.5h-4.154v-1.5h4.154z"></path>
                          <path d="M15.428 20.64h-1.5V.31h1.5v20.33zm4.512 0h-1.5V.31h1.5v20.33zm-8.685-9.867a.75.75 0 01-.75.75H4.482a.75.75 0 010-1.5h6.023a.75.75 0 01.75.75zm1.084 6.516a.75.75 0 01-.75.75h-1.077a.75.75 0 110-1.5h1.077a.75.75 0 01.75.75z"></path>
                          <path d="M23 .31a1 1 0 011 1v18.924a1 1 0 01-1 1H1a1 1 0 01-1-1V1.311a1 1 0 011-1h22zm-.5 1.5h-21v17.923h21V1.811z"></path>
                        </svg>
                        Cases
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">H9</span>
                            <span className="desc">
                              Dual-Chamber Mid-Tower Cases
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">H7</span>
                            <span className="desc">ATX Mid-Tower Cases</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">H5</span>
                            <span className="desc">
                              Compact ATX Mid-Tower-Cases
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">H9</span>
                            <span className="desc">
                              Dual-Chamber Mid-Tower Cases
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">H210</span>
                            <span className="desc">Compact Mini-ITX Cases</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">CRFT</span>
                            <span className="desc">Limited Edition</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.416 3.34a2.755 2.755 0 110 5.51 2.755 2.755 0 010-5.51zm0 1.5a1.255 1.255 0 100 2.51 1.255 1.255 0 000-2.51zm.147 15.037l1.19.913-2.226 2.9H3.455l-2.225-2.9 1.19-.913 1.774 2.312h1.593l1.776-2.312zm14.197 0l1.19.913-2.225 2.9h-3.072l-2.225-2.9 1.19-.913 1.774 2.312h1.593l1.776-2.312zm-7.082-6.645v1.5H.942v-1.5h13.736zm8.272 0v1.5h-4.154v-1.5h4.154z"></path>
                          <path d="M15.428 20.64h-1.5V.31h1.5v20.33zm4.512 0h-1.5V.31h1.5v20.33zm-8.685-9.867a.75.75 0 01-.75.75H4.482a.75.75 0 010-1.5h6.023a.75.75 0 01.75.75zm1.084 6.516a.75.75 0 01-.75.75h-1.077a.75.75 0 110-1.5h1.077a.75.75 0 01.75.75z"></path>
                          <path d="M23 .31a1 1 0 011 1v18.924a1 1 0 01-1 1H1a1 1 0 01-1-1V1.311a1 1 0 011-1h22zm-.5 1.5h-21v17.923h21V1.811z"></path>
                        </svg>
                        Cooling
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">The New Krakens</span>
                            <span className="desc">
                              AIO Liquid Coolers with LCD Display
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Kraken Z</span>
                            <span className="desc">
                              AIO Liquid Coolers with LCD Display
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Kraken X</span>
                            <span className="desc">
                              AIO Liquid Coolers with Mirror Display
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Kraken 120</span>
                            <span className="desc">
                              120mm Liquid Cooler with RGB
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">F Series Fans</span>
                            <span className="desc">
                              RGB & High-performance Fans
                            </span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">T120 Air Coolers</span>
                            <span className="desc">CPU Air Coolers</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.416 3.34a2.755 2.755 0 110 5.51 2.755 2.755 0 010-5.51zm0 1.5a1.255 1.255 0 100 2.51 1.255 1.255 0 000-2.51zm.147 15.037l1.19.913-2.226 2.9H3.455l-2.225-2.9 1.19-.913 1.774 2.312h1.593l1.776-2.312zm14.197 0l1.19.913-2.225 2.9h-3.072l-2.225-2.9 1.19-.913 1.774 2.312h1.593l1.776-2.312zm-7.082-6.645v1.5H.942v-1.5h13.736zm8.272 0v1.5h-4.154v-1.5h4.154z"></path>
                          <path d="M15.428 20.64h-1.5V.31h1.5v20.33zm4.512 0h-1.5V.31h1.5v20.33zm-8.685-9.867a.75.75 0 01-.75.75H4.482a.75.75 0 010-1.5h6.023a.75.75 0 01.75.75zm1.084 6.516a.75.75 0 01-.75.75h-1.077a.75.75 0 110-1.5h1.077a.75.75 0 01.75.75z"></path>
                          <path d="M23 .31a1 1 0 011 1v18.924a1 1 0 01-1 1H1a1 1 0 01-1-1V1.311a1 1 0 011-1h22zm-.5 1.5h-21v17.923h21V1.811z"></path>
                        </svg>
                        Components
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">Motherboards</span>
                            <span className="desc">Gaming Motherboards</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Power</span>
                            <span className="desc">80 Plus Rated PSUs</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Lighting</span>
                            <span className="desc">
                              Expanded RGB Lighting and Control
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown-thumbnail">
                      <div className="dropdown__thumbnail-content">
                        <p className="text-center text-white">The H7 Series</p>
                        <p className="text-center text-white">
                          Imagine What's Possible
                        </p>
                      </div>
                      <img src={dropdownImg01} alt="Dropdown Image" />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={toggleOverlay}>
              <Dropdown>
                <DropdownToggle>
                  Monitors
                  <IoIosArrowDown />
                </DropdownToggle>
                <Dropdown.Menu>
                  <div className="dropdown-center">
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-darkreader-inline-fill=""
                        >
                          <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                          <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                        </svg>
                        CANVAS
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">FDH Monitors</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">QHD Monitors</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-darkreader-inline-fill=""
                        >
                          <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                          <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                        </svg>
                        MONITOR ARM
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">Monitor Arm (Single)</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Monitor Arm (Dual)</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="dropdown-thumbnail only-one"
                      style={{ background: "#6311E5" }}
                    >
                      <div className="dropdown__thumbnail-content">
                        <p className="text-center text-white">
                          Canvas FHD Monitors
                        </p>
                        <p className="text-center text-white">
                          Put your best performance on display
                        </p>
                      </div>
                      <img src={dropdownImg02} alt="Dropdown Image" />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={toggleOverlay}>
              <Dropdown>
                <DropdownToggle>
                  Peripherals
                  <IoIosArrowDown />
                </DropdownToggle>
                <Dropdown.Menu>
                  <div className="dropdown-center">
                    <div className="col">
                      <div className="dropdown-item">
                        <div className="item-header">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-darkreader-inline-fill=""
                          >
                            <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                            <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                          </svg>
                          Capture Card
                        </div>
                        <div className="item-body">
                          <Link>
                            <div className="content">
                              <span className="title">Capture Card</span>
                              <span className="desc"></span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="item-header">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-darkreader-inline-fill=""
                          >
                            <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                            <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                          </svg>
                          Capture Card
                        </div>
                        <div className="item-body">
                          <Link>
                            <div className="content">
                              <span className="title">Capture Card</span>
                              <span className="desc"></span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="dropdown-item">
                        <div className="item-header">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-darkreader-inline-fill=""
                          >
                            <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                            <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                          </svg>
                          Capture Card
                        </div>
                        <div className="item-body">
                          <Link>
                            <div className="content">
                              <span className="title">Capture Card</span>
                              <span className="desc"></span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="item-header">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-darkreader-inline-fill=""
                          >
                            <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                            <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                          </svg>
                          Capture Card
                        </div>
                        <div className="item-body">
                          <Link>
                            <div className="content">
                              <span className="title">Capture Card</span>
                              <span className="desc"></span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-thumbnail only-one"
                      style={{ background: "#6311E5" }}
                    >
                      <div className="dropdown__thumbnail-content">
                        <p className="text-center text-white">Relay Audio</p>
                        <p className="text-center text-white">
                          Don't miss a beat with high-fidelity Relay Audio.
                        </p>
                      </div>
                      <img src={dropdownImg03} alt="Dropdown Image" />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={toggleOverlay}>
              <Dropdown>
                <DropdownToggle>
                  Software
                  <IoIosArrowDown />
                </DropdownToggle>
                <Dropdown.Menu>
                  <div className="dropdown-center">
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-darkreader-inline-fill=""
                        >
                          <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                          <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                        </svg>
                        PC Monitoring
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">CAM</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">CAM Feedback</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={toggleOverlay}>
              <Dropdown>
                <DropdownToggle>
                  Community
                  <IoIosArrowDown />
                </DropdownToggle>
                <Dropdown.Menu>
                  <div className="dropdown-center">
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-darkreader-inline-fill=""
                        >
                          <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                          <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                        </svg>
                        NZXT COMMUNITY
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">Podcast</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">NZXT Club & Discord</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Newsroom & Blog</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Partner Program</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="item-header">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          data-darkreader-inline-fill=""
                        >
                          <path d="M21.19 1H2.83A2.75 2.75 0 00.08 3.75v11.652a2.75 2.75 0 002.75 2.75h18.36a2.75 2.75 0 002.75-2.75V3.75A2.75 2.75 0 0021.19 1zM2.83 2.5h18.36c.69 0 1.25.56 1.25 1.25v11.652c0 .69-.56 1.25-1.25 1.25H2.83c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25zm13.652 18.623a.75.75 0 01.101 1.494l-.101.006H7.538a.75.75 0 01-.102-1.493l.102-.006h8.944z"></path>
                          <path d="M12.01 16.652a.75.75 0 01.743.648l.007.102v4.472a.75.75 0 01-1.493.101l-.007-.101v-4.472a.75.75 0 01.75-.75z"></path>
                        </svg>
                        Company
                      </div>
                      <div className="item-body">
                        <Link>
                          <div className="content">
                            <span className="title">Company</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Careers</span>
                          </div>
                        </Link>
                        <Link>
                          <div className="content">
                            <span className="title">Product Updates</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="dropdown-thumbnail only-one"
                      style={{ background: "#000000" }}
                    >
                      <div className="dropdown__thumbnail-content">
                        <p className="text-center text-white">
                          NZXT Partner Program
                        </p>
                        <p className="text-center text-white">
                          We want to grow with you!
                        </p>
                      </div>
                      <img src={dropdownImg04} alt="Dropdown Image" />
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className="nav__end">
          <Link className="search__item">
            <GoSearch />
          </Link>
          <Link className="support__item" to={"support"}>
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .084C5.42.084.087 5.418.087 11.997.087 18.577 5.42 23.91 12 23.91s11.913-5.334 11.913-11.913C23.913 5.417 18.579.084 12 .084zm0 1.5c5.75 0 10.413 4.662 10.413 10.413S17.75 22.41 12 22.41 1.587 17.748 1.587 11.997C1.587 6.247 6.249 1.584 12 1.584z"></path>
              <path d="M8.044 8.4a4.099 4.099 0 017.965 1.365c0 1.28-.774 2.313-2.008 3.135-.405.27-.834.499-1.263.69l-.283.12-.222.085-.085.03a.75.75 0 01-.475-1.423l.136-.05.2-.08.12-.053a7.05 7.05 0 001.04-.567c.86-.573 1.34-1.214 1.34-1.889a2.599 2.599 0 00-5.05-.866.75.75 0 11-1.415-.498zm3.966 8.429a.75.75 0 01.103 1.493l-.113.007a.75.75 0 01-.102-1.494l.113-.006z"></path>
            </svg>
          </Link>
          <Link className="user__item" to={"../account/profile"}>
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.954 14.986a5.735 5.735 0 015.731 5.514l.004.22v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a4.235 4.235 0 00-4.023-4.23l-.212-.004h-9.97a4.235 4.235 0 00-4.229 4.023l-.005.211v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a5.735 5.735 0 015.515-5.73l.22-.004h9.97zM11.97.031a5.735 5.735 0 100 11.47 5.735 5.735 0 000-11.47zm0 1.5a4.235 4.235 0 110 8.47 4.235 4.235 0 010-8.47z"></path>
            </svg>
          </Link>
          <Link className="cart__item" to={"cart"}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path d="M9.69 20.142a1.926 1.926 0 100 3.853 1.926 1.926 0 000-3.853zm0 1.5a.426.426 0 110 .853.426.426 0 010-.853zm9.412-1.5a1.927 1.927 0 100 3.853 1.927 1.927 0 000-3.853zm0 1.5a.426.426 0 110 .853.426.426 0 010-.853zM4.396.141c.317 0 .596.2.703.49l.03.1.905 4.158.045-.015a.745.745 0 01.097-.02l.102-.007H23.22a.75.75 0 01.749.792l-.013.099-1.884 9.892a3.1 3.1 0 01-2.903 2.48l-.185.002H9.94a3.101 3.101 0 01-3.058-2.293l-.042-.18L3.79 1.641H.866A.75.75 0 01.123.993L.116.891A.75.75 0 01.765.148L.866.141h3.53zm17.916 6.206H6.352l1.955 8.983c.145.71.747 1.23 1.472 1.279l.146.003H19a1.602 1.602 0 001.566-1.135l.035-.138 1.711-8.992z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
      </Overlay>
    </header>
  );
};

export default Header;
