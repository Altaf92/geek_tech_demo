import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top clearfix">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-contact">
                <Link className="logoImg p-1" href="/">
                  <h2 className='text-white'>Geek Techbuzz</h2>
                </Link>
                <p className="address d-flex">
                  <i className="icon anm anm-map-marker-al pt-1"></i>
                  196 Tosto Rd, Beaufort, NC 28516
                </p>
                <p className="phone d-flex align-items-center">
                  <i className="icon anm anm-phone-l"></i>
                  <Link href="tel:401234567890">+1 (984) 201-1272</Link>
                </p>
                <p className="email d-flex align-items-center">
                  <i className="icon anm anm-envelope-l"></i>
                  <Link href="mailto:support@geektechbuzz.com">support@geektechbuzz.com</Link>
                </p>
                <ul className="list-inline social-icons mt-3">
                  {['facebook-f', 'twitter', 'linkedin-in', 'instagram', 'youtube'].map((platform) => (
                    <li key={platform} className="list-inline-item">
                      <Link href="#" className="fs-5 ms-2" title={platform}>
                        <i className={`icon anm anm-${platform}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-3 footer-links d-md-flex justify-content-center">
                <div>
                  <h4 className="h4">Quick Links</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="about-us">About us</Link></li>
                    <li><Link href="why-choose-us">Why Choose Us</Link></li>
                    <li><Link href="blog">Blog</Link></li>
                    <li><Link href="faqs">FAQ's</Link></li>
                    <li><Link href="contact-us">Contact Us</Link></li>
                    <li><Link href="privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="terms-and-conditions">Terms & Conditions</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-3 footer-links d-md-flex justify-content-center">
                <div>
                  <h4 className="h4">Quick Shop</h4>
                  <ul>
                    <li><Link href="#">McAfee</Link></li>
                    <li><Link href="#">Nortan</Link></li>
                    <li><Link href="#">Panda Dome</Link></li>
                    <li><Link href="#">Webroot</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-3 footer-links d-md-flex justify-content-center">
                <div>
                  <h4 className="h4">Services</h4>
                  <ul>
                    <li><Link href="#">Remote Support</Link></li>
                    <li><Link href="#">Smart Home</Link></li>
                    <li><Link href="#">Around The Home</Link></li>
                    <li><Link href="#">WiFi & Network</Link></li>
                    <li><Link href="#">Home Security</Link></li>
                    <li><Link href="#">TV Mounting</Link></li>
                    <li><Link href="#">Mobile Devices</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom clearfix">
          <div className="container">
            <div className="d-flex-center flex-column justify-content-center">
              <div className="copytext">&copy; 2025 Geek Techbuzz. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menubar */}
      <div className="menubar-mobile d-flex align-items-center justify-content-between d-lg-none">
        <div className="menubar-shop menubar-item">
          <Link href="#"><i className="menubar-icon anm anm-th-large-l"></i><span className="menubar-label">Shop</span></Link>
        </div>
        <div className="menubar-account menubar-item">
          <Link href="#"><i className="menubar-icon icon anm anm-user-al"></i><span className="menubar-label">Account</span></Link>
        </div>
        <div className="menubar-search menubar-item">
          <Link href="#"><i className="menubar-icon anm anm-home-l"></i><span className="menubar-label">Home</span></Link>
        </div>
        <div className="menubar-wish menubar-item">
          <Link href="#">
            <span className="span-count position-relative text-center">
              <i className="menubar-icon icon anm anm-heart-l"></i>
              <span className="wishlist-count counter menubar-count">0</span>
            </span>
            <span className="menubar-label">Wishlist</span>
          </Link>
        </div>
        <div className="menubar-cart menubar-item">
          <Link href="#" className="btn-minicart" data-bs-toggle="offcanvas" data-bs-target="#minicart-drawer">
            <span className="span-count position-relative text-center">
              <i className="menubar-icon icon anm anm-cart-l"></i>
              <span className="cart-count counter menubar-count">2</span>
            </span>
            <span className="menubar-label">Cart</span>
          </Link>
        </div>
      </div>

      <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>
    </div>
  );
};

export default Footer;
