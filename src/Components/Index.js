import React, { useContext, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Class/GlobalContext";
import img from "../Assets/images/Img";

export default function Index({ children }) {
  const { globalData } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(globalData);
  return (
    <>
      <div className="bg-primary ">
        <p className="my-0 text-white fs-6">
          Located :{" "}
          <span className="text-white">
            In front of RCBC Bank, Guanzon St, Kabankalan, 6111 Negros
            Occidental
          </span>
        </p>
      </div>
      <div className="container-fluid  z-3 sticky-top">
        <div className="row  bg-white">
          <header
            className="d-flex justify-content-between align-items-center py-3 shadow-sm "
            style={{ position: "sticky", top: "0", zIndex: "1" }}
          >
            <Link
              to={"/"}
              className="d-inline-flex link-body-emphasis text-decoration-none d-flex gap-2 align-items-center"
            >
              <img src={img.headerLogo} alt="logo" width={60} height={60} />
              <p className="text-primary text-title-primary mb-0 fs-3">
                Pool Master
              </p>
            </Link>
            <div className="d-flex gap-md-2 ga-1">
              <Link
                to={"/checkout"}
                className="btn btn-outline-none position-relative d-lg-none d-block "
              >
                <i className="fa-solid fa-cart-shopping"></i>

                <span className="ps-2 d-lg-block d-none">Checkout</span>
                <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
                  {globalData.length}
                  <span className="visually-hidden">Number Checkout</span>
                </span>
              </Link>

              <Button
                variant="outline-none"
                className="btn btn-outline-none d-lg-none"
                onClick={handleShow}
              >
                <i className="fa-solid fa-bars"></i>
              </Button>

              <Offcanvas
                show={show}
                onHide={handleClose}
                responsive="lg"
                placement="top"
                className="h-100"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="d-lg-flex d-grid nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 gap-lg-2 gap-0 me-md-3 me-0">
                    <li className="nav-item">
                      <Link
                        to={"/"}
                        className="nav-link px-1"
                        onClick={() => handleClose()}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/shop?Categories=all"}
                        className="nav-link px-1"
                        onClick={() => handleClose()}
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/company-overview"}
                        className="nav-link px-1"
                        onClick={() => handleClose()}
                      >
                        Company Overview
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/services"}
                        className="nav-link px-1"
                        onClick={() => handleClose()}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                      to={"/contact-us"}
                        className="nav-link px-1"
                        onClick={() => handleClose()}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>

                  <Link
                    to={"/checkout"}
                    className="btn btn-primary position-relative d-lg-block d-none "
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="ps-2">Check out</span>
                    <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
                      {globalData.length}
                      <span className="visually-hidden">Number Checkout</span>
                    </span>
                  </Link>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </header>
        </div>
      </div>
      {children}
      <div className="container-fluid">
        <div className="row bg-primary py-2">
          <div className="col-12 ">
            <p
              className="text-center pt-2 text-white text-paragraph-secondary fw-lighter"
              style={{ fontSize: ".8rem" }}
            >
              Copyright ©{new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
