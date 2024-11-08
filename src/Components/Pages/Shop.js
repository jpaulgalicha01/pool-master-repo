import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ShopChild from "./ShopChild";
import ProductList from "../../Class/ProductList";
import { removeComma } from "../../Class/ClsVaroiusFormula";
import { ClsN2 } from "../../Class/ClsN2";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("Categories");
  const navigate = useNavigate();
  const [modalShow, setmodalShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItemID, setSelectedItemID] = useState(null);
  const [selectProductName, setSelectProductName] = useState(null);
  const [selectProductCost, setSelectProductCost] = useState(0.0);
  const[selectProductImg, setSelectProductImg] = useState("")

  useEffect(() => {
    filter(category);
  }, [category]);

  const filter = (category) => {
    if (category === "all") {
      const uniqueProducts = Array.from(
        new Set(ProductList.map((item) => item.ProductName))
      ).map((ProductName) =>
        ProductList.find((item) => item.ProductName === ProductName)
      );
      setData(uniqueProducts);
    } else {
      const filtered = ProductList.filter(
        (item) => item.ProductCategory === category
      ).filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.ProductName === item.ProductName)
      );
      setData(filtered);
    }
  };

  const handleChangeCat = (e) => {
    const selectedTargetCategories = e.target.value;
    navigate(`/shop?Categories=${selectedTargetCategories}`);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "85vh" }}>
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
                  to={"/shop?Categories=swimming-pool-pump"}
                  className={`nav-link ${
                    category === "swimming-pool-pump" ? "active" : ""
                  }`}
                >
                  Swimming Pool Pump
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=swimming-pool-chemical"}
                  className={`nav-link ${
                    category === "swimming-pool-chemical" ? "active" : ""
                  }`}
                >
                  Swimming Pool Chemicals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=swimming-pool-filter"}
                  className={`nav-link ${
                    category === "swimming-pool-filter" ? "active" : ""
                  }`}
                >
                  Swimming Pool Filter
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=swimming-pool-cleaning-tools"}
                  className={`nav-link ${
                    category === "swimming-pool-cleaning-tools" ? "active" : ""
                  }`}
                >
                  Swimming Pool Cleaning Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=swimming-pool-accessories"}
                  className={`nav-link ${
                    category === "swimming-pool-accessories" ? "active" : ""
                  }`}
                >
                  Swimming Pool Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=swimming-pool-spare-parts"}
                  className={`nav-link ${
                    category === "swimming-pool-spare-parts" ? "active" : ""
                  }`}
                >
                  Swimming Pool Spare Parts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=swimming-pool-underwater-lights"}
                  className={`nav-link ${
                    category === "swimming-pool-underwater-lights"
                      ? "active"
                      : ""
                  }`}
                >
                  Swimming Pool Underwater Lights
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/shop?Categories=other-swimming-pool-products"}
                  className={`nav-link ${
                    category === "other-swimming-pool-products" ? "active" : ""
                  }`}
                >
                  Other Swimming Pool Products
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
                  <option value="swimming-pool-pump">Swimming Pool Pump</option>
                  <option value="swimming-pool-chemical">
                    Swimming Pool Chemicals
                  </option>
                  <option value="swimming-pool-filter">
                    Swimming Pool Filter
                  </option>
                  <option value="swimming-pool-cleaning-tools">
                    Swimming Pool Cleaning Tools
                  </option>
                  <option value="swimming-pool-accessories">
                    Swimming Pool Accessories
                  </option>
                  <option value="swimming-pool-spare-parts">
                    Swimming Pool Spare Parts
                  </option>
                  <option value="swimming-pool-underwater-lights">
                    Swimming Pool Underwater Lights
                  </option>
                  <option value="other-swimming-pool-products">
                    Other Swimming Pool Products
                  </option>
                </select>
              </div>
            </div>
            <div
              className="row px-2"
              style={{ maxHeight: "85vh", overflowY: "auto" }}
            >
              {/* Loop through the sections array to render product cards */}
              {data.map((res, index) => (
                <div className="col-lg-4 col-md-6 col-12 py-2" key={index}>
                  <div className="card shadow-sm" style={{ height: "450px" }}>
                    <div className="card-body d-grid justify-content-center align-self-center">
                      <div>
                        <img
                          loading="lazy"
                          src={require(`../../Assets/images/${res.ProductImg}.webp`)}
                          alt="product images"
                          width={"300"}
                          className="img-fluid mb-2"
                        />
                        <p className="mb-0">{res.ProductName}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-primary fs-4 m-0">
                          ₱ {ClsN2(Number(removeComma(res.ProductUCost)))}
                        </p>
                        <button
                          className="btn btn-primary btn-sm "
                          style={{ borderRadius: "10px" }}
                          onClick={() => {
                            setmodalShow(!modalShow);
                            setSelectedItemID(res.ProductID);
                            setSelectProductName(res.ProductName);
                            setSelectProductImg(res.ProductImg);
                            setSelectProductCost(
                              ClsN2(Number(removeComma(res.ProductUCost)))
                            );
                          }}
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
      </div>
      {modalShow ? (
        <ShopChild
          modalShow={modalShow}
          setmodalShow={setmodalShow}
          selectedItemID={selectedItemID}
          selectProductName={selectProductName}
          selectProductCost={selectProductCost}
          selectProductImg={selectProductImg}
        />
      ) : (
        ""
      )}
    </>
  );
}
