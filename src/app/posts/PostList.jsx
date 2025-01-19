import Link from "next/link";
import React from "react";

const PostList = (props) => {
    const {
        Slug,
        Img,
        Title,
        blogCategory,
        blogAuthor,
        blogPublishedDate,
        blogExcerpt,
        AuthorName,
    } = props;

    return (
        <>
            <Link href={`/blog/${Slug || "details"}`}>
                <img
                    src={Img || "/assets/images/blog/blog-list-1.png"}
                    alt={Title || "Blog Image"}
                    layout="responsive"
                />
            </Link>
            <div className="single-post__meta">
                <div className="author__date__cat">
                    <div className="author">
                        <i className="fa-regular fa-circle-user" /> By{" "}
                        <Link href={`/author/${blogAuthor || "author"}`}>
                            {AuthorName || "Emran Hossen"}
                        </Link>
                    </div>
                    <span className="date">
                        <i className="fa-regular fa-clock" /> {blogPublishedDate || "15 Jan, 2023"}
                    </span>
                    <div className="cat">
                        <i className="fa-regular fa-tags" />{" "}
                        <Link href={`/category/${blogCategory || "web-hosting"}`}>
                            {blogCategory || "Web Hosting"}
                        </Link>
                    </div>
                </div>
                <h4 className="title fw-bold">
                    <Link href={`/blog/${Slug || "details"}`}>
                        {Title || "WooCommerce vs Shopify: Ecommerce Face-off (2023 Comparison)"}
                    </Link>
                </h4>
                <p className="excerpt">
                    {blogExcerpt || "According to a newly adopted definition of cities proposed by the European Commission..."}
                </p>
                <Link className="readmore__btn rts-btn rts-btn-primary" href={`/blog/${Slug || "details"}`}>
                    read more
                </Link>
            </div>
        </>
    );
};

export default PostList;
