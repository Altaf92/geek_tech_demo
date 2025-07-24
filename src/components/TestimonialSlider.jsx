'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const testimonials = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        image: '/assets/images/users/1.jpg',
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
    {
        name: 'Jessica Doe',
        role: 'Marketing',
        image: '/assets/images/users/2.jpg',
        rating: 4,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
    {
        name: 'Rick Edward',
        role: 'Developer',
        image: '/assets/images/users/3.jpg',
        rating: 3,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
    {
        name: 'Happy Buyer',
        role: 'Designer',
        image: '/assets/images/users/4.jpg',
        rating: 2,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    }
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 991,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 767,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            
                <div className="container-fluid">
                    <div className="section-header text-center">
                        <p className="mb-2 mt-0">Happy Customer</p>
                        <h2 className='mb-2'>Loved By Our Customers</h2>
                    </div>

                    <Slider {...settings} className="testimonial-slider-4items gp15 slick-arrow-dots arwOut5">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-slide">
                                <div className="testimonial-content text-center">
                                    <div className="quote-icon mb-3 mb-lg-4">
                                        <Image
                                            className="blur-up lazyload mx-auto"
                                            src="/assets/images/icons/demo1-quote-icon.png"
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="text mb-2">
                                            <p>{testimonial.text}</p>
                                        </div>
                                        <div className="product-review my-3">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`icon anm ${i < testimonial.rating ? 'anm-star' : 'anm-star-o'}`}
                                                ></i>
                                            ))}
                                            <span className="caption hidden ms-1">{(testimonial.rating + 19)} Reviews</span>
                                        </div>
                                    </div>
                                    <div className="auhimg d-flex-justify-center text-left">
                                        <div className="image">
                                            <Image
                                                className="rounded-circle blur-up lazyload"
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                        <div className="auhtext ms-3">
                                            <h5 className="authour mb-1">{testimonial.name}</h5>
                                            <p className="text-muted">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
        </>
    );
};

export default TestimonialSlider;
