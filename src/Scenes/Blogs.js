import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import AugustLoading from '../Components/general/AugustLoading';

const Blogs = ({ lang, blogs, blogs_loading }) => {
    if (blogs_loading || blogs === null) { return <AugustLoading /> } else {
        return (
            <Container className="mt-5">
                <h1>
                    Blogs
                </h1>
                <Row>
                    {blogs !== null && blogs.map((item) => (
                        <Col xs={12} md={6} key={item.id} className="mb-4">
                            <Link to={`/${lang}/blogs/${item.slug}`}>
                                <div className="main-blog-outher p-3">
                                    {item.blog_categories.map((categories) => {
                                        return (
                                            <h5 key={categories.id} className="m-0 fz-18 fw-700">
                                                {categories.Name}
                                            </h5>
                                        )
                                    })}
                                    <p className="m-0 fw-700 fz-22">
                                        {item.title}
                                    </p>
                                </div>
                                <img
                                    src={item.PrimaryImage.url}
                                    alt="August property"
                                    className="w-100 d-block"
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs,
        blogs_loading: state.blogs.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(Blogs);