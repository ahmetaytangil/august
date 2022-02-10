import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PagesBanner from '../Assets/images/pages/pages-banner-2.jpg';
import AugustLoading from '../Components/general/AugustLoading';

const ServicesParts = ({ services, isPending, lang }) => {
    let { slug } = useParams();
    const servicesData = isPending ? null : services.filter(val => val.slug === slug);

    if (isPending) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content mb-4">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h search-pages d-block py-3">
                            <p className="c-fff m-0 mt-2">
                                <Link to={`/${lang}/services`}>
                                    <i className="fal fa-arrow-left fz-16 mr-2"></i> Back
                                </Link>
                            </p>
                            <div className="pages-banner-inner mt-4">
                                <h1 className="text-left so-h1 fw-700 fz-48 m-xl-0 mt-0">
                                    Services Parts
                                </h1>
                                <p className="c-fff fz-18 m-0">
                                    August offers a wide range of property related services,
                                    from residential and commercial sales and lettings to robust asset
                                    management and investment advice.
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
                    <div className="container">
                        <Row>
                            {servicesData !== null && servicesData[0].august_service_parts.map((service) => (
                                <Col xs={12} lg={6} className="mb-4" key={service.id}>
                                    <Link to={{
                                        pathname: `/${lang}/services/parts/details/${service.slug}`,
                                        state: { parentSlug: servicesData[0].slug }
                                    }}>
                                        <div className="d-flex h-100 our-services-card-outher py-4 px-3">
                                            <div className="mr-2">
                                                <img src={service.Icon.url} alt="" />
                                            </div>
                                            <div className="p-2">
                                                <h5 className="m-0 fw-700 c-4d4 fz-26">{service.title}</h5>
                                                <p className="fz-14 c-000 m-0">{service.Subject}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.services.services,
        isPending: state.services.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(ServicesParts);