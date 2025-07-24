'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '@/components/blogPosts';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const dt = date.getDate();
  const mt = date.toLocaleString('default', { month: 'short' });
  const yr = date.getFullYear();
  return { dt, mt, yr };
};


const BlogSection = () => {
  return (
    <section>
      <div id="page-content">
        {/* Page Header */}
        <div className="page-header text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="page-title">
                  <h1>Blogs</h1>
                </div>
                <div className="breadcrumbs">
                  <Link href="/" title="Back to the home page">Home</Link>
                  <span className="main-title">
                    <i className="icon anm anm-angle-right-l"></i> Blogs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="container-fluid">
          <div className="row">
            {blogPosts.map((post) => {
              const { dt, mt, yr } = formatDate(post.date);
              return (
                <div className="col-md-3 mb-3 " key={post.id}>
                  <div className="blog-item shadow-lg">
                    <div className="blog-article zoomscal-hov">
                      <div className="blog-img position-relative">
                        <Link className="featured-image zoom-scal d-block" href={`/blog/${post.id}`}>
                          <Image
                            className="blur-up lazyload w-100"
                            src={post.image}
                            alt={post.title}
                            width={740}
                            height={410}
                          />
                        </Link>
                        <div className="date position-absolute top-0 start-0 bg-white p-2 text-center">
                          <span className="dt d-block">{dt}</span>
                          <span className="mt">
                            {mt}<br /><b>{yr}</b>
                          </span>
                        </div>
                      </div>
                      <div className="blog-content p-3 mt-3">
                        <h3 className="h5 mb-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="content mb-2">{post.excerpt}...</p>
                        <Link href={`/blog/${post.id}`} className="btn btn-secondary btn-sm">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
