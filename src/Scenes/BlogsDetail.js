import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AugustLoading from '../Components/general/AugustLoading';
import { connect } from 'react-redux';

const PressAndMediaDetail = ({ lang, blogs, isPending, siteSettings_isPending, siteSettings }) => {
    let { slug } = useParams();
    const blogsData = isPending ? false : blogs.filter(val => val.slug === slug);
    const d = isPending ? false : new Date(blogsData[0].published_at);
    const year = isPending ? false : d.getFullYear();
    const date = isPending ? false : d.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = isPending ? false : monthNames[d.getMonth()];

    console.log(blogsData);

    if (isPending || siteSettings_isPending || blogsData === null || blogs === null) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content mb-4">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h search-pages d-flex align-items-end">
                            <div className="pages-banner-inner">
                                <p className="c-fff m-0 mt-2">
                                    <Link to={`/${lang}/blogs`}>
                                        <i className="fal fa-arrow-left fz-16 mr-2"></i> Back to Blogs List
                                    </Link>
                                </p>
                                <h1 className="text-left so-h1 fw-700 fz-48 mb-0">{blogsData[0].title}</h1>
                                <p className="c-fff">
                                    {year && year} {month && month} {date && date}
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
                        <img style={{ height: '350px' }} className="w-100 d-block main-banner-img pages-banner-bg-img" src={blogsData[0].PrimaryImage.url} alt="" />
                    </div>
                </section>

                <main className="general-main-outher pages-main">
                    <Container>
                        <p className='mb-5'>{blogsData[0].Content}</p>
                        {
                            (blogsData[0].SubContents) &&
                            <Row>
                                {
                                    blogsData[0].SubContents.map(({ Aligment, content, header, list_order, main_image }) => {
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
                        <Row>

                        </Row>
                    </Container>
                </main>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs,
        isPending: state.blogs.isLoading,
        lang: state.lang.lang,
        siteSettings_isPending: state.staticContents.siteSettings_isLoading,
        siteSettings: state.staticContents.siteSettings
    }
}

export default connect(mapStateToProps)(PressAndMediaDetail);