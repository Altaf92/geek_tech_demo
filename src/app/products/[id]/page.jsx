'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel';

import { notFound } from 'next/navigation';
import ProductList from '@/components/ProductList';
import SlickInitializer from '@/components/SlickInitializer';

export default function ProductDetails({ params }) {
  const unwrappedParams = use(params); // ✅ unwrap Promise
  const [activeTab, setActiveTab] = useState("description");

  const productId = unwrappedParams.id;
  const product = ProductList.find((p) => String(p.id) === String(productId));
  if (!product) return notFound();

  // ✅ Related products by same brand
  const relatedProducts = ProductList.filter(
    (p) => String(p.id) !== String(product.id) && p.brand === product.brand
  );

  return (
    <div id="page-content">
      {/* Breadcrumb */}
      <div className="page-header text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="page-title"><h1>{product.name}</h1></div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="main-title">
                  <i className="icon anm anm-angle-right-l"></i> {product.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container-fluid product-single">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <Image src={product.image} alt={product.name} width={625} height={808} />
          </div>
          <div className="col-lg-6">
            <h2 className="fs-2 pt-2">{product.name}</h2>
            <div className="product-price my-3">
              <span className="price fs-4">${product.price}</span>
            </div>
            <p className="text-justify">{product.shortDescription}</p>
            <form className="product-form">
              <div className="qtyField d-flex">
                <button className="qtyBtn minus" type="button">-</button>
                <input type="number" name="quantity" min="1" defaultValue="1" className="product-form-input qty" />
                <button className="qtyBtn plus" type="button">+</button>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Add to Cart</button>
            </form>
            <p className="mt-3"><strong>Tags:</strong> {product.tags.join(', ')}</p>
            <p><strong>Category:</strong> {product.category.join(', ')}</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-listing section pb-0 mt-3">
          <ul className="product-tabs style2 list-unstyled d-flex-wrap d-flex-justify-start d-none d-md-flex">
            <li className={activeTab === 'description' ? 'active' : ''}>
              <a className="tablink" onClick={() => setActiveTab('description')}>Description</a>
            </li>
            <li className={activeTab === 'additionalInformation' ? 'active' : ''}>
              <a className="tablink" onClick={() => setActiveTab('additionalInformation')}>Additional Information</a>
            </li>
            <li className={activeTab === 'reviews' ? 'active' : ''}>
              <a className="tablink" onClick={() => setActiveTab('reviews')}>Reviews</a>
            </li>
          </ul>

          {/* Tab Contents */}
          <div className={`tab-content ${activeTab === 'description' ? 'active' : 'd-none'}`}>
            <div className="product-description mt-4">
              <div className="col-12 col-sm-12 col-md-8 col-lg-12 mt-3">
                <h2>Description</h2>
                <p>Our Printer Installation and Configuration service ensures that your device is set up correctly for smooth and efficient operation. From connecting to your Wi-Fi network to testing print functionality, our technicians provide complete support tailored to your environment. Whether for home or office use, we help you get the most out of your printer with proper setup, configuration, and a brief walkthrough of essential features.</p>
                <p>This service includes expert assistance with driver installation, wireless connectivity, and print queue setup. We ensure your printer communicates seamlessly with your devices and networks, so you're ready to print without hassle.</p>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'additionalInformation' ? 'active' : 'd-none'}`}>
            <div className="product-description mt-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 mb-md-0 mt-3">
                <h2>Additional Information</h2>
                <p>Our Printer Installation and Configuration service ensures that your device is set up correctly for smooth and efficient operation. From connecting to your Wi-Fi network to testing print functionality, our technicians provide complete support tailored to your environment. Whether for home or office use, we help you get the most out of your printer with proper setup, configuration, and a brief walkthrough of essential features.</p>
                <p>This service includes expert assistance with driver installation, wireless connectivity, and print queue setup. We ensure your printer communicates seamlessly with your devices and networks, so you're ready to print without hassle.</p>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'reviews' ? 'active' : 'd-none'}`}>
            <div className="row mb-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4 mt-5">


                <div className="spr-reviews">
                  <h3 className="spr-form-title">Customer Reviews</h3>
                  <div className="review-inner">
                    <div className="spr-review d-flex w-100">
                      <div className="spr-review-profile flex-shrink-0">
                        <img className="blur-up lazyload" src="/assets/images/users/user-img1.jpg" alt="" width="200" height="200" />
                      </div>
                      <div className="spr-review-content flex-grow-1">
                        <div className="d-flex justify-content-between flex-column mb-2">
                          <div className="title-review d-flex align-items-center justify-content-between">
                            <h5 className="spr-review-header-title text-transform-none mb-0">Eleanor Pena</h5>
                            <span className="product-review spr-starratings m-0"><span className="reviewLink"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i></span></span>
                          </div>
                        </div>
                        <b className="head-font">Good and High quality</b>
                        <p className="spr-review-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                      </div>
                    </div>
                    <div className="spr-review d-flex w-100">
                      <div className="spr-review-profile flex-shrink-0">
                        <img className="blur-up lazyload" src="/assets/images/users/testimonial1.jpg" alt="" width="200" height="200" />
                      </div>
                      <div className="spr-review-content flex-grow-1">
                        <div className="d-flex justify-content-between flex-column mb-2">
                          <div className="title-review d-flex align-items-center justify-content-between">
                            <h5 className="spr-review-header-title text-transform-none mb-0">Courtney Henry</h5>
                            <span className="product-review spr-starratings m-0"><span className="reviewLink"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><i className="icon anm anm-star-o"></i></span></span>
                          </div>
                        </div>
                        <b className="head-font">Feature Availability</b>
                        <p className="spr-review-body">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4 mt-5 ">
                <form method="post" action="#" className="product-review-form new-review-form">
                  <h3 className="spr-form-title">Write a Review</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <fieldset className="row spr-form-contact">
                    <div className="col-sm-6 spr-form-contact-name form-group">
                      <label className="spr-form-label" htmlFor="nickname">Name <span className="required">*</span></label>
                      <input className="spr-form-input spr-form-input-text" id="nickname" type="text" name="name" required />
                    </div>
                    <div className="col-sm-6 spr-form-contact-email form-group">
                      <label className="spr-form-label" htmlFor="email">Email <span className="required">*</span></label>
                      <input className="spr-form-input spr-form-input-email " id="email" type="email" name="email" required />
                    </div>
                    <div className="col-sm-6 spr-form-review-title form-group">
                      <label className="spr-form-label" htmlFor="review">Review Title </label>
                      <input className="spr-form-input spr-form-input-text " id="review" type="text" name="review" />
                    </div>
                    <div className="col-sm-6 spr-form-review-rating form-group">
                      <label className="spr-form-label">Rating</label>
                      <div className="product-review pt-1">
                        <div className="review-rating">
                          <a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a><a href="#;"><i className="icon anm anm-star-o"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 spr-form-review-body form-group">
                      <label className="spr-form-label" htmlFor="message">Body of Review <span className="spr-form-review-body-charactersremaining">(1500) characters remaining</span></label>
                      <div className="spr-form-input">
                        <textarea className="spr-form-input spr-form-input-textarea" id="message" name="message" rows="3"></textarea>
                      </div>
                    </div>
                  </fieldset>
                  <div className="spr-form-actions clearfix">
                    <input type="submit" className="btn btn-primary spr-button spr-button-primary" value="Submit Review" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="section product-slider pb-0">
        <div className="container">
          <div className="section-header">
            <p className="mb-1 mt-0">Explore Similar</p>
            <h2>You may also like these products</h2>
          </div>

          <div className="product-slider-4items gp10 arwOut5 grid-products">
            {relatedProducts.map((item) => (
              <div className="item" key={item.id}>
                <div className="product-box">
                  <div className="product-image">
                    <Link href={`/products/${item.id}`} className="product-img">
                      <Image src={item.image} alt={item.name} width={625} height={759} />
                    </Link>
                  </div>
                  <div className="product-details text-left">
                    <div className="product-name-price">
                      <div className="product-name">
                        <Link href={`/products/${item.id}`}>
                          {item.name.length > 50 ? `${item.name.slice(0, 50)}...` : item.name}
                        </Link>
                      </div>
                      <div className="product-price m-0"><span className="price">${item.price}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <SlickInitializer selector=".product-slider-4items" />
          </div>
        </div>
      </section>
    </div>
  );
}
