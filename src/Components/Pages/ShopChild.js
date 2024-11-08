import React, { useContext, useState } from "react";
import ClsModal from "../Tools/Modal";
import { removeComma } from "../../Class/ClsVaroiusFormula";
import { ClsN2 } from "../../Class/ClsN2";
import { GlobalContext } from "../../Class/GlobalContext";
import { ClsAlert } from "../../Class/ClsAlert";

export default function ShopChild({
  modalShow,
  setmodalShow,
  selectedItemID,
  selectProductName,
  selectProductCost,
  selectProductImg,
}) {
  const [qty, SetQty] = useState(1);

  const { setGlobalData } = useContext(GlobalContext);

  const handlesubmit = (e) => {
    e.preventDefault();

    setGlobalData((prevData) => [
      ...prevData,
      {
        ProdID: selectedItemID,
        ProductName: selectProductName,
        ProductImg: selectProductImg,
        ProdCost: Number(removeComma(selectProductCost)),
        ProdQty: qty,
        ProdTotCost: Number(removeComma(selectProductCost)) * qty,
        Checked: false,
      },
    ]);
    ClsAlert({ icon: "success", title: "Added to cart" });
    setmodalShow(false);
  };

  return (
    <>
      <ClsModal
        handleSubmit={handlesubmit}
        show={modalShow}
        title={selectProductName}
        size={"md"}
        footer={
          <>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={async () => {
                await setmodalShow(!modalShow);
              }}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </>
        }
      >
        <div className="form-group text-center py-2">
          <label className="form-label">Unit Cost</label>
          <input
            type="text"
            className="form-control text-center "
            disabled
            value={selectProductCost}
          />
        </div>

        <div className="form-group text-center py-2">
          <label className="form-label">Quantity</label>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-none"
              type="button"
              onClick={() => {
                if (qty <= 1) {
                  SetQty(1);
                } else {
                  SetQty(qty - 1);
                }
              }}
            >
              <i className="fa-solid fa-minus fa-xl"></i>
            </button>
            <input
              type="text"
              className="form-control text-center"
              style={{ width: "90px" }}
              value={qty}
              onChange={(prev) => SetQty(prev.target.value)}
            />
            <button
              className="btn btn-outline-none"
              type="button"
              onClick={() => {
                SetQty(qty + 1);
              }}
            >
              <i className="fa-solid fa-plus fa-xl"></i>
            </button>
          </div>
        </div>

        <div className="form-group text-center py-2">
          <p className="fs-4 text-primary fw-bold">
            {ClsN2(removeComma(selectProductCost) * qty)}
          </p>
        </div>
      </ClsModal>
    </>
  );
}
