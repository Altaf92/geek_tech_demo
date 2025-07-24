// components/ProductDetails.jsx
'use client';

import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-3xl mx-auto border rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-2">Product ID: {product.id}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover rounded mb-4"
      />
      <p className="text-gray-700">{product.shortDescription}</p>
    </div>
  );
};

export default ProductDetails;
