import { useRouter } from 'next/router';
import Link from 'next/link';
import BlogdetailsSidebar from './BlogDetailsSidebar';
import Posts from '../../data/Posts.json'; // Adjust the path based on your project structure

const BlogDetailsMain = ({ blogPost }) => {
    const router = useRouter();

    // Show a loading state if the page is not yet generated
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="rts-blog-details section__padding">
            <div className="container">
                <div className="row g-40">
                    <div className="col-lg-8">
                        <article className="blog-details">
                            <div className="blog-details__featured-image">
                                <img
                                    src={`/assets/images/blog/${blogPost.bannerImg}`}
                                    alt={blogPost.title}
                                />
                            </div>
                            <div className="blog-details__article-meta mt--40">
                                <Link href="#">
                                    <span>
                                        <i className="fa-light fa-user" />
                                    </span>
                                    {blogPost.author}
                                </Link>
                                <span>
                                    <span>
                                        <i className="fa-light fa-clock" />
                                    </span>
                                    {blogPost.publishedDate}
                                </span>
                                <Link href="#">
                                    <span>
                                        <i className="fa-sharp fa-light fa-tags" />
                                    </span>
                                    {blogPost.category}
                                </Link>
                            </div>
                            <h3 className="blog-title">{blogPost.title}</h3>
                            <p>{blogPost.content}</p>
                        </article>
                        <div className="blog-info">
                            <div className="blog-tags">
                                <div className="tags-title">Tags:</div>
                                <div className="blog-tags__list">
                                    <Link href="#">Service</Link>
                                    <Link href="#">Hosting</Link>
                                    <Link href="#">Vps</Link>
                                    <Link href="#">Reseller</Link>
                                </div>
                            </div>
                            <div className="blog-share">
                                <div className="share">Share:</div>
                                <div className="social__media--list">
                                    <Link href="#" className="media">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                    <Link href="#" className="media">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                    <Link href="#" className="media">
                                        <i className="fa-brands fa-linkedin" />
                                    </Link>
                                    <Link href="#" className="media">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <BlogdetailsSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsMain;

// Generate paths for each blog post based on slug
export async function getStaticPaths() {
    const paths = Posts.map(post => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: true, // Fallback to enable static generation for new posts
    };
}

// Fetch the blog post based on slug
export async function getStaticProps({ params }) {
    const blogPost = Posts.find(post => post.slug === params.slug);

    if (!blogPost) {
        return {
            notFound: true, // Return 404 if post not found
        };
    }

    return {
        props: {
            blogPost,
        },
    };
}
