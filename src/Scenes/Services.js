import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PagesBanner from '../Assets/images/pages/pages-banner-2.jpg';
import AugustLoading from '../Components/general/AugustLoading';
import PagesHead from '../Components/Pageshead/PagesHead';

const Services = ({ servicesData, isPending, lang }) => {
    if (isPending) { return <AugustLoading /> } else {
        return (
            <>
                <PagesHead
                    type="general"
                    pageName="Our Services"
                    content="August offers a wide range of property related services, from residential and commercial sales and lettings to robust asset management and investment advice."
                    img={PagesBanner}
                />
                <main className="general-main-outher pages-main">
                    <div className="container">
                        <section className="w-100 d-flex index-main-head mt-2">
                            <h1 className="fz-28 fw-700">Please see below to gain in depth knowledge of our offerings.</h1>
                        </section>
                        <Row>
                            {servicesData.map((service) => (
                                <Col xs={12} lg={6} className="mb-4" key={service.id}>
                                    <Link to={service.august_service_parts[0] ? `/${lang}/services/parts/${service.slug}` : `/${lang}/services/detail/${service.slug}`}>
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
        servicesData: state.services.services,
        isPending: state.services.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(Services);
