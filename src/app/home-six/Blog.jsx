'use client'
import React from 'react'
import posts from '../pages/data/Posts.json';
import PostTwo from '../posts/PostTwo';
function HomeSixBlog() {
    return (
        <>
            <section className="rts-blog-area blog-area-six pt--120 pb--120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-title-area w-450 text-center">
                            <h2
                                className="section-title "
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Latest Articles
                            </h2>
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
                    </div>
                    <div className="section-inner">
                        <div className="row gy-30">
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
            </section>

        </>
    )
}

export default HomeSixBlog