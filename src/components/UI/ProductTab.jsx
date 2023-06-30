import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../styles/product-tab.css";
import h9GpuCompatibility from "../../assets/images/thumbnail/h9-gpu-compatibility.png"
import h9FanCompatibility from "../../assets/images/thumbnail/h9-fan-compatibility.png"
import h9RadiatorCompatibility from "../../assets/images/thumbnail/h9-radiator-compatibility.png"

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
                      <p >
                        120mm Quiet Airflow Fan (Case Version)<span>4</span>
                      </p>
                    </li>
                    <li>
                      <p >
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
                        <div className="content-block">
                            <h3>GPU Capacity</h3>
                            <div className="description">
                            The H9 Flow has 435mm of GPU clearance, offering room for the latest NVIDIA 40 Series and AMD 7000 Series cards.
                            </div>
                        </div>
                        <div className="thumbnail-index">
                                <img src={h9GpuCompatibility} alt="Image Card" />
                        </div>
                    </div>
                </div>
              </TabPanel>
              <TabPanel value="2">Tech Specs</TabPanel>
              <TabPanel value="3">Reviews</TabPanel>
              <TabPanel value="4">Resources</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default ProductTab;
