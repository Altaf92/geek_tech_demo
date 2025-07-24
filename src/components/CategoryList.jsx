// src/components/CategorySection.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


// src/data/categoryList.js
const categoryList = [
    {
        title: "Norton",
        slug: "norton",
        productCount: 18,
        image: "/assets/images/category/nortan.png",
    },
    {
        title: "McAfee",
        slug: "mcafee",
        productCount: 25,
        image: "/assets/images/category/mcafee.png",
    },
    {
        title: "Webroot",
        slug: "webroot",
        productCount: 10,
        image: "/assets/images/category/webroot.png",
    },
    {
        title: "Panda Dome",
        slug: "panda",
        productCount: 12,
        image: "/assets/images/category/panda.png",
    }
];




const CategorySection = () => {
    return (

        
        <section className="section collection-banners pb-0">
              {/* ✅ Inline CSS */}
           

            <div className="container-fluid">
                <div className="section-header  ">
                    <h2 className='text-start'>Products By Categories</h2>
                    <p className='text-start'>Our most popular products based on sales. Updated daily.</p>
                </div>

                <div className="collection-banner-grid">
                    <div className="row sp-row">
                        {categoryList.map((cat, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-3 collection-banner-item">
                                <div className="collection-item sp-col">
                                    <Link href={'/products'} className="rounded-5 zoom-scal shadow-lg zoom-scal-nopb clr-none">
                                        <div className="img">
                                            <Image
                                                className="rounded-5 blur-up lazyloaded"
                                                src={cat.image}
                                                alt={cat.title}
                                                title={cat.title}
                                                width={80}
                                                height={80}
                                            />
                                            <div className="details middle-right">
                                            <div className="inner">
                                                <h3 className="title">{cat.title}</h3>
                                                <p className="counts text-small">{cat.productCount} Products</p>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
