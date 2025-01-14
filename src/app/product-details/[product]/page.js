"use client";

import React, { use } from "react";
import 'bootstrap/dist/css/bootstrap.css'


const ProductDetails = ({ params }) => {
  // Unwrap the params Promise
  const { product } = use(params);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const quantity = formData.get("quantity");
    const brand = formData.get("brand");
    const additionalInfo = formData.get("additionalInfo");

    const whatsappMessage = `
      Hello, I am interested in ${product}.
      Quantity: ${quantity}
      Brand: ${brand}
      Additional Info: ${additionalInfo}
    `;

    const whatsappLink = `https://wa.me/2349058599064?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="d-flex p-1 align-items-center justify-content-center"
      style={{
        padding: "50px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
      }}
    >
      <div
        className="container p-4 py-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "15px",
          boxShadow: "0 14px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="text-center text-dark mb-4">Product Details</h1>
        <p className="text-center text-muted mb-4">
          Fill out the form below to inquire about <strong>{product}</strong>.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              placeholder="Enter quantity"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              placeholder="Enter brand name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="additionalInfo" className="form-label">
              Additional Information
            </label>
            <textarea
              className="form-control"
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              placeholder="Provide additional details..."
            />
          </div>
          <button type="submit" className="btn btn-outline-primary mx-auto d-flex justify-content-center ">
            Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
