import Link from 'next/link'
import React from 'react'

function HomeTenSupport() {
    return (
        <>
            <div className="rts-support">
                <div className="container">
                    <div className="row">
                        <div className="rts-support__wrapper">
                            <div className="rts-support__wrapper--content">
                                <h3
                                    className="title"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    24/7 World-Class Support
                                </h3>
                                <p data-sal="slide-down" data-sal-delay={200} data-sal-duration={800}>
                                    Run into trouble? Contact our Customer Success team any time via
                                    live chat or email.
                                </p>
                                <div
                                    className="feature"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">
                                            Receive professional MERN Hosting support
                                        </li>
                                        <li className="feature__item">
                                            Our MERN specialists are available round
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/support"
                                    className="rts-btn rts-btn-primary support-btn"
                                >
                                    Get Support <i className="fa-regular fa-chevron-right" />
                                </Link>
                            </div>
                            <div
                                className="rts-support__wrapper--image"
                                data-sal="slide-left"
                                data-sal-delay={400}
                                data-sal-duration={800}
                            >
                                <img src="assets/images/support/support__image.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeTenSupport