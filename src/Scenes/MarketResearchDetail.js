import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AugustLoading from '../Components/general/AugustLoading';

const MarketResearchDetail = ({ marketResearches, marketResearches_loading, lang, siteSettings_isPending, siteSettings }) => {
    let { slug } = useParams();
    const marketResearch = marketResearches !== null ? marketResearches.filter(val => val.slug === slug) : null;
    const d = marketResearches_loading ? false : new Date(marketResearch[0].published_at);
    const year = marketResearches_loading ? false : d.getFullYear();
    const date = marketResearches_loading ? false : d.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = marketResearches_loading ? false : monthNames[d.getMonth()];

    console.log(marketResearch);

    if (marketResearches_loading || marketResearches === null || marketResearch === null || siteSettings_isPending) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content mb-4">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h search-pages d-flex align-items-end">
                            <div className="pages-banner-inner">
                                <p className="c-fff m-0 mt-2">
                                    <Link to={`/${lang}/market-research`}>
                                        <i className="fal fa-arrow-left fz-16 mr-2"></i> Back to market research List
                                    </Link>
                                    <h1 className="text-left so-h1 fw-700 fz-48 mb-0">{marketResearch[0].title}</h1>
                                    <p className="c-fff">
                                        {year && year} {month && month} {date && date}
                                    </p>
                                </p>
                            </div>
                            <div className="pages-banner-footer c-fff pb-4 text-right">
                                <a href={`${siteSettings[0].facebook_url}`} target="_blank">
                                    <i className="fab fa-facebook-square fz-20 mr-2" style={{ opacity: ".7" }}></i>
                                </a>
                                <a href={`${siteSettings[0].twitter_url}`} target="_blank">
                                    <i className="fab fa-twitter fz-20 mr-2" style={{ opacity: ".7" }}></i>
                                </a>
                                <a href={`${siteSettings[0].linkedin_url}`} target="_blank">
                                    <i className="fab fa-linkedin fz-20 mr-2" style={{ opacity: ".7" }}></i>
                                </a>
                            </div>
                        </div>
                        <img style={{ height: '350px' }} className="w-100 d-block main-banner-img pages-banner-bg-img" src={marketResearch[0].ListImage.url} alt="" />
                    </div>
                </section>
                <main className="general-main-outher pages-main">
                    <Container>
                        <p className='mb-5'>{marketResearch[0].Content}</p>
                        {
                            (marketResearch[0].SubContent) &&
                            <Row>
                                {
                                    marketResearch[0].SubContent.map(({ Aligment, content, header, list_order, main_image }) => {
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
                    <div className='container mt-5'>
                        <h4 className='fz-18 fw-700 c-000 pb-2 mt-3 border-bottom mb-4'>Link Files</h4>
                        <ul>
                            {
                                (marketResearch[0].LinkFiles) &&
                                marketResearch[0].LinkFiles.map(link => (
                                    <li key={link.id} className='d-inline-block mr-5'>
                                        <a href={link.url} target='_blank' className='c-links fz-14'>
                                            {link.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        marketResearches: state.marketResearches.marketResearches,
        marketResearches_loading: state.marketResearches.isLoading,
        lang: state.lang.lang,
        siteSettings_isPending: state.staticContents.siteSettings_isLoading,
        siteSettings: state.staticContents.siteSettings
    }
}

export default connect(mapStateToProps)(MarketResearchDetail)