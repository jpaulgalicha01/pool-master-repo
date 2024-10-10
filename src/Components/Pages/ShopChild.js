import React from "react";
import ClsModal from "../Tools/Modal";

export default function ShopChild({ modalShow, setmodalShow }) {
  const handlesubmit = () => {};

  return (
    <>
      <ClsModal
        handleSubmit={handlesubmit}
        show={modalShow}
        title={"Product Entry"}
        size={"lg"}
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
      ></ClsModal>
    </>
  );
}
