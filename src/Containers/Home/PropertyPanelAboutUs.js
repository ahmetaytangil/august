import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PropertyItem from './Components/PropertyItem'

// import Images
import Icon1 from '../../Assets/images/about-us/au-1.svg'
import Icon2 from '../../Assets/images/about-us/au-2.svg'
import Icon3 from '../../Assets/images/about-us/au-3.svg'
import Icon4 from '../../Assets/images/about-us/au-4.svg'
import Icon5 from '../../Assets/images/about-us/au-5.svg'
import Icon6 from '../../Assets/images/about-us/au-6.svg'
import Icon7 from '../../Assets/images/about-us/au-7.svg'
import Icon8 from '../../Assets/images/about-us/au-8.svg'

export default function PropertyPanelAboutUs() {
    return (
        <section className="why-work-with-outher p-4 mt-5 w-100">
            <Container>
                <h1 className="www-head text-center fz-28">
                    Core Values
                </h1>
                <p className="m-0 www-color text-center mb-5">
                    As Experts in property solutions, our 8 core values are:
                </p>
                <Row>
                    <PropertyItem
                        img={Icon1}
                        head="Knowledge"
                        content="Attaining facts, information, and skills acquired through experience or education; the theoretical or practical understanding of our industry."
                    />
                    <PropertyItem
                        img={Icon2}
                        head="Positive"
                        content="Confident in opinion or assertion, projects confidence inspiring outward presence, remains focussed on a favourable outcome."
                    />
                    <PropertyItem
                        img={Icon3}
                        head="Decisive"
                        content="Prepared to make and stand by important decisions and to accept responsibility on our own shoulders for outcomes."
                    />
                    <PropertyItem
                        img={Icon4}
                        head="Honest"
                        content="Keeping to one’s word, promises, agreements, being truthful with all stakeholders. We do the right thing."
                    />
                    <PropertyItem
                        img={Icon5}
                        head="Entrepreneurial"
                        content="Spotting opportunities and creating plans to develop business, using considerable initiative, assessing and evaluating risk."
                    />
                    <PropertyItem
                        img={Icon6}
                        head="Creative"
                        content="Turning new and imaginative ideas into reality, coming up with innovative solutions, thinking ‘out of the box’, seeking to always find a way."
                    />
                    <PropertyItem
                        img={Icon7}
                        head="Value Orientated"
                        content="The purpose of business processes is to create value, and the purpose of management is to support this value creation. Alignment between our employee’s personal values and the organization’s values creates a unified and motivated workforce."
                    />
                    <PropertyItem
                        img={Icon8}
                        head="8th Core Value Here"
                        content="The purpose of business processes is to create value, and the purpose of management is to support this value creation. Alignment between our employee’s personal values and the organization’s values creates a unified and motivated workforce."
                    />
                </Row>
            </Container>
        </section>
    )
}
