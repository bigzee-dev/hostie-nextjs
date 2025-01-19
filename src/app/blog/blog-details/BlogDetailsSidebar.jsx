import Link from 'next/link';
import React from 'react'

const BlogdetailsSidebar = () => {
    return (
        <div className="rts-sidebar">
            {/* single widget */}
            <div className="rts-single-widget search-widget">
                <form action="#" method="post">
                    <input
                        type="text"
                        name="s"
                        id="search"
                        placeholder="Enter Keyword"
                        required=""
                    />
                    <button type="submit">
                        <i className="fa-regular fa-search" />
                    </button>
                </form>
            </div>
            {/* single widget end */}
            {/* single widget start */}
            <div className="rts-single-widget category-widget">
                <h4 className="widget-title">All Services</h4>
                <ul className="list-unstyled cat__counter">
                    <li className="single-cat">
                        <Link href="#">
                            Space Planning{" "}
                            <span>
                                <i className="fa-regular fa-arrow-right" />
                            </span>
                        </Link>
                    </li>
                    <li className="single-cat">
                        <Link href="#">
                            Interior design{" "}
                            <span>
                                <i className="fa-regular fa-arrow-right" />
                            </span>
                        </Link>
                    </li>
                    <li className="single-cat">
                        <Link href="#">
                            Remodeling Services{" "}
                            <span>
                                <i className="fa-regular fa-arrow-right" />
                            </span>
                        </Link>
                    </li>
                    <li className="single-cat">
                        <Link href="#">
                            Urban Planning{" "}
                            <span>
                                <i className="fa-regular fa-arrow-right" />
                            </span>
                        </Link>
                    </li>
                    <li className="single-cat">
                        <Link href="#">
                            Kitchen Cabinet{" "}
                            <span>
                                <i className="fa-regular fa-arrow-right" />
                            </span>
                        </Link>
                    </li>
                    <li className="single-cat">
                        <Link href="#">
                            3d Visualization{" "}
                            <span>
                                <i className="fa-regular fa-arrow-right" />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* single widget end */}
            {/* single widget start */}
            <div className="rts-single-widget recentpost-widget">
                <h4 className="widget-title">Recent Post</h4>
                <div className="recent-posts">
                    <div className="single-post">
                        <div className="thumb">
                            <img
                                src="/assets/images/blog/blog-recent-1.png"
                                alt=""
                                height={85}
                                width={85}
                            />
                        </div>
                        <div className="meta">
                            <span className="published">
                                <i className="fa-regular fa-clock" /> 15 Jan, 2023
                            </span>
                            <h6 className="title">
                                <Link href="#">We would love to share a similar experience</Link>
                            </h6>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="thumb">
                            <img
                                src="/assets/images/blog/blog-recent-2.png"
                                alt=""
                                height={85}
                                width={85}
                            />
                        </div>
                        <div className="meta">
                            <span className="published">
                                <i className="fa-regular fa-clock" /> 15 Jan, 2023
                            </span>
                            <h6 className="title">
                                <Link href="#">We would love to share a similar experience</Link>
                            </h6>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="thumb">
                            <img
                                src="/assets/images/blog/blog-recent-3.png"
                                alt=""
                                height={85}
                                width={85}
                            />
                        </div>
                        <div className="meta">
                            <span className="published">
                                <i className="fa-regular fa-clock" /> 15 Jan, 2023
                            </span>
                            <h6 className="title">
                                <Link href="#">We would love to share a similar experience</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* single widget end */}
            {/* single widget start */}
            <div className="rts-single-widget gallery-widget">
                <h4 className="widget-title">Gallery Post</h4>
                <div className="gallery-posts">
                    <Link href="/blog-details" className="thumb">
                        <img
                            src="/assets/images/blog/gallery-post-1.png"
                            height={95}
                            width={95}
                            alt=""
                        />
                    </Link>
                    <Link href="/blog-details" className="thumb">
                        <img
                            src="/assets/images/blog/gallery-post-2.png"
                            height={95}
                            width={95}
                            alt=""
                        />
                    </Link>
                    <Link href="/blog-details" className="thumb">
                        <img
                            src="/assets/images/blog/gallery-post-3.png"
                            height={95}
                            width={95}
                            alt=""
                        />
                    </Link>
                    <Link href="/blog-details" className="thumb">
                        <img
                            src="/assets/images/blog/gallery-post-4.png"
                            height={95}
                            width={95}
                            alt=""
                        />
                    </Link>
                    <Link href="/blog-details" className="thumb">
                        <img
                            src="/assets/images/blog/gallery-post-5.png"
                            height={95}
                            width={95}
                            alt=""
                        />
                    </Link>
                    <Link href="/blog-details" className="thumb">
                        <img
                            src="/assets/images/blog/gallery-post-6.png"
                            height={95}
                            width={95}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
            {/* single widget end */}
            {/* single widget start */}
            <div className="rts-single-widget tags-widget">
                <h4 className="widget-title">popular tags</h4>
                <div className="popular-tags">
                    <ul className="list-unstyled tags-style">
                        <li className="tags">
                            <Link href="#">service</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Business</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Growth</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Kitchen</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Interior Design</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Solution</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Urban</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Buildings</Link>
                        </li>
                        <li className="tags">
                            <Link href="#">Architecture</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* single widget end */}
        </div>
    );
};

export default BlogdetailsSidebar;