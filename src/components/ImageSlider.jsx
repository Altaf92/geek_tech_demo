'use client';
<<<<<<< HEAD

import React from 'react';
import Slider from 'react-slick';
=======
import { useEffect, useRef } from 'react';
>>>>>>> master

const sliderData = [
  {
    id: 1,
<<<<<<< HEAD
    title: '🔐 Secure. Support. Simplify.',
    subtitle: 'All-in-one solution for Antivirus Protection, Printer Setup, and Instant Tech Support.',
    image: '/assets/images/slider/slider.png',
    ctaButtons: [
      { label: '👨‍💻 Get Tech Support', link: '/tech-support' },
    ]
  },
  {
    id: 2,
    title: '🛡️ Your Digital Shield Begins Here',
    subtitle: 'Trusted by 10,000+ users | 24/7 Support | Secure Setup',
    image: '/assets/images/slider/slider.png',
    ctaButtons: [
      { label: '📞 Contact Experts', link: '/contact' },
    ]
  }
];

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false
};

const ImageSlider = () => {
  return (
    <section className="slideshow slideshow-wrapper position-relative mb-md-5">
      <div className="container-fluid p-0">
        <Slider {...sliderSettings} className="home-slideshow slideshow-medium slick-arrow-dots rounded-pill-dots">
          {sliderData.map((slide) => (
            <div className="slide" key={slide.id}>
              <div
                className="slideshow-wrap rounded-5 relative w-full h-[800px] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slideshow-content slideshow-overlay middle-left w-full h-full flex items-center px-4 md:px-16 bg-black/0 rounded-5">
                  <div className="slideshow-content-in text-white max-w-xl">
                    <div className="wrap-caption animation style2">
                      <h2 className="fs-2 text-white text-transform-none text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                      <p className="ss-sub-title text-white xs-hide ps-2 mb-6">{slide.subtitle}</p>
                      <div className="ss-btnWrap d-flex flex-wrap gap-2">
                        {slide.ctaButtons.map((btn, index) => (
                          <a
                            key={index}
                            className="btn btn-primary rounded-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white text-lg"
                            href={btn.link}
                          >
                            {btn.label}
                          </a>
                        ))}
=======
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
    <section className="slideshow slideshow-wrapper position-relative mb-md-5">
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
                        <h2 className="display-4 text-white fw-bold mb-3">{slide.title}</h2>
                        <p className="lead mb-4">{slide.subtitle}</p>
                        <div className="d-flex gap-2 flex-wrap">
                          {slide.ctaButtons.map((btn, i) => (
                            <a key={i} className="btn btn-primary px-4 py-2" href={btn.link}>
                              {btn.label}
                            </a>
                          ))}
                        </div>
>>>>>>> master
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            </div>
          ))}
        </Slider>
                <section className="section service-section delivery py-3 shadow-lg  d-none d-md-block" >
          <div className="container-fluid">
            <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">

              <div className="service-wrap col-item">
                <div className="service-icon mb-3">
                  <i className="icon anm anm-phone-call-l"></i>
                </div>
                <div className="service-content">
                  <h3 className="title mb-2">Call us any time</h3>
                  <span>Contact us 24/7 hours a day</span>
                </div>
              </div>
              <div className="service-wrap col-item">
                <div className="service-icon mb-3">
                  <i className="icon anm anm-truck-l"></i>
                </div>
                <div className="service-content">
                  <h3 className="title mb-2">Pickup At Any Store</h3>
                  <span>Free shipping on orders over $65</span>
                </div>
              </div>
              <div className="service-wrap col-item">
                <div className="service-icon mb-3">
                  <i className="icon anm anm-credit-card-l"></i>
                </div>
                <div className="service-content">
                  <h3 className="title mb-2">Secured Payment</h3>
                  <span>We accept all major credit cards</span>
                </div>
              </div>
              <div className="service-wrap col-item">
                <div className="service-icon mb-3">
                  <i className="icon anm anm-redo-l"></i>
                </div>
                <div className="service-content">
                  <h3 className="title mb-2">Free Returns</h3>
                  <span>30-days free return policy</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
=======
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Optional service section below */}

      </div>
      <section className="section service-section delivery py-4 shadow-lg  d-none d-md-block" >
        <div className="container-fluid">
          <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">

            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-phone-call-l"></i>
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Call us any time</h3>
                <span>Contact us 24/7 hours a day</span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-truck-l"></i>
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Pickup At Any Store</h3>
                <span>Free shipping on orders over $65</span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-credit-card-l"></i>
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Secured Payment</h3>
                <span>We accept all major credit cards</span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-redo-l"></i>
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Free Returns</h3>
                <span>30-days free return policy</span>
              </div>
            </div>

          </div>
        </div>
      </section>
>>>>>>> master
    </section>
  );
};

export default ImageSlider;
<<<<<<< HEAD








=======
>>>>>>> master
