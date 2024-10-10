import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Index({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <div>images here</div>
            <div className="d-flex gap-md-2 ga-1">
              <Link
                to={"/checkout"}
                className="btn btn-outline-none position-relative d-lg-none d-block "
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="ps-2 d-lg-block d-none">Checkout</span>
                <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
                  99+
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
              {/* <button
                className="btn btn-outline-none d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-controls="offcanvasResponsive"
              >
                <i className="fa-solid fa-bars"></i>
              </button> */}

              {/* <div
                className="offcanvas-lg offcanvas-top h-100"
                id="offcanvasResponsive"
                aria-labelledby="offcanvasResponsiveLabel"
              >
                <div className="offcanvas-body">
                  <button
                    type="button "
                    className="btn-close d-lg-none d-block"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasResponsive"
                    aria-label="Close"
                  ></button>
                  <ul className="d-lg-flex d-grid nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 gap-lg-2 gap-0 me-md-3 me-0">
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link px-1">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/shop?Categories=all"}
                        className="nav-link px-1"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-1">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-1">Contact Us</Link>
                    </li>
                  </ul>

                  <Link
                    to={"/checkout"}
                    className="btn btn-primary position-relative d-lg-block d-none "
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="ps-2">Checkout</span>
                    <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span className="visually-hidden">Number Checkout</span>
                    </span>
                  </Link>
                </div>
              </div> */}

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
                        className="nav-link px-1"
                        onClick={() => handleClose()}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
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
                      99+
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