"use client";

import { useEffect } from "react";
import sal from "sal.js";
import Image from "next/image";
import Link from "next/link";

function HomeBanner() {
  useEffect(() => {
    // This is the equivalent of your salActive function
    sal({
      threshold: 0.1,
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <>
      {/* HERO BANNER ONE */}
      <section className="rts-hero rts-hero__one banner-style-home-one">
        <div className="container">
          <div className="rts-hero__blur-area" />
          <div className="row align-items-end position-relative">
            <div className="col-lg-6">
              <div className="rts-hero__content w-550">
                <h6
                  data-sal="slide-down"
                  data-sal-delay={300}
                  data-sal-duration={800}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23.9799 11.9805C23.9799 10.3545 23.2659 8.8205 22.0549 7.8565C22.1949 6.2345 21.6149 4.6455 20.4649 3.4945C19.3149 2.3455 17.7299 1.7635 16.1879 1.9395C14.1739 -0.616499 9.82288 -0.664499 7.85588 1.9045C4.62288 1.5205 1.51388 4.5645 1.93988 7.7725C-0.616121 9.7865 -0.665121 14.1375 1.90488 16.1055C1.76488 17.7275 2.34488 19.3165 3.49488 20.4675C4.64488 21.6165 6.23188 22.1985 7.77188 22.0225C9.78588 24.5785 14.1369 24.6265 16.1039 22.0575C17.7239 22.1965 19.3139 21.6185 20.4649 20.4675C21.6139 19.3175 22.1939 17.7275 22.0199 16.1905C23.2659 15.1425 23.9799 13.6085 23.9799 11.9825V11.9805ZM7.97988 8.9805C7.98588 7.6725 9.97388 7.6725 9.97988 8.9805C9.97388 10.2885 7.98588 10.2885 7.97988 8.9805ZM10.8119 15.5355C10.5039 15.9985 9.87888 16.1165 9.42488 15.8125C8.96488 15.5065 8.84088 14.8855 9.14788 14.4255L13.1479 8.4255C13.4539 7.9665 14.0739 7.8405 14.5349 8.1485C14.9949 8.4545 15.1189 9.0755 14.8119 9.5355L10.8119 15.5355ZM14.9799 15.9805C13.6719 15.9745 13.6719 13.9865 14.9799 13.9805C16.2879 13.9865 16.2879 15.9745 14.9799 15.9805Z"
                      fill="#FFC107"
                    />
                  </svg>
                  30% Discount first month purchase
                </h6>
                <h1
                  className="heading"
                  data-sal="slide-down"
                  data-sal-delay={300}
                  data-sal-duration={800}
                >
                  Premium Hosting Technologies
                </h1>
                <p
                  className="description"
                  data-sal="slide-down"
                  data-sal-delay={400}
                  data-sal-duration={800}
                >
                  Developing smart solutions in-house and adopting the latest
                  speed and security technologies is our passion.
                </p>
                <div
                  className="rts-hero__content--group"
                  data-sal="slide-down"
                  data-sal-delay={500}
                  data-sal-duration={800}
                >
                  <Link href="/pricing" className="primary__btn white__bg">
                    Get Started <i className="fa-regular fa-long-arrow-right" />
                  </Link>
                  <Link href="/pricing-two" className="btn__zero plan__btn">
                    Plans &amp; Pricing{" "}
                    <i className="fa-regular fa-long-arrow-right" />
                  </Link>
                </div>
                <p
                  data-sal="slide-down"
                  data-sal-delay={600}
                  data-sal-duration={800}
                >
                  <Image
                    src="/assets/images/icon/dollar.svg"
                    alt=""
                    width={28}
                    height={20}
                    priority
                  />
                  Starting from <span>$2.95</span> per month
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rts-hero__images position-relative">
                <div className="rts-hero-main">
                  <div className="image-main">
                    <Image
                      className="main top-bottom2"
                      src="/assets/images/banner/hosting-01.svg"
                      alt="Hosting"
                      width={393}
                      height={545}
                      priority
                    />
                  </div>
                  <Image
                    className="hero-shape one"
                    src="/assets/images/banner/hosting.svg"
                    alt="Hosting Shape"
                    width={660}
                    height={383}
                    priority
                  />
                </div>
                <div className="rts-hero__images--shape">
                  <div className="one top-bottom">
                    <Image
                      src="/assets/images/banner/left.svg"
                      alt="Left Shape"
                      width={20}
                      height={212}
                      priority
                    />
                  </div>
                  <div className="two bottom-top">
                    <Image
                      src="/assets/images/banner/left.svg"
                      alt="Left Shape"
                      width={20}
                      height={212}
                      priority
                    />
                  </div>
                  <div className="three top-bottom">
                    <Image
                      src="/assets/images/banner/top.svg"
                      alt="Top Shape"
                      width={20}
                      height={212}
                      priority
                    />
                  </div>
                  <div className="four bottom-top">
                    <Image
                      src="/assets/images/banner/right.svg"
                      alt="Right Shape"
                      width={20}
                      height={212}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO BANNER ONE END */}
    </>
  );
}

export default HomeBanner;
