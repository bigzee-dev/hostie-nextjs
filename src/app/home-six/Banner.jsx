'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

function HomeSixBanner() {
    return (
        <>
            <div className="hero-banner-slide position-relative fix">
                <div className="hero-banner-slider-wrapper">
                    <Swiper
                        modules={[Pagination, Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="banner-slider-active"
                        slidesPerView={1}
                        speed={1800}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-btn-next',
                            prevEl: '.swiper-btn-prev',
                        }}
                        pagination={{
                            el: '.slider-dots',
                            clickable: true,
                        }}
                    >
                        <SwiperSlide>
                            <div
                                className="rts-hero-banner banner-six"
                                style={{
                                    backgroundImage: "url(assets/images/banner/banner__six.png)"
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 offset-md-2 col-xl-6 offset-xxl-0 col-md-10">
                                            <div className="banner-content">
                                                <div className="banner-top">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/banner/title-shape.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    Meet Hostie
                                                </div>
                                                <h1 className="banner-title">
                                                    A smarter way to <span>WordPress</span>
                                                </h1>
                                                <p className="description">
                                                    Rest easy knowing that our team of experts is dedicated to
                                                    delivering top-notch performance
                                                </p>
                                                <div className="banner-btn">
                                                    <Link
                                                        href="/pricing"
                                                        className="rts-btn btn__long white__bg secondary__color"
                                                    >
                                                        Plan &amp; Pricing{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </Link>
                                                    <Link
                                                        href="/contact"
                                                        className="rts-btn btn__long border__white white__color"
                                                    >
                                                        Get a Quote{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="rts-hero-banner banner-six"
                                style={{
                                    backgroundImage: "url(assets/images/banner/banner__six-2.png)"
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 offset-md-2 col-xl-6 offset-xxl-0 col-md-10">
                                            <div className="banner-content">
                                                <div className="banner-top">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/banner/title-shape.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    Meet Hostie
                                                </div>
                                                <h1 className="banner-title">
                                                    A smarter way to <span>WordPress</span>
                                                </h1>
                                                <p className="description">
                                                    Rest easy knowing that our team of experts is dedicated to
                                                    delivering top-notch performance
                                                </p>
                                                <div className="banner-btn">
                                                    <Link
                                                        href="/pricing"
                                                        className="rts-btn btn__long white__bg secondary__color"
                                                    >
                                                        Plan &amp; Pricing{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </Link>
                                                    <Link
                                                        href="/contact"
                                                        className="rts-btn btn__long border__white white__color"
                                                    >
                                                        Get a Quote{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="rts-hero-banner banner-six"
                                style={{
                                    backgroundImage: "url(assets/images/banner/banner__six-3.png)"
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 offset-md-2 col-xl-6 offset-xxl-0 col-md-10">
                                            <div className="banner-content">
                                                <div className="banner-top">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/banner/title-shape.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    Meet Hostie
                                                </div>
                                                <h1 className="banner-title">
                                                    A smarter way to <span>WordPress</span>
                                                </h1>
                                                <p className="description">
                                                    Rest easy knowing that our team of experts is dedicated to
                                                    delivering top-notch performance
                                                </p>
                                                <div className="banner-btn">
                                                    <Link
                                                        href="/pricing"
                                                        className="rts-btn btn__long white__bg secondary__color"
                                                    >
                                                        Plan &amp; Pricing{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </Link>
                                                    <Link
                                                        href="/contact"
                                                        className="rts-btn btn__long border__white white__color"
                                                    >
                                                        Get a Quote{" "}
                                                        <i className="fa-regular fa-chevron-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="slider-arrow">
                            <button className="rts-slider-btn swiper-btn-next">
                                <i className="fa-sharp fa-solid fa-chevron-left" />
                            </button>
                            <button className="rts-slider-btn swiper-btn-prev">
                                <i className="fa-sharp fa-solid fa-chevron-right" />
                            </button>
                        </div>
                        <div className="slider-dots" />
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default HomeSixBanner