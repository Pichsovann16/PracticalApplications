import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]); // set initial state as an empty array
  useEffect(() => {
    console.log("Products component mounted....");
    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products data:", error);
      });
  }, []);

  const lstProducts = products.map((product) => (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <a href="#" className="btn btn-primary d-grid justify-content-center">
            View Details
          </a>
        </div>
      </div>
    </>
  ));
  return (
    <div className="p-5 bg-light min-vh-100 text-wrap">
      <h1 className="display-4 fw-bold mb-5 text-center text-dark">
        {/* h1: text-4xl font-bold mb-10 text-center text-gray-800 -> display-4 fw-bold mb-5 text-center text-dark */}
        Product Fetch from API
      </h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {/* Grid Container: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 -> row row-cols-X g-4 */}
        {products.map((products) => (
          <div key={products.id} className="col">
            <div
              // Card Styling: bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition-all duration-300
              // -> card shadow h-100 border-0 rounded-3 p-3 transition-shadow-hover
              className="card shadow h-100 border-0 rounded-3 p-3"
              style={{ transition: "box-shadow 0.3s ease-in-out" }}
              onMouseEnter={(e) => e.currentTarget.classList.add("shadow-lg")}
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("shadow-lg")
              }
            >
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src={products.image}
                  alt={products.title}
                  // Image: w-full h-48 object-contain mb-4 -> card-img-top object-fit-contain (custom height/width may be needed)
                  className="card-img-top"
                  style={{
                    height: "12rem",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              <h2
                className="card-title fs-5 fw-semibold text-dark mb-2 text-wrap"
                style={{ height: "3.5rem", overflow: "hidden" }}
              >
                {products.title}
              </h2>

              <p className="text-success fw-bold fs-4 mt-2">
                {/* Price: text-green-600 font-bold text-xl mt-2 -> text-success fw-bold fs-4 mt-2 */}
                ${products.price}
              </p>

              <button className="btn btn-primary w-100 mt-auto">
                {/* Button: mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition -> btn btn-primary w-100 mt-auto */}
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
