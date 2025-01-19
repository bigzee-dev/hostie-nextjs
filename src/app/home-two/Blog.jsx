"use client";
import React from 'react';
import Link from 'next/link'; // Next.js Link component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import PostOne from '../posts/PostOne';
import posts from '../pages/data/Posts.json';
import Image from 'next/image'; // Next.js optimized Image

function HometwoBlog() {
    return (
        <>
            <section className="rts-blog section__rounded round__section bg-white section__padding">
                <div className="container">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-md-12 col-sm-10">
                            <div className="rts-section section-style-two">
                                <div className="rts-section__two">
                                    <h6 className="sub__title">our blog</h6>
                                    <h2
                                        className="title mb-0"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Latest Blog
                                    </h2>
                                </div>
                                <div className="rts-section-description">
                                    <p
                                        className="description w-560"
                                        data-sal="slide-down"
                                        data-sal-delay={200}
                                        data-sal-duration={800}
                                    >
                                        We’ll move your first website to Cloud ways from any web host for
                                        without breaking your live site hosted on the old host.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* blog start */}
                    <div className="row g-30 mb--60 justify-content-center justify-content-md-start">
                        {
                            posts.map((blog, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <PostOne
                                            Slug={blog.slug}
                                            Img={blog.image}
                                            Title={blog.title}
                                            AuthorImg={blog.authorImg}
                                            blogCategory={blog.category}
                                            AuthorName={blog.author}
                                            AuthorTitle={blog.authortitle}
                                        />
                                    </div>
                                );
                            }).slice(0, 3)
                        }
                    </div>
                    {/* light cta */}
                    <div className="row">
                        <div className="col-12">
                            <div className="cta__button">
                                <p>Looking for a Hosting solution?</p>
                                <Link href="/contact" passHref>
                                    <div className="light__cta">Contact Us</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-120">
                        <div className="col-lg-12">
                            <div className="rts-brand__wrapper">
                                <div className="rts-brand__wrapper--text">
                                    <h3 className="animated fadeIn">
                                        Hosting solutions trusted by the owners of
                                        <span>2,800,000</span> domains.
                                    </h3>
                                    <div className="rts-brand__wrapper--text-review">
                                        <div className="review">
                                            <div className="star">
                                                Excellent{" "}
                                                <Image src="/assets/images/brand/review-star.svg" alt="star" width={96} height={26} />
                                            </div>
                                        </div>
                                        <div className="review__company">
                                            954 reviews on{" "}
                                            <Image src="/assets/images/brand/trust-pilot.svg" alt="Trust Pilot" width={82} height={20} />
                                        </div>
                                    </div>
                                </div>
                                <Swiper
                                    modules={[Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="rts-brand__slider"
                                    slidesPerView={6}
                                    spaceBetween={40}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true,
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        1200: {
                                            slidesPerView: 6,
                                        },
                                        900: {
                                            slidesPerView: 5,
                                        },
                                        768: {
                                            slidesPerView: 5,
                                        },
                                        580: {
                                            slidesPerView: 4,
                                        },
                                        450: {
                                            slidesPerView: 3,
                                        },
                                        0: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/01.svg" width={82} height={24} alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/02.svg" alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/03.svg" alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/04.svg" alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/05.svg" alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/06.svg" alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <a href="#" aria-label="brand-link">
                                                <img src="assets/images/brand/07.svg" alt="" />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    {/* Additional SwiperSlides */}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HometwoBlog;
