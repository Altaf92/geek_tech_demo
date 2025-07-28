'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '@/components/blogPosts';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return {
    dt: date.getDate(),
    mt: date.toLocaleString('default', { month: 'short' }),
    yr: date.getFullYear(),
  };
};

const BlogSection = () => {
  return (
    <section className="section home-blog-post">
      <div className="container-fluid">
        <div className=" text-center mb-4">
          <p className="mb-2 mt-0">Latest post</p>
          <h2 className="fs-2">Most Recent News</h2>
        </div>

        <div className="row">
          {blogPosts.map((post) => {
            const { dt, mt, yr } = formatDate(post.date);
            return (
              <div className="col-md-6 col-lg-4 col-xl-3 mb-3" key={post.id}>
                <div className="blog-item shadow-lg">
                  <div className="blog-article zoomscal-hov">
                    <div className="blog-img position-relative">
                      <Link className="featured-image zoom-scal" href={`/blog/${post.id}`}>
                        <Image
                          className="blur-up lazyload"
                          src={post.image}
                          alt={post.title}
                          width={740}
                          height={410}
                        />
                      </Link>
                      <div className="date">
                        <span className="dt">{dt}</span>
                        <span className="mt">
                          {mt}
                          <br />
                          <b>{yr}</b>
                        </span>
                      </div>
                    </div>

                    <div className="blog-content mt-5 p-2">
                      <h2 className="h3 mb-3">
                        <Link href={`/blog/${post.id}`}>
                          {post.title.length > 40 ? `${post.title.slice(0, 40)}...` : post.title}
                        </Link>
                      </h2>
                      <p className="content">
                        {post.excerpt.length > 70 ? `${post.excerpt.slice(0, 70)}...` : post.excerpt}
                      </p>
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
    </section>
  );
};

export default BlogSection;
