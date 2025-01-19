"use client"
import React, { useEffect } from 'react';
import Link from 'next/link'; // Import from 'next/link' instead of 'react-router-dom'
import sal from 'sal.js';

function AboutBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="rts-hosting-banner rts-hosting-banner-bg banner-default-height">
                <div className="container">
                    <div className="row">
                        <div className="banner-area">
                            <div className="rts-hosting-banner rts-hosting-banner__content about__banner">
                                <span
                                    className="starting__price"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    About Hostie
                                </span>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    A Unique Team Behind Your Online Success
                                </h1>
                                <p
                                    className="slogan"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    What makes Site Ground unique is our extraordinary team of
                                    individuals who put their passion.
                                </p>
                                <div
                                    className="hosting-action"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    <Link href="/pricing-three" className="btn__two secondary__bg secondary__color">
                                            View Plan <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <Link href="/pricing" className="btn__white">
                                        Starting @ $10.00/mo
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image about">
                                <img
                                    src="/assets/images/banner/banner-hero-about.png" // Update the image path
                                    width={562}
                                    alt="About Banner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutBanner;
