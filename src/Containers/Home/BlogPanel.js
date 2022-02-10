// General
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import components / containers
import Head from '../../Components/general/Head';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

const BlogPanel = ({ lang, home_blogs, home_blogs_error_message }) => {
    if (home_blogs_error_message !== null) {
        return (
            <ErrorMessage message={home_blogs_error_message} />
        )
    } else {
        return (
            <Container>
                <Head
                    thislink={`/${lang}/blogs`}
                    headInner="Blog"
                    buttonInner="ALL BLOG POSTS"
                />
                {
                    (home_blogs !== null) &&
                    <Row>
                        {
                            home_blogs.map((item) => (
                                <Col
                                    key={item.id}
                                    xs={12}
                                    md={6}
                                    className="mb-4 position-relative"
                                >
                                    <Link to={`/${lang}/blogs/${item.slug}`}>
                                        <div className="main-blog-outher p-3">
                                            {
                                                item.blog_categories.map((categories) => (
                                                    <h5 key={categories.id} className="m-0 fz-18 fw-700">
                                                        {categories.Name}
                                                    </h5>
                                                ))
                                            }
                                            <p className="m-0 fw-700 fz-22">
                                                {item.title}
                                            </p>
                                        </div>
                                        <img
                                            src={item.PrimaryImage.url}
                                            alt=""
                                            className="w-100 d-block"
                                        />
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                }

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home_blogs: state.blogs.home_blogs,
        home_blogs_error_message: state.blogs.home_blogs_error_message
    }
}

export default connect(mapStateToProps)(BlogPanel)