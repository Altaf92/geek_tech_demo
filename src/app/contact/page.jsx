import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const socialLinks = [
    {
        href: '#',
        iconClass: 'anm anm-facebook-f',
        title: 'Facebook',
    },
    {
        href: '#',
        iconClass: 'anm anm-twitter',
        title: 'Twitter',
    },
    {
        href: '#',
        iconClass: 'anm anm-linkedin-in',
        title: 'LinkedIn',
    },
    {
        href: '#',
        iconClass: 'anm anm-google-plus-g',
        title: 'Google Plus',
    },
    {
        href: '#',
        iconClass: 'anm anm-whatsapp',
        title: 'Whatsapp',
    },
];

const contactInfo = [
    {
        label: 'Address',
        iconClass: 'anm anm-map-marker-al',
        value: '123, The Company Name Inc, Street Road City name, State name and Zip code.',
        isLink: false,
        className: 'address',
    },
    {
        label: 'Phone',
        iconClass: 'anm anm-phone',
        value: '(+40) 123 456 7890',
        link: 'tel:401234567890',
        isLink: true,
        className: 'phone',
    },
    {
        label: 'Email',
        iconClass: 'anm anm-envelope-l',
        value: 'contact@example.com',
        link: 'mailto:contact@example.com',
        isLink: true,
        className: 'email',
    },
];



const page = () => {
    return (
        <div>
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
                                    <i className="icon anm anm-angle-right-l"></i> About Us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container contact-style1">
                <div className="contact-form-details section pt-0">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="formFeilds contact-form form-vertical mb-4 mb-md-0">
                                <div className="text-center mb-4">
                                    <h2 className='fs-3 mb-2'>Let's Get in touch!</h2>
                                    <p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally. We would be happy to answer your questions.</p>
                                </div>

                                <form action="https://www.annimexweb.com/items/hema/php/ajax_sendmail.php" name="contactus" method="post" id="contact-form" className="contact-form">
                                    <div className="form-row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="ContactFormName" name="name" className="form-control" placeholder="Name" />
                                                <span className="error_msg" id="name_error"></span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" id="ContactFormEmail" name="email" className="form-control" placeholder="Email" />
                                                <span className="error_msg" id="email_error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" id="ContactSubject" name="subject" className="form-control" placeholder="Subject" />
                                                <span className="error_msg" id="subject_error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea id="ContactFormMessage" name="message" className="form-control" rows="5" placeholder="Message"></textarea>
                                                <span className="error_msg" id="message_error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group mailsendbtn mb-0 w-100">
                                                <input className="btn btn-lg" type="submit" name="contactus" value="Send Message" />
                                                <div className="loading">
                                                    <Image className="img-fluid" src="/assets/images/icons/ajax-loader.gif" alt="loading" width="16" height="16" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="response-msg"></div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-details bg-block">
                                <h3 className="mb-3 fs-4">Contact information</h3>
                                <ul className="list-unstyled">
                                    {contactInfo.map((item, index) => (
                                        <li key={index} className={`mb-2 ${item.className}`}>
                                            <strong className="d-block mb-2">{item.label} :</strong>
                                            <p className="mb-0">
                                                <i className={`icon ${item.iconClass} me-2 d-none`}></i>
                                                {item.isLink ? (
                                                    <a href={item.link}>{item.value}</a>
                                                ) : (
                                                    item.value
                                                )}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <hr />
                                
                                <div className="follow-us">
                                    <label className="d-block mb-3"><strong>Stay Connected</strong></label>
                                    <ul className="list-inline">
                                        {socialLinks.map((item, index) => (
                                            <li key={index} className="list-inline-item fs-5 me-3">
                                                <a
                                                    href={item.href}
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title={item.title}
                                                >
                                                    <i className={`icon ${item.iconClass}`}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-maps section p-0">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="map-section ratio ratio-16x9">
                                <iframe className="rounded-5" src="https://www.google.com/maps/embed?pb=" allowfullscreen="" height="650"></iframe>
                                <div className="map-section-overlay-wrapper">
                                    <div className="map-section-overlay rounded-0">
                                        <h3>Our store</h3>
                                        <div className="content mb-3">
                                            <p className="mb-2">123, The Company Name Inc,<br />Toronto, Canada</p>
                                            <p>Mon - Fri, 10am - 9pm<br />Saturday, 11am - 9pm<br />Sunday, 11am - 5pm</p>
                                        </div>
                                        <p><a href="https://www.google.com/maps?daddr=80+Spadina+Ave,+Toronto" className="btn btn-secondary btn-sm">Get directions</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
