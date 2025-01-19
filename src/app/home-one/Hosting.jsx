"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

function HomeHosting() {
    return (
        <>
            <div className="rts-hosting-type">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-hosting-type__section">
                                <h3 className="title" data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                    Multiple Hosting Options
                                </h3>
                                <p data-sal="slide-down" data-sal-delay={400} data-sal-duration={800}>
                                    No matter your hosting requirements, our platform will fit your
                                    needs.
                                </p>
                                <div className="rts-slider__btn hosting-slider">
                                    <div className="slide__btn rts-prev">
                                        <i className="fa-light fa-arrow-left" />
                                    </div>
                                    <div className="slide__btn rts-next">
                                        <i className="fa-light fa-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* hosting option */}
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                className="rts-hosting-type__slider"
                                speed={1500}
                                slidesPerView={6}
                                spaceBetween={30}
                                loop={true}
                                navigation={{
                                    nextEl: '.rts-next',
                                    prevEl: '.rts-prev',
                                }}
                                breakpoints={{
                                    1200: { slidesPerView: 4 },
                                    900: { slidesPerView: 3 },
                                    768: { slidesPerView: 2 },
                                    580: { slidesPerView: 2 },
                                    450: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="rts-hosting-type__single">
                                        <div className="hosting-icon">
                                            <Image
                                                src="/assets/images/hosting/03.svg"
                                                width={60}
                                                height={60}
                                                alt="WordPress Hosting"
                                                priority  // Prioritize loading this image
                                            />
                                        </div>
                                        <Link href="/wordpress-hosting" className="title">
                                            WordPress Hosting
                                        </Link>
                                        <p className="excerpt">
                                            Manage your WordPress sites easily and more freedom.
                                        </p>
                                        <h6 className="price__start">Starting from $2.95/month</h6>
                                        <Link href="/wordpress-hosting" className="primary__btn border__btn">
                                            See Plan <i className="fa-regular fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-hosting-type__single">
                                        <div className="hosting-icon">
                                            <Image
                                                src="/assets/images/hosting/04.svg"
                                                width={60}
                                                height={60}
                                                alt="Web Hosting"
                                                priority  // Prioritize loading this image
                                            />
                                        </div>
                                        <Link href="/wordpress-hosting" className="title">
                                            Web Hosting
                                        </Link>
                                        <p className="excerpt">
                                            Manage your WordPress sites easily and more freedom.
                                        </p>
                                        <h6 className="price__start">Starting from $2.95/month</h6>
                                        <Link href="/wordpress-hosting" className="primary__btn border__btn">
                                            See Plan <i className="fa-regular fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-hosting-type__single">
                                        <div className="hosting-icon">
                                            <Image
                                                src="/assets/images/hosting/02.svg"
                                                width={60}
                                                height={60}
                                                alt="VPS Hosting"
                                                priority  // Prioritize loading this image
                                            />
                                        </div>
                                        <Link href="/vps-hosting" className="title">
                                            VPS Hosting
                                        </Link>
                                        <p className="excerpt">
                                            Manage your WordPress sites easily and more freedom.
                                        </p>
                                        <h6 className="price__start">Starting from $2.95/month</h6>
                                        <Link href="/vps-hosting" className="primary__btn border__btn">
                                            See Plan <i className="fa-regular fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-hosting-type__single">
                                        <div className="hosting-icon">
                                            <Image
                                                src="/assets/images/hosting/01.svg"
                                                width={60}
                                                height={60}
                                                alt="Shared Hosting"
                                                priority  // Prioritize loading this image
                                            />
                                        </div>
                                        <Link href="/shared-hosting" className="title">
                                            Shared Hosting
                                        </Link>
                                        <p className="excerpt">
                                            Manage your WordPress sites easily and more freedom.
                                        </p>
                                        <h6 className="price__start">Starting from $2.95/month</h6>
                                        <Link href="/shared-hosting" className="primary__btn border__btn">
                                            See Plan <i className="fa-regular fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rts-hosting-type__single">
                                        <div className="hosting-icon">
                                            <Image
                                                src="/assets/images/hosting/02.svg"
                                                width={60}
                                                height={60}
                                                alt="VPS Hosting"
                                                priority  // Prioritize loading this image
                                            />
                                        </div>
                                        <Link href="/vps-hosting" className="title">
                                            VPS Hosting
                                        </Link>
                                        <p className="excerpt">
                                            Manage your WordPress sites easily and more freedom.
                                        </p>
                                        <h6 className="price__start">Starting from $2.95/month</h6>
                                        <Link href="/vps-hosting" className="primary__btn border__btn">
                                            See Plan <i className="fa-regular fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                {/* Repeat the structure for other slides */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeHosting;
