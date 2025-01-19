"use client"
import React, { useEffect, useState } from 'react'

function PricingFaq() {
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
        <>
            <div className="rts-hosting-faq section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="rts-section text-center">
                                <h2
                                    className="rts-section__title mb-0"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Frequently asked questions
                                </h2>
                            </div>
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
            </div>
        </>
    )
}

export default PricingFaq