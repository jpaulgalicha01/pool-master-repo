import React, { useContext, useState } from "react";
import "./Checkout.css";
import { Form } from "react-bootstrap";
import { GlobalContext } from "../../Class/GlobalContext";
import { ClsN2 } from "../../Class/ClsN2";
import CheckoutChild from "./CheckoutChild";

export default function Checkout() {
  const { globalData, setGlobalData } = useContext(GlobalContext);
  const [modalShow, setModalShow] = useState(false);
  const update = ({ ProductId, Qty }) => {
    const updatedData = globalData.map((item) => {
      if (item.ProdID === ProductId) {
        const newQty = Math.max(1, item.ProdQty + Qty);
        return {
          ...item,
          ProdQty: newQty,
          ProdTotCost: newQty * item.ProdCost,
        };
      }
      return item;
    });
    setGlobalData(updatedData);
  };

  const checkProd = ({ ProductId, Checked }) => {
    const updatedData = globalData.map((item) => {
      if (item.ProdID === ProductId) {
        return {
          ...item,
          Checked: Checked,
        };
      }
      return item;
    });
    setGlobalData(updatedData);
  };

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
              className="row py-5 px-2"
              style={{ maxHeight: "60vh", overflowY: "auto" }}
            >
              <h5>Checkout</h5>

              {globalData.map((data) => (
                <React.Fragment key={data.ProdID}>
                  <div className="col-12 d-sm-flex d-grid align-items-center py-3">
                    <div className="d-flex align-items-center gap-md-5 gap-0">
                      <Form.Check
                        type="checkbox"
                        checked={data.Checked === true}
                        onClick={() =>
                          checkProd({
                            ProductId: data.ProdID,
                            Checked: !data.Checked,
                          })
                        }
                      />
                      <img
                        loading="lazy"
                        src={require(`../../Assets/images/${data.ProductImg}.webp`)}
                        alt=""
                        width={"150"}
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="ms-sm-5 ms-0 text-md-start text-center">
                      <p className="m-0">{data.ProductName}</p>
                      <p className="text-primary fs-4 m-0">
                        {ClsN2(data.ProdCost)}
                      </p>
                      <div className="d-flex justify-content-md-start justify-content-center">
                        <div className="d-flex">
                          <button
                            className="btn btn-outline-none"
                            onClick={() => {
                              update({ ProductId: data.ProdID, Qty: -1 });
                            }}
                          >
                            <i className="fa-solid fa-minus fa-xl"></i>
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            style={{ width: "90px" }}
                            value={data.ProdQty}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-none"
                            onClick={() => {
                              update({ ProductId: data.ProdID, Qty: +1 });
                            }}
                          >
                            <i className="fa-solid fa-plus fa-xl"></i>
                          </button>
                        </div>
                      </div>
                      <p className="text-success mt-2">
                        Total Cost: {ClsN2(data.ProdTotCost)}
                      </p>
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
            <div className="d-flex justify-content-between align-items-center py-2 mt-2">
              <div>
                <p className="fs-4 m-0 fw-bold">Total Price</p>
                <p className="text-primary m-0">
                  ₱{" "}
                  {ClsN2(
                    globalData
                      .filter((item) => item.Checked)
                      .reduce((total, item) => total + item.ProdTotCost, 0)
                  )}
                </p>
              </div>
              <div>
                {globalData.length >= 1 &&
                  globalData.some((data) => data.Checked) && (
                    <button
                      className="btn btn-primary rounded"
                      onClick={() => setModalShow(!modalShow)}
                    >
                      Check Out
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalShow ? (
        <CheckoutChild setModalShow={setModalShow} modalShow={modalShow} />
      ) : (
        ""
      )}
    </>
  );
}
