import React from 'react'
import PostOne from '../posts/PostOne';
import posts from '../pages/data/Posts.json';
import Link from 'next/link';
function PostMain() {
    return (
        <div>
            <section className="rts-blog pt-120">
                <div className="container">
                    <div className="row justify-content-sm-center justify-content-md-start g-30">
                        {posts.map((blog, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                                    <div className="rts-blog__single">
                                        {
                                            <PostOne
                                                Slug={blog.slug}
                                                Img={blog.image}
                                                Title={blog.title}
                                                AuthorImg={blog.authorImg}
                                                blogCategory={blog.category}
                                                AuthorName={blog.author}
                                                AuthorTitle={blog.authortitle}
                                            />
                                        }
                                    </div>

                                </div>
                            )
                        }).slice(0, 9)}
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

export default PostMain