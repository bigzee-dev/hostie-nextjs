import Link from 'next/link'
import React from 'react'
function HomeFooter() {
    return (
        <>
            <footer className="rts-footer site-footer-one section__padding">
                <div className="container">
                    <div className="row">
                        {/* widget */}
                        <div className="col-lg-3 col-md-5 col-sm-6 rts-footer__widget--column">
                            <div className="rts-footer__widget footer__widget w-280">
                                <Link
                                    href="#"
                                    aria-label="main page link"
                                    className="footer__logo"
                                >
                                    <img src="/assets/images/logo/footer__one__logo.svg" alt="" />
                                </Link>
                                <p className="brand-desc">
                                    We’re on a mission make life easier for web developers &amp; small
                                    businesses.
                                </p>
                                <div className="separator site-default-border" />
                                <div className="payment__method">
                                    <h6>Payment Method</h6>
                                    <ul>
                                        <li>
                                            <img src="/assets/images/payment/visa.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/master-card.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/paypal.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/american-express.svg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/images/payment/wise.svg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* widget end */}
                        {/* widget */}
                        <div className="col-lg-2 col-md-3 col-sm-6 rts-footer__widget--column">
                            <div className="rts-footer__widget footer__widget extra-padding">
                                <h5 className="widget-title">Company</h5>
                                <div className="rts-footer__widget--menu ">
                                    <ul>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">News Feed</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="/affiliate">Affiliate Program</Link>
                                        </li>
                                        <li>
                                            <Link href="/technology">Our Technology</Link>
                                        </li>
                                        <li>
                                            <Link href="/knowledgebase">Knowledgebase</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* widget end */}
                        {/* widget */}
                        <div className="col-lg-2 col-md-4 col-sm-6 rts-footer__widget--column">
                            <div className="rts-footer__widget footer__widget extra-padding">
                                <h5 className="widget-title">Feature</h5>
                                <div className="rts-footer__widget--menu ">
                                    <ul>
                                        <li>
                                            <Link href="/domain-checker">Domain Checker</Link>
                                        </li>
                                        <li>
                                            <Link href="/domain-transfer">Domain Transfer</Link>
                                        </li>
                                        <li>
                                            <Link href="/domain-registration">Domain Registration</Link>
                                        </li>
                                        <li>
                                            <Link href="/data-center">Data Centers</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">Faq</Link>
                                        </li>
                                        <li>
                                            <Link href="/support">Support</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* widget end */}
                        {/* widget */}
                        <div className="col-lg-2 col-md-6 col-sm-6 rts-footer__widget--column">
                            <div className="rts-footer__widget footer__widget">
                                <h5 className="widget-title">Hosting</h5>
                                <div className="rts-footer__widget--menu">
                                    <ul>
                                        <li>
                                            <Link href="/shared-hosting">Shared Hosting</Link>
                                        </li>
                                        <li>
                                            <Link href="/wordpress-hosting">Wordpress Hosting</Link>
                                        </li>
                                        <li>
                                            <Link href="/vps-hosting">VPS Hosting</Link>
                                        </li>
                                        <li>
                                            <Link href="/reseller-hosting">Reseller Hosting</Link>
                                        </li>
                                        <li>
                                            <Link href="/dedicated-hosting">Dedicated Hosting</Link>
                                        </li>
                                        <li>
                                            <Link href="/cloud-hosting">Cloud Hosting</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* widget end */}
                        {/* widget */}
                        <div className="col-lg-3 col-md-6 rts-footer__widget--column">
                            <div className="rts-footer__widget footer__widget">
                                <h5 className="widget-title">Join Our Newsletter</h5>
                                <p>We'll send you news and offers.</p>
                                <form action="#" className="newsletter mx-40">
                                    <input
                                        type="email"
                                        className="home-one"
                                        name="email"
                                        placeholder="Enter mail"
                                        required
                                    />
                                    <span className="icon">
                                        <i className="fa-regular fa-envelope-open" />
                                    </span>
                                    <button type="submit" aria-label="Submit">
                                        <i className="fa-regular fa-arrow-right" />
                                    </button>
                                </form>
                                <div className="social__media">
                                    <h5>social media</h5>
                                    <div className="social__media--list">
                                        <Link
                                            href="https://www.facebook.com"
                                            aria-label="social-link"
                                            target="_blank"
                                            className="media"
                                        >
                                            <i className="fa-brands fa-facebook-f" />
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com"
                                            aria-label="social-link"
                                            target="_blank"
                                            className="media"
                                        >
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com"
                                            aria-label="social-link"
                                            target="_blank"
                                            className="media"
                                        >
                                            <i className="fa-brands fa-linkedin" />
                                        </Link>
                                        <Link
                                            href="https://www.x.com"
                                            aria-label="social-link"
                                            target="_blank"
                                            className="media"
                                        >
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                        <Link
                                            href="https://www.behance.com"
                                            aria-label="social-link"
                                            target="_blank"
                                            className="media"
                                        >
                                            <i className="fa-brands fa-behance" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* widget end */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="rts-footer__copyright text-center">
                            <p>© Copyright 2024. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default HomeFooter