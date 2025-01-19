'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Link from 'next/link';

function HomeFiveBrand() {
    return (
        <>
            <div className="rts-brand area-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-brand__wrapper">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="rts-brand__slider"
                                    speed={1500}
                                    slidesPerView={6}
                                    spaceBetween={40}
                                    loop={true}
                                    autoplay={true}
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
                                            <Link href="#">
                                                <img src="assets/images/brand/01.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/02.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/03.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/04.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/05.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/06.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                {" "}
                                                <img src="assets/images/brand/07.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/08.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rts-brand__slider--single">
                                            <Link href="#">
                                                <img src="assets/images/brand/01.svg" alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFiveBrand