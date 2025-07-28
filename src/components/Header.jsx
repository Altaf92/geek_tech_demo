'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceList from '@/components/ServiceList';
import ProductList from './ProductList';

const Header = () => {
  const slugify = (text) =>
    text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const categories = [...new Set(ServiceList.map((service) => service.category.trim()))];
  const brandNames = [...new Set(ProductList.map((product) => product.brand))];
  const [search, setSearch] = useState('');

  return (
    <div>
      <header className="header d-flex align-items-center header-1 header-fixed">
        <div className="container-fluid px-md-4 mx-0">
          <div className="row">
            <div className="logo col-3 col-sm-3 col-md-3 col-lg-2 align-self-center">
              <Link className="logoImg p-1" href="/">
                <Image
                  src="/assets/images/GTB-Logo.png"
                  alt="Geet Tech"
                  title="Geet Tech"
                  width={80}
                  height={20}
                />
              </Link>
            </div>

            <div className="col-1 col-sm-1 col-md-1 col-lg-9 align-self-center d-menu-col">
              <nav className="navigation" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium right">
                  <li className="lvl1"><Link href="/">Home</Link></li>
                  <li className="lvl1"><Link href="/about-us">About Us</Link></li>
                  <li className="lvl1 parent dropdown">
                    <Link href="/products">
                      Antiviruses <i className="icon anm anm-angle-down-l"></i>
                    </Link>
                    <ul className="dropdown">
                      {brandNames.map((brand, index) => (
                        <li key={index}>
                          <Link href="/products" className="site-nav">{brand}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="lvl1 parent dropdown">
                    <Link href="#">
                      Services <i className="icon anm anm-angle-down-l"></i>
                    </Link>
                    <ul className="dropdown">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link href={`/services/${slugify(category)}`} className="site-nav">
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="lvl1"><Link href="/pricing">Pricing</Link></li>
                  <li className="lvl1 d-md-block d-lg-none d-xl-block"><Link href="why-choose-us">Why Choose Us</Link></li>
                  <li className="lvl1"><Link href="/blog">Blog</Link></li>
                  <li className="lvl1"><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-9 col-sm-9 col-md-9 col-lg-1 align-self-center icons-col text-right px-0">
              <div className="search-parent iconset me-xl-2 me-lg-0 me-3">
                <Link
                  href="#"
                  className="search-icon clr-none"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#search-drawer"
                >
                  <i className="bi bi-search fs-6 text-dark"></i>
                </Link>
              </div>

              <div className="search-drawer offcanvas offcanvas-top" tabIndex="-1" id="search-drawer">
                <div className="container">
                  <div className="search-header d-flex-center justify-content-between mb-3">
                    <h3 className="title m-0">What are you looking for?</h3>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="search-body">
                    <form className="form minisearch" id="header-search" action="#" method="get">
                      <div className="d-flex searchField">
                        <div className="input-box d-flex fl-1">
                          <input
                            type="text"
                            className="input-text border-end-0"
                            placeholder="Search for products..."
                            onChange={(e) => setSearch(e.target.value)}
                          />
                          <button type="submit" className="action search btn rounded-start-0">
                            <i className="icon anm anm-search-l"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="account-parent iconset me-xl-3 me-lg-0 me-3">
                <div className="account-link" title="Account">
                  <i className="fs-4 text-dark mt-1 bi bi-person-add"></i>
                </div>
                <div id="accountBox">
                  <div className="customer-links">
                    <ul className="m-0">
                      <li><Link href="#"><i className="icon anm anm-sign-in-al"></i>Sign In</Link></li>
                      <li><Link href="#"><i className="icon anm anm-user-al"></i>Register</Link></li>
                      <li><Link href="#"><i className="hdr-icon icon anm anm-cart-l"></i>Cart</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="iconset pe-0 menu-icon js-mobile-nav-toggle mobile-nav--open d-lg-none"
                title="Menu"
              >
                <i className="hdr-icon icon anm anm-times-l"></i>
                <i className="hdr-icon icon anm anm-bars-r"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="mobile-nav-wrapper" role="navigation">
        <div className="closemobileMenu">Close Menu <i className="icon anm anm-times-l"></i></div>
        <ul id="MobileNav" className="mobile-nav">
          <li className="lvl1"><Link href="/">Home</Link></li>
          <li className="lvl1"><Link href="#">About Us</Link></li>
          <li className="lvl1">
            <Link href="products">Antiviruses <i className="icon anm anm-angle-down-l"></i></Link>
            <ul className="lvl-2">
              <li><Link href="/products" className="site-nav">McAfee</Link></li>
              <li><Link href="/products" className="site-nav">Norton</Link></li>
              <li><Link href="/products" className="site-nav">Panda Dome</Link></li>
              <li><Link href="/products" className="site-nav">Webroot</Link></li>
            </ul>
          </li>

          <li className="lvl1">
            <Link href="">Services <i className="icon anm anm-angle-down-l"></i></Link>
            <ul className="lvl-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/services/${slugify(category)}`} className="site-nav">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="lvl1"><Link href="/pricing">Pricing</Link></li>
          <li className="lvl1"><Link href="/why-choose-us">Why Choose Us</Link></li>
          <li className="lvl1"><Link href="/blog">Blog</Link></li>
          <li className="lvl1"><Link href="/contact">Contact</Link></li>

          <li className="mobile-menu-bottom">
            <div className="mobile-links">
              <ul className="list-inline d-inline-flex flex-column w-100">
                <li><Link href="#" className="d-flex align-items-center"><i className="icon anm anm-sign-in-al"></i>Sign In</Link></li>
                <li><Link href="#" className="d-flex align-items-center"><i className="icon anm anm-user-al"></i>Register</Link></li>
                <li><Link href="#" className="d-flex align-items-center"><i className="icon anm anm-user-cil"></i>My Account</Link></li>
                <li className="title h5">Need Help?</li>
                <li><Link href="tel:401234567890" className="d-flex align-items-center"><i className="icon anm anm-phone-l"></i> (+40) 123 456 7890</Link></li>
                <li><Link href="mailto:info@example.com" className="d-flex align-items-center"><i className="icon anm anm-envelope-l"></i> info@example.com</Link></li>
              </ul>
            </div>
            <div className="mobile-follow mt-2">
              <h5 className="title">Follow Us</h5>
              <ul className="list-inline social-icons d-inline-flex mt-1">
                <li className="list-inline-item"><Link href="#" title="Facebook"><i className="icon anm anm-facebook-f"></i></Link></li>
                <li className="list-inline-item"><Link href="#" title="Twitter"><i className="icon anm anm-twitter"></i></Link></li>
                <li className="list-inline-item"><Link href="#" title="Pinterest"><i className="icon anm anm-pinterest-p"></i></Link></li>
                <li className="list-inline-item"><Link href="#" title="Linkedin"><i className="icon anm anm-linkedin-in"></i></Link></li>
                <li className="list-inline-item"><Link href="#" title="Instagram"><i className="icon anm anm-instagram"></i></Link></li>
                <li className="list-inline-item"><Link href="#" title="Youtube"><i className="icon anm anm-youtube"></i></Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
