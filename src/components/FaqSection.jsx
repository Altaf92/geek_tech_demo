'use client';
<<<<<<< HEAD
import React, { useState } from 'react';

const productFaqs = [
  { question: "What is the return policy for your products?", answer: "You can return any product within 7 days of delivery if it’s unused and in original packaging." },
  { question: "Do you provide warranty on your products?", answer: "Yes, most products come with a 1-year manufacturer warranty." },
  { question: "Can I track my product shipment?", answer: "Yes, once shipped, a tracking ID will be shared with you via email/SMS." },
  { question: "Are your products genuine and certified?", answer: "Absolutely. We only sell 100% genuine, brand-authorized products." },
  { question: "What payment methods are accepted?", answer: "We accept all major debit/credit cards, UPI, net banking, and COD." },
];

const serviceFaqs = [
  { question: "How can I book a service?", answer: "You can book a service directly from our website or contact our support team." },
  { question: "Can I reschedule my service appointment?", answer: "Yes, appointments can be rescheduled 24 hours before the scheduled time." },
  { question: "Do you provide emergency support?", answer: "Yes, emergency support is available for select services with additional charges." },
  { question: "Are your service providers verified?", answer: "All our service partners are background-verified and professionally trained." },
  { question: "Is there any service guarantee?", answer: "Yes, we offer up to 30 days of service guarantee depending on the type of service." },
];

const Accordion = ({ faqs, title, prefix }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="col-md-6 mb-4">
      <h4 className="mb-2">{title}</h4>
      <div className="accordion" id={`accordion-${prefix}`}>
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index} style={{ border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px', overflow: 'hidden' }}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  backgroundColor: '#f8f9fa',
                  color: openIndex === index ? '#6625B9' : '#212529',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: '1rem',
                  border: 'none',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {faq.question}
              </button>
            </h2>

            <div
              className={`accordion-collapse-custom ${openIndex === index ? 'open' : ''}`}
              style={{
                maxHeight: openIndex === index ? '300px' : '0',
                opacity: openIndex === index ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.4s ease',
              }}
            >
              <div className="accordion-body" style={{ padding: '1rem', background: '#fff', borderTop: '1px solid #ddd' }}>
                <p style={{ marginBottom: 0 }}>{faq.answer}</p>
              </div>
            </div>
          </div>
=======
import React, { useState, useRef, useEffect } from 'react';

const productFaqs = [
  { 
    question: "What types of smart devices do you install?", 
    answer: "We install a wide range of smart home devices including cameras, door locks, lighting systems, speakers, and more." 
  },
  { 
    question: "Do you provide post-installation support?", 
    answer: "Yes, we offer full customer support and troubleshooting even after installation." 
  },
  { 
    question: "Can I customize my smart home package?", 
    answer: "Absolutely! We tailor every smart solution based on your home’s layout and your preferences." 
  },
];

const AccordionItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const contentRef = useRef(null);
  const isOpen = openIndex === index;

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div 
      className="accordion-item" 
      style={{ 
        border: '1px solid #ddd', 
        borderRadius: '5px', 
        marginBottom: '10px', 
        overflow: 'hidden' 
      }}
    >
      <h2 className="accordion-header">
        <button
          onClick={toggle}
          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
          style={{
            width: '100%',
            textAlign: 'left',
            backgroundColor: '#f8f9fa',
            color: isOpen ? '#6625B9' : '#212529',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '1rem',
            border: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {faq.question}
        </button>
      </h2>

      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'height 0.4s ease, opacity 0.3s ease',
        }}
      >
        <div className="accordion-body" style={{ padding: '1rem', background: '#fff', borderTop: '1px solid #ddd' }}>
          <p style={{ marginBottom: 0 }}>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="col-md-12 mb-4">
      <div className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
>>>>>>> master
        ))}
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className='mt-2'>
<<<<<<< HEAD
      <div className="container-fluid">
        <div className="section-header mb-3">
          <h2 className="text-start mb-1">FAQ's</h2>
          <p className="text-start">Our most asked questions about products and services—answered for your ease.</p>
        </div>
        <div className="row">
          <Accordion faqs={productFaqs} title="Product FAQs" prefix="product" />
          <Accordion faqs={serviceFaqs} title="Service FAQs" prefix="service" />
=======
      <div className="container">
        <div className="section text-center mb-3">
          <h2 className="fs-2">Frequently Asked Questions</h2>
          <p>Here are answers to common questions from our customers</p>
        </div>
        <div className="row">
          <Accordion faqs={productFaqs} />
>>>>>>> master
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
