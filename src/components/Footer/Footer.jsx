import React from "react";
import Button from "@mui/material/Button";
import { Checkbox } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/footer.css";

const Footer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="newsletter-index">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Stay in Touch</h2>
              <p>Stay up to date on NZXT product news and offers.</p>
            </div>
            <div className="col-lg-6">
              <form className="input-area">
                <input type="email" />
                <Button variant="outlined">Notify Me</Button>
              </form>
              <div className="check-privacy">
                <Checkbox className="checkbox-index" color="secondary">
                  By signing up you agree to NZXT, CAM, and BLD's{" "}
                  <Link>Privacy Policy</Link> and{" "}
                  <Link>Terms & Conditions</Link>
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-index">
          <div className="container">
            <div className="row">
              <div className="footer-wrapper">
                <div className="social-area">
                  <Link>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M24 12.073C24 5.405 18.628 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.79-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.49 0-1.955.931-1.955 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.613 23.095 24 18.1 24 12.073z"></path>
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.024 9.726c.006.126.006.246.006.372 0 3.822-2.91 8.232-8.232 8.232a8.177 8.177 0 01-4.434-1.302 5.816 5.816 0 004.284-1.194 2.889 2.889 0 01-2.7-2.01 2.884 2.884 0 001.308-.048 2.891 2.891 0 01-2.322-2.838v-.036c.39.216.834.348 1.308.36a2.895 2.895 0 01-.9-3.858 8.208 8.208 0 005.964 3.024 2.894 2.894 0 014.926-2.64 5.859 5.859 0 001.836-.702 2.892 2.892 0 01-1.272 1.602 5.928 5.928 0 001.662-.456 5.657 5.657 0 01-1.434 1.494z"></path>
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M11.995 2.162c3.205 0 3.581.014 4.848.071 1.171.053 1.805.248 2.228.415.562.219.962.476 1.381.895.42.419.681.819.896 1.38.162.425.361 1.058.414 2.23.057 1.266.071 1.642.071 4.847 0 3.205-.014 3.58-.071 4.848-.053 1.171-.248 1.804-.414 2.228a3.722 3.722 0 01-.896 1.381c-.419.42-.819.681-1.38.895-.424.162-1.058.362-2.23.415-1.266.057-1.642.071-4.847.071-3.205 0-3.58-.014-4.847-.071-1.172-.053-1.805-.248-2.229-.415a3.723 3.723 0 01-1.38-.895 3.664 3.664 0 01-.896-1.38c-.162-.425-.362-1.058-.414-2.23-.058-1.266-.072-1.642-.072-4.847 0-3.205.014-3.581.072-4.848.052-1.171.247-1.804.414-2.228.219-.562.476-.962.895-1.381a3.665 3.665 0 011.381-.895c.424-.162 1.057-.362 2.229-.415 1.266-.062 1.647-.071 4.847-.071zm0-2.162C8.738 0 8.33.014 7.048.071 5.77.13 4.9.333 4.138.63a5.847 5.847 0 00-2.124 1.385A5.95 5.95 0 00.63 4.138C.333 4.9.129 5.771.07 7.052.014 8.33 0 8.738 0 11.995c0 3.257.014 3.667.071 4.948.058 1.276.262 2.147.558 2.914.304.79.719 1.457 1.385 2.124a5.95 5.95 0 002.124 1.386c.762.295 1.633.5 2.914.557 1.281.057 1.686.071 4.948.071 3.262 0 3.667-.014 4.948-.071 1.276-.057 2.147-.262 2.914-.557a5.847 5.847 0 002.124-1.386 5.949 5.949 0 001.385-2.124c.296-.762.5-1.633.558-2.914.057-1.281.071-1.686.071-4.948 0-3.262-.014-3.666-.071-4.947-.058-1.277-.262-2.148-.558-2.915a5.846 5.846 0 00-1.385-2.123A5.95 5.95 0 0019.862.624c-.762-.295-1.633-.5-2.914-.557C15.662.014 15.252 0 11.995 0z"></path>
                      <path d="M11.995 5.838a6.163 6.163 0 10.002 12.326 6.163 6.163 0 00-.002-12.326zm0 10.157a4 4 0 110-7.999 4 4 0 010 8zM18.4 7.029a1.438 1.438 0 100-2.877 1.438 1.438 0 000 2.877z"></path>
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M23.495 6.145a3.038 3.038 0 00-2.127-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.382.505c-1.036.272-1.84 1.09-2.127 2.14C0 8.027 0 11.955 0 11.955s0 3.927.505 5.809a3.037 3.037 0 002.127 2.14C4.5 20.41 12 20.41 12 20.41s7.5 0 9.382-.505c1.036-.272 1.84-1.09 2.127-2.14.491-1.882.491-5.81.491-5.81s0-3.927-.505-5.809zm-13.95 9.382V8.382l6.273 3.572-6.273 3.573z"></path>
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M5.99 0L1.7 4.286v15.428h5.147V24l4.29-4.286h3.431L22.29 12V0H5.99zm14.583 11.143l-3.431 3.428H13.71l-3.002 3v-3h-3.86V1.714h13.725v9.429z"></path>
                      <path d="M18 4.714h-1.716v5.143H18V4.714zm-4.719 0h-1.715v5.143h1.715V4.714z"></path>
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className="h-6 w-6"
                    >
                      <path d="M21.143 0H2.857A2.86 2.86 0 000 2.857v18.286A2.86 2.86 0 002.857 24h18.286A2.86 2.86 0 0024 21.143V2.857A2.86 2.86 0 0021.143 0zM18.86 10.47a4.28 4.28 0 01-3.977-1.916v6.593a4.872 4.872 0 11-4.873-4.873c.102 0 .202.01.302.016v2.4c-.1-.011-.199-.03-.302-.03a2.487 2.487 0 000 4.974c1.374 0 2.587-1.082 2.587-2.456l.024-11.196h2.297a4.279 4.279 0 003.944 3.82v2.668"></path>
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M14.268 10.07c-.696 0-1.246.593-1.246 1.33 0 .74.562 1.332 1.246 1.332.695 0 1.245-.593 1.245-1.331s-.562-1.331-1.245-1.331zm-4.456 0c-.696 0-1.245.593-1.245 1.33 0 .74.561 1.332 1.245 1.332.696 0 1.245-.593 1.245-1.331.012-.738-.55-1.331-1.245-1.331z"></path>
                      <path d="M20.2 0H3.842C2.463 0 1.34 1.113 1.34 2.481V18.7c0 1.368 1.123 2.481 2.502 2.481h13.844l-.647-2.215 1.562 1.428 1.477 1.344L22.715 24V2.481A2.514 2.514 0 0020.2 0zm-4.712 15.673s-.44-.52-.805-.968c1.599-.448 2.21-1.428 2.21-1.428a7.01 7.01 0 01-1.405.714 8.806 8.806 0 01-1.77.52 8.622 8.622 0 01-3.162-.012 9.349 9.349 0 01-1.794-.52 7.17 7.17 0 01-.891-.412c-.037-.024-.073-.036-.11-.06-.024-.012-.037-.024-.049-.024-.22-.121-.342-.206-.342-.206s.586.956 2.137 1.416c-.367.46-.818.992-.818.992-2.698-.084-3.723-1.827-3.723-1.827 0-3.861 1.757-6.996 1.757-6.996 1.758-1.295 3.418-1.258 3.418-1.258l.123.145c-2.198.617-3.199 1.573-3.199 1.573s.269-.145.72-.339c1.307-.568 2.344-.714 2.771-.762.074-.012.135-.024.208-.024a10.417 10.417 0 012.466-.025c1.16.134 2.405.472 3.674 1.15 0 0-.964-.907-3.04-1.525l.172-.193s1.672-.037 3.418 1.258c0 0 1.758 3.135 1.758 6.996 0-.012-1.026 1.73-3.724 1.815z"></path>
                    </svg>
                  </Link>
                </div>
                <form className="input-wrapper">
                  <fieldset>
                    <div className="flex-grow">
                      <label
                        for="language"
                        className="leading-5 font-semibold tracking-wider uppercase text-xxs block mb-1 text-gray-400 px-1"
                      >
                        Language
                      </label>
                      <div className="select-box">
                        <select data-test-id="language" id="language">
                          <option value="en" selected="">
                            English
                          </option>
                        </select>
                        <div
                          className="pointer-events-none absolute inset-y-0 right-0 flex items-center p-1"
                          aria-hidden="true"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="1em"
                            height="1em"
                            className="stroke-current text-white text-base absolute right-0 text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <label
                        for="location"
                        className="leading-5 font-semibold tracking-wider uppercase text-xxs block mb-1 text-gray-400 px-1"
                      >
                        Country
                      </label>
                      <div className="select-box">
                        <select id="location" data-test-id="location">
                          <optgroup label="North America">
                            <option value="US" selected="">
                              United States
                            </option>
                            <option value="CA">Canada</option>
                          </optgroup>
                          <optgroup label="Europe">
                            <option value="AT">Austria</option>
                            <option value="BE">Belgium</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="DE">Germany</option>
                            <option value="LU">Luxembourg</option>
                            <option value="NL">Netherlands</option>
                            <option value="GB">United Kingdom</option>
                            <option value="ES">Spain</option>
                          </optgroup>
                          <optgroup label="Oceania">
                            <option value="AU">Australia</option>
                            <option value="NZ">New Zealand</option>
                          </optgroup>
                        </select>
                        <div
                          className="pointer-events-none absolute inset-y-0 right-0 flex items-center p-1"
                          aria-hidden="true"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="1em"
                            height="1em"
                            className="stroke-current text-white text-base absolute right-0 text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="footer-link">
                <div className="footer-menu col-lg-2">
                  <h4 className="menu-title">Contact</h4>
                  <ul>
                    <li>
                      <Link className="text-hover">Company</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Customer Support</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Submit a Request</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Support Center</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu col-lg-2">
                  <h4 className="menu-title">ABOUT NZXT</h4>
                  <ul>
                    <li>
                      <Link className="text-hover">Founder Q & A</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Careers</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Customer Reviews</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu col-lg-2">
                  <h4 className="menu-title">COMMUNITY</h4>
                  <ul>
                    <li>
                      <Link className="text-hover">Our Discord</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Newsroom & Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu col-lg-2">
                  <h4 className="menu-title">SOFTWARE</h4>
                  <ul>
                    <li>
                      <Link className="text-hover">CAM</Link>
                    </li>
                    <li>
                      <Link className="text-hover">CAM Feedback</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu col-lg-2">
                  <h4 className="menu-title">ACCOUNT</h4>
                  <ul>
                    <li>
                      <Link className="text-hover">Manage Your Account</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu col-lg-2">
                  <h4 className="menu-title">NZXT STORE</h4>
                  <ul>
                    <li>
                      <Link className="text-hover">NZXT BLD PC</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Refurbished Builds</Link>
                    </li>
                    <li>
                      <Link className="text-hover">FAQ</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Find a Retailer</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Accordion
                className="accordion-main"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    className="menu-title"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Contact
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <ul>
                    <li>
                      <Link className="text-hover">Company</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Customer Support</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Submit a Request</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Support Center</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-main"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    className="menu-title"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    About Nzxt
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <ul>
                    <li>
                      <Link className="text-hover">Founder Q & A</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Careers</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Customer Reviews</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-main"
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    className="menu-title"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Community
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <ul>
                    <li>
                      <Link className="text-hover">Our Discord</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Newsroom & Blog</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-main"
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography
                    className="menu-title"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Software
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <ul>
                    <li>
                      <Link className="text-hover">CAM</Link>
                    </li>
                    <li>
                      <Link className="text-hover">CAM Feedback</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-main"
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography
                    className="menu-title"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Account
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <ul>
                    <li>
                      <Link className="text-hover">Manage Your Account</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-main"
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography
                    className="menu-title"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Nzxt Store
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-detail">
                  <ul>
                    <li>
                      <Link className="text-hover">NZXT BLD PC</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Refurbished Builds</Link>
                    </li>
                    <li>
                      <Link className="text-hover">FAQ</Link>
                    </li>
                    <li>
                      <Link className="text-hover">Find a Retailer</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <div className="footer-bottom">
                <p className="brand">NZXT</p>
                <div className="text-main">
                  <p className="text-nzxt">
                    © NZXT Inc. {currentYear} All Rights Reserved
                  </p>
                  <Link>
                    <p className="text-hover">Legal</p>
                  </Link>
                  <Link>
                    <p className="text-hover">Privacy Policy</p>
                  </Link>
                  <Link>
                    <p className="text-hover">Manage Cookie Preferences</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
