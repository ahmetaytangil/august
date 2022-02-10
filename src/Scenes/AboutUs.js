import React from 'react';
import PagesHead from '../Components/Pageshead/PagesHead';
import { Row, Col, Container } from 'react-bootstrap';
import PropertyPanelAboutUs from '../Containers/Home/PropertyPanelAboutUs';
import Imtiaz from '../Assets/images/about-us/img.jpg';
import AuLogoContent from '../Assets/images/about-us/img2.jpg';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import AugustLoading from '../Components/general/AugustLoading';

const AboutUs = ({ staticContents, staticContents_loading }) => {
    let { slug } = useParams();
    const static_contents = staticContents !== null ? staticContents.filter(val => val.Slug === slug)[0] : null
    
    if (staticContents_loading) {
        return <AugustLoading />
    } else {
        return (
            <>
                <PagesHead
                    pageName={static_contents.title}
                    content="Learn about our services, philosophy and our ethics and understand why people choose us handle their property requirements."
                    img={static_contents.BannerImage.url}
                />
                <main>
                    <Container>
                        <div>
                            <Row className="align-items-center mb-5">
                                <Col xs={12} md={7}>
                                    <h5 className="fz-32 fw-700 mb-2">
                                        August
                                    </h5>
                                    <h6 className="mb-3">
                                        <span className="fz-22 fw-400">
                                            adjective</span>
                                        <span className="px-2">
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#B89B57" />
                                            </svg>
                                        </span>
                                        <span className="fz-16 fw-400">
                                            formal
                                        </span>
                                    </h6>
                                    <h6 className="fz-22 fw-700 border-bottom pb-3">UK: <span className="fw-400">/ɔːˈɡʌst/</span> </h6>
                                    <h5>
                                        <span className="pr-2">
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#B89B57" />
                                            </svg>
                                        </span>
                                        <span className="fz-22 fw-400">
                                            respected and impressive.
                                        </span>
                                    </h5>
                                </Col>
                                <Col xs={12} md={5}>
                                    <img src={AuLogoContent} alt="" className="d-block w-100" />
                                </Col>
                            </Row>
                            <div>
                                <Markdown>
                                    {static_contents.Content}
                                </Markdown>
                            </div>
                        </div>
                    </Container>
                    {
                        slug === "about-us" &&
                        <>
                            <PropertyPanelAboutUs />
                            <Container className="my-5">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className="mb-5">
                                            <h2 className="fz-36 fw-700">Vision</h2>
                                            <p className="fz-18 fw-400">
                                                To be the real estate adviser of choice in the markets we serve. <br /> <br />
                                                We did not set out to be the biggest, just the best, to achieve
                                                this we strive to attract, recruit and retain the best people in
                                                property, who go the extra mile for their clients.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className="mb-5">
                                            <h2 className="fz-36 fw-700">Mission</h2>
                                            <p className="fz-18 fw-400">
                                                To enhance people’s lives by continually thinking forward, anticipating
                                                trends and above all understanding what those trends mean for our clients
                                                and our business. We partner with developers to create beautifully designed
                                                homes and sustainable communities. We are creating someone’s home, so one
                                                may live invest and prosper
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <h2 className="fz-36 fw-700">Message from CEO</h2>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <p className="fz-18 fw-400">
                                            August has succeeded in maintaining a leading position amongst real
                                            estate companies in Europe & UAE by delivering an exceptional financial
                                            performance and committing to the quality of our presented assets, but
                                            also to our strategy which is based on empowering and developing despite
                                            the many challenges being facing globally and economically for the last
                                            few years.
                                            <br /> <br />
                                            Our resilience against these challenges is a testimonial for the existence
                                            of all success factors that guaranteed our sound expansion and development
                                            since our inception until today. As part of a larger conglomerate holding
                                            company we are well positioned to manage through market uncertainties and
                                            take advantage of any improvement in conditions.
                                            <br /> <br />
                                            Our values and ethics have always been the main determinant of any
                                            action we take which also resulted in gaining trust from all August
                                            stakeholders whether developers, landlord, tenants, financial institutions
                                            and our human capital.
                                        </p>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <p className="fz-18 fw-400">
                                            2019 marked a new beginning for us entering the Turkish Market.
                                            We feel there is significant potential especially in Istanbul,
                                            given its global connectivity, tourism, shopping and young dynamic
                                            population, a truly magnificent city where we feel our proposition
                                            – of respected and impressive – is highly relevant.
                                            <br /> <br />
                                            In 2020 we invested more heavily in people, including new remuneration
                                            structures, a higher number of negotiators focused on lettings and
                                            additional property managers to enhance our service to landlords. We
                                            believe our investment in technology, our people, and our brand over
                                            the last year has been a key driver of the improved performance and
                                            we expect to continue to see its benefit.
                                            <br /> <br />
                                            Last but not least, I would like to thank you again for your interest
                                            in August and I invite you to continue surfing our website to learn
                                            more about our services and solutions we provide for potential investors
                                            who are looking for compelling opportunities in the international markets
                                            to help them diversify their risk and investment portfolios.
                                        </p>
                                    </Col>
                                </Row>
                                <div className="d-flex align-items-center mt-5 py-5">
                                    <img className="d-block mr-3" src={Imtiaz} alt="" style={{ width: '115px', height: '82px', borderRadius: '4px' }} />
                                    <div>
                                        <h5 className="fz-22 fw-700">Omar Imtiaz</h5>
                                        <p className="fz-22 fw-400">Imtiaz Holding</p>
                                    </div>
                                </div>
                            </Container>
                        </>
                    }

                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        staticContents: state.staticContents.staticContents,
        staticContents_loading: state.staticContents.isLoading
    }
}

export default connect(mapStateToProps)(AboutUs);