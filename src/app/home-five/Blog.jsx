'use client'
import React from 'react'
import PostThree from '../posts/PostThree';
import posts from '../pages/data/Posts.json';
import PostFour from '../posts/PostFour';
import Link from 'next/link';
function HomeFiveBlog() {
    return (
        <>
            <section className="rts-blog-area area-5 pt--120 pb--120">
                <div className="container">
                    <div className="row">
                        <div className="section-title-area text-center">
                            <h2 className="section-title">Latest New &amp; Articles</h2>
                            <Link href="/contact" className="newsletter-btn">
                                <div className="icon">
                                    <img src="assets/images/blog/plane.svg" alt="" />
                                </div>
                                <div className="title">Subscribe to the Newsletter</div>
                            </Link>
                        </div>
                    </div>
                    <div className="section-inner">
                        <div className="row gy-40 justify-content-md-center">
                            {
                                posts.map((blog, index) => {
                                    return (
                                        <div key={index} className="col-lg-5 col-md-10">
                                            <PostThree
                                                Slug={blog.slug}
                                                Img={blog.image}
                                                Title={blog.title}
                                                AuthorImg={blog.authorImg}
                                                blogCategory={blog.category}
                                                AuthorName={blog.author}
                                                AuthorTitle={blog.authortitle}
                                            />
                                        </div>
                                    );
                                }).slice(0, 1)
                            }
                            <div className="col-lg-7 col-md-10">
                                <div className="blog-right-side">
                                    {posts.map((blog, index) => {
                                        return (
                                            <div key={index} className="blog-wrapper">
                                                {
                                                    <PostFour
                                                        Slug={blog.slug}
                                                        Img={`${blog.image}`}
                                                        blogCategory={blog.category}
                                                        authorImg={`${blog.authorImg}`}
                                                        Title={blog.title}
                                                        blogAuthor={blog.author}
                                                        blogPublishedDate={blog.publishedDate}
                                                    />
                                                }

                                            </div>
                                        )
                                    }).slice(11, 14)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeFiveBlog