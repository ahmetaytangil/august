import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AugustLoading from '../Components/general/AugustLoading';
import { connect } from 'react-redux';

// Export Default -------------------------------------------- [ Function ]
const PressAndMediaDetail = ({ news, isPending, lang, siteSettings_isPending, siteSettings }) => {
    let { slug } = useParams()
    const newsData = isPending ? null : news.filter(val => val.slug === slug);

    if (isPending || newsData === null || siteSettings_isPending) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content mb-4">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h search-pages d-flex align-items-end">
                            <div className="pages-banner-inner">
                                <p className="c-fff m-0 mt-2">
                                    <Link to={`/${lang}/news-and-media`}>
                                        <i className="fal fa-arrow-left fz-16 mr-2"></i>
                                        Back to News List
                                    </Link>
                                </p>
                                <h1 className="text-left so-h1 fw-700 fz-48 mb-0">
                                    {newsData[0].title}
                                </h1>
                                <p className="c-fff">
                                    {newsData[0].published_at}
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
                        <img
                            style={{ height: '350px' }}
                            className="w-100 d-block main-banner-img pages-banner-bg-img"
                            src={newsData[0].ListImage.url}
                            alt=""
                        />
                    </div>
                </section>
                <main className="general-main-outher pages-main">
                    <Container>
                        <h1 className="fz-24 fw-700">
                            {newsData[0].Subject}
                        </h1>
                        <p className='mb-5'>
                            {newsData[0].Content}
                        </p>
                        {
                            (newsData[0].SubContent) &&
                            <Row>
                                {
                                    newsData[0].SubContent.map(({ Aligment, content, header, list_order, main_image }) => {
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
        news: state.latestNews.all_news,
        isPending: state.latestNews.all_news_loading,
        lang: state.lang.lang,
        siteSettings_isPending: state.staticContents.siteSettings_isLoading,
        siteSettings: state.staticContents.siteSettings
    }
}

export default connect(mapStateToProps)(PressAndMediaDetail);