"use client"
import React, { useState } from 'react'

function KnowledgebaseTab() {
    const tabs = [
        {
            id: 'share-hosting',
            target: 'share-hosting-tab',
            label: 'Share Hosting',
            count: 10,
            content: [
                {
                    title: 'Share Hosting Guide',
                    description: 'How to create, update, and delete a project on shared hosting. It is essential to understand the steps involved to manage your projects efficiently.',
                },
                {
                    title: 'Performance Tips',
                    description: 'Optimize your hosting for better speed and performance. Using caching techniques can significantly improve load times.',
                },
                {
                    title: 'Security Best Practices',
                    description: 'Ways to secure your shared hosting environment. Always ensure that your applications are updated and secured against vulnerabilities.',
                },
                {
                    title: 'Managing Resources',
                    description: 'How to efficiently manage limited resources in shared hosting. Keep track of your usage to avoid overages.',
                },
                {
                    title: 'Migration Guide',
                    description: 'Steps to migrate your data to shared hosting. Planning and preparation are key for a smooth transition.',
                },
            ],
        },
        {
            id: 'ssl',
            target: 'ssl-tab',
            label: 'Certificates SSL',
            count: 5,
            content: [
                {
                    title: 'SSL Basics',
                    description: 'Understanding SSL and its importance for your website. SSL encrypts data to keep your users safe while browsing.',
                },
                {
                    title: 'SSL Installation',
                    description: 'Steps to install SSL on your server. Follow the documentation provided by your hosting provider for best results.',
                },
                {
                    title: 'Renewing SSL',
                    description: 'Guidance on renewing your SSL certificate. Make sure to renew on time to avoid security warnings.',
                },
                {
                    title: 'Troubleshooting SSL',
                    description: 'Common SSL issues and solutions. Knowing how to resolve these issues can save you a lot of time and frustration.',
                },
                {
                    title: 'Advanced SSL Settings',
                    description: 'Configuring SSL settings for enhanced security. Fine-tuning your settings can improve overall site security.',
                },
            ],
        },
        {
            id: 'domain-transfer',
            target: 'domain-transfer-tab',
            label: 'Domain Transfers',
            count: 5,
            content: [
                {
                    title: 'Transfer Process',
                    description: 'How to initiate and complete a domain transfer. Ensure you follow the necessary steps to avoid delays.',
                },
                {
                    title: 'Domain Locking',
                    description: 'Understand domain locking and why it’s important. Locking your domain prevents unauthorized transfers.',
                },
                {
                    title: 'Transfer Fees',
                    description: 'Information on domain transfer costs. Be aware of potential fees involved in transferring your domain.',
                },
                {
                    title: 'DNS Updates',
                    description: 'Updating DNS settings post-transfer. Proper configuration is crucial for maintaining site accessibility.',
                },
                {
                    title: 'Transfer Troubleshooting',
                    description: 'Solutions for common transfer issues. Having troubleshooting steps ready can make the process smoother.',
                },
            ],
        },
        {
            id: 'cloud-hosting',
            target: 'cloud-hosting-tab',
            label: 'Cloud VPS',
            count: 5,
            content: [
                {
                    title: 'Cloud Hosting Overview',
                    description: 'Introduction to Cloud VPS and its benefits. Cloud VPS offers flexibility and scalability for your applications.',
                },
                {
                    title: 'Scaling Resources',
                    description: 'How to scale resources in a cloud environment. Adding resources is often a matter of a few clicks.',
                },
                {
                    title: 'Server Management',
                    description: 'Effective management of cloud VPS servers. Monitor performance metrics to ensure optimal operation.',
                },
                {
                    title: 'Cost Optimization',
                    description: 'Tips for cost management in cloud hosting. Keeping an eye on resource usage can help control expenses.',
                },
                {
                    title: 'Security in Cloud',
                    description: 'Cloud VPS security practices to protect your data. Implementing firewalls and access controls is vital.',
                },
            ],
        },
        {
            id: 'dedicated',
            target: 'dedicated-tab',
            label: 'Dedicated Servers',
            count: 5,
            content: [
                {
                    title: 'Dedicated Hosting Overview',
                    description: 'Benefits and features of dedicated servers. Enjoy the full resources of a server without sharing.',
                },
                {
                    title: 'Performance Optimization',
                    description: 'How to optimize performance on dedicated servers. Custom configurations can lead to significant gains.',
                },
                {
                    title: 'Resource Allocation',
                    description: 'Managing resources in a dedicated environment. Balancing workloads effectively can improve performance.',
                },
                {
                    title: 'Backup Strategies',
                    description: 'Backup plans for dedicated servers. Regular backups can prevent data loss in case of failures.',
                },
                {
                    title: 'Security Protocols',
                    description: 'Implementing security protocols on dedicated servers. Strong security measures are crucial to protect sensitive data.',
                },
            ],
        },
    ];

    // State for the active tab
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <>
            <>
                {/* KNOWLEDGE BASE ITEM */}
                <div className="rts-knowledgebase pt--120 pb--60">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-5">
                                <div className="rts-sidebar">
                                    <div className="rts-single-widget category-widget knowledge__tab__section">
                                        <h4 className="widget-title">Knowledgebase</h4>
                                        <ul className="list-unstyled cat__counter nav nav-tabs" id="myTab" role="tablist">
                                            {tabs.map((tab) => (
                                                <li key={tab.id} className="single-cat nav-item" role="presentation">
                                                    <button
                                                        className={`button-tab ${activeTab === tab.id ? 'active' : ''}`}
                                                        id={tab.id}
                                                        data-bs-toggle="tab"
                                                        data-bs-target={tab.target}
                                                        type="button"
                                                        role="tab"
                                                        aria-controls={tab.id}
                                                        aria-selected={activeTab === tab.id}
                                                        onClick={() => setActiveTab(tab.id)} // Set active tab on click
                                                    >
                                                        {tab.label} <span>({tab.count})</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="tab-content" id="myTabContent">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.id}
                                            className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''} knowledge__content`}
                                            id={tab.target}
                                            role="tabpanel"
                                            aria-labelledby={tab.id}
                                        >
                                            <div className="content-list">
                                                {tab.content.map((item, index) => (
                                                    <div key={index} className="single-content">
                                                        <h5>{item.title}</h5>
                                                        <p>{item.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* KNOWLEDGE BASE ITEM END */}
            </>

        </>
    )
}

export default KnowledgebaseTab