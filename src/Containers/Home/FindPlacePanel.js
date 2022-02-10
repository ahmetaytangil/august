// General
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

// import components / containers
import Head from '../../Components/general/Head';
import PlaceItem from './Components/PlaceItem';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';


// Export Default -------------------------------------------- [ Function ]
const FindPlacePanel = ({ lang, home_places, home_places_error_message }) => {
    if (home_places_error_message !== null) {
        return (
            <ErrorMessage message={home_places_error_message} />
        )
    } else {
        return (
            <Container>
                <Head
                    thislink={`/${lang}/places`}
                    headInner="Find the Neighborhood For You"
                    buttonInner="ALL PLACES"
                />
                {
                    (home_places !== null) &&
                    <Row className="justify-content-center">
                        {
                            home_places.map((item) => (
                                <PlaceItem
                                    key={item.id}
                                    cityName={item.title}
                                    location={item.CoordinateText}
                                    screenLg={4}
                                    img={item.HomePageImage.formats.thumbnail.url}
                                    linkk={`/${lang}/places/${item.Slug}`}
                                />
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
        home_places: state.places.home_places,
        home_places_error_message: state.places.home_places_error_message
    }
}

export default connect(mapStateToProps)(FindPlacePanel);

