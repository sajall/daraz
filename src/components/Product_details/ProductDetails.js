// import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

import { useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
// import { BrowserRouter , Route , Routes } from 'react-router-dom';

export function ProductDetails({ products }) {
  let [quantity, setQuantity] = useState(1);

  // params for dynamic routes
  const params = useParams();
  console.log(params, "param");
  const productId = params.id;

  // finding the component having same id as param

  console.log(productId, "productId");

  const desiredProduct = products.find((prod) => prod.id == productId);

  console.log(desiredProduct, "desiredProduct");

  return (
    <>
      <section className="h-100 gradient-custom ">
        {/* <div className="container py-5 bg-danger" > */}
        {/* <div className="row d-flex justify-content-center my-4 bg-success"> */}
        <div className="col-md-12 bg-primary">
          <div className="card col-md-12 mb-4 ">
            <div className="card-body col-md-12 " id="cardBody">
              {/* Single item */}
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  {/* Image */}
                  <div
                    className="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={desiredProduct?.src}
                      className="w-100"
                      alt="Blue Jeans Jacket"
                      height="300px"
                      width="300px "
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      />
                    </a>
                  </div>
                  {/* Image */}
                </div>

                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* Data */}
                  <p>
                    <strong>{desiredProduct?.category}</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>
                  <p className="text-start ">
                    <strong>${desiredProduct.price}</strong>
                  </p>

                  <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                    <button
                      className="btn btn-primary  px-3 me-2"
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }

                        // alert('this is me')
                      }}
                    >
                      -
                      <i className="fas fa-minus" />
                    </button>
                    <div className="form-outline">
                      <input
                        id="form1"
                        //   min={0}
                        name="quantity"
                        value={quantity}
                        type="number"
                        //   className="form-control"
                        //   value={quantity}
                      />
                      {/* <p>{quantity}</p> */}

                      <label className="form-label" htmlFor="form1">
                        Quantity
                      </label>
                    </div>
                    <button
                      className="btn btn-primary px-3 ms-2"
                      onClick={() => {
                        if (quantity < 5) {
                          setQuantity(quantity + 1);
                        }
                        //    alert('this is me')
                      }}
                    >
                      +
                      <i className="fas fa-plus" />
                    </button>
                  </div>

                  {/* Data */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
}