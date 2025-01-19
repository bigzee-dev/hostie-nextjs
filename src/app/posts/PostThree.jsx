import Link from "next/link";

export default function PostThree(props) {
    const {
        blogClass,
        Slug,
        Img,
        Title,
        Category,
        publishedDate,
        Description,
        AuthorImg,
        AuthorName,
    } = props;

    return (
        <div className={blogClass || "blog-inner"}>
            <div className="image-area">
                <Link href={`blog/${Slug || "details"}`}>
                    <img
                        src={Img || "/assets/images/blog/blog-1.png"}
                        alt={Title || "Blog Image"}
                        layout="responsive"
                    />
                </Link>
            </div>

            <div className="content">
                <div className="blog-meta">
                    <Link className="tag" href={`/blog?category=${Category || "cloud-hosting"}`}>
                        {Category || "Cloud Hosting"}
                    </Link>
                    <span className="round"></span>
                    <span className="date">{publishedDate || "12 Sep, 2023"}</span>
                </div>

                <h4 className="blog-title">
                    <Link href={`blog/${Slug || "details"}`}>
                        {Title || "Attentive was born in 2011 for sales teams VPS"}
                    </Link>
                </h4>

                <p className="desc">
                    {Description ||
                        "It’s a super-easy-to-use tool that can help entrepreneurs, startups, makers, and small business owners in their journey."}
                </p>

                <div className="author__meta">
                    <div className="author-image">
                        <img
                            src={AuthorImg || "/assets/images/author/author__one.png"}
                            alt={AuthorName || "Author"}
                        />
                    </div>
                    <Link className="author-name" href={`/author/${AuthorName || "sack-jon"}`}>
                        {AuthorName || "Sack Jon"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
