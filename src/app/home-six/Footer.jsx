import Link from 'next/link'
import React from 'react'
function HomeFiveFooter() {
    return (
        <div>
            <>
                <footer className="rts-footer site-footer-six">
                    <div className="container position-relative z-1">
                        <div className="row">
                            {/* widget */}
                            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-4 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget">
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
                            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-4 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget extra-padding">
                                    <h5 className="widget-title">Domain</h5>
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
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 rts-footer__widget--column">
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
                            <div className="col-xl-4 col-lg-6 col-md-12 rts-footer__widget--column">
                                <div className="rts-footer__widget footer__widget newsletter-style-six">
                                    <h5 className="widget-title">
                                        <span>
                                            <i className="fa-sharp fa-solid fa-paper-plane" />
                                        </span>
                                        Join Our Newsletter
                                    </h5>
                                    <p>We'll send you news and offers.</p>
                                    <form action="#" className="newsletter">
                                        <input type="email" name="email" placeholder="Enter mail" required />
                                        <span className="icon">
                                            <i className="fa-regular fa-envelope-open" />
                                        </span>
                                        <button type="submit">
                                            <i className="fa-regular fa-arrow-right" />
                                        </button>
                                    </form>
                                    <div className="social__media">
                                        <h5>social media</h5>
                                        <div className="social__media--list">
                                            <Link href="#" className="media">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                            <Link href="#" className="media">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                            <Link href="#" className="media">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                            <Link href="#" className="media">
                                                <i className="fa-brands fa-x-twitter" />
                                            </Link>
                                            <Link href="#" className="media">
                                                <i className="fa-brands fa-behance" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* widget end */}
                        </div>
                    </div>
                </footer>
                <div className="rts-footer__copyright-two style-four">
                    <div className="container">
                        <div className="row">
                            <div className="rts-footer__copyright-two__wrapper">
                                <p className="copyright">© Copyright 2024. All Rights Reserved.</p>
                                <div className="payment__method">
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
                    </div>
                </div>
            </>

        </div>
    )
}

export default HomeFiveFooter