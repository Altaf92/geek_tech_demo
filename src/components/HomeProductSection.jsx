'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductList from './ProductList';

const HomeProductSection = () => {
  return (
    <section className="section product-slider home-product pt-md-4 mt-md-4">
      <div className="container mt-4 mt-md-5">
        <div className="section-header mb-0">
          <h2 className="text-start antivirus_title mb-0 fs-2">Popular Antivirus</h2>
        </div>

        <div className="grid-products mt-3">
          <div className="row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
            {Object.values(ProductList).slice(0, 8).map((product) => (
              <div key={product.id} className="col p-2 mb-3">
                <div className="product-box">
                  <div className="product-image">
                    <Link href={`/products/${product.id}`} className="product-img">
                      <Image
                        src={product.image}
                        alt={product.name}
                        title={product.name}
                        width={625}
                        height={759}
                        className="lazyloaded"
                      />
                    </Link>
                  </div>

                  <div className="product-details text-left">
                    <div className="product-name-price">
                      <div className="product-name">
                        <h4 className='product_name'><Link href={`/products/${product.id}`}>{product.name}</Link></h4>
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-collection text-center mt-3">
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
