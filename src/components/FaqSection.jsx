'use client';
import React, { useState, useRef } from 'react';

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
    <div className="accordion-item" style={{ border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px', overflow: 'hidden' }}>
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
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

const FaqSection = () => {
  return (
    <section>
      <div className="container">
        <div className=" text-center mb-3">
          <h2 className="fs-2 mb-2">Frequently Asked Questions</h2>
          <p>Here are answers to common questions from our customers</p>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <Accordion faqs={productFaqs} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
