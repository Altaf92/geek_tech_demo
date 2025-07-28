'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useEffect, useRef } from 'react';

const counters = [

  {
    iconClass: 'bi bi-award', // Years of Excellence
    count: 10,
    suffix: '+',
    title: 'Years Of Excellence',
  },
  {
    iconClass: 'bi bi-headset', // Customer Service 24/7
    count: 24,
    suffix: '/7',
    title: 'Customer Service',
  },
  {
    iconClass: 'bi bi-laptop', // Devices Covered
    count: 989,
    suffix: 'K+',
    title: 'Devices Covered',
  },
  {
    iconClass: 'bi bi-globe2', 
    count: 40,
    suffix: '+',
    title: 'Countries Globally',
  },
];


const WebsiteCounter = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            animateCount(i);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const animateCount = (index) => {
      const target = counters[index].count;
      let current = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / target), 20);

      const interval = setInterval(() => {
        current++;
        if (counterRefs.current[index]) {
          counterRefs.current[index].innerText = current;
        }
        if (current >= target) {
          clearInterval(interval);
        }
      }, stepTime);
    };

    return () => observer.disconnect();
  }, []);

  return (
    <div className="destination-section section py-5">
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 g-4 text-center">
          {counters.map((item, index) => (
            <div className="counterup-items" key={index}>
            <i className={`icon ${item.iconClass} fs-3 mb-3`}></i>
              <p className="counterup-number">
                <span
                  className="counterup"
                  ref={(el) => (counterRefs.current[index] = el)}
                >
                  0
                </span>
                <span className="ms-1 text">{item.suffix}</span>
              </p>
              <h5 className="counterup-title">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteCounter;
