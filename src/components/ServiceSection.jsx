'use client';

import { useEffect } from 'react';
import Image from 'next/image';


const services = [
    {
        title: 'Computers Printers',
        description: 'Computers & Printers – Fast, Reliable Systems for Home & Office Productivity.',
        image: '/assets/images/home.png',
        link: '/services/wifi-network',
        modalImage: '/assets/images/home.png',
    },
    {
        title: 'Smart Home',
        description: 'Automate your home with smart devices for comfort, security, and control.',
        image: '/assets/images/home.png',
        link: '/services/smart-home',
        modalImage: '/assets/images/home.png',
    },
    {
        title: 'WiFi & Network',
        description: 'Reliable WiFi setups and network solutions for homes and offices.',
        image: '/assets/images/home.png',
        link: '/services/wifi-network',
        modalImage: '/assets/images/home.png',
    },
    {
        title: 'Around The Home',
        description: 'Smart home integrations and devices that make daily living smarter and easier.',
        image: '/assets/images/home.png',
        link: '/services/around-home',
        modalImage: '/assets/images/home.png',
    },
    {
        title: 'Home Security',
        description: 'Protect your property with advanced CCTV, sensors, and real-time surveillance.',
        image: '/assets/images/home.png',
        link: '/services/home-security',
        modalImage: '/images/home.png'
    },
    {
        title: 'Home Security',
        description: 'Protect your property with advanced CCTV, sensors, and real-time surveillance.',
        image: '/assets/images/home.png',
        link: '/services/home-security',
        modalImage: '/assets/images/home.png',
    }
];

const openEnquiryModal = (title, imgPath) => {
    if (typeof window !== 'undefined') {
        document.getElementById('serviceNameInput').value = title;
        document.getElementById('serviceNameDisplay').value = title;
        document.getElementById('serviceImg').src = imgPath;
        const modal = new bootstrap.Modal(document.getElementById('enquiryModal'));
        modal.show();
    }
};

const ServiceSection = () => {
    return (
        <>
            {/* Services */}
            <div className="container mb-5">
                <div className="row my-4">
                    <h2 className='mb-0 fs-2'>Our Popular Services</h2>
                    {/* <p className='text-dark'>Explore what we offer to simplify your digital lifestyle.</p> */}
                </div>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <Image src={service.image} className="card-img-top" alt={service.title} width={100} height={100} />
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <a href={service.link} className="btn btn-primary btn-sm">View Details</a>
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => openEnquiryModal(service.title, service.modalImage)}
                                        >
                                            Enquiry Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enquiry Modal */}
            <div className="modal fade" id="enquiryModal" tabIndex="-1" aria-labelledby="enquiryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg rounded-3">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Send Enquiry</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="enquiryForm" className="p-0">
                            <div className="modal-body">
                                <div className="row g-4">
                                    <div className="col-md-5 text-center">
                                        <img src="" className="img-fluid rounded" alt="Service Image" id="serviceImg" />

                                    </div>
                                    <div className="col-md-7">
                                        <input type="hidden" id="serviceNameInput" name="service_name" />
                                        <div className="mb-3">
                                            <input type="text" className="form-control fw-semibold" id="serviceNameDisplay" disabled />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Full Name" name="name" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="tel" className="form-control" placeholder="Contact Number" name="phone" required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" placeholder="Fill Your Requirement" rows="3" name="requirement" required></textarea>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <button type="submit" className="btn btn-success px-4">Submit</button>
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;
