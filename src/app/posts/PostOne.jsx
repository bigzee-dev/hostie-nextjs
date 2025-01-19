import Link from "next/link";

export default function SingleBlogGrid(props) {
  const {
    blogClass,
    Slug,
    Img,
    Title,
    Category,
    publishedDate,
    AuthorImg,
    AuthorName,
    AuthorTitle,
  } = props;

  return (
    <div className={blogClass || "rts-blog__single"}>
      <Link href={`blog/${Slug || "details"}`}>
          <img
            className="blog__thumb"
            src={Img || "/assets/images/blog/blog-11.png"}
            alt={Title || "blog post thumb"}
            layout="responsive"
          />
      </Link>

      <div className="rts-blog__single--meta">
        <div className="cat__date">
          <Link className="cat" href={`/blog?category=${Category || "web-hosting"}`}>
            {Category || "Web Hosting"}
          </Link>
          <span className="date">{publishedDate || "19 Sep, 2023"}</span>
        </div>

        <Link className="title" href={`blog/${Slug || "details"}`}>
            {Title || "Attentive was born in 2015 to help sales teams with VPS hosting"}
        </Link>

        <div className="rts-blog__single--author">
          <div className="author">
            <img
              src={AuthorImg || "/assets/images/author/author__one.png"}
              alt={AuthorName || "author"}
            />
          </div>

          <div className="author__content">
            <Link href={`/author/${AuthorName || "mack-jon"}`}>
              {AuthorName || "Mack Jon"}
            </Link>
            <span>{AuthorTitle || "Developer & Web Serenity"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
