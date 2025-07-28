import Link from 'next/link'
import React from 'react'


const whyUs = [
    {
        iconClass: 'bi-shield-fill-check',
        title: 'Cyber Threats Blockage',
        description: 'Solid cyber threat blockage before they ever harm you.'
    },
    {
        iconClass: 'bi-pc-display',
        title: 'Years Of Excellence',
        description: 'More than one decade of excellence in antivirus solutions.',
    },
    {
        iconClass: 'bi-wrench-adjustable',
        title: 'Custom Antivirus Safety',
        description: 'Fully custom antivirus safety solutions exclusively for you.',
    },
    {
        iconClass: 'bi-virus2',
        title: 'Immediate Threat Tracking',
        description: 'Live-threat track & danger detection features for businesses.',
    },
];

const page = () => {
    return (
        <div>
            <div className="page-header text-center w-100 mb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="page-title">
                                <h1>Why Choose Us</h1>
                            </div>
                            <div className="breadcrumbs">
                                <Link href="/" title="Back to the home page">Home</Link>
                                <span className="main-title">
                                    <i className="icon anm anm-angle-right-l"></i>Why Choose Us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="core-services py-5 bg-light">
                <div className="container">
                    <h2 className='fs-2 text-center'>Forget the past. With us, your digital world is always secure!</h2>
                    <div className="row justify-content-center">
                        {whyUs.map((service, index) => (
                            <div className="col-md-3 mb-4" key={index}>
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


            <section className='mt-5 mb-4'>
                <div className="container">
                    <h2 className='fs-2 text-center'>Smart and Powerful Cybersecurity for All Your Devices</h2>
                    <p className='text-center'>At Geek Tech Buzz, we provide cyber-resilient security tailored for businesses, entrepreneurs, and organizations. Our solutions safeguard your critical data against evolving cyber threats — backed by 24/7, 365-day expert support you can count on.</p>

                    <div>
                        <ul className='checkmark-info'>
                            <li><strong>Unbeatable Cyber Safety</strong></li>
                            <span className='mb-4 inline-block'>Let us strengthen your brand with industry-leading, ultra-solid, and multi-layered protection that combats threats effortlessly and within budget. </span>

                            <li><strong>Modern-day Security</strong></li>
                            <span className='mb-4 inline-block'>Our modern-day, cutting-edge, and multi-layered security software is fully designed to detect the most world-class and sophisticated cyber-attacks.</span>

                            <li><strong>Super-fast Protection</strong></li>
                            <span className='mb-4 inline-block'>We want you to have super-fast protection with instant threat detection, high performance, and rapid response, which means your brand is always safe.</span>

                            <li><strong>Digital Landscape</strong></li>
                            <span className='mb-4 inline-block'>World-class cybersecurity transforms the ever-changing digital landscape, to keep you ahead of emerging online threats without any risk of damage or data loss.</span>

                            <li><strong>Extensive Security Suite</strong></li>
                            <span className='mb-4 inline-block'>Effortless and diverse range of safety for your comprehensive digital environment, be it mobile devices or servers in just a one-stop solution.</span>

                            <li><strong>Enhanced Business Productivity </strong></li>
                            <span className='mb-4 inline-block'>Effortless productivity with well-maintained safety. Let’s boost your performance through cleaning, software upgrades, and extensive PC optimization.</span>
                        </ul>
                    </div>
                </div>

                
            </section>
        </div>
    )
}

export default page
