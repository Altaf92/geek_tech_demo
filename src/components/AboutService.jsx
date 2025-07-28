'use client';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const servicesData = [
  {
    iconClass: 'bi-shield-lock-fill',
    title: 'Quality Assurance',
    description: 'We are committed to delivering the highest quality service, backed by expert diagnostics and reliable solutions. Our skilled team ensures your devices perform at their best with precision and care.'
  },
  {
    iconClass: 'bi-emoji-smile',
    title: 'Customer Satisfaction',
    description: 'At Geek Techbuzz Care, your satisfaction is our top priority. We are dedicated to delivering exceptional service and support, ensuring a seamless and positive experience. Our commitment to excellence drives us to exceed your expectations every step of the way.',
  },
  {
    iconClass: 'bi-people-fill',
    title: 'Community Involvement',
    description: 'At Geek Techbuzz Care, we take pride in being an engaged and responsible member of the community. From supporting educational initiatives to participating in local events, we’re committed to promoting the smart and ethical use of technology through our services.',
  },
  {
    iconClass: 'bi-gear-fill',
    title: 'End-to-End Tech Solutions',
    description: 'From setup to support, Geek Techbuzz provides complete technology solutions tailored to your needs. Whether for home or business, we deliver reliable and efficient services to keep your digital world running smoothly.',
  },
];


const AboutService = () => {
  return (
    <section className="core-services py-4 bg-light">
      <div className="container">
        
        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow rounded-4 text-center it-icon p-4">
                <div className="display-3 mb-3">
                  <i className={`bi ${service.iconClass}`}></i>
                </div>
                <h4 className="card-title fw-semibold mb-2">{service.title}</h4>
                <p className="card-text mb-3">{service.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutService;
