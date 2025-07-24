'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductList from '@/components/ProductList';

const Products = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);

    const handleFilterChange = (type, value) => {
        const setters = {
            brand: [selectedBrands, setSelectedBrands],
            device: [selectedDevices, setSelectedDevices],
            year: [selectedYears, setSelectedYears],
        };
        const [currentState, setter] = setters[type];
        if (currentState.includes(value)) {
            setter(currentState.filter((item) => item !== value));
        } else {
            setter([...currentState, value]);
        }
    };

    const filteredProducts = Object.values(ProductList).filter((product) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesDevice = selectedDevices.length === 0 || selectedDevices.some((tag) => product.tags.includes(tag));
        const matchesYear = selectedYears.length === 0 || selectedYears.some((tag) => product.tags.includes(tag));
        return matchesBrand && matchesDevice && matchesYear;
    });

    return (
        <div id="page-content">
            <div className="page-header text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="page-title">
                                <h1>Products</h1>
                            </div>
                            <div className="breadcrumbs">
                                <Link href="/">Home</Link>
                                <span className="main-title">
                                    <i className="icon anm anm-angle-right-l"></i> Products
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar Filters */}
                    <div className="col-lg-3 sidebar sidebar-bg filterbar">
                        <div className="sidebar-tags sidebar-sticky clearfix">
                            {/* Brand Filter */}
                            <div className="sidebar-widget filterBox">
                                <div className="widget-title">
                                    <h2>Brands</h2>
                                </div>
                                <div className="widget-content filterDD">
                                    <ul className="clearfix">
                                        {['McAfee', 'Norton', 'Panda Dome', 'Webroot'].map((brand, index) => {
                                            const inputId = `brand-${index}`;
                                            return (
                                                <li key={brand}>
                                                    <input
                                                        type="checkbox"
                                                        id={inputId}
                                                        onChange={() => handleFilterChange('brand', brand)}
                                                    />
                                                    <label htmlFor={inputId}><span></span>{brand}</label>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>

                            {/* Device Support Filter */}
                            <div className="sidebar-widget filterBox">
                                <div className="widget-title">
                                    <h2>Device Support</h2>
                                </div>
                                <div className="widget-content filterDD">
                                    <ul className="clearfix">
                                        {['1-Device', '2-Device', '3-Device', '5-Device', '10-Device', 'Unlimited-Device'].map((device, index) => {
                                            const inputId = `device-${index}`;
                                            return (
                                                <li key={device}>
                                                    <input
                                                        type="checkbox"
                                                        id={inputId}
                                                        onChange={() => handleFilterChange('device', device)}
                                                    />
                                                    <label htmlFor={inputId}><span></span>{device.replace('-', ' ')}</label>
                                                </li>
                                            );
                                        })}

                                    </ul>
                                </div>
                            </div>

                            {/* Support Year Filter */}
                            <div className="sidebar-widget filterBox">
                                <div className="widget-title">
                                    <h2>Support Year</h2>
                                </div>
                                <div className="widget-content filterDD">
                                    <ul className="clearfix">
                                        {['1-Year', '2-Year', '3-Year'].map((year, index) => {
                                            const inputId = `year-${index}`;
                                            return (
                                                <li key={year}>
                                                    <input
                                                        type="checkbox"
                                                        id={inputId}
                                                        onChange={() => handleFilterChange('year', year)}
                                                    />
                                                    <label htmlFor={inputId}><span></span>{year.replace('-', ' ')}</label>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="col-lg-9 main-col">
                        <div className="grid-products grid-view-items pro-hover3">
                            <div className="grid-products grid-view-items">
                            <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.slice(0, 30).map((product) => (
                                        <div key={product.id} className="item col-item">
                                            <div className="product-box" >
                                                <div className="product-image">
                                                    <Link href={`/products/${product.id}`} className="product-img">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            title={product.name}
                                                            width={625}
                                                            height={759}
                                                            className="lazyloaded"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="product-details text-left">
                                                    <div className="product-name-price">
                                                        <div className="product-name">
                                                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                                                        </div>
                                                        <div className="product-price m-0">
                                                            <span className="price">${product.price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-review">
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star"></i>
                                                        <i className="icon anm anm-star-o"></i>
                                                        <span className="caption ms-1">0 Reviews</span>
                                                    </div>
                                                    <div className="button-bottom-action style1">
                                                        <div className="button-left">
                                                            <Link
                                                                href="#quickshop_modal"
                                                                className="btn btn-primary btn-md addtocart quick-shop-modal"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quickshop_modal"
                                                            >
                                                                <i className="icon anm anm-bag-l me-2"></i>
                                                                <span className="text">Add To Cart</span>
                                                            </Link>
                                                        </div>
                                                        <div className="button-right">
                                                            <Link
                                                                href="#quickview-modal"
                                                                className="btn-icon quickview quick-view-modal"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quickview_modal"
                                                            >
                                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" title="Quick View">
                                                                    <i className="icon anm anm-search-plus-l"></i>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center mt-4">
                                        <p>No products found matching selected filters.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
