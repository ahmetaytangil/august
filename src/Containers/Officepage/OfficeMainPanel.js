import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

// api
import requests from '../../api/ApiRequests'

// Containers
import AboutPanelTab from './AboutPanelTab'
import AgentsPanelTab from './AgentsPanelTab'
import ContactPanelTab from './ContactPanelTab'
import ManagementPanelTab from './ManagementPanelTab'

export default function OfficeMainPanel({ dataPRS, officesData, lang }) {
    const [contentNumber, setContentNumber] = useState(0)

    return (
        <main className="general-main-outher pages-main">
            <div className="w-100 services-two-tabs-outher">
                <Container>
                    <div className="services-2tab office-page-tab mb-5">
                        <button
                            onClick={() => setContentNumber(0)}
                            className={
                                (contentNumber === 0)
                                    ? "buy-bttnn-border active tablinks"
                                    : "tablinks"
                            }
                        >
                            About
                        </button>
                        <button
                            onClick={() => setContentNumber(1)}
                            className={
                                (contentNumber === 1)
                                    ? "buy-bttnn-border active tablinks"
                                    : "tablinks"
                            }
                        >
                            Our Agents
                        </button>
                        <button
                            onClick={() => setContentNumber(2)}
                            className={
                                (contentNumber === 2)
                                    ? "buy-bttnn-border active tablinks"
                                    : "tablinks"
                            }
                        >
                            Our Management Team
                        </button>
                        <button
                            onClick={() => setContentNumber(3)}
                            className={
                                (contentNumber === 3)
                                    ? "buy-bttnn-border active tablinks"
                                    : "tablinks"
                            }
                        >
                            Contact Us
                        </button>
                    </div>
                </Container>
            </div>
            {contentNumber === 0 &&
                <AboutPanelTab
                    onChange={() => setContentNumber(3)}
                    dataProps={dataPRS}
                    officesData={officesData}
                    lang={lang}
                />
            }
            {contentNumber === 1 &&
                <AgentsPanelTab
                    officesData={officesData}
                    lang={lang}
                />
            }
            {contentNumber === 2 &&
                <ManagementPanelTab
                    officesData={officesData}
                />
            }
            {contentNumber === 3 &&
                <ContactPanelTab
                    officesData={officesData}
                />
            }
        </main>
    )
}
