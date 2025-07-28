'use client';

import { useEffect, useRef } from 'react';

const sliderData = [
  {
    id: 1,
    title: 'Secure Your Smart Home',
    subtitle: 'Install the latest smart devices to automate and protect your home with ease.',
    image: '/assets/images/slider/slider-2.png',
    ctaButtons: [{ label: 'Learn More', link: '/tech-support' }]
  },
  {
    id: 2,
    title: 'Reliable Wi-Fi Solutions',
    subtitle: 'Get seamless connectivity for your home and office with our expert setup.',
    image: '/assets/images/slider/slider-1.png',
    ctaButtons: [{ label: 'Explore Plans', link: '/contact' }]
  },
  {
    id: 3,
    title: 'Protect What Matters',
    subtitle: 'Top-notch home security and surveillance solutions to give you peace of mind.',
    image: '/assets/images/slider/slider-3.png',
    ctaButtons: [{ label: 'Get Secured', link: '/contact' }]
  }
];

const ImageSlider = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.bootstrap && carouselRef.current) {
      new window.bootstrap.Carousel(carouselRef.current, {
        interval: 5000,
        ride: 'carousel'
      });
    }
  }, []);

  return (
    <section className="slideshow slideshow-wrapper position-relative">
      <div className="container-fluid p-0">
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
          <div className="carousel-inner">
            {sliderData.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div
                  className="d-flex align-items-center min-vh-100 bg-cover bg-center"
                  style={{
                    background: `url(${slide.image}) center/cover no-repeat`
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-white">
                        <h1 className="display-4 fw-bold mb-3 text-light slider-title">{slide.title}</h1>
                        <p className="lead mb-4">{slide.subtitle}</p>
                        <div className="d-flex gap-2 flex-wrap">
                          {slide.ctaButtons.map((btn, i) => (
                            <a key={i} className="btn btn-primary px-4 py-2" href={btn.link}>
                              {btn.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Optional Service Section */}
        <section className="section delivery py-4 shadow-lg d-none d-md-block slider-lower">
          <div className="container-fluid">
            <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">
              <div className="service-wrap col-item">
                <div className="service-icon mb-3"><i className="icon anm anm-phone-call-l"></i></div>
                <div className="service-content">
                  <h6 className="title title_support mb-2">Call us any time</h6>
                  <span>Contact us 24/7 hours a day</span>
                </div>
              </div>
              <div className="service-wrap col-item">
                <div className="service-icon mb-3"><i className="icon anm anm-truck-l"></i></div>
                <div className="service-content">
                  <h6 className="title mb-2 title_support">Pickup At Any Store</h6>
                  <span>Free shipping on orders over $65</span>
                </div>
              </div>
              <div className="service-wrap col-item">
                <div className="service-icon mb-3"><i className="icon anm anm-credit-card-l"></i></div>
                <div className="service-content">
                  <h6 className="title mb-2 title_support">Secured Payment</h6>
                  <span>We accept all major credit cards</span>
                </div>
              </div>
              <div className="service-wrap col-item">
                <div className="service-icon mb-3"><i className="icon anm anm-redo-l"></i></div>
                <div className="service-content">
                  <h6 className="title mb-2 title_support">Free Returns</h6>
                  <span>30-days free return policy</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ImageSlider;
