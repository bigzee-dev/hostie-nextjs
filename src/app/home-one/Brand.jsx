"use client"; 
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Link from 'next/link';

function HomeBrand() {
    return (
        <>
            {/* BRAND AREA */}
            <div className="rts-brand rts-brand__bg--section pt-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-brand__wrapper">
                                <div className="rts-brand__wrapper--text">
                                    <h5
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        Hosting solutions trusted by the owners of{" "}
                                        <span>2,800,000</span> domains.
                                    </h5>
                                    <div
                                        className="rts-brand__wrapper--text-review"
                                        data-sal="slide-down"
                                        data-sal-delay={400}
                                        data-sal-duration={800}
                                    >
                                        <div className="review">
                                            <div className="star">
                                                Excellent{" "}
                                                <Image 
                                                    src="/assets/images/brand/review-star.svg" 
                                                    width={96} 
                                                    height={26} 
                                                    alt="Review star" 
                                                    priority
                                                />
                                            </div>
                                        </div>
                                        <div className="review__company">
                                            954 reviews on{" "}
                                            <Image 
                                                src="/assets/images/brand/trust-pilot.svg" 
                                                width={82} 
                                                height={20} 
                                                alt="Trust Pilot" 
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="rts-brand__slider"
                                    speed={1500}
                                    slidesPerView={6}
                                    spaceBetween={40}
                                    loop={true}
                                    autoplay={false}
                                    breakpoints={{
                                        1200: { slidesPerView: 6 },
                                        900: { slidesPerView: 5 },
                                        768: { slidesPerView: 5 },
                                        580: { slidesPerView: 4 },
                                        450: { slidesPerView: 3 },
                                        0: { slidesPerView: 3 },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/01.svg" 
                                                    width={82} 
                                                    height={24} 
                                                    alt="Brand 1" 
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/02.svg" 
                                                    width={77} 
                                                    height={24} 
                                                    alt="Brand 2" 
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/03.svg" 
                                                    width={55} 
                                                    height={22} 
                                                    alt="Brand 3" 
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/04.svg" 
                                                    width={42} 
                                                    height={22} 
                                                    alt="Brand 4" 
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/05.svg" 
                                                    width={42} 
                                                    height={22} 
                                                    alt="Brand 5" 
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/06.svg" 
                                                    width={79} 
                                                    height={24} 
                                                    alt="Brand 6" 
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#" aria-label="brand-link">
                                                <Image 
                                                    src="/assets/images/brand/07.svg" 
                                                    width={82} 
                                                    height={24} 
                                                    alt="Brand 7" 
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BRAND AREA END*/}
        </>
    )
}

export default HomeBrand;
