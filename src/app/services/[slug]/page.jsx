'use client';

import Link from 'next/link';
import Image from 'next/image';
import ServiceList from '@/components/ServiceList';

const slugToCategory = (slug) => {
  return slug
    .replace(/-/g, ' ')
    .replace(/\band\b/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function ServiceCategoryPage({ params }) {
  const { slug } = params;
  const categoryName = slugToCategory(slug);

  const filteredServices = ServiceList.filter(
    (service) => service.category.trim().toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div id="page-content">
      {/* Breadcrumb */}
      <div className="page-header text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="page-title">
                <h1>{categoryName}</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/">Home</Link>
                <span className="main-title">
                  <i className="icon anm anm-angle-right-l"></i> {categoryName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container-fluid">
        {filteredServices.length === 0 ? (
          <p className="text-center py-4">No services found in this category.</p>
        ) : (
          <div className="grid-products grid-view-items pro-hover3">
            <div className="row">
              {filteredServices.map((service) => (
                <div className={filteredServices.length === 2 ? 'col-6  mb-4' : 'col-lg-3 col-md-4 col-12 mb-4'} key={service.id} >
                  <div className="card h-100 shadow-lg img-card">
                    <Image
                      src={service.image}
                      alt={service.name}
                      className="card-img-top"
                      width={400}
                      height={250}
                    />
                    <div className="card-body">
                      <h2 className="card-title">{service.name}</h2>
                      <p className="card-text text-muted">${service.price}</p>

                      <div className="product-review d-flex align-items-center">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`icon anm ${i < Math.floor(service.rating) ? 'anm-star' : 'anm-star-o'
                              }`}
                          ></i>
                        ))}
                        <span className="caption ms-1">({service.review} Reviews)</span>
                      </div>

                      <Link
                        href={`/services/${service.category.replace(/\s+/g, '-').toLowerCase()}/${service.id}`}
                        className="btn btn-outline-primary btn-sm mt-3"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
