import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import BannerBG from '../Assets/images/pages/pages-banner-1.jpg';
import AugustLoading from '../Components/general/AugustLoading';
import PlaceItem from '../Containers/Home/Components/PlaceItem';

const ExploreAll = ({ lang, places, places_loading }) => {
    if (places_loading || places === null) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h">
                            <div className="pages-banner-inner">
                                <h1 className="text-center so-h1 fw-700 fz-40">
                                    Find your dream home
                                </h1>
                            </div>
                        </div>
                        <img
                            className="w-100 d-block main-banner-img pages-banner-bg-img"
                            src={BannerBG}
                            alt="August property"
                        />
                    </div>
                </section>
                <main>
                    <Container>
                        <section className="w-100 d-flex index-main-head mt-5">
                            <h1 className="fz-28 fw-700">
                                TURKEY
                            </h1>
                        </section>
                        <Row>
                            {places !== null && places.map((item) => (
                                <PlaceItem
                                    key={item.id}
                                    cityName={item.title}
                                    location={item.CoordinateText}
                                    screenLg={4}
                                    img={item.HomePageImage.url}
                                    linkk={`/${lang}/places/${item.Slug}`}
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
        places: state.places.places,
        places_loading: state.places.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(ExploreAll);