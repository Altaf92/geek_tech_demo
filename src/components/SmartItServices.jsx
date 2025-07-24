'use client';
import React from 'react';
import Link from 'next/link';

const coreServicesData = [
  {
<<<<<<< HEAD
    icon: '🔒',
=======
    iconClass: 'bi-shield-lock',
>>>>>>> master
    title: 'Antivirus Protection',
    description: 'Shield your data with world-class antivirus like Quick Heal, Norton, Kaspersky & more.',
    cta: { label: '👉 Compare Plans', link: '/pricing' }
  },
  {
<<<<<<< HEAD
    icon: '🖨️',
=======
    iconClass: 'bi-printer',
>>>>>>> master
    title: 'Printer Solutions',
    description: 'We help you install, repair, maintain, and optimize all leading printer efficiently and reliably',
    cta: { label: '👉 Schedule Printer Support', link: '/computers-and-printers' }
  },
  {
<<<<<<< HEAD
    icon: '🧰',
=======
    iconClass: 'bi-briefcase-fill',
>>>>>>> master
    title: 'Computer Support',
    description: 'Instant solutions for system errors, speed issues, software installation, and more.',
    cta: { label: '👉 Get Technical Help', link: '/contact' }
  },
  {
<<<<<<< HEAD
    icon: '🌐',
=======
    iconClass: 'bi-wifi',
>>>>>>> master
    title: 'Network Setup',
    description: 'Reliable home and office network installation, Wi-Fi troubleshooting, and router configuration.',
    cta: { label: '👉 Setup Your Network', link: '/contact' }
  }
];

<<<<<<< HEAD

const CoreServices = () => {
  return (
    <section className="core-services py-4 bg-light">
      <div className="container-fluid">
        <div className="text-center mb-3">
          <h2 className="fw-bold fs-2 mb-1">🧩 Smart IT Services Designed for You</h2>
=======
const CoreServices = () => {
  return (
    <section className="core-services py-5 bg-light">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="fw-bold fs-2 mb-1"><i class="bi bi-laptop"></i> Smart IT Services Designed for You</h2>
>>>>>>> master
          <p className="text-muted fs-6">Our Core Services</p>
        </div>
        <div className="row justify-content-center">
          {coreServicesData.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
<<<<<<< HEAD
              <div className="card h-100 shadow rounded-4 text-center p-4">
                <div className="display-3 mb-3">{service.icon}</div>
=======
              <div className="card h-100 shadow rounded-4 text-center it-icon p-4">
                <div className="display-3 mb-3">
                  <i className={`bi ${service.iconClass}`}></i>
                </div>
>>>>>>> master
                <h5 className="card-title fw-semibold mb-2">{service.title}</h5>
                <p className="card-text mb-3">{service.description}</p>
                <Link href={service.cta.link} className="btn btn-outline-primary pill-btn rounded-pill">
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

<<<<<<< HEAD
export default CoreServices;
=======
export default CoreServices;
>>>>>>> master
