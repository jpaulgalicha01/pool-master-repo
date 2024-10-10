import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-banner pb-4 mb-4" style={{ height: "100vh" }}>
          <div
            style={{ minHeight: "550px" }}
            className="d-flex justify-content-md-start justify-content-center align-items-center"
          >
            <div className="text-md-start text-center custom-width text-white">
              <h1 style={{ fontSize: "calc(2vw + 2.5vh + 2vmin)" }}>
                Pool Master Swimming Pool Equipment & Chemical Supplies
              </h1>
              <p
                className=" fst-italic fw-lighter"
                style={{ fontSize: "calc(.9vw + 1vh + .5vmin)" }}
              >
                Maintenance, Construction,Chemicals,Accessories,Plumbing,
                Repairs,Equipments Installation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
