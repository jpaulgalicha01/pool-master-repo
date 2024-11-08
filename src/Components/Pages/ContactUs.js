import React from "react";
import "./CompanyOverview.css";
import img from "../../Assets/images/Img";
export default function ContactUs() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row company-overview-bg">
          <div className="p-0 m-0 row">
            <div className="row d-flex justify-content-center pt-5 mt-3 pb-5 p-0  m-0">
              <div className="col-lg-10 col-12">
                <div
                  className="card card-body p-lg-5 p-3"
                  style={{ borderRadius: "20px" }}
                >
                  <h1
                    className="text-title-primary text-primary pb-lg-5 pb-2"
                    style={{
                      fontSize: "calc(1.5vw + 1.5vh + 1vmin)",
                      textAlign: "justify",
                    }}
                    data-aos="fade-up"
                  >
                    CONTACT US
                  </h1>
                  <div className="d-lg-flex d-grid  justify-content-lg-between gap-4">
                    <div className="d-lg-none d-block" data-aos="fade-up">
                      <img
                        src={img.contactForm}
                        alt="contact form"
                        loading="lazy"
                        width={400}
                        height={400}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <div
                        className="d-flex align-items-center gap-2 pb-4"
                        data-aos="fade-up"
                      >
                        <img
                          src={img.location}
                          alt="location"
                          height={50}
                          width={50}
                        />
                        <p
                          className="text-paragraph-secondary"
                          style={{ textAlign: "justify" }}
                        >
                          Guanzon St. Brgy.1, Kabankalan, Philippines
                        </p>
                      </div>
                      <div
                        className="d-flex align-items-center gap-2 pb-4"
                        data-aos="fade-up"
                      >
                        <img
                          src={img.phoneCall}
                          alt="location"
                          height={50}
                          width={50}
                        />
                        <p
                          className="text-paragraph-secondary"
                          style={{ textAlign: "justify" }}
                        >
                          0948 979 8724
                        </p>
                      </div>
                      <div
                        className="d-flex align-items-center gap-2"
                        data-aos="fade-up"
                      >
                        <img
                          src={img.mail}
                          alt="location"
                          height={50}
                          width={50}
                        />
                        <p
                          className="text-paragraph-secondary"
                          style={{ textAlign: "justify" }}
                        >
                          poolmastersupply@gmail.com
                        </p>
                      </div>
                    </div>
                    <div
                      className="mx-auto d-lg-block d-none"
                      data-aos="fade-up"
                    >
                      <img
                        src={img.contactForm}
                        alt="contact form"
                        loading="lazy"
                        width={400}
                        height={400}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
