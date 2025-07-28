'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="pb-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image
              src="/assets/images/about.png"
              alt="About Us"
              className="img-fluid rounded-3 shadow"
              width={600}
              height={400}
            />
          </div>

          {/* Right: Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3 fs-2">About Us</h2>
            <p className="text-muted mb-4">
              We are a leading smart solutions provider, offering cutting-edge services in home automation,
              security, audio-video integration, and networking. With a passion for innovation and customer
              satisfaction, our team helps you build smarter, safer, and more connected spaces.
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
            <a href="#contact" className="btn btn-primary px-4">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
