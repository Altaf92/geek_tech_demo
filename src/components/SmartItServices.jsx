'use client';
import React from 'react';
import Link from 'next/link';

const coreServicesData = [
  {
    iconClass: 'bi-shield-lock',
    title: 'Antivirus Protection',
    description: 'Shield your data with world-class antivirus like Quick Heal, Norton, Kaspersky & more.',
    cta: { label: '👉 Compare Plans', link: '/pricing' }
  },
  {
    iconClass: 'bi-printer',
    title: 'Printer Solutions',
    description: 'We help you install, repair, maintain, and optimize all leading printer efficiently and reliably',
    cta: { label: '👉 Schedule Printer Support', link: '/computers-and-printers' }
  },
  {
    iconClass: 'bi-briefcase-fill',
    title: 'Computer Support',
    description: 'Instant solutions for system errors, speed issues, software installation, and more.',
    cta: { label: '👉 Get Technical Help', link: '/contact' }
  },
  {
    iconClass: 'bi-wifi',
    title: 'Network Setup',
    description: 'Reliable home and office network installation, Wi-Fi troubleshooting, and router configuration.',
    cta: { label: '👉 Setup Your Network', link: '/contact' }
  }
];

const CoreServices = () => {
  return (
    <section className="core-services py-5 bg-light">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="fw-bold fs-2 mb-1">
            <i className="bi bi-laptop"></i> Smart IT Services Designed for You
          </h2>
          <p className="text-muted fs-6">Our Core Services</p>
        </div>
        <div className="row justify-content-center">
          {coreServicesData.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow rounded-4 text-center it-icon p-4">
                <div className="display-3 mb-3">
                  <i className={`bi ${service.iconClass}`}></i>
                </div>
                <h5 className="card-title fw-semibold mb-2">{service.title}</h5>
                <p className="card-text mb-3">{service.description}</p>
                <Link href={service.cta.link} className="btn btn_it_services pill-btn rounded-pill">
                  {service.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
