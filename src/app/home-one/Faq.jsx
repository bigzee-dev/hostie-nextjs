"use client";
import React, { useEffect, useState } from 'react';

function HomeFaq() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach((header, index) => {
            header.addEventListener('click', () => {
                const accordionItems = document.querySelectorAll('.accordion-item');
                accordionItems.forEach((item) => {
                    item.classList.remove('active');
                });
                const clickedItem = accordionItems[index];
                clickedItem.classList.add('active');
                setActiveIndex(index); // Update the active index state
            });
        });

        // Clean up event listeners on component unmount
        return () => {
            accordionHeaders.forEach((header) => {
                header.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <section className="rts-faq section__padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="rts-faq__first">
                            <h3
                                className="title"
                                data-sal="slide-down"
                                data-sal-delay={300}
                                data-sal-duration={800}
                            >
                                Got questions? Well, we've got answers.
                            </h3>
                            <p data-sal="slide-down" data-sal-delay={400} data-sal-duration={800}>
                                From 24/7 support that acts as your extended team to incredibly fast
                                website performance
                            </p>
                            <img data-sal="slide-down" data-sal-delay={500} data-sal-duration={800} src="assets/images/faq/faq.svg" alt="faq" />
                            <div className="rts-faq__first--shape">
                                <div className="img">
                                    <img src="assets/images/faq/faq__animated.svg" alt="" />
                                </div>
                                <div className="shape-one">domain</div>
                                <div className="shape-two">hosting</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="rts-faq__accordion">
                            <div className="accordion accordion-flush" id="rts-accordion">
                                {[
                                    {
                                        question: 'How does domain registration work?',
                                        answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from hostie, we guarantee it will be handed over.',
                                    },
                                    {
                                        question: 'Why is domain name registration required?',
                                        answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from hostie, we guarantee it will be handed over.',
                                    },
                                    {
                                        question: 'Why is domain name registration required?',
                                        answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from hostie, we guarantee it will be handed over.',
                                    },
                                    {
                                        question: 'Why is domain name registration required?',
                                        answer: 'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from hostie, we guarantee it will be handed over.',
                                    },
                                ].map((item, index) => (
                                    <div
                                        className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                                        key={index}
                                    >
                                        <div className="accordion-header" id={`header-${index}`}>
                                            <h4
                                                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#item-${index}`}
                                                aria-controls={`item-${index}`}
                                            >
                                                {item.question}
                                            </h4>
                                        </div>
                                        <div
                                            id={`item-${index}`}
                                            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                            aria-labelledby={`header-${index}`}
                                            data-bs-parent="#rts-accordion"
                                        >
                                            <div className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeFaq;

