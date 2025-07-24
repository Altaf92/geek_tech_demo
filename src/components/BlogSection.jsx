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
<<<<<<< HEAD
    <section className="section home-blog-post">
      <div className="container-fluid">
        <div className="section-header center">
          <p className="mb-2 mt-0">Latest post</p>
          <h2>Most Recent News</h2>
=======
    <section className="home-blog-post section">
      <div className="container">
        <div>
          <p className="mb-2 mt-0 text-center">Latest post</p>
          <h2 className='text-center fs-2'>Most Recent News</h2>
>>>>>>> master
        </div>

        <div className="row">
          {blogPosts.map((post) => {
            const { dt, mt, yr } = formatDate(post.date);
            return (
              <div className="col-md-3 mb-3" key={post.id}>
<<<<<<< HEAD
                <div className="blog-item">
=======
                <div className="blog-item shadow-lg">
>>>>>>> master
                  <div className="blog-article zoomscal-hov">
                    <div className="blog-img">
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
<<<<<<< HEAD
                    <div className="blog-content p-2">
=======
                    <div className="blog-content mt-3 p-2">
>>>>>>> master
                      <h2 className="h3 mb-3">
                        <Link href={`/blog/${post.id}`}>
                          {post.title.length > 40 ? `${post.title.slice(0, 40)}...` : post.title}
                        </Link>
                      </h2>
                      <p className="content">
                        {post.excerpt.length > 40 ? `${post.excerpt.slice(0, 70)}...` : post.excerpt}
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
