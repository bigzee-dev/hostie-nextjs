'use client';
import React, { useEffect, useState } from 'react';
import sal from 'sal.js';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

function HomeFiveBanner() {
    const [isOpen, setIsOpen] = useState(false);
    const videoLink = 'https://www.youtube.com/watch?v=tVbtTL_sJHI'; // Define the video link here
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        // Initialize sal.js for scroll animations
        sal({
            threshold: 0.1,
            once: true,
        });

        // Extract the video ID from the video link
        if (videoLink) {
            const urlParts = videoLink.split('v='); // Assuming YouTube URL with 'v=' param
            const id = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
            setVideoId(id);
        }
    }, [videoLink]);

    // Console log to debug
    console.log('Video ID:', videoId);
    
    return (
        <>
            <section className="rts-hero-five rts-hero__five">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-6 col-md-10">
                            <div className="banner-content">
                                <div className="banner-top">
                                    <div
                                        className="icon"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        <img src="assets/images/banner/title-shape.svg" alt="" />
                                    </div>
                                    Meet Hostie
                                </div>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Web{" "}
                                    <span>
                                        Hosting <img src="assets/images/banner/line.svg" alt="" />
                                    </span>
                                    with Purpose
                                </h1>
                                <p data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                    We make sure your website is fast, secure &amp; always up - so your
                                    visitors &amp; search engines trust you Guaranteed.
                                </p>
                                <div
                                    className="banner-btn"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <Link
                                        href="#" // Ensure this href is valid
                                        className="rts-btn btn__long secondary__bg secondary__color"
                                    >
                                        Get Started <i className="fa-regular fa-chevron-right" />
                                    </Link>
                                    <Link href="#" onClick={() => setIsOpen(true)} className="popup-video video-btn" role="button">
                                        <span className="icon">
                                            <i className="fa-sharp fa-solid fa-play" />
                                        </span>
                                        <span className="disc">Watch Video</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 col-md-10 offset-xl-1">
                            <div className="rts-hero-image">
                                <img
                                    src="assets/images/banner/banner-hero-five.png"
                                    width={635}
                                    height={640}
                                    alt=""
                                    className="big-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-hero-shape-area">
                    <img
                        className="shape-one"
                        src="assets/images/banner/banner__bg__shape__five.svg"
                        alt=""
                    />
                    <img
                        className="shape-two"
                        src="assets/images/banner/banner__bg__shape__six.svg"
                        alt=""
                    />
                    <img
                        className="shape-three"
                        src="assets/images/banner/banner__bg__shape__eight.svg"
                        alt=""
                    />
                    <img
                        className="shape-four"
                        src="assets/images/banner/banner__bg__shape__nine.svg"
                        alt=""
                    />
                    <img
                        className="shape-five"
                        src="assets/images/banner/banner__bg__shape__ten.svg"
                        alt=""
                    />
                </div>
            </section>

            {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId} // Pass the dynamic video ID here
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
}

export default HomeFiveBanner;
