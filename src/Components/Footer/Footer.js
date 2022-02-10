import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouteMatch } from 'react-router'
import { connect } from 'react-redux'

const Footer = ({ lang, siteSettings, services, home_blogs }) => {
    let home = useRouteMatch(`/${lang}/home`);
    let footerClassesHome = "general-footer w-100 pt-4";
    let footerClassesPages = "general-footer pages-footer w-100 pt-4";
    let footerClasses = home ? footerClassesHome : footerClassesPages;

    return (
        <footer className={footerClasses}>
            <Container>
                <Row>
                    <Col xs={6} sm={4} lg={3}>
                        <ul>
                            <li className="c-fff fw-700 mb-2">
                                Company
                            </li>
                            <li className="mb-1">
                                <Link to={`/${lang}/company/about-us`} className="fz-14 c-fff fw-400">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link to={`/${lang}/contact-us`} className="fz-14 c-fff fw-400">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link to={`/${lang}/personels`} className="fz-14 c-fff fw-400">
                                    Personels
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={4} lg={3}>
                        <ul>
                            <li className="c-fff fw-700 mb-2">
                                Services
                            </li>
                            <li className="mb-1">
                                <Link to={`/${lang}/services`} className="fz-14 c-fff fw-400">
                                    Our Services
                                </Link>
                            </li>
                            {services !== null &&
                                services.filter(val => val.ShowInFooter === true).map((service) => (
                                    <li key={service.id} className="mb-1">
                                        <Link to={service.august_service_parts[0] ? `/${lang}/services/parts/${service.slug}` : `/${lang}/services/detail/${service.slug}`} className="fz-14 c-fff fw-400">
                                            {service.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col xs={6} sm={4} lg={3} className="mt-5 mt-sm-0">
                        <ul>
                            <li className="c-fff fw-700 mb-2">
                                Explore
                            </li>
                            <li className="mb-1">
                                <Link to={`/${lang}/blogs`} className="fz-14 c-fff fw-400">
                                    Blogs
                                </Link>
                            </li>
                            {home_blogs !== null &&
                                home_blogs.map(({ title, slug, id }) => (
                                    <li key={id} className="mb-1">
                                        <Link to={`/${lang}/blogs/${slug}`} className="fz-14 c-fff fw-400">
                                            {title.substring(0, 33)}...
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col xs={6} sm={4} lg={3} className="mt-5 mt-sm-0 pl-lg-5">
                        <ul>
                            <li className="c-fff fw-700 mb-2">
                                Social Media
                            </li>
                            <li>
                                <a href={`${siteSettings.instagram_url}`} target="_blank" className="fz-14 c-fff fw-400">
                                    <span className="d-inline-block text-center" style={{ width: '30px', marginLeft: '-5px' }}><i className="fab fa-instagram mr-1 fz-20"></i></span>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href={`${siteSettings.facebook_url}`} target="_blank" className="fz-14 c-fff fw-400">
                                    <span className="d-inline-block text-center" style={{ width: '30px', marginLeft: '-5px' }}><i className="fab fa-facebook-square mr-1 fz-20"></i></span>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href={`${siteSettings.twitter_url}`} target="_blank" className="fz-14 c-fff fw-400">
                                    <span className="d-inline-block text-center" style={{ width: '30px', marginLeft: '-5px' }}><i className="fab fa-twitter mr-1 fz-20"></i></span>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href={`${siteSettings.youtube_url}`} target="_blank" className="fz-14 c-fff fw-400">
                                    <span className="d-inline-block text-center" style={{ width: '30px', marginLeft: '-5px' }}><i className="fab fa-youtube mr-1 fz-20"></i></span>
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a href={`${siteSettings.linkedin_url}`} target="_blank" className="fz-14 c-fff fw-400">
                                    <span className="d-inline-block text-center" style={{ width: '30px', marginLeft: '-5px' }}><i className="fab fa-linkedin mr-1 fz-20"></i></span>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={`${siteSettings.vk_url}`} target="_blank" className="fz-14 c-fff fw-400">
                                    <span className="d-inline-block text-center" style={{ width: '30px', marginLeft: '-5px' }}><i className="fab fa-vk mr-1 fz-20"></i></span>
                                    VK
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="w-100 border-top py-3 mt-5">
                <Container>
                    <div className="d-flex footer-bottom">
                        <div className="d-flex align-items-center fd-column-md">
                            <h1 className="m-0 fw-700 fz-24 mr-3">
                                AUGUST PROPERTY
                            </h1>
                            <p className="m-0 f-powered-by">
                                powered by <span className="c-fff"> Imtiaz Holding</span>
                            </p>
                        </div>
                        <div className="d-flex align-items-center mt-5 mt-lg-0">
                            <Link to={`/${lang}/company/privacy-policy`} className="">
                                Privacy Policy
                            </Link>
                            <span className="mx-3">|</span>
                            <Link to={`/${lang}/company/terms-conditions`} className="">
                                {'Terms & Conditions'}
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

const mapStateToProps = (state) => {
    return {
        services: state.services.services,
        home_blogs: state.blogs.home_blogs,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(Footer)
