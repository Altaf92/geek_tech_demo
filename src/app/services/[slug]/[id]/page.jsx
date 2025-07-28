'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceList from '@/components/ServiceList';

export default function ServiceDetailPage(props) {
  const { slug, id } = props.params;
  const [activeTab, setActiveTab] = useState("description");

  const service = ServiceList.find(item => item.id === parseInt(id));

  if (!service) {
    return <p className="text-center py-10">Service not found.</p>;
  }

  const relatedServices = ServiceList.filter(
    item => item.category === service.category && item.id !== service.id
  );

  return (
    <div id="page-content">
      {/* Breadcrumb */}
      <div className="page-header text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="page-title">
                <h1>{service.name}</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="main-title">
                  <i className="icon anm anm-angle-right-l"></i>
                  <Link href="/services">Services</Link>
                  <i className="icon anm anm-angle-right-l"></i>
                  {service.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container-fluid">
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6 mb-3">
            <Image
              src={service.image}
              alt={service.name}
              width={600}
              height={400}
              className="img-fluid rounded service-img"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 mb-3">
            <h2 className='fs-2'>{service.name}</h2>

            <div className="product-review d-flex align-items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`icon anm ${i < Math.floor(service.rating) ? 'anm-star' : 'anm-star-o'}`}
                ></i>
              ))}
              <span className="caption ms-1">({service.review} Reviews)</span>
            </div>

            <p className="mt-3 fs-6 text-justify">{service.shortDescription.description}</p>

            <div className="row">
              {/* Installation */}
              <div className="col-md-6">
                <h4 className="mb-2">Installation</h4>
                <ul className="list-unstyled ps-3">
                  {service.shortDescription.installation.map((item, index) => (
                    <li key={index} className="mb-2">
                      <i className="icon anm anm-angle-right me-2 text-primary"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service */}
              <div className="col-md-6">
                <h4 className="mb-2">Service</h4>
                <ul className="list-unstyled ps-3">
                  {service.shortDescription.service.map((item, index) => (
                    <li key={index} className="mb-2">
                      <i className="icon anm anm-angle-right me-2 text-success"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h4 className="my-2">Price: ${service.price}</h4>
            <Link href="/contact" className="btn btn-primary mt-1">Book Now</Link>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="tabs-listing section  pb-0 ">
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
                <p className='text-justify'>Our Printer Installation and Configuration service ensures that your device is set up correctly for smooth and efficient operation. From connecting to your Wi-Fi network to testing print functionality, our technicians provide complete support tailored to your environment. Whether for home or office use, we help you get the most out of your printer with proper setup, configuration, and a brief walkthrough of essential features.</p>
                <p className='text-justify'>This service includes expert assistance with driver installation, wireless connectivity, and print queue setup. We ensure your printer communicates seamlessly with your devices and networks, so you're ready to print without hassle.</p>
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
                  <h3 className="spr-form-title mb-4">Customer Reviews</h3>
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
                        <p className="spr-review-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected injected humour.</p>
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
                        <p className="spr-review-body">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below  Lorem Ipsum used since the 1500s is reproduced  below  for those interested. Sections 1.10.32 and 1.10.33</p>
                      </div>
                    </div>

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
                        <p className="spr-review-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
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

        {/* Related Services */}
        <div className="container-fluid py-4">
          <h2 className="mb-4">Related Services</h2>
          {relatedServices.length > 0 ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {relatedServices.map((related) => (
                <div className="col" key={related.id}>
                  <div className="card h-100 shadow-lg img-card">
                    <Image
                      src={related.image}
                      alt={related.name}
                      className="card-img-top"
                      width={400}
                      height={250}
                    />
                    <div className="card-body">
                      <h2 className="card-title">{related.name}</h2>
                      <p className="card-text text-muted">${related.price}</p>
                      <div className="product-review d-flex align-items-center">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`icon anm ${i < Math.floor(service.rating) ? 'anm-star' : 'anm-star-o'}`}
                          ></i>
                        ))}
                        <span className="caption ms-1">({service.review} Reviews)</span>
                      </div>
                      <Link
                        href={`/services/${related.category.replace(/\s+/g, '-').toLowerCase()}/${related.id}`}
                        className="btn btn-outline-primary btn-sm mt-3"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No related services found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
