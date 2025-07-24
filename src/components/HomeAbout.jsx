'use client';

<<<<<<< HEAD
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const HomeAbout = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const points = [
    "Experienced cybersecurity professionals with proven expertise",
    "Customer-first approach ensuring personalized solutions",
    "Round-the-clock (24/7) technical and customer support",
    "Affordable pricing plans with complete transparency and no hidden fees",
    "Comprehensive protection against modern cyber threats and data breaches"
  ];

  const sliderImages = [
    "/assets/images/aout/aout1.webp",
    "/assets/images/aout/aout2.webp",
    "/assets/images/aout/aout3.webp",
  ];

  return (
    <section className="home-about">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Content Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="mb-3 fs-2">About Geek Techbuzz</h2>
            <h5 className="text-muted mb-4">
              Solid Cyber Defense & Complete Antivirus Safety Just In One Place
            </h5>
            <p>Welcome to Geek Techbuzz – your trusted destination for modern, reliable, and budget-friendly antivirus software.</p>

            <p className='d-none d-xl-block'>At Geek Techbuzz, we don’t just offer products — we build digital trust. Our antivirus solutions are regularly updated to combat emerging threats, ensuring your systems remain secure at all times. With user-friendly interfaces, quick installation, and dedicated customer support, our platform empowers users to  ,  We focus on delivering powerful solutions that protect your devices and confidential data from cyber threats, malware  and potential breaches. Our customer-first approach ensures that you get the best protection without compromising on quality or price take control of their cybersecurity with ease. Join thousands who rely on us to stay protected in an ever-evolving digital world.

            </p>

            <ul style={{ paddingLeft: '1rem' }}>
              {points.map((point, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem', listStyle: 'disc' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Slider Section */}
          <div className="col-md-6">
            <Slider {...sliderSettings}>
              {sliderImages.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt={`About ${index + 1}`}
                    width={600}
                    height={400}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
=======
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-5 mb-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image
              src="/assets/images/about.png" // Adjust if needed
              alt="About Us"
              className="img-fluid rounded-3 shadow"
              width={600}
              height={400}
            />
          </div>

          {/* Right: Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="text-muted mb-4">
              We are a leading smart solutions provider, offering cutting-edge services in home automation, security, audio-video integration, and networking.
              With a passion for innovation and customer satisfaction, our team helps you build smarter, safer, and more connected spaces.
            </p>

            {/* Key Features */}
            <div className="row mb-4">
              <div className="col-6">
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-check2-circle text-primary fs-4 me-2"></i>
                  <span>1000+ Happy Clients</span>
                </div>
                <div className="d-flex align-items-start">
                  <i className="bi bi-check2-circle text-primary fs-4 me-2"></i>
                  <span>Certified Technicians</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-check2-circle text-primary fs-4 me-2"></i>
                  <span>24/7 Support</span>
                </div>
                <div className="d-flex align-items-start">
                  <i className="bi bi-check2-circle text-primary fs-4 me-2"></i>
                  <span>Customized Solutions</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="#contact" className="btn btn-primary px-4">
              Get in Touch
            </Link>
          </div>

>>>>>>> master
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default HomeAbout;
=======
export default AboutSection;
>>>>>>> master
