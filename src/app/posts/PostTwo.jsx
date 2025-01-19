import Link from "next/link";

export default function PostTwo(props) {
  const {
    blogClass,
    Slug,
    Img,
    Title,
    Category,
    publishedDate,
    Description,
    ShapeImg,
  } = props;

  return (
    <div className={blogClass || "blog-wrapper align-items-center"}>
      <div className="image">
        <Link href={`blog/${Slug || "details"}`}>
            <img
              src={Img || "/assets/images/blog/blog-5.png"}
              alt={Title || "Blog Image"}
              layout="responsive"
            />
        </Link>
      </div>

      <div className="content">
        <p className="blog-meta">
          <span className="category">{Category || "Cloud Hosting"}</span>
          <span className="round" />
          <span className="date">{publishedDate || "12 Oct, 2023"}</span>
        </p>

        <h3 className="blog-title">
          <Link href={`blog/${Slug || "details"}`}>
            {Title || "Introducing Edge Page Caching, Argo Smart Routing and More"}
          </Link>
        </h3>

        <p className="desc">
          {Description || "Cloudways is excited to announce the addition of 16 new data centers consisting..."}
        </p>

        <Link className="read-more-btn" href={`blog/${Slug || "details"}`}>
            Read More <i className="fa-light fa-angle-right" />
        </Link>
      </div>

      {ShapeImg && (
        <div className="blog-shape">
          <img src={ShapeImg || "/assets/images/blog/blog-shape2.svg"} alt="Blog Shape" />
        </div>
      )}
    </div>
  );
}
