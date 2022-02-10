// General
import React, { useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useCurrency } from '../Providers/currencyparites/CurrencyParites';
import { filterPropertySearch, defaultValues } from '../Helpers/General.helpers';

// api
import requests from '../api/ApiRequests';

// import components / containers
import CardSlide from '../Containers/Home/Components/CardSlide';
import SearchList from '../Containers/Property/SearchList';
import BottomNav from '../Containers/Property/BottomNav';
import Heads from '../Containers/Property/Components/Heads';
import PrProjectsPanel from '../Containers/Propertylist/PrProjectsPanel';
import MapViewCard from '../Containers/Property/Components/MapViewCard';
import SearchMap from '../Components/Googlemaps/SearchMap';
import SPagination from '../Components/general/SPagination';
import AugustLoading from '../Components/general/AugustLoading';

// Export Default -------------------------------------------- [ Function ]
const PropertyList = ({
    lang,
    properties,
    properties_isLoading,
    filtered_properties,
    is_filtering_properties
}) => {
    const { settedCurrency, currencyParitesData, isPending: ispending_currency } = useCurrency();
    const [activePag, setActivePag] = useState(0)
    const [pagPage, setPagPage] = useState(0)

    const handlePags = (number) => {
        setActivePag(number);
        setPagPage(number * 21);
        window.scrollTo(0, 0);
    }

    // General
    const [sideView, setSideView] = useState(false);
    const [isMapView, setIsMapView] = useState(false);
    const [activeMarker, setActiveMarker] = useState(null);
    const [isMobileListOpened, setisMobileListOpened] = useState(false);

    // Buy Rent
    const [buyRent, setBuyRent] = useState(false);

    // Sort
    const [sort, setSort] = useState("LTH");

    // places filter
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    // Side View
    const handleClick = () => {
        if (!sideView) {
            setSideView(true);
        } else {
            setSideView(false);
        }
    }

    // Map Markers
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) return
        setActiveMarker(marker)
    }

    const handleChangePlacesFilter = (city_types, all_places) => {
        if (city_types.length !== 0) {
            setFilteredPlaces([]);

            for (let index = 0; index < city_types.length; index++) {
                const city_type_id = city_types[index];
                const fx = all_places.filter(place_object => place_object.city.id === city_type_id);
                setFilteredPlaces(prevState => {
                    return [...prevState, ...fx]
                })
            }
        } else {
            setFilteredPlaces([]);
        }
    }

    if (properties_isLoading) { return <AugustLoading /> } else {
        return (
            <>
                <SearchList
                    setBuy={() => setBuyRent(false)}
                    setRent={() => setBuyRent(true)}
                    buyRent={buyRent}
                    defaultValues={defaultValues(properties)}
                    handleChangePlacesFilter={handleChangePlacesFilter}
                    mobileShow={isMobileListOpened}
                    mobileCloser={() => setisMobileListOpened(false)}
                />
                <BottomNav
                    setLTH={() => setSort("LTH")}
                    setHTL={() => setSort("HTL")}
                    switchMapView={() => setIsMapView(true)}
                    switchListView={() => setIsMapView(false)}
                    isMapView={isMapView}
                    setisMobileListOpenedP={() => setisMobileListOpened(true)}
                    buyRent={buyRent}
                />

                {
                    (isMapView) ?
                        <main className="general-main-outher pages-main position-relative">
                            <SearchMap
                                propsData={properties}
                                activeMarker={activeMarker}
                                setNullMarker={() => setActiveMarker(null)}
                                lang={lang}
                            />
                            <div className={sideView ? "map-side-nav-outher-outher mp-closed" : "map-side-nav-outher-outher"} style={{ minHeight: '80vh' }}>
                                <div style={{ cursor: 'pointer' }} className="close-map-side" onClick={handleClick}>
                                    <i className="fal fa-angle-right"></i>
                                </div>
                                <div className="map-side-nav-outher p-3 w-100 h-100 overflow-y-auto">
                                    {
                                        filterPropertySearch(
                                            ((filtered_properties !== null) ? filtered_properties : properties),
                                            buyRent,
                                            ispending_currency,
                                            currencyParitesData,
                                            sort,
                                            settedCurrency
                                        ).map((dat) => {
                                            if (dat.map_coordinate) {
                                                return (
                                                    <MapViewCard
                                                        key={dat.id}
                                                        asking_price={dat.asking_price}
                                                        intro_text={dat.intro_text}
                                                        bathrooms={dat.bathrooms}
                                                        bedrooms={dat.bedrooms}
                                                        living={dat.living}
                                                        size_sq_mtr={dat.size_sq_mtr}
                                                        list_photo={dat.list_photo.formats.small.url}
                                                        updatedAt={dat.updatedAt}
                                                        slug={dat.Slug}
                                                        district={dat.district}
                                                        currency={dat.currency}
                                                        handleMarker={() => handleActiveMarker(dat.id)}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </main>
                        :
                        <main className="general-main-outher pages-main">
                            {
                                (is_filtering_properties) ? <div className="p-5 text-center"><Spinner animation="border" /></div> :
                                    <Container>
                                        <section className="w-100 d-flex index-main-head mt-2">
                                            <h1 className="fz-22 fw-700 c-B69956">
                                                {/* Narrow your search of Istanbul? */}
                                            </h1>
                                        </section>
                                        <Row>
                                            {
                                                (filteredPlaces.length !== 0) && filteredPlaces.map((distt) => (
                                                    <Heads
                                                        key={"" + Math.floor(Math.random() * 1000000 + 1000000)}
                                                        name={distt.title}
                                                        getLink={distt.Slug}
                                                        lang={lang}
                                                        img={distt.HomePageImage.url}
                                                    />
                                                ))
                                            }
                                        </Row>
                                        <Row>
                                            {
                                                filterPropertySearch(
                                                    ((filtered_properties !== null) ? filtered_properties : properties),
                                                    buyRent,
                                                    ispending_currency,
                                                    currencyParitesData,
                                                    sort,
                                                    settedCurrency
                                                ).splice(pagPage, 21).map((dat) => (
                                                    <Col key={dat.id} xs={12} md={6} lg={4} className="px-1">
                                                        <CardSlide
                                                            asking_price={dat.asking_price}
                                                            intro_text={dat.intro_text}
                                                            bathrooms={dat.bathrooms}
                                                            bedrooms={dat.bedrooms}
                                                            living={dat.living}
                                                            size_sq_mtr={dat.size_sq_mtr}
                                                            list_photo={
                                                                dat.list_photo.formats.small ?
                                                                    dat.list_photo.formats.small
                                                                    :
                                                                    dat.list_photo
                                                            }
                                                            updatedAt={dat.updatedAt}
                                                            slug={dat.Slug}
                                                            district={dat.district}
                                                            currency={dat.currency}
                                                            lang={lang}
                                                        />
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                        <SPagination
                                            filteredLength={(filtered_properties !== null) ? filtered_properties.length : properties.length}
                                            activePagS={activePag}
                                            handle={(number) => handlePags(number)}
                                        />

                                        {/* Bottom Projects */}
                                        <PrProjectsPanel fetchUrl={requests.projects} />
                                        {/* Bottom Projects End */}
                                    </Container>
                            }

                        </main>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        properties: state.properties.properties,
        properties_isLoading: state.properties.isLoading,
        lang: state.lang.lang,
        citiesData: state.cities.cities,
        citiesData_loading: state.cities.isLoading,
        filtered_properties: state.filterSearchList.filtered_properties,
        is_filtering_properties: state.filterSearchList.is_filtering_properties,
    }
}

export default connect(mapStateToProps)(PropertyList);
