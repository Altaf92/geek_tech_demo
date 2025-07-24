'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceList from '@/components/ServiceList';

// Extract unique categories
const categories = [...new Set(ServiceList.map(service => service.category.trim()))];

const slugify = (str) =>
  str.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').trim();

const ServicePage = () => {
  return (
    <div>
      <div id="page-content">
        {/* Breadcrumb */}
        <div className="page-header text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="page-title">
                  <h1>Services</h1>
                </div>
                <div className="breadcrumbs">
                  <Link href="/">Home</Link>
                  <span className="main-title">
                    <i className="icon anm anm-angle-right-l"></i> Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 sidebar sidebar-bg filterbar">
              <div className="closeFilter d-block d-lg-none">
                <i className="icon anm anm-times-r"></i>
              </div>
              <div className="sidebar-tags sidebar-sticky clearfix">
                {/* Price Filter Placeholder */}
                <div className="sidebar-widget filterBox filter-widget">
                  <div className="widget-title">
                    <h2>Price</h2>
                  </div>
                  <form className="widget-content price-filter filterDD" action="#" method="post">
                    <div id="slider-range" className="mt-2"></div>
                    <div className="row">
                      <div className="col-6">
                        <input id="amount" type="text" className="form-control" placeholder="$0 - $999" />
                      </div>
                      <div className="col-6 text-right">
                        <button className="btn btn-sm">Filter</button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Category Filter (Services) */}
                <div className="sidebar-widget filterBox filter-widget brand-filter">
                  <div className="widget-title">
                    <h2>Service Categories</h2>
                  </div>
                  <div className="widget-content filterDD">
                    <ul className="clearfix">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <input type="checkbox" value={category} id={`cat-${index}`} />
                          <label htmlFor={`cat-${index}`}>
                            <span></span> {category}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="col-lg-9 main-col">
              <div className="grid-products grid-view-items pro-hover3">
                <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                  {ServiceList.map(service => (
                    <div key={service.id} className="item col-item">
                      <div className="product-box">
                        <div className="product-image">
                          <Link href={`/services/${slugify(service.category)}/${service.id}`}>
                            <Image
                              className="lazyloaded"
                              src={service.image}
                              alt={service.name}
                              title={service.name}
                              width={625}
                              height={759}
                            />
                          </Link>
                        </div>
                        <div className="product-details text-left">
                          <div className="product-name-price">
                            <div className="product-name">
                              <Link href={`/services/${slugify(service.category)}/${service.id}`}>
                                {service.name}
                                </Link>
                            </div>
                            <div className="product-price m-0">
                              <span className="price">${service.price}</span>
                            </div>
                          </div>
                          <div className="product-review">
                            <i className="icon anm anm-star"></i>
                            <i className="icon anm anm-star"></i>
                            <i className="icon anm anm-star"></i>
                            <i className="icon anm anm-star"></i>
                            <i className="icon anm anm-star-o"></i>
                            <span className="caption ms-1">{service.review} Reviews</span>
                          </div>
                          <div className="button-bottom-action style1">
                            <div className="button-left">
                              <Link
                                href={`/services/${slugify(service.category)}/${service.id}`}
                                className="btn btn-primary btn-md addtocart quick-shop-modal"
                                
                              >
                                <i className="icon anm anm-bag-l me-2"></i>
                                <span className="text">View More</span>
                              </Link>
                            </div>
                            <div className="button-right">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End Main Col */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
