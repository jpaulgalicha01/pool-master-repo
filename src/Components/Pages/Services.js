import React from "react";


import "./CompanyOverview.css";
export default function Services() {

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row company-overview-bg ">
          <div
            className="d-flex justify-content-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="col-md-10 col-11 py-5">
              <h1
                className="text-title-primary  pb-lg-5 pb-2"
                style={{
                  fontSize: "calc(2vw + 1.5vh + 2vmin)",
                  textAlign: "justify",
                  color: "#5ca3ce",
                }}
                data-aos="fade-up"
              >
                Services Offered
              </h1>
              <br />

              <div className="row">
                <p
                  className="text-paragraph-secondary text-white"
                  style={{ textAlign: "justify" }}
                  data-aos="fade-up"
                >
                  At Pool Master, we provide a wide range of services to meet
                  your swimming pool needs. Our team handles pool maintenance to
                  keep your pool clean and safe year-round, as well as pool
                  construction tailored to your space and style. We offer pool
                  chemicals for water quality and supply essential pool
                  accessories. Our services also include plumbing, equipment
                  repairs, and installations to ensure smooth operations.
                  Whether it’s regular maintenance or larger projects, Pool
                  Master is committed to delivering high-quality service for
                  your peace of mind.
                </p>
                <div
                  className="col-lg-6 col-12 py-lg-3 py-2"
                  data-aos="fade-up"
                >
                  <ul className="text-white text-start">
                    <li className="text-paragraph-secondary">
                      Pool Maintenance
                    </li>
                    <li className="text-paragraph-secondary">
                      Pool Construction
                    </li>
                    <li className="text-paragraph-secondary">Pool Chemicals</li>
                    <li className="text-paragraph-secondary">
                      Pool Accessories
                    </li>
                    <li className="text-paragraph-secondary">Plumbing</li>
                    <li className="text-paragraph-secondary">
                      Pool & Equipment Repairs
                    </li>
                    <li className="text-paragraph-secondary">
                      Equipment Installation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
