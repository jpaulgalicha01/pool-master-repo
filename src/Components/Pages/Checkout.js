import React from "react";
import "./Checkout.css";
import { Form } from "react-bootstrap";
import img from "../../Assets/images/Img";
export default function Checkout() {
  const products = [
    { id: 1, name: "Product Name 1", price: 100 },
    { id: 2, name: "Product Name 2", price: 150 },
    { id: 2, name: "Product Name 2", price: 150 },
    { id: 2, name: "Product Name 2", price: 150 },
  ]; // Example data to iterate over

  return (
    <>
      <div
        className="container-fluid"
        style={{
          minHeight: "80vh",
          maxHeight: "100vh",
        }}
      >
        <div className="row d-flex justify-content-center py-5">
          <div className="col-10 shadow-custom">
            <div
              className="row py-5 px-2 "
              style={{ maxHeight: "60vh", overflowY: "auto" }}
            >
              <h5>Checkout</h5>
              {/* <Form.Check type="checkbox" /> */}

              {products.map((index, data) => (
                <React.Fragment key={index}>
                  <div className="col-12 d-sm-flex d-grid align-items-center py-3">
                    <div className="d-flex align-items-center gap-md-5 gap-0 ">
                      <Form.Check type="checkbox" />
                      <img
                        loading="lazy"
                        src={img.tempImage}
                        alt=""
                        width={"150"}
                        className=" img-fluid mx-auto"
                      />
                    </div>
                    <div className="ms-sm-5 ms-0">
                      <p className="m-0">Product Name</p>
                      <p className="text-primary fs-4 m-0">₱ 100.00</p>
                      <div className="d-flex">
                        <button className="btn btn-outline-none">
                          <i className="fa-solid fa-minus fa-xl"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          style={{ width: "90px" }}
                        />
                        <button className="btn btn-outline-none">
                          <i className="fa-solid fa-plus fa-xl"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 mt-2">
              <div>
                <p className="fs-4 m-0 fw-bold">Total Price</p>
                <p className="text-primary  m-0">₱ 100.00</p>
              </div>
              <div>
                <button className="btn btn-primary rounded">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
