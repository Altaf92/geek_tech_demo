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
        const map = {
            brand: [selectedBrands, setSelectedBrands],
            device: [selectedDevices, setSelectedDevices],
            year: [selectedYears, setSelectedYears],
        };
        const [current, setter] = map[type];
        setter(
            current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value]
        );
    };

    const filteredProducts = ProductList.filter(product => {
        const matchesBrand = !selectedBrands.length || selectedBrands.includes(product.brand);
        const matchesDevice = !selectedDevices.length || selectedDevices.some(tag => product.tags.includes(tag));
        const matchesYear = !selectedYears.length || selectedYears.some(tag => product.tags.includes(tag));
        return matchesBrand && matchesDevice && matchesYear;
    });

    const brands = ['McAfee', 'Norton', 'Panda Dome', 'Webroot'];
    const devices = ['1-Device', '2-Device', '3-Device', '5-Device', '10-Device', 'Unlimited-Device'];
    const years = ['1-Year', '2-Year', '3-Year'];

    const renderFilter = (title, list, type) => (
        <div className="sidebar-widget filterBox">
            <div className="widget-title">
                <h2>{title}</h2>
            </div>
            <div className="widget-content filterDD">
                <ul className="clearfix">
                    {list.map((item, index) => {
                        const id = `${type}-${index}`;
                        return (
                            <li key={item}>
                                <input type="checkbox" id={id} onChange={() => handleFilterChange(type, item)} />
                                <label htmlFor={id}><span></span>{item.replace('-', ' ')}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );

    return (
        <div id="page-content">
            {/* Page Header */}
            <div className="page-header text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="page-title"><h1>Products</h1></div>
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

            {/* Main Content */}
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar Filters */}
                    <div className="col-lg-3 sidebar sidebar-bg filterbar">
                        <div className="sidebar-tags sidebar-sticky clearfix">
                            {renderFilter('Brands', brands, 'brand')}
                            {renderFilter('Device Support', devices, 'device')}
                            {renderFilter('Support Year', years, 'year')}
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="col-lg-9 main-col">
                        <div className="grid-products grid-view-items">
                            <div className="row col-row product-options row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-2">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.slice(0, 30).map(product => (
                                        <div key={product.id} className="item col-item">
                                            <div className="product-box">
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
                                                        {[...Array(4)].map((_, i) => (
                                                            <i key={i} className="icon anm anm-star"></i>
                                                        ))}
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
