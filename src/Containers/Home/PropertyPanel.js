import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PropertyItem from './Components/PropertyItem'

// import Images
import Icon1 from '../../Assets/images/home/www-1.svg'
import Icon2 from '../../Assets/images/home/www-2.svg'
import Icon3 from '../../Assets/images/home/www-3.svg'
import Icon4 from '../../Assets/images/home/www-4.svg'
import Icon5 from '../../Assets/images/home/www-5.svg'
import Icon6 from '../../Assets/images/home/www-6.svg'

export default function PropertyPanel() {
    return (
        <section className="why-work-with-outher p-4 mt-5 w-100">
            <Container>
                <h1 className="www-head text-center fz-28 mb-md-5 mb-4">
                    Why Work with August Property?
                </h1>
                <Row>
                    <PropertyItem
                        img={Icon1}
                        head="Our client base is international"
                        content="We are well versed in the needs and expectations from a wide
                        mixture of cultures, especially since we are part of an
                        international conglomerate"
                    />
                    <PropertyItem
                        img={Icon2}
                        head="Accessibility &amp; Comfort"
                        content="Our team speak over 10 languages, and our out of hours’ team
                        enables you to contact us 24 hours a day and 7 days a week."
                    />
                    <PropertyItem
                        img={Icon3}
                        head="Not just an agency"
                        content="We are a full-service property specialist - offering real estate
                        sales, lettings, property management, investment management,
                        financial Services and legal consultancy."
                    />
                    <PropertyItem
                        img={Icon4}
                        head="Respected &amp; Impressive"
                        content="We deliver an exceptional service supported by our core strengths:
                        our committed and expert teams. By delivering great service,
                        we are able to deliver the results our customers need."
                    />
                    <PropertyItem
                        img={Icon5}
                        head="The real estate company of tomorrow"
                        content="We believe the three most important elements when dealing with
                        a property are location, experience, analytics. This is how we
                        deliver the most optimal solutions for our clients."
                    />
                    <PropertyItem
                        img={Icon6}
                        head="Experience &amp; Track Record"
                        content="Our 40+ years combined track record speaks for itself with,
                        having facilitated, advised and structured transactions for our
                        clients in excess of £4billion USD."
                    />
                </Row>
            </Container>
        </section>
    )
}
