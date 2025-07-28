'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '$49/month',
    features: [
      { text: 'Basic Support', included: true },
      { text: 'Access to Limited Services', included: true },
      { text: 'No Priority Booking', included: false },
      { text: 'Email Support Only', included: true },
      { text: 'No Dedicated Manager', included: false },
      { text: 'No Weekend Support', included: false },
      { text: 'Limited Monthly Usage (5 requests)', included: true },
      { text: 'No Custom Requests', included: false },
    ],
  },
  {
    id: 2,
    name: 'Standard Plan',
    price: '$99/month',
    features: [
      { text: 'Standard Support', included: true },
      { text: 'Access to All Services', included: true },
      { text: 'Priority Booking', included: true },
      { text: 'Email & Chat Support', included: true },
      { text: 'Limited Weekend Support', included: true },
      { text: 'No Dedicated Manager', included: false },
      { text: '10 Monthly Service Requests', included: true },
      { text: 'Custom Request with Approval', included: true },
    ],
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: '$199/month',
    features: [
      { text: 'Premium Support', included: true },
      { text: 'All Services + Bonus', included: true },
      { text: 'Dedicated Manager', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Unlimited Service Requests', included: true },
      { text: 'Priority Scheduling', included: true },
      { text: 'Custom Requests Included', included: true },
      { text: 'Annual Maintenance Checkups', included: true },
    ],
  },
  {
    id: 4,
    name: 'Enterprise Plan',
    price: 'Custom Pricing',
    features: [
      { text: 'All Premium Features', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'Dedicated SLA (Service Level Agreement)', included: true },
      { text: 'On-Site Support', included: true },
      { text: 'Quarterly Review Meetings', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom Workflows and Reporting', included: true },
      { text: 'Unlimited Users and Departments', included: true },
    ],
  },
];


const PricingPlans = () => {
  return (
    <div className="w-100 px-0" id="pricing-plans">
      {/* Page Header */}
      <div className="page-header text-center w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="page-title">
                <h1>Pricing</h1>
              </div>
              <div className="breadcrumbs">
                <Link href="/" title="Back to the home page">Home</Link>
                <span className="main-title">
                  <i className="icon anm anm-angle-right-l"></i> Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-5 mb-5" >
        {plans.map((plan) => (
          <div
            className="col"
            key={plan.id}
          >

            <div className="card h-100 shadow-lg text-center border-0" style={{
              background: 'linear-gradient(201deg, rgba(99, 39, 184, 0.76) 0%, rgba(58, 231, 240, 0.51) 100%)'
            }}>
              <div className="p-3">
                <h2 className="fw-semibold text-white fs-1 mt-4 pt-4">{plan.name}</h2>
                <p className="fs-5 text-primary">{plan.price}</p>
              </div>
              <ul className="list-group list-group-flush text-start px-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`list-group-item d-flex align-items-center gap-2 border-0 ps-0 ${feature.included ? 'text-white' : 'text-danger'
                      }`} style={{ background: "transparent" }}
                  >
                    {feature.included ? (
                      <span>✔</span>
                    ) : (
                      <span>✖</span>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <div className="p-3">
                <Link href="/contact" className="btn btn-outline-primary w-100 mb-4">
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
