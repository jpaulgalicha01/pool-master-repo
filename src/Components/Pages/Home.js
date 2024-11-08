import React from "react";
import "./Home.css";
import img from "../../Assets/images/Img";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-banner pb-4 mb-0">
          <div
            style={{ minHeight: "550px" }}
            className="d-flex justify-content-start align-items-center"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="custom-width-75">
              <p className="text-paragraph-secondary text-white text-lg-start text-center mb-0">
                Export pool swimming pool tools
              </p>
              <h1
                className="text-title-primary text-white text-lg-start text-center"
                style={{ fontSize: "calc(2.5vw + 2.5vh + 2.0vmin)" }}
              >
                Pool Master Swimming Pool
              </h1>
            </div>
          </div>
        </div>

        <div className="row" style={{ backgroundColor: "#06243c" }}>
          <div className=" p-3 py-5">
            <div className="d-flex justify-content-center">
              <div className="col-lg-10 col-10 ">
                <div className="row d-flex  justify-content-center row-gap-4">
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      loading="lazy"
                      className="p-2  "
                      src={img.services1}
                      alt="services1"
                      width={150}
                      height={150}
                    />
                    <p className="text-subtitle-secondary pt-2 text-white fs-5">
                      Commercial Pool
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      loading="lazy"
                      className="p-2  "
                      src={img.services2}
                      alt="services1"
                      width={150}
                      height={150}
                    />
                    <p className="text-subtitle-secondary pt-2 text-white fs-5">
                      Residential Pool
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      loading="lazy"
                      className="p-2  "
                      src={img.services3}
                      alt="services1"
                      width={150}
                      height={150}
                    />
                    <p className="text-subtitle-secondary pt-2 text-white fs-5">
                      Construction Pool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 my-4 d-flex justify-content-center align-items-center">
          <h1
            className="text-title-primary text-primary pb-lg-5 pb-2"
            style={{
              fontSize: "calc(2vw + 1.5vh + 2vmin)",
              textAlign: "justify",
            }}
            data-aos="fade-up"
          >
            BRIEF OVERVIEW OF POOL MASTER SWIMMING POOL EQUIPMENT & CHEMICAL
            SUPPLIES 
          </h1>
          <div className="col-lg-6 col-12  d-flex justify-content-center">
            <img
              loading="lazy"
              src={img.headerLogo}
              alt="logo"
              className="img-fluid"
              style={{
                width: "250px",
                height: "auto",
                filter: "drop-shadow(7px 9px 7px #a8a8a8)",
              }}
              data-aos="flip-left"
            />
          </div>
          <div className="col-lg-6 co-12 mt-lg-0 mt-3" data-aos="fade-up">
            <p
              className="text-paragraph-secondary"
              style={{ textAlign: "justify" }}
            >
              Pool Master provides a comprehensive range of swimming pool
              services designed to meet all your pool maintenance and equipment
              needs. Their offerings include regular pool maintenance to keep
              your pool clean and safe, pool construction to build
              custom-designed pools, and the supply of essential pool chemicals
              for balanced water quality. They also offer various pool
              accessories to enhance your swimming experience, expert plumbing
              services, and reliable pool and equipment repairs for any issues.
              Additionally, Pool Master ensures seamless equipment installation,
              covering filters, pumps, and heaters, to keep your pool operating
              efficiently.
            </p>
          </div>
        </div>

        <div
          className="row py-5 mb-0 row-gap-lg-5 row-gap-2"
          style={{ backgroundColor: "#eff4f7", minHeight: "100vh" }}
        >
          <h1
            className="text-title-primary text-primary pb-lg-5 pb-1 text-center"
            style={{ fontSize: "calc(2vw + 1.5vh + 2vmin)" }}
            data-aos="fade-up"
          >
            Sample Work with Some Clients
          </h1>

          <div
            className="col-lg-8 col-12 py-5 px-4"
            style={{
              backgroundColor: "#06243c",
              borderRadius: "0px 100px 100px 0px",
            }}
            data-aos="fade-up"
          >
            <div className="d-lg-flex d-grid gap-5 align-items-center">
              <div>
                <img
                  src={img.sample1}
                  alt=""
                  width={400}
                  height={350}
                  className="img-fluid"
                />
              </div>
              <div>
                <p className="text-paragraph-secondary text-white text-md-start text-center mb-lg-4 mb-2">
                  Pool Construction Bago City
                </p>
                <ul>
                  <li className="text-paragraph-secondary text-white">
                    Pool Maintenance
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Construction
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Chemicals
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Accessories
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Plumbing
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool & Equipment Repairs
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Equipment Installation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-lg-block d-none"> </div>
          <div className="col-lg-4 col-12 d-lg-block d-none"> </div>
          <div
            data-aos="fade-up"
            className="col-lg-8 col-12 py-5 ps-lg-5 ps-3"
            style={{
              backgroundColor: "#06243c",
              borderRadius: "100px 0px 0px 100px",
            }}
          >
            <div className="d-lg-flex d-grid gap-5 align-items-center">
              <div className="d-lg-none d-block">
                <img
                  src={img.sample2}
                  alt=""
                  width={400}
                  height={350}
                  className="img-fluid"
                />
              </div>
              <div>
                <p className="text-paragraph-secondary text-white text-md-start text-center mb-lg-4 mb-2">
                  Pool Construction Talisay City
                </p>
                <ul>
                  <li className="text-paragraph-secondary text-white">
                    Pool Maintenance
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Construction
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Chemicals
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Accessories
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Plumbing
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool & Equipment Repairs
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Equipment Installation
                  </li>
                </ul>
              </div>
              <div className="d-lg-block d-none">
                <img
                  src={img.sample2}
                  alt=""
                  width={400}
                  height={350}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 col-12 py-5 px-4"
            data-aos="fade-up"
            style={{
              backgroundColor: "#06243c",
              borderRadius: "0px 100px 100px 0px",
            }}
          >
            <div className="d-lg-flex d-grid gap-5 align-items-center">
              <div>
                <img
                  src={img.sample3}
                  alt=""
                  width={400}
                  height={350}
                  className="img-fluid"
                />
              </div>
              <div>
                <p className="text-paragraph-secondary text-white text-md-start text-center mb-lg-4 mb-2">
                  Pool Construction Silay City
                </p>
                <ul>
                  <li className="text-paragraph-secondary text-white">
                    Pool Maintenance
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Construction
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Chemicals
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool Accessories
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Plumbing
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Pool & Equipment Repairs
                  </li>
                  <li className="text-paragraph-secondary text-white">
                    Equipment Installation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
