import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PagesBanner from '../Assets/images/pages/pages-banner-2.jpg';
import AugustLoading from '../Components/general/AugustLoading';
import { connect } from 'react-redux';

const ServicesPartsDetail = ({ lang, services, isPending }) => {
    let { slug } = useParams();
    const servicesData = isPending ? null : services.filter(val => val.slug === slug);

    if (isPending || servicesData === null) { return <AugustLoading /> } else {
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
                                    {servicesData[0].title}
                                </h1>
                                <p className="c-fff fz-18 m-0">
                                    {servicesData[0].Subject}
                                </p>
                            </div>
                        </div>
                        <img
                            src={PagesBanner}
                            alt="August property"
                            className="w-100 d-block main-banner-img pages-banner-bg-img"
                        />
                    </div>
                </section>
                <main className="general-main-outher pages-main">
                    <div className="container">
                        <section className="w-100 d-flex index-main-head mt-2">
                            <h1 className="fz-28 fw-700">Please see below to gain in depth knowledge of our offerings.</h1>
                        </section>
                        <p>
                            {servicesData[0].Content}
                        </p>
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

export default connect(mapStateToProps)(ServicesPartsDetail);
