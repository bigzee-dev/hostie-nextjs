'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.getElementById('side-bar').classList.add('show');
            document.getElementById('anywhere-home').classList.add('bgshow');
        } else {
            document.getElementById('side-bar').classList.remove('show');
            document.getElementById('anywhere-home').classList.remove('bgshow');
        }
    }, [isSidebarOpen]);
    return (
        <>
            <div id="side-bar" className={`side-bar header-two ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="fa-sharp fa-thin fa-xmark" />
                </button>
                {/* mobile menu area start */}
                <div className="mobile-menu-main d-block">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu metismenu" id="mobile-menu-active">


                            <li className="has-droupdown">
                                <Link href="#" className="main" onClick={() => toggleMenu(1)}>
                                    Home
                                </Link>
                                <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home">
                                            Home One
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-two">
                                            Home Two
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-three">
                                            Home Three
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-four">
                                            Home Four
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-five">
                                            Home Five
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-six">
                                            Home Six
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-seven">
                                            Home Seven
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-eight">
                                            Home Eight
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-nine">
                                            Home Nine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-ten">
                                            Home Ten
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/home-eleven">
                                            Home Eleven
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <Link href="#" className="main" onClick={() => toggleMenu(2)}>
                                    Pages
                                </Link>
                                <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <Link className="mobile-menu-link" href="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/team">
                                            Affiliate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/faq">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/book-a-demo">
                                            Sign Up
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/free-audit">
                                            Whois
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/pricing">
                                            Partner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/blog-list">
                                            Blog List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/blog-grid-2">
                                            Blog Grid
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/support">
                                            Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/pricing">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/pricing-two">
                                            Pricing Package
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/pricing-three">
                                            Pricing Comparison
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/signin">
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/business-mail">
                                            Business Mail
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/knowledgebase">
                                            Knowledgebase
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/blog-details">
                                            Blog Details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/domain-checker">
                                            Domain Checker
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/ssl-certificate">
                                            SSL Certificates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/data-center">
                                            Data Centers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/technology">
                                            Technology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/domain-transfer">
                                            Domain Transfer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/payment-method">
                                            Payment Method
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <Link href="#" className="main" onClick={() => toggleMenu(3)}>
                                    Hosting
                                </Link>
                                <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <Link className="mobile-menu-link" href="/shared-hosting">
                                            Shared Hosting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/wordpress-hosting">
                                            WordPress Hosting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/vps-hosting">
                                            VPS Hosting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/reseller-hosting">
                                            Reseller Hosting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/dedicated-hosting">
                                            Dedicated Hosting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/cloud-hosting">
                                            Cloud Hosting
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <Link href="#" className="main" onClick={() => toggleMenu(4)}>
                                    Domain
                                </Link>
                                <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <Link className="mobile-menu-link" href="/domain-checker">
                                            Domain Checker
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/domain-transfer">
                                            Domain Transfer
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <Link href="#" className="main" onClick={() => toggleMenu(5)}>
                                    Technology
                                </Link>
                                <ul className={`submenu ${openMenu === 5 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <Link className="mobile-menu-link" href="/technology">
                                            Technology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/data-center">
                                            Data Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/game-details">
                                            Game Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <Link href="#" className="main" onClick={() => toggleMenu(6)}>
                                    Help Center
                                </Link>
                                <ul className={`submenu ${openMenu === 6 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                    <li>
                                        <Link className="mobile-menu-link" href="/knowledgebase">
                                            Knowledgebase
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="hosting-offer-one">
                                            Ads Banner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/whois">
                                            Whois
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/support">
                                            Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mobile-menu-link" href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <ul className="social-area-one pl--20 mt--100">
                        <li>
                            <Link
                                href="https://www.linkedin.com"
                                aria-label="social-link"
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.x.com" aria-label="social-link" target="_blank">
                                <i className="fa-brands fa-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.youtube.com"
                                aria-label="social-link"
                                target="_blank"
                            >
                                <i className="fa-brands fa-youtube" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com"
                                aria-label="social-link"
                                target="_blank"
                            >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* mobile menu area end */}
            </div>
            <div id="anywhere-home" onClick={toggleSidebar}></div>
        </>
    );
}

export default SideMenu;