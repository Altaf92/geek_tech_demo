'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductList from './ProductList';

const HomeProductSection = () => {
  return (
    <section className="section product-slider home-product pt-md-4 mt-md-4">
      <div className="container-fluid mt-4 mt-md-5">
        <div className="section-header">
          <h2 className='text-start mb-4 '>Popular Antivirus</h2>
        </div>

        <div className="grid-products grid-view-items mt-4">
          <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
            {Object.values(ProductList).slice(0, 8).map((product) => (
              <div key={product.id} className="item col-item pt-2 mb-3">
    <section className="section product-slider home-product">
      <div className="container mt-4 mt-md-5">
        <div className="section-header mb-0">
          <h2 className='text-start mb-0'>Popular Antivirus</h2>
        </div>

        <div className="grid-products mt-2">
          <div className="row product-options ">
            {Object.values(ProductList).slice(0, 4).map((product) => (
              <div key={product.id} className="col-md-3 p-2 mb-2">
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
                        {/* Optionally show old price here */}
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
                    <div className="button-bottom-action style1">
                      {/* <div className="button-left">
                        <Link
                          href="#quickshop_modal"
                          className="btn btn-primary btn-md addtocart quick-shop-modal"
                          data-bs-toggle="modal"
                          data-bs-target="#quickshop_modal"
                        >
                          <i className="icon anm anm-bag-l me-2"></i>
                          <span className="text">Add To Cart</span>
                        </Link>
                      </div> */}
                      {/* <div className="button-right">
                        <Link
                          href="#quickview-modal"
                          className="btn-icon quickview quick-view-modal"
                          data-bs-toggle="modal"
                          data-bs-target="#quickview_modal"
                        >
                          <span
                            className="icon-wrap d-flex-justify-center h-100 w-100"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Quick View"
                          >
                            <i className="icon anm anm-search-plus-l"></i>
                          </span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-collection text-center mt-2">
            <Link href="/products" className="btn btn-secondary">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductSection;
