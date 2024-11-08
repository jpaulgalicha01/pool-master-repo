import React from "react";
import ClsModal from "../Tools/Modal";

export default function CheckoutChild({ modalShow, setModalShow }) {
  const handlesubmit = () => {};

  return (
    <>
      <ClsModal
        handleSubmit={handlesubmit}
        show={modalShow}
        title={"Billing Details"}
        size={"lg"}
        footer={
          <>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={async () => {
                await setModalShow(!modalShow);
              }}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Checkout
            </button>
          </>
        }
      >
        <div className="continer-fluid">
          <div className="row">
            <div className="form-group row row-gap-2">
              <div className="col-md-6 col-12">
                <label htmlFor="Fname">First Name</label>
                <input type="text" className="form-control" id="Fname" />
              </div>
              <div className="col-md-6 col-12">
                <label htmlFor="Lname">Last Name</label>
                <input type="text" className="form-control" id="Lname" />
              </div>
              <div className="col-12">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
              <div className="col-md-5 col-12">
                <label htmlFor="City">City</label>
                <input type="text" className="form-control" id="City" />
              </div>
              <div className="col-md-5 col-12">
                <label htmlFor="State/Territory">State/Territory</label>
                <input
                  type="text"
                  className="form-control"
                  id="State/Territory"
                />
              </div>
              <div className="col-md-2 col-12">
                <label htmlFor="Postcode">Postcode</label>
                <input type="text" className="form-control" id="Postcode" />
              </div>
              <div className="col-12">
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="Phone Number"
                  placeholder="09xxxxxxxxxx"
                />
              </div>
            </div>
            <div className="row pt-4">
              <h5>Payment</h5>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    COD - Cash On Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClsModal>
    </>
  );
}
