import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import img from "../../Assets/images/Img";
import ShopChild from "./ShopChild";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("Categories");

  const navigate = useNavigate();

  const [modalShow, setmodalShow] = useState(false);

  const sections = [
    { name: "Product 1", price: 120.0, image: img.tempImage },
    { name: "Product 2", price: 150.0, image: img.tempImage },
    { name: "Product 3", price: 180.0, image: img.tempImage },
    { name: "Product 4", price: 120.0, image: img.tempImage },
    { name: "Product 5", price: 150.0, image: img.tempImage },
    { name: "Product 6", price: 180.0, image: img.tempImage },
    { name: "Product 1", price: 120.0, image: img.tempImage },
    { name: "Product 2", price: 150.0, image: img.tempImage },
    { name: "Product 3", price: 180.0, image: img.tempImage },
    { name: "Product 4", price: 120.0, image: img.tempImage },
    { name: "Product 5", price: 150.0, image: img.tempImage },
    { name: "Product 6", price: 180.0, image: img.tempImage },
  ];

  const handleChangeCat = (e) => {
    const selectedTargetCategories = e.target.value;
    navigate(`/shop?Categories=${selectedTargetCategories}`);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "80vh" }}>
          <div className="col-2 border-end pt-3 d-md-block d-none">
            <ul className="nav nav-pills flex-column ">
              <h5>Categories</h5>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=all"}
                  className={`nav-link ${category === "all" ? "active" : ""}`}
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=water-sports"}
                  className={`nav-link ${
                    category === "water-sports" ? "active" : ""
                  }`}
                >
                  Water Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=home-improvement"}
                  className={`nav-link ${
                    category === "home-improvement" ? "active" : ""
                  }`}
                >
                  Home Improvement
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=laundry-household-care"}
                  className={`nav-link ${
                    category === "laundry-household-care" ? "active" : ""
                  }`}
                >
                  Laundry & Household Care
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=home-maintenance"}
                  className={`nav-link ${
                    category === "home-maintenance" ? "active" : ""
                  }`}
                >
                  Home Maintenance
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=vacuum-cleaners-floor-care"}
                  className={`nav-link ${
                    category === "vacuum-cleaners-floor-care" ? "active" : ""
                  }`}
                >
                  Vacuum Cleaners & Floor Care
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=power-tools"}
                  className={`nav-link ${
                    category === "power-tools" ? "active" : ""
                  }`}
                >
                  Power Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=home-appliance-parts-accessories"}
                  className={`nav-link ${
                    category === "home-appliance-parts-accessories"
                      ? "active"
                      : ""
                  }`}
                >
                  Home Appliance Parts & Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=others"}
                  className={`nav-link ${
                    category === "others" ? "active" : ""
                  }`}
                >
                  Others
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-10 col-12 py-4">
            <div className="row">
              <div className="d-md-none d-block">
                <label htmlFor="Categories">Categories</label>
                <select
                  name=""
                  id="Categories"
                  className="form-select mb-3"
                  onChange={handleChangeCat}
                  value={category}
                >
                  <option value="all">All</option>
                  <option value="water-sports">Water Sports</option>
                  <option value="home-improvement">Home Improvement</option>
                  <option value="laundry-household-care">
                    Laundry & Household Care
                  </option>
                  <option value="home-maintenance">Home Maintenance</option>
                  <option value="vacuum-cleaners-floor-care">
                    Vacuum Cleaners & Floor Care
                  </option>
                  <option value="power-tools">Power Tools</option>
                  <option value="home-appliance-parts-accessories">
                    Home Appliance Parts & Accessories
                  </option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div
              className="row px-2"
              style={{ maxHeight: "70vh", overflowY: "auto" }}
            >
              {/* Loop through the sections array to render product cards */}
              {sections.map((section, index) => (
                <div className="col-lg-4 col-md-6 col-12 py-2" key={index}>
                  <div className="card shadow-sm">
                    <div className="card-body d-grid justify-content-center">
                      <div>
                        <img
                          loading="lazy"
                          src={section.image}
                          alt="product images"
                          width={"250"}
                          className="img-fluid text-center mb-2"
                        />
                        <p>{section.name}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-primary fs-4 m-0">
                          ₱ {section.price.toFixed(2)}
                        </p>
                        <button
                          className="btn btn-primary btn-sm "
                          style={{ borderRadius: "10px" }}
                          onClick={() => setmodalShow(!modalShow)}
                        >
                          Add Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ShopChild modalShow={modalShow} setmodalShow={setmodalShow} />
      </div>
    </>
  );
}
