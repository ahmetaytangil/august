import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PagesBanner from '../Assets/images/pages/pages-banner-2.jpg';
import useFetch from '../api/useFetch';
import requests from '../api/ApiRequests';
import AugustLoading from '../Components/general/AugustLoading';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesPartsDetail = ({ lang }) => {
    let { slug } = useParams();
    let history = useHistory();
    const { data: servicesData, isPending } = useFetch(`${requests.serviceParts}?slug=${slug}`);

    if (isPending || servicesData === null) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content mb-4">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h search-pages d-block py-3">
                            {
                                (history.location.state.parentSlug) &&
                                <p className="c-fff m-0 mt-2">
                                    <Link to={`/${lang}/services/parts/${history.location.state.parentSlug}`}>
                                        <i className="fal fa-arrow-left fz-16 mr-2"></i> Back
                                    </Link>
                                </p>
                            }

                            <div className="pages-banner-inner mt-4">
                                <h1 className="text-left so-h1 fw-700 fz-48 m-xl-0 mt-0">
                                    {servicesData[0].title}
                                </h1>
                                <p className="c-fff fz-18 m-0">
                                    {servicesData[0].Subject}
                                </p>
                            </div>
                        </div>
                        <img
                            src={PagesBanner}
                            alt=""
                            className="w-100 d-block main-banner-img pages-banner-bg-img"
                        />
                    </div>
                </section>
                <main className="general-main-outher pages-main">
                    <Container>
                        <p className='mb-5'>
                            {servicesData[0].content}
                        </p>
                        {
                            (servicesData[0].SubContent) &&
                            <Row>
                                {
                                    servicesData[0].SubContent.map(({ Aligment, content, header, list_order, main_image }) => {
                                        if (Aligment === "Ltr") {
                                            return (
                                                <>
                                                    {
                                                        (content && header) &&
                                                        <Col md={6} className='mb-5' style={{ order: Number(list_order) }}>
                                                            <h4>{header}</h4>
                                                            <p>{content}</p>
                                                        </Col>
                                                    }
                                                    {
                                                        (main_image) &&
                                                        <Col md={6} className='mb-5' style={{ order: Number(list_order) }}>
                                                            <img src={main_image.url} className='w-100' />
                                                        </Col>
                                                    }
                                                </>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    {
                                                        (main_image) &&
                                                        <Col md={6} className='mb-5' style={{ order: Number(list_order) }}>
                                                            <img src={main_image.url} className='w-100' />
                                                        </Col>
                                                    }
                                                    {
                                                        (content && header) &&
                                                        <Col md={6} className='mb-5' style={{ order: Number(list_order) }}>
                                                            <h4>{header}</h4>
                                                            <p>{content}</p>
                                                        </Col>
                                                    }
                                                </>
                                            )
                                        }
                                    })
                                }
                            </Row>
                        }
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(ServicesPartsDetail);
