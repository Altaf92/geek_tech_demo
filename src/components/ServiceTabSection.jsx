'use client';

import ServiceList from '@/components/ServiceList';
import Link from 'next/link';
import Image from 'next/image';

const ServiceTabSection = () => {
  // Get first 8 services
  const services = ServiceList.slice(0, 8);

  const slugify = (text) =>
    text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  return (
    <section className="section product-slider tab-slider-product">
      <div className="container-fluid">
        <div className="tabs-listing">
          <div className="">
            <div className="section-header mb-3">
              <h2 className="text-start mb-1">Popular Services</h2>
              <p className="text-start">Browse the wide variety of services we offer</p>
            </div>
          </div>

          <div className="tab-content" id="serviceTabsContent">
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="grid-products grid-view-items">
                <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                  {services.length > 0 ? (
                    services.map((service) => (
                      <div key={service.id} className="item col-item">
                        <div className="product-box">
                          <div className="product-image">
                            <Link href={`/services/${slugify(service.category)}`}>
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
                          <div className="product-details text-left px-2 pb-3">
                            <div className="product-name-price">
                              <div className="product-name">
                                <Link href={`/services/${slugify(service.category)}`}>
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
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center w-100 py-4">No services available.</p>
                  )}
                </div>

                <div className="view-collection text-center mt-3">
                  <Link href="/services" className="btn btn-secondary">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTabSection;
