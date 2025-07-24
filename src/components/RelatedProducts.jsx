'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductList from './ProductList';

const RelatedProducts = ({ currentProductId, category }) => {
  const relatedProducts = ProductList.filter(
    (product) => product.id !== currentProductId && product.category === category
  );

  return (
    <section className="section product-slider pb-0">
      <div className="container">
        <div className="section-header">
          <p className="mb-1 mt-0">Explore Similar</p>
          <h2>You may also like these products</h2>
        </div>
        <div className="product-slider-4items gp10 arwOut5 grid-products row">
          {relatedProducts.map((product) => (
            <div className="item col-md-3 col-sm-6 mb-4" key={product.id}>
              <div className="product-box">
                <div className="product-image">
                  <Link href={`/products/${product.id}`} className="product-img">
                    <Image
                      className="lazyloaded"
                      src={product.image}
                      alt={product.name}
                      title={product.name}
                      width={625}
                      height={759}
                    />
                  </Link>
                </div>
                <div className="product-details text-left">
                  <div className="product-name-price">
                    <div className="product-name">
                      <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </div>
                    <div className="product-price m-0">
                      <span className="price">${product.price}</span>
                    </div>
                  </div>
                  <div className="product-review">
                    <i className="icon anm anm-star"></i>
                    <i className="icon anm anm-star"></i>
                    <i className="icon anm anm-star"></i>
                    <i className="icon anm anm-star"></i>
                    <i className="icon anm anm-star-o"></i>
                    <span className="caption ms-1">0 Reviews</span>
                  </div>
                  <div className="button-bottom-action style1 d-flex justify-content-between mt-3">
                    <Link
                      href="#quickshop_modal"
                      className="btn btn-primary btn-md addtocart quick-shop-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#quickshop_modal"
                    >
                      <i className="icon anm anm-bag-l me-2"></i>
                      <span className="text">Add To Cart</span>
                    </Link>
                    <Link
                      href="#quickview-modal"
                      className="btn-icon quickview quick-view-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <span className="icon-wrap d-flex-justify-center h-100 w-100">
                        <i className="icon anm anm-search-plus-l"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {relatedProducts.length === 0 && <p className="text-muted">No related products found.</p>}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
