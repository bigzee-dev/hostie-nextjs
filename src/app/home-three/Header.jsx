'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image for optimized images
import SideMenu from '../elements/SideMenu';

const HeaderTwo = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`rts-header style-three header__default ${isSticky ? 'header-sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="rts-header__wrapper">
                            {/* FOR LOGO */}
                            <div className="rts-header__logo">
                                <Link href="/" className="site-logo">
                                    {/* Use next/image for optimized images */}
                                    <img
                                        className="logo-white"
                                        src="/assets/images/logo/logo-2.svg"
                                        alt="Hostie"// Add width and height for optimization
                                    />
                                    <img
                                        className="logo-dark"
                                        src="/assets/images/logo/logo-4.svg"
                                        alt="Hostie"
                                    />
                                </Link>
                            </div>
                            {/* FOR NAVIGATION MENU */}
                            <nav className="rts-header__menu" id="mobile-menu">
                                <div className="hostie-menu">
                                    <ul className="list-unstyled hostie-desktop-menu">
                                        <li className="menu-item hostie-has-dropdown">
                                            <Link href="/index">
                                                <div className="hostie-dropdown-main-element">Home</div>
                                            </Link>
                                            <div className="has-homemenu">
                                                <div className="row gx-5 row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
                                                    {homeItems.map((item, index) => (
                                                        <div key={index} className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <Link href={item.href}>
                                                                    <div>
                                                                        <Image
                                                                            src={item.imgSrc}
                                                                            alt={item.title}
                                                                            width={500} // Provide appropriate width
                                                                            height={300} // Provide appropriate height
                                                                            style={{ objectFit: 'cover' }} // Adjust styling as needed
                                                                        />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <Link href={item.href}>
                                                                        <div>{item.title}</div>
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>

                                        <li className="menu-item hostie-has-dropdown mega-menu big">
                                            <Link href="#" className="hostie-dropdown-main-element">
                                                Pages
                                            </Link>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                {menuItemsFirstColumn.map((item, index) => (
                                                                    <li key={index}>
                                                                        <Link href={item.href}>
                                                                            <div className='a'>
                                                                                <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
                                                                                <div className="info">
                                                                                    <p>{item.title}</p>
                                                                                    <span>{item.description}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                {menuItemsSecondColumn.map((item, index) => (
                                                                    <li key={index}>
                                                                        <Link href={item.href}>
                                                                            <div className='a'>
                                                                                <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
                                                                                <div className="info">
                                                                                    <p>{item.title}</p>
                                                                                    <span>{item.description}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                {menuItemsThirdColumn.map((item, index) => (
                                                                    <li key={index}>
                                                                        <Link href={item.href}>
                                                                            <div className='a'>
                                                                                <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
                                                                                <div className="info">
                                                                                    <p>{item.title}</p>
                                                                                    <span>{item.description}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                {menuItemsFourthColumn.map((item, index) => (
                                                                    <li key={index}>
                                                                        <Link href={item.href}>
                                                                            <div className='a'>
                                                                                <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
                                                                                <div className="info">
                                                                                    <p>{item.title}</p>
                                                                                    <span>{item.description}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item hostie-has-dropdown mega-menu">
                                            <Link href="#">
                                                <div className="hostie-dropdown-main-element">Hosting</div>
                                            </Link>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-6">
                                                            <ul className="mega-menu-item">
                                                                {hostingItemsLeft.map((item, index) => (
                                                                    <li key={index}>
                                                                        <Link href={item.href}>
                                                                            <div className='a'>
                                                                                <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
                                                                                <div className="info">
                                                                                    <p>{item.title}</p>
                                                                                    <span>{item.description}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <ul className="mega-menu-item">
                                                                {hostingItemsRight.map((item, index) => (
                                                                    <li key={index}>
                                                                        <Link href={item.href}>
                                                                            <div className='a'>
                                                                                <Image src={item.imgSrc} alt={item.title} width={50} height={50} />
                                                                                <div className="info">
                                                                                    <p>{item.title}</p>
                                                                                    <span>{item.description}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item hostie-has-dropdown">
                                            <Link href="#" className="hostie-dropdown-main-element">
                                                Domain
                                            </Link>
                                            <ul className="hostie-submenu list-unstyled menu-pages">
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/domain-checker">
                                                        Domain Checker
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/domain-transfer">
                                                        Domain Transfer
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/domain-registration">
                                                        Domain Resigtration
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item hostie-has-dropdown">
                                            <Link href="#" className="hostie-dropdown-main-element">
                                                Technology
                                            </Link>
                                            <ul className="hostie-submenu list-unstyled menu-pages">
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/technology">
                                                        Technology
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/data-center">
                                                        Data Centers
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/game-details">
                                                        Game Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item hostie-has-dropdown">
                                            <Link href="#" className="hostie-dropdown-main-element">
                                                Help Center
                                            </Link>
                                            <ul className="hostie-submenu list-unstyled menu-pages">
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/faq">
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/support">
                                                        Support
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/contact">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="/knowledgebase">
                                                        Knowledgebase
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* FOR HEADER RIGHT */}
                            <div className="rts-header__right">
                                <div className="button-area">
                                    <div className="login-btn has-dropdown">
                                        <Link href="/sign-up" className="login__btn transparent">
                                            <i className="fa-regular fa-user" />
                                            Login
                                        </Link>
                                    </div>
                                    <Link href="/contact" className="get-started__btn">
                                        Get Started
                                    </Link>
                                </div>
                                <button id="menu-btn" className="mobile__active menu-btn" onClick={toggleSidebar}>
                                    <i className="fa-sharp fa-solid fa-bars" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

const homeItems = [
    { href: '/', imgSrc: '/assets/images/home/home-1.png', title: 'Home 01' },
    { href: '/home-two', imgSrc: '/assets/images/home/home-2.png', title: 'Home 02' },
    { href: '/home-three', imgSrc: '/assets/images/home/home-3.png', title: 'Home 03' },
    { href: '/home-four', imgSrc: '/assets/images/home/home-4.png', title: 'Home 04' },
    { href: '/home-five', imgSrc: '/assets/images/home/home-5.png', title: 'Home 05' },
    { href: '/home-six', imgSrc: '/assets/images/home/home-6.png', title: 'Home 06' },
    { href: '/home-seven', imgSrc: '/assets/images/home/home-8.png', title: 'Home 07' },
    { href: '/home-eight', imgSrc: '/assets/images/home/home-7.png', title: 'Home 08' },
    { href: '/home-nine', imgSrc: '/assets/images/home/home-9.png', title: 'Home 09' },
    { href: '/home-ten', imgSrc: '/assets/images/home/home-10.png', title: 'Home 10' },
    { href: '/home-eleven', imgSrc: '/assets/images/home/home-11.png', title: 'Home 11' },
];

// Menu items for the first column
const menuItemsFirstColumn = [
    { href: '/about', imgSrc: '/assets/images/mega-menu/01.svg', title: 'About Hostie', description: 'Get to know about Hostie' },
    { href: '/pricing', imgSrc: '/assets/images/mega-menu/03.svg', title: 'Pricing', description: 'Hostie provides pro pricing' },
    { href: '/affiliate', imgSrc: '/assets/images/mega-menu/02.svg', title: 'Affiliate', description: 'Provide detailed explanation' },
    { href: '/sign-up', imgSrc: '/assets/images/mega-menu/04.svg', title: 'Sign Up', description: 'Create content by you' },
    { href: '/blog', imgSrc: '/assets/images/mega-menu/07.svg', title: 'Blog', description: 'Read Hostie articles' },
];

// Menu items for the second column
const menuItemsSecondColumn = [
    { href: '/support', imgSrc: '/assets/images/mega-menu/08.svg', title: 'Support', description: 'Provide detailed explanation' },
    { href: '/pricing-two', imgSrc: '/assets/images/mega-menu/03.svg', title: 'Pricing Package', description: 'Hostie provides pro pricing' },
    { href: '/business-mail', imgSrc: '/assets/images/mega-menu/10.svg', title: 'Business Mail', description: 'Provide detailed explanation' },
    { href: '/sign-in', imgSrc: '/assets/images/mega-menu/09.svg', title: 'Sign In', description: 'Login Account' },
    { href: '/blog-list', imgSrc: '/assets/images/mega-menu/07.svg', title: 'Blog List', description: 'Read Hostie articles' },
];

// Menu items for the third column
const menuItemsThirdColumn = [
    { href: '/domain-checker', imgSrc: '/assets/images/mega-menu/12.svg', title: 'Domain Checker', description: 'Provide detailed explain' },
    { href: '/pricing-three', imgSrc: '/assets/images/mega-menu/03.svg', title: 'Pricing Comparision', description: 'Hostie provides pro price' },
    { href: '/partner', imgSrc: '/assets/images/mega-menu/06.svg', title: 'Partner', description: 'Our partners' },
    { href: '/game-details', imgSrc: '/assets/images/mega-menu/05.svg', title: 'Game Details', description: 'We will be soon' },
    { href: '/blog-grid-2', imgSrc: '/assets/images/mega-menu/07.svg', title: 'Blog Grid', description: 'Read Hostie article' },
];

// Menu items for the fourth column
const menuItemsFourthColumn = [
    { href: '/contact', imgSrc: '/assets/images/mega-menu/16.svg', title: 'Contact', description: 'Contact with Hostie' },
    { href: '/payment-method', imgSrc: '/assets/images/mega-menu/20.svg', title: 'Payment Method', description: 'Payment Method' },
    { href: '/domain-transfer', imgSrc: '/assets/images/mega-menu/17.svg', title: 'Domain Transfer', description: 'Provide detailed explain' },
    { href: '/knowledgebase', imgSrc: '/assets/images/mega-menu/11.svg', title: 'Knowledgebase', description: 'Read Hostie article' },
    { href: '/404', imgSrc: '/assets/images/mega-menu/19.svg', title: 'Error', description: 'Back To Home' },
];

const hostingItemsLeft = [
    { href: '/shared-hosting', imgSrc: '/assets/images/mega-menu/22.svg', title: 'Shared Hosting', description: 'Manage Shared Hosting' },
    { href: '/wordpress-hosting', imgSrc: '/assets/images/mega-menu/23.svg', title: 'WordPress Hosting', description: 'WordPress Hosting speed' },
    { href: '/vps-hosting', imgSrc: '/assets/images/mega-menu/24.svg', title: 'VPS Hosting', description: 'Dedicated resources' },
];

const hostingItemsRight = [
    { href: '/reseller-hosting', imgSrc: '/assets/images/mega-menu/25.svg', title: 'Reseller Hosting', description: 'Earn additional revenue' },
    { href: '/dedicated-hosting', imgSrc: '/assets/images/mega-menu/27.svg', title: 'Dedicated Hosting', description: 'Hosting that gives you tools' },
    { href: '/cloud-hosting', imgSrc: '/assets/images/mega-menu/29.svg', title: 'Cloud Hosting', description: 'Manage Cloud Hosting' },
];

export default HeaderTwo;
