import React from 'react'
import posts from '../pages/data/Posts.json';
import Link from 'next/link';
import PostTwo from './PostTwo';

function PostGrid() {
    return (
        <div>
            <section className="rts-blog-area blog-area-six inner pt--120">
                <div className="container">
                    <div className="section-inner">
                        <div className="row">
                            {posts.map((blog, index) => {
                                return (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-10">
                                        <div className="blog-wrapper align-items-center wrapper-z-index">
                                            {
                                                <PostTwo
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

                                    </div>
                                )
                            }).slice(17, 25)}
                        </div>
                    </div>
                    <div className="blog-pagination-area">
                        <ul>
                            <li>
                                <Link href="#">
                                    <i className="fa-regular fa-chevron-left" />
                                </Link>
                            </li>
                            <li>
                                <Link className="active" href="#">
                                    1
                                </Link>
                            </li>
                            <li>
                                <Link href="#">2</Link>
                            </li>
                            <li>
                                <Link href="#">3</Link>
                            </li>
                            <li>...</li>
                            <li>
                                <Link href="#">8</Link>
                            </li>
                            <li>
                                <Link href="#">9</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa-regular fa-chevron-right" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PostGrid