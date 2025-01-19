'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Use next/image for optimized images
import posts from '../pages/data/Posts.json';
import PostTwo from '../posts/PostTwo';

function HomeThreeBlog() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <section className="rts-blog-area pt--120 section-style-radius-blog">
                <div className="container">
                    <div className="section-title-area text-center">
                        <h3
                            className="section-title"
                            data-sal="slide-down"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            Latest Articles
                        </h3>
                        <p
                            className="desc"
                            data-sal="slide-down"
                            data-sal-delay={300}
                            data-sal-duration={800}
                        >
                            First website to Cloud ways from any web host your live site hosted on
                            the old host.
                        </p>
                    </div>
                    <div
                        className="section-inner"
                        data-sal="slide-down"
                        data-sal-delay={400}
                        data-sal-duration={800}
                    >
                        <div className="row">
                            {posts.slice(9, 11).map((blog, index) => (
                                <div key={index} className="col-lg-6 col-md-6 col-sm-10">
                                    <PostTwo
                                        Slug={blog.slug}
                                        Img={`${blog.image}`}
                                        blogCategory={blog.category}
                                        authorImg={`${blog.authorImg}`}
                                        Title={blog.title}
                                        blogAuthor={blog.author}
                                        blogPublishedDate={blog.publishedDate}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>     

                <div className="blog-shape-area">
                    <Image
                        className="one"
                        src="/assets/images/blog/line.svg"
                        alt="Shape"
                        width={500}
                        height={100} // Example dimensions
                    />
                </div>

                {/* FAQ Section */}
                <div className="rts-faq pt--120">
                    <div className="container">
                        <div className="row gy-40 justify-content-md-center">
                            <div className="col-lg-5 col-md-10">
                                <div
                                    className="rts-faq__first"
                                    data-sal="slide-right"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <h3 className="title">Got questions? Well, we've got answers.</h3>
                                    <p>
                                        Find answers to frequently asked questions about website hosting
                                        services.
                                    </p>
                                    <Image
                                        src="/assets/images/faq/faq__animated2.png"
                                        alt="FAQ"
                                        width={300}
                                        height={200} // Example dimensions
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 offset-lg-1">
                                <div className="rts-faq__accordion">
                                    <div className="accordion accordion-flush" id="rts-accordion">
                                        {[...Array(4)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`accordion-item ${activeIndex === i ? 'active' : ''}`}
                                                onClick={() => handleToggle(i)}
                                            >
                                                <div className="accordion-header" id={`item-${i}`}>
                                                    <h4
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#item__${i}`}
                                                        aria-controls={`item__${i}`}
                                                    >
                                                        Why is domain name registration required?
                                                    </h4>
                                                </div>
                                                <div
                                                    id={`item__${i}`}
                                                    className={`accordion-collapse collapse ${activeIndex === i ? 'show' : ''}`}
                                                    aria-labelledby={`item-${i}`}
                                                    data-bs-parent="#rts-accordion"
                                                >
                                                    <div className="accordion-body">
                                                        Above all else, we strive to deliver outstanding customer
                                                        experiences. When you buy a domain name from hostie, we
                                                        guarantee it will be handed over.
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQ END */}
            </section>
        </>
    );
}

export default HomeThreeBlog;
