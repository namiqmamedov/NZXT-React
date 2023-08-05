import React, { useState } from "react";
import dropdownImg01 from "../../../assets/images/thumbnail/h7-nav-cta.png";
import dropdownImg02 from "../../../assets/images/thumbnail/dropdownImg02.png";
import dropdownImg03 from "../../../assets/images/thumbnail/dropdownImg03.png";
import dropdownImg04 from "../../../assets/images/thumbnail/dropdownImg04.png";
import itemMini01 from "../../../assets/images/thumbnail/itemMini01.avif";
import itemMini02 from "../../../assets/images/thumbnail/itemMini02.avif";
import itemMini03 from "../../../assets/images/thumbnail/itemMini03.avif";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';

const NavDropdown = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
      setIsOpen(!isOpen);
    };
    
    
  return (
   <>

            <li onClick={handleOpen}>
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
                          <Link to={'product'} onClick={() => onClick()}>
                            <img src={itemMini01} alt="Menu Image" />
                            <div className="content">
                              <span className="title">Player: One</span>
                              <span className="desc">H5 Flow PCs</span>
                            </div>
                          </Link>
                          <Link to={'product'} onClick={() => onClick()}>
                            <img src={itemMini02} alt="Menu Image" />
                            <div className="content">
                              <span className="title">Player: Two</span>
                              <span className="desc">H5 Elite PCs</span>
                            </div>
                          </Link>
                          <Link to={'product'} onClick={() => onClick()}>
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
            <li onClick={handleOpen}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">H9</span>
                            <span className="desc">
                              Dual-Chamber Mid-Tower Cases
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">H7</span>
                            <span className="desc">ATX Mid-Tower Cases</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">H5</span>
                            <span className="desc">
                              Compact ATX Mid-Tower-Cases
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">H9</span>
                            <span className="desc">
                              Dual-Chamber Mid-Tower Cases
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">H210</span>
                            <span className="desc">Compact Mini-ITX Cases</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">The New Krakens</span>
                            <span className="desc">
                              AIO Liquid Coolers with LCD Display
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Kraken Z</span>
                            <span className="desc">
                              AIO Liquid Coolers with LCD Display
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Kraken X</span>
                            <span className="desc">
                              AIO Liquid Coolers with Mirror Display
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Kraken 120</span>
                            <span className="desc">
                              120mm Liquid Cooler with RGB
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">F Series Fans</span>
                            <span className="desc">
                              RGB & High-performance Fans
                            </span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Motherboards</span>
                            <span className="desc">Gaming Motherboards</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Power</span>
                            <span className="desc">80 Plus Rated PSUs</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
            <li onClick={handleOpen}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">FDH Monitors</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Monitor Arm (Single)</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
            <li onClick={handleOpen}>
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
                          <Link to={'product'} onClick={() => onClick()}>
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
                          <Link to={'product'} onClick={() => onClick()}>
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
                          <Link to={'product'} onClick={() => onClick()}>
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
                          <Link to={'product'} onClick={() => onClick()}>
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
            <li onClick={handleOpen}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">CAM</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
            <li onClick={handleOpen}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Podcast</span>
                            <span className="desc"></span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">NZXT Club & Discord</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Newsroom & Blog</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Company</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
                          <div className="content">
                            <span className="title">Careers</span>
                          </div>
                        </Link>
                        <Link to={'product'} onClick={() => onClick()}>
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
            <Backdrop
            className="backdrop-main"
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      </Backdrop>
   </>
  )
}

export default NavDropdown