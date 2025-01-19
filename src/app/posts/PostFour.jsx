import Link from "next/link";

export default function PostFour(props) {
  const { Slug, Img, Title, Category, publishedDate } = props;

  return (
    <div className="blog-wrapper">
      <div className="image-area">
        <Link href={`blog/${Slug || "details"}`}>
            <img
              src={Img || "/assets/images/blog/blog-3-sm.png"}
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
            {Title || "Expanding Horizons: Announcing Availability"}
          </Link>
        </h4>
      </div>
    </div>
  );
}
