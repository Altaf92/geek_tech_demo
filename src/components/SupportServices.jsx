'use client';
import React from 'react';

const SupportServices = () => {
  return (
    <section className="support-services-component py-5 mb-5">
      <div className="container text-center service-upper">
        <h2 className="fw-bold fs-2 text-white">🛠️ Full IT Support at Your Fingertips</h2>
        <h3 className="text-muted fs-6 mt-2 text-white">Reliable Help, Always</h3>
        <div className="mt-4">
          <p className="lead text-white">
            Whether it's installing software, fixing system errors, configuring printers, or removing viruses — our certified experts are available 24/7 to assist you.
          </p>
          <p className="mt-3 fs-3">
            💬 Live Chat | 📞 Chat Support | 🖥️ Remote Assistance
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a href="/contact" className="btn btn-primary rounded-pill">
              Get Support Now
            </a>
            <a href="/schedule-call" className="btn bg-white text-black rounded-pill">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default SupportServices;
