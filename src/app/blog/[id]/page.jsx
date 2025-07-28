import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '@/components/blogPosts';

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

export default function BlogDetailPage({ params }) {
    const { id } = params;
    const post = blogPosts.find((item) => item.id.toString() === id);

    if (!post) {
        return (
            <div className="container py-5 text-center">
                <h2>Blog not found</h2>
                <p>Sorry, the blog you're looking for does not exist.</p>
                <Link href="/blog" className="btn btn-secondary mt-3">Go Back to Blogs</Link>
            </div>
        );
    }

    const formattedDate = formatDate(post.date);

    return (
        <div id="page-content">
            {/* Breadcrumb */}
            <div className="page-header text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="page-title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="breadcrumbs">
                                <Link href="/">Home</Link>
                                <span className="main-title">
                                    <i className="icon anm anm-angle-right-l"></i>
                                    <Link href="/blog">Blog</Link>
                                    <i className="icon anm anm-angle-right-l"></i> {post.title}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container">
                <div className="row">
                    {/* Sidebar */}

                    <div className="col-lg-3 blog-sidebar sidebar sidebar-bg">
                        <div className="sidebar-tags sidebar-sticky clearfix">
                            <div className="sidebar-widget clearfix">
                                <div className="widget-title">
                                    <h2>Recent Posts</h2>
                                </div>
                                <div className="widget-content">
                                    <div className="list list-sidebar-products">
                                        {blogPosts.slice(0, 10).map((post) => (
                                            <div className="mini-list-item d-flex align-items-center w-100 clearfix" key={post.id}>
                                                <div className="mini-image">
                                                    <Link className="item-link" href={`/blog/${post.id}`}>
                                                        <Image
                                                            src={post.image}
                                                            alt={post.title}
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="ms-3 details">
                                                    <Link className="item-title" href={`/blog/${post.id}`}>{post.title}</Link>
                                                    <div className="item-meta opacity-75">
                                                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</time>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Main Content */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 main-col">
                        <div className="blog-article">
                            <div className="blog-img mb-3">
                                <Image
                                    className="rounded-0 blur-up"
                                    src={post.image}
                                    alt="New shop collection our shop"
                                    width={1200}
                                    height={700}
                                />
                            </div>
                            <div className="blog-content">
                                <h2 className="h1">{post.title}</h2>
                                <div>
                                    {post.excerpt}
                                </div>

                                <hr />
                                {/* Comment Form */}
                                <div className="formFeilds comment-form form-vertical">
                                    <form method="post" action="#">
                                        <h2 className="mb-3">Leave a Comment</h2>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="commentName" className="d-none">Name</label>
                                                    <input type="text" id="commentName" name="contact[name]" placeholder="Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="commentEmail" className="d-none">Email</label>
                                                    <input type="email" id="commentEmail" name="contact[email]" placeholder="Email" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="commentMessage" className="d-none">Message</label>
                                                    <textarea rows="5" id="commentMessage" name="contact[body]" placeholder="Write Comment" required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" className="btn btn-lg" value="Post comment" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
