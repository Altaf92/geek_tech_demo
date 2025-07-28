'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

const productFaqs = [
    {
        question: "What does Geek Tech Buzz offer and what is it?",
        answer: "For the best antivirus safety, Geek Tech Buzz is your ultimate destination. To protect your devices, we are committed to offering cost-efficient, reasonably priced, and preeminent antivirus solutions from leading brands."
    },
    {
        question: "Is Geek Tech Buzz antivirus suitable for all of my devices?",
        answer: "Absolutely yes. All of your devices from Windows, iOS, macOS, to Android can use our antivirus software. One answer is your ultimate protection for all your devices."
    },
    {
        question: "What brands does Geek Tech Buzz work with?",
        answer: "We at Geek Tech Buzz partner with the world’s leading antivirus brands to bring you the industry’s best protection. Be it, McAfee, to Norton, to Microsoft, our one-stop solutions are something you can you can trust."
    },
    {
        question: "What features are there in your top-tier antivirus software?",
        answer: "Solid and outstanding antivirus security, real-time safety, malware detection, web and email protection, firewall safety, device optimization, and ultimate secure online transactions, everything designed to keep your devices secured from top-notch cyber threats."
    },
    {
        question: "How can I choose the best antivirus program for my needs?",
        answer: "We at Geek Tech Buzz make it easy to opt for the best defense. Our well-versed professionals help you choose the best antivirus solutions for your needs, diverse device usage, or any custom requirement; we have got you covered."
    },
    {
        question: "How can my antivirus be installed and activated?",
        answer: "Extremely easy, quick, and very simple to install. You can receive comprehensive signs, after making a purchase. Our solution is created to offer immediate and hassle-free safety, therefore no technical understanding is needed."
    },
    {
        question: "Do you assure customer support if I need help with installation or any other problems?",
        answer: "Of course. We at Geek Tech Buzz are committed to offering round-the-clock customer permission to assure you are never isolated in safeguarding your devices. Our expert support team is always ready to help."
    },
    {
        question: "How do I understand if my antivirus software is working perfectly?",
        answer: "You will receive real-time warnings if any threats are seen, and you can run a scan at any time to check for safety problems. Not only that the software will occasionally notify you of succeeding scans."
    },
    {
        question: "Can I get from one antivirus provider to Geek Tech Buzz?",
        answer: "It’s straightforward to switch. We assure easy-to-follow method that ensures your device stays safe at all times. Our well-versed can help you with completing prior membership (if needed) and quickly get you through one of the top antivirus software solutions."
    },
    {
        question: "How does the firewall feature in antivirus software save me?",
        answer: "A firewall monitors the traffic coming into and escaping your network, stopping illegal access to your devices. It works as a barricade between your computer and cybercriminals, ensuring your data remains safe."
    },

    {
        question: "How do I safeguard my financial data with antivirus software?",
        answer: "Antivirus software often possesses fascinating features such as secure browsing, anti-phishing, and scam detection to safeguard your financial data when you shop online and use banking services."
    },
    {
        question: "Is there customer exceptional support available if I encounter problems?",
        answer: "Of course. We offer round-the-clock customer support via phone, email, or live chat to assist with installation, troubleshooting, and any queries you have about our antivirus software."
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
            style={{ border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px', overflow: 'hidden' }}
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

const Page = () => {
    // Split the FAQs array into two halves
    const half = Math.ceil(productFaqs.length / 2);
    const faqsLeft = productFaqs.slice(0, half);
    const faqsRight = productFaqs.slice(half);

    return (
        <div>
            {/* breadcrumb section */}
            <div className="page-header text-center w-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="page-title">
                                <h1>FAQ's</h1>
                            </div>
                            <div className="breadcrumbs">
                                <Link href="/" title="Back to the home page">Home</Link>
                                <span className="main-title">
                                    <i className="icon anm anm-angle-right-l"></i>FAQ's
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* accordion section */}
            <section>
                <div className="container">
                    <div className="text-center mb-3">
                        <h2 className="fs-3 mb-2">Frequently Asked Questions</h2>
                        <p>Here are answers to common questions from our customers</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <Accordion faqs={faqsLeft} />
                        </div>
                        <div className="col-md-6 mb-4">
                            <Accordion faqs={faqsRight} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Page;
