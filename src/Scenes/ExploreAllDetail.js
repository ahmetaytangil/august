// General
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';

// import images
import StarSvg from '../Assets/images/explorealldetail/stars.svg';
import HospitalSvg from '../Assets/images/explorealldetail/hospital.svg';
import UniversitySvg from '../Assets/images/explorealldetail/university.svg';
import MetroSvg from '../Assets/images/explorealldetail/metro.svg';
import BannerImg from '../Assets/images/pages/pages-banner-2.jpg';

// import components / containers
import CardSlide from '../Containers/Home/Components/CardSlide';
import PagesHead from '../Components/Pageshead/PagesHead';
import SimpleMap from '../Components/Googlemaps/SimpleMap';
import AugustLoading from '../Components/general/AugustLoading';


// Export Default -------------------------------------------- [ Function ]
const ExploreAllDetail = ({ lang, places_before, isPending }) => {
    const { slug } = useParams();
    const places = places_before !== null ? places_before.filter(val => val.Slug === slug) : null

    // ----------------------------------------- Render Content [ return ]
    if (isPending || places === null) {
        return <AugustLoading />
    } else {
        let place = places[0];
        const mapLocation = place.location.split(",");

        return (
            <>
                <PagesHead
                    pageName={`Explore ${place.title}`}
                    content={place.CoordinateText}
                    img={BannerImg}
                />
                <main className="general-main-outher pages-main">
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <Markdown>
                                    {place.Content}
                                </Markdown>
                            </Col>
                            <Col xs={12} md={6}>
                                {mapLocation &&
                                    <SimpleMap
                                        latZ={mapLocation[0]}
                                        lngZ={mapLocation[1]}
                                        h="450px"
                                    />
                                }
                                <div className="under-map w-100">
                                    <Row>
                                        <Col xs={4} className="mt-3">
                                            <div className="d-flex">
                                                <div className="mr-1 mr-md-2">
                                                    <img src={HospitalSvg} alt="" />
                                                </div>
                                                <div>
                                                    <p className="m-0 fw-700 lh-1 fz-18">
                                                        Hospital
                                                    </p>
                                                    <p className="m-0 fz-18">
                                                        {place.HospitalCount}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={4} className="mt-3">
                                            <div className="d-flex">
                                                <div className="mr-1 mr-md-2">
                                                    <img src={UniversitySvg} alt="" />
                                                </div>
                                                <div>
                                                    <p className="m-0 fw-700 lh-1 fz-18">
                                                        University
                                                    </p>
                                                    <p className="m-0 fz-18">
                                                        {place.UnivertyCount}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={4} className="mt-3">
                                            <div className="d-flex">
                                                <div className="mr-1 mr-md-2">
                                                    <img src={MetroSvg} alt="" />
                                                </div>
                                                <div>
                                                    <p className="m-0 fw-700 lh-1 fz-18">
                                                        Metro
                                                    </p>
                                                    <p className="m-0 fz-18">
                                                        {place.MetroCount}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                {
                                    place.TopPlaces.length !== 0 &&
                                    <div className="details-r-col-contents">
                                        <h1 className="fz-22 fw-700">
                                            Top Places
                                        </h1>
                                        {place.TopPlaces.map(({
                                            ListOrder,
                                            Name,
                                            District,
                                            Rate,
                                            id
                                        }) => (
                                            <div
                                                key={id}
                                                style={{ order: `${ListOrder}` }}
                                            >
                                                <p className="m-0 fw-700 lh-1">
                                                    {ListOrder}. {Name}
                                                </p>
                                                <p className="pl-3">
                                                    <span
                                                        className="d-inline-block mr-2"
                                                        style={{ width: 20 * Rate + 'px', overflow: 'hidden', verticalAlign: 'middle' }}
                                                    >
                                                        <img
                                                            src={StarSvg}
                                                            alt=""
                                                            className="d-inline-block"
                                                            style={{ width: '100px' }}
                                                        />
                                                    </span>
                                                    <span>
                                                        {District}
                                                    </span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                }

                            </Col>
                        </Row>
                        {place.Parts && place.Parts.map((item) => {
                            if (item.ShowImageRightSide === true) {
                                return (
                                    <div key={item.id}>
                                        <section className="w-100 d-flex index-main-head mt-5">
                                            <h1 className="fz-28 fw-700 general-center-all">
                                                <img className="mr-2" src={item.Icon.url} alt={item.Title} />
                                                {item.Title}
                                            </h1>
                                        </section>
                                        <div className="w-100">
                                            <Row>
                                                <Col xs={12} lg={7} className="mb-4">
                                                    <Markdown>
                                                        {item.Content}
                                                    </Markdown>
                                                </Col>
                                                {
                                                    item.Banner &&
                                                    <Col xs={12} lg={5} className="mb-4">
                                                        <img src={item.Banner.url} alt="" className="w-100 d-block mb-4" />
                                                    </Col>
                                                }
                                            </Row>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.id}>
                                        <section className="w-100 d-flex index-main-head mt-5">
                                            <h1 className="fz-28 fw-700 general-center-all">
                                                <img className="mr-2" src={item.Icon.url} alt={item.Title} />
                                                {item.Title}
                                            </h1>
                                        </section>
                                        <div className="w-100">
                                            <Row>
                                                {
                                                    item.Banner &&
                                                    <Col xs={12} lg={5} className="mb-4">
                                                        <img src={item.Banner.url} alt="" className="w-100 d-block mb-4" />
                                                    </Col>
                                                }
                                                <Col xs={12} lg={7} className="mb-4">
                                                    <Markdown>
                                                        {item.Content}
                                                    </Markdown>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <div className="mt-5">
                            <section className="w-100 d-flex index-main-head">
                                <h1 className="fz-28 fw-700 general-center-all">
                                    Home for Sales
                                </h1>
                            </section>
                            <Row>
                                {place.august_properties.map((proper) => (
                                    <Col xs={12} md={6} lg={4} key={proper.id}>
                                        <CardSlide
                                            asking_price={proper.asking_price}
                                            intro_text={proper.intro_text}
                                            bathrooms={proper.bathrooms}
                                            bedrooms={proper.bedrooms}
                                            living={proper.living}
                                            size_sq_mtr={proper.size_sq_mtr}
                                            list_photo={
                                                proper.list_photo.formats.small ?
                                                    proper.list_photo.formats.small
                                                    :
                                                    proper.list_photo
                                            }
                                            updatedAt={proper.updatedAt}
                                            slug={proper.Slug}
                                            district={proper.district}
                                            currency={proper.currency}
                                            lang={lang}
                                        />
                                    </Col>
                                ))}

                            </Row>
                        </div>
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        places_before: state.places.places,
        isPending: state.places.isLoading
    }
}

export default connect(mapStateToProps)(ExploreAllDetail)

