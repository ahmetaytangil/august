import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import BannerImg from '../Assets/images/pages/pages-banner-2.jpg';
import SelectBackgroundImg from '../Assets/images/general/select-after.svg';
import CareersCard from '../Containers/Careers/Components/CareersCard';
import PagesHead from '../Components/Pageshead/PagesHead';
import AugustLoading from '../Components/general/AugustLoading';

const Careers = ({ careers, careers_loading }) => {
    const arrow = { background: `#fff url(${SelectBackgroundImg}) no-repeat right .75rem center/8px 10px` };
    if (careers_loading) { return <AugustLoading /> } else {
        return (
            <>
                <PagesHead
                    pageName="Careers"
                    content="Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen 
                    book. It has survived not only five centuries,"
                    img={BannerImg}
                />
                <main className="general-main-outher pages-main">
                    <Container>
                        <Row>
                            <Col xs={6} md={3} className="mb-4">
                                <section className="border pb-1 w-100">
                                    <label className="pl-2 m-0" htmlFor="year">
                                        CATEGORIES
                                    </label>
                                    <select
                                        id="year"
                                        className="form-control custom-select h-100 fw-700 w-100"
                                        style={arrow}
                                    >
                                        <option>Sales</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </section>
                            </Col>
                            <Col xs={6} md={3} className="mb-4">
                                <section className="border pb-1 w-100">
                                    <label className="pl-2 m-0" htmlFor="all-categories">LOCATION</label>
                                    <select
                                        id="all-categories"
                                        className="form-control custom-select h-100 fw-700 w-100"
                                        style={arrow}
                                    >
                                        <option>Istanbul</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </section>
                            </Col>
                        </Row>
                        <section className="w-100 d-flex index-main-head mt-2">
                            <h1 className="fz-28 fw-700">
                                Vacancies
                            </h1>
                        </section>
                        <Row>
                            {careers !== null && careers.map((item) => (
                                <CareersCard
                                    key={item.id}
                                    subject={item.Subject}
                                    content={item.Content}
                                    refNo={item.RefNo}
                                    createdAt={item.createdAt}
                                />
                            ))}
                        </Row>
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        careers: state.careers.careers,
        careers_loading: state.careers.isLoading
    }
}

export default connect(mapStateToProps)(Careers)
