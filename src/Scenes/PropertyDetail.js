// General
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
import Chart from "react-google-charts";

// import images 
import FavoriteSvg from '../Assets/images/general/favorite-black.svg';
import ShareSvg from '../Assets/images/general/share-black.svg';
import BrochureSvg from '../Assets/images/general/brochure-black.svg';
import Energy1 from '../Assets/images/property/energy-1.jpg';
import Energy2 from '../Assets/images/property/energy-2.jpg';

// Components
import Icon from '../Components/general/Icon';
import CardSlide from '../Containers/Home/Components/CardSlide';
import PRCarouselPanel from '../Containers/Propertydetail/PRCarouselPanel';
import PropertyHeadPanel from '../Containers/Propertydetail/PropertyHeadPanel';
import BreadCrumbs from '../Components/Breadcrumbs/BreadCrumbs';
import SimpleMap from '../Components/Googlemaps/SimpleMap';

// context
import { useAuth } from '../Providers/firebase/contexts/AuthContext';

// FancyBox
import "@fancyapps/ui/dist/fancybox.css";
import AugustLoading from '../Components/general/AugustLoading';
import { connect } from 'react-redux';
import ShareButton from 'react-social-share-buttons'

// Export Default -------------------------------------------- [ Function ]
const PropertyDetail = ({ lang, properties, isPending2, placesData, isPending }) => {
    let { slug } = useParams();
    let location = useLocation();

    const prpsData = isPending2 ? null : properties.filter(val => val.Slug === slug);

    const [addedCart, setaddedCart] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { currentUser, writeUserData, databaseState, writeLastVisitedData } = useAuth();

    const randomProperty1 = isPending2 ? null : properties[Math.floor(Math.random() * properties.length)];
    const randomProperty2 = isPending2 ? null : properties[Math.floor(Math.random() * properties.length)];
    const randomProperty3 = isPending2 ? null : properties[Math.floor(Math.random() * properties.length)];

    let routedItem = isPending2 ? null : prpsData[0];

    const numFormat = routedItem !== null ? routedItem.asking_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : null;
    let asking_price = numFormat;

    let str = routedItem !== null ? routedItem.key_features : null;
    const getArr = routedItem !== null ? str.split("-") : null;

    let keyFeatures = routedItem !== null ? getArr.filter(function (thisstr) { return /\S/.test(thisstr) }) : null;
    let askingChart = routedItem !== null ? Number(asking_price) : null;
    let mapCoordinate = routedItem !== null ? routedItem.map_coordinate : false;
    let coordinateArr = mapCoordinate ? mapCoordinate.split(",") : null;

    const addToCart = () => {
        const isNotCart = element => element.id !== routedItem.id;
        const isInCart = element => element.id === routedItem.id;

        if (currentUser) {
            if (databaseState.currentUser_cart !== null) {
                if (databaseState.currentUser_cart.some(isInCart)) {
                    setaddedCart(true);
                } else if (databaseState.currentUser_cart.some(isNotCart)) {
                    writeUserData(
                        currentUser.uid,
                        [...databaseState.currentUser_cart, routedItem],
                        databaseState.currentUser_lastVisited
                    );
                    setaddedCart(true);
                } else {
                    writeUserData(currentUser.uid, [routedItem], databaseState.currentUser_lastVisited);
                    setaddedCart(true);
                }
            } else {
                writeUserData(currentUser.uid, [routedItem], databaseState.currentUser_lastVisited);
            }
        }

        setaddedCart(true);
    }

    useEffect(() => {
        let unmounted = true;
        if (unmounted) {
            const isNotInLastVisited = element => element.id !== routedItem.id;

            if (routedItem !== null && currentUser) {
                if (slug === routedItem.Slug && currentUser) {
                    if (databaseState.currentUser_lastVisited !== null) {
                        if (databaseState.currentUser_lastVisited.some(isNotInLastVisited)) {
                            writeLastVisitedData(
                                currentUser.uid,
                                databaseState.currentUser_cart,
                                [...databaseState.currentUser_lastVisited, routedItem]
                            )
                        }
                    } else {
                        writeUserData(currentUser.uid, databaseState.currentUser_cart, [routedItem]);
                    }
                }
            }
        }
        return () => unmounted = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    const setShowModalTRUE = () => {
        setShowModal(true);
    }

    const setShowModalFALSE = () => {
        setShowModal(false);
    }

    // Render -------------------------------------------- [ Return ]
    if (isPending || isPending2 || routedItem === null) { return <AugustLoading /> } else {
        return (
            <>
                <BreadCrumbs
                    thatSlug={routedItem.Slug}
                    country={routedItem.country}
                    city={routedItem.city}
                    district={routedItem.district}
                />
                <main className="general-main-outher pages-main">
                    <PRCarouselPanel
                        propertyData={routedItem}
                    />
                    <PropertyHeadPanel
                        price={asking_price}
                        photos={routedItem.photos}
                        floor_plan={routedItem.floor_plan}
                        district={routedItem.district}
                        currency={routedItem.currency}
                        showModal={showModal}
                        setShowModalTRUE={setShowModalTRUE}
                        setShowModalFALSE={setShowModalFALSE}
                    />
                    <div className="w-100 box-shadow-line">
                        <Container>
                            <div className="d-flex justify-content-between align-items-center fd-column-md">
                                <div className="pl-md-0 pl-3 pr-md-0 pr-3 beds-etc">
                                    <h5 className="fz-12 fw-700 c-534D m-0 lh-1 c-000">
                                        <span className="mr-3">
                                            <Icon src="bed" />
                                            <span style={{ verticalAlign: 'middle', paddingLeft: '2px' }}>Beds: {routedItem.bedrooms}</span>
                                        </span>
                                        <span className="mr-3">
                                            <Icon src="shower" />
                                            <span style={{ verticalAlign: 'middle', paddingLeft: '2px' }}>Baths: {routedItem.bathrooms}</span>
                                        </span>
                                        <span className="mr-3">
                                            <svg style={{ paddingBottom: '2px' }} width="22" height="17" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.518 7.03804C11.2306 7.24141 10.9843 7.4974 10.7921 7.79246C10.7694 7.82726 10.7538 7.8662 10.7461 7.90704C10.7385 7.94788 10.7389 7.98983 10.7475 8.0305C10.7561 8.07116 10.7725 8.10974 10.796 8.14403C10.8195 8.17833 10.8495 8.20766 10.8843 8.23037C10.9191 8.25307 10.958 8.2687 10.9988 8.27636C11.0397 8.28401 11.0816 8.28355 11.1223 8.275C11.163 8.26644 11.2015 8.24996 11.2358 8.2265C11.2701 8.20303 11.2995 8.17304 11.3222 8.13824C11.4708 7.90978 11.6615 7.71157 11.8839 7.5541C11.9518 7.50534 11.9976 7.43172 12.0114 7.3493C12.0251 7.26689 12.0058 7.18237 11.9574 7.1142C11.9091 7.04603 11.8358 6.99974 11.7535 6.98543C11.6711 6.97113 11.5865 6.98996 11.518 7.03783V7.03804Z" fill="black" />
                                                <path d="M5.7876 20.6061H3.46834V6.1115C3.46834 6.10623 3.46908 6.10138 3.46908 6.09621C3.46908 3.59381 5.39958 1.55794 7.77247 1.55794C10.0536 1.55794 11.9249 3.43982 12.0662 5.8086C11.3882 5.88919 10.7633 6.21541 10.3096 6.72555C9.85586 7.2357 9.60478 7.89442 9.60383 8.57715V9.07154C9.60383 9.15545 9.63716 9.23593 9.6965 9.29527C9.75584 9.35461 9.83632 9.38794 9.92023 9.38794H11.3282C11.4681 9.89419 11.9203 10.2681 12.45 10.2681C12.9797 10.2681 13.4319 9.8944 13.5717 9.38794H14.8641C14.948 9.38794 15.0285 9.35461 15.0879 9.29527C15.1472 9.23593 15.1805 9.15545 15.1805 9.07154V8.57715C15.1796 7.89135 14.9264 7.22987 14.469 6.71883C14.0116 6.2078 13.3822 5.88297 12.7007 5.80628C12.5567 3.08924 10.4015 0.925026 7.77252 0.925026C5.05976 0.925026 2.85135 3.22952 2.83658 6.06773C2.83605 6.07506 2.83547 6.08239 2.83547 6.08983V20.606H0.84375C0.759834 20.606 0.679355 20.6394 0.620017 20.6987C0.560679 20.758 0.527344 20.8385 0.527344 20.9224C0.527344 21.0063 0.560679 21.0868 0.620017 21.1462C0.679355 21.2055 0.759834 21.2388 0.84375 21.2388H5.7876C5.87151 21.2388 5.95199 21.2055 6.01133 21.1462C6.07067 21.0868 6.104 21.0063 6.104 20.9224C6.104 20.8385 6.07067 20.758 6.01133 20.6987C5.95199 20.6394 5.87151 20.606 5.7876 20.606V20.6061ZM12.45 9.63542C12.3623 9.63402 12.2763 9.61064 12.2 9.56742C12.1237 9.5242 12.0595 9.46253 12.0132 9.38805H12.8867C12.8404 9.46252 12.7762 9.52419 12.6999 9.5674C12.6236 9.61062 12.5376 9.63401 12.45 9.63542ZM14.5477 8.57715V8.75513H10.2366V8.57715C10.2366 8.00547 10.4637 7.45721 10.868 7.05297C11.2722 6.64873 11.8205 6.42163 12.3922 6.42163C12.9638 6.42163 13.5121 6.64873 13.9163 7.05297C14.3206 7.45721 14.5477 8.00547 14.5477 8.57715Z" fill="black" />
                                                <path d="M24.9783 15.7174V13.6238C24.9752 13.2707 24.8321 12.9333 24.5805 12.6856C24.3289 12.4378 23.9893 12.3 23.6362 12.3023H17.8463C17.67 12.3014 17.4953 12.3356 17.3323 12.4028C17.1694 12.4701 17.0214 12.5691 16.8971 12.694C16.871 12.7204 16.8465 12.7475 16.8229 12.7754C16.6961 12.6268 16.5385 12.5075 16.361 12.4258C16.1835 12.3441 15.9903 12.302 15.7949 12.3023H9.97209C9.61899 12.3 9.27938 12.4378 9.02776 12.6856C8.77614 12.9333 8.63306 13.2707 8.6299 13.6238V15.7234C8.25116 15.7569 7.89847 15.9302 7.64057 16.2096C7.38267 16.489 7.23804 16.8544 7.23486 17.2346V20.9227C7.23486 21.0066 7.2682 21.0871 7.32754 21.1464C7.38687 21.2058 7.46735 21.2391 7.55127 21.2391H10.0044C10.0883 21.2391 10.1688 21.2058 10.2282 21.1464C10.2875 21.0871 10.3208 21.0066 10.3208 20.9227V20.5012L23.3868 20.5052V20.9227C23.3868 21.0066 23.4201 21.0871 23.4794 21.1464C23.5388 21.2058 23.6193 21.2391 23.7032 21.2391H26.1563C26.2402 21.2391 26.3207 21.2058 26.38 21.1464C26.4393 21.0871 26.4727 21.0066 26.4727 20.9227V17.2344C26.4691 16.8371 26.3112 16.4567 26.0324 16.1737C25.7535 15.8906 25.3756 15.727 24.9783 15.7174ZM17.3453 13.1405C17.411 13.0747 17.4891 13.0226 17.5751 12.9873C17.6612 12.952 17.7533 12.9342 17.8463 12.9348H23.6362C23.8215 12.9323 24.0003 13.0034 24.1332 13.1325C24.2662 13.2616 24.3425 13.4382 24.3455 13.6235V15.8293C24.0639 15.9413 23.8222 16.1349 23.6514 16.3852C23.4805 16.6356 23.3884 16.9312 23.3868 17.2343V17.3582L17.1387 17.3566L17.1395 13.6554C17.1379 13.5602 17.1554 13.4656 17.1907 13.3772C17.226 13.2888 17.2786 13.2084 17.3453 13.1405ZM9.97209 12.9348H15.7948C15.9802 12.9323 16.159 13.0035 16.292 13.1326C16.4249 13.2618 16.5012 13.4385 16.5041 13.6238L16.5056 17.3565L10.3208 17.3548V17.2345C10.3188 16.9134 10.2155 16.6012 10.0254 16.3424C9.83541 16.0836 9.56846 15.8915 9.26271 15.7934V13.6238C9.26567 13.4385 9.34201 13.2619 9.47499 13.1327C9.60797 13.0036 9.78674 12.9325 9.97209 12.935V12.9348ZM9.68801 20.606H7.86768V17.2344C7.87418 16.9974 7.97293 16.7722 8.14291 16.6068C8.31289 16.4414 8.54069 16.3489 8.77785 16.3489C9.015 16.3489 9.2428 16.4414 9.41278 16.6068C9.58276 16.7722 9.68151 16.9974 9.68801 17.2344V20.606ZM10.3208 19.8681V17.9875L16.8218 17.9893H16.8223L23.3867 17.9912V19.8722L10.3208 19.8681ZM25.8399 20.6061H24.0196V17.2344C24.0258 16.9972 24.1245 16.7718 24.2945 16.6062C24.4645 16.4406 24.6924 16.348 24.9297 16.348C25.167 16.348 25.395 16.4406 25.565 16.6062C25.735 16.7718 25.8336 16.9972 25.8399 17.2344V20.6061Z" fill="black" />
                                            </svg>
                                            <span style={{ verticalAlign: 'middle', paddingLeft: '2px' }}>Living: {routedItem.living}</span>
                                        </span>

                                        <span className="mr-3">
                                            <Icon src="home-size" />
                                            <span style={{ verticalAlign: 'middle', paddingLeft: '2px' }}>{routedItem.size_sq_mtr}m2</span>
                                        </span>
                                    </h5>
                                </div>
                                <div className="fw-700 fz-12 favorites-etc">
                                    <div className="m-0 lh-1 d-flex">
                                        {
                                            currentUser &&
                                            <span>
                                                {
                                                    addedCart ?
                                                        <span
                                                            className="d-flex align-items-center py-3 border-left pl-2"
                                                        >
                                                            <span className="mr-2">
                                                                <img src={FavoriteSvg} alt="" />
                                                            </span>
                                                            <span className="mr-2 lh-1">Favorite Added</span>
                                                        </span>
                                                        :
                                                        <span
                                                            className="d-flex align-items-center py-3 border-left pl-2 cursor-pointer"
                                                            onClick={addToCart}
                                                        >
                                                            <span className="mr-2">
                                                                <img src={FavoriteSvg} alt="" />
                                                            </span>
                                                            <span className="mr-2 lh-1">Favorite</span>
                                                        </span>
                                                }
                                            </span>
                                        }


                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" type="button" className="d-flex align-items-center py-3 border-left pl-2 border-none">
                                                <span className="mr-2">
                                                    <img src={ShareSvg} alt="" />
                                                </span>
                                                <span className="mr-2 lh-1">Share</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <div className='d-flex align-items-center mb-2 px-3'>
                                                    <ShareButton
                                                        compact
                                                        socialMedia={'pinterest'}
                                                        url={`https://28.sunum.icu/`}
                                                        media={routedItem.list_photo.url}
                                                        text={routedItem.title}
                                                    />
                                                    <p className='mb-0 ml-4'>
                                                        Pinterest
                                                    </p>
                                                </div>
                                                <div className='d-flex align-items-center mb-2 px-3'>
                                                    <ShareButton
                                                        compact
                                                        socialMedia={'twitter'}
                                                        url={`https://28.sunum.icu/`}
                                                        media={routedItem.list_photo.url}
                                                        text={routedItem.title}
                                                    />
                                                    <p className='mb-0 ml-4'>
                                                        Twitter
                                                    </p>
                                                </div>
                                                <div className='d-flex align-items-center mb-2 px-3'>
                                                    <ShareButton
                                                        compact
                                                        socialMedia={'facebook'}
                                                        url={"https://28.sunum.icu/"}
                                                        media={routedItem.list_photo.url}
                                                        text="routedItem.title"
                                                    />
                                                    <p className='mb-0 ml-4'>
                                                        Facebook
                                                    </p>
                                                </div>


                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Link to="/" className="d-flex align-items-center py-3 border-left border-right pl-2">
                                            <span className="mr-1">
                                                <img src={BrochureSvg} alt="" />
                                            </span>
                                            <span className="mr-2 lh-1">Brochure</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Container className="pt-5">
                        <Row>
                            <Col xs={12} md={routedItem.floor_plan.length ? 7 : 9} className="pld-col-1 mb-4">
                                <h2 className="fz-18 fw-700 c-000">
                                    {routedItem.intro_text}
                                </h2>
                                <h2 className="fz-18 fw-700 c-000 pb-2 mt-3 border-bottom">
                                    About this Property
                                </h2>
                                <p className="fz-14 fw-400 mb-5">
                                    {routedItem.about}
                                </p>
                                <h2 className="fz-18 fw-700 c-000 pb-2 mt-3 border-bottom">
                                    Key Features
                                </h2>
                                {keyFeatures.map((thisItem) => (
                                    <p key={Math.floor(Math.random() * 100000000)} className="fz-14 m-0 c-000">
                                        -{thisItem}
                                    </p>
                                ))}
                                <h2 className="fz-18 fw-700 c-000 pb-2 mt-3 border-bottom">
                                    Energy Performance Certificated
                                </h2>
                                <p className="fz-14 c-000">
                                    The Energy Performance Certificate (EPC) gives the building a standard energy and carbon emission efficiency grade from 'A' to 'G', where 'A' is the most efficient and 'D' being the average to date.
                                </p>
                                <Row>
                                    <Col xs={6} className="mb-4">
                                        <img src={Energy1} alt="" className="d-block w-100" />
                                    </Col>
                                    <Col xs={6} className="mb-4">
                                        <img src={Energy2} alt="" className="d-block w-100" />
                                    </Col>
                                </Row>
                                <h2 className="fz-18 fw-700 c-000 pb-2 mt-3 border-bottom">
                                    Total Cost
                                </h2>
                                <Row className="align-items-center">
                                    <Col xs={6}>
                                        <div className="piechart">
                                            <Chart
                                                style={{ width: '300px', height: '300px' }}
                                                chartType="PieChart"
                                                loader={<div>Loading Chart</div>}
                                                data={[
                                                    ['Task', 'Hours per Day'],
                                                    ['Property Price', askingChart],
                                                    ['Tax', 250],
                                                    ['Fee', 50]
                                                ]}
                                                options={{
                                                    legend: 'none',
                                                    pieSliceText: 'label',
                                                    pieStartAngle: 100,
                                                }}
                                                rootProps={{ 'data-testid': '4' }}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="d-flex justify-content-between border-bottom-black mb-2">
                                            <span className="fz-12 m-0">Property Price</span>
                                            <span className="fz-12 m-0">${asking_price}</span>
                                        </div>
                                        <div className="d-flex justify-content-between border-bottom-black mb-2">
                                            <span className="fz-12 m-0">Tax</span>
                                            <span className="fz-12 m-0">$250,000</span>
                                        </div>
                                        <div className="d-flex justify-content-between border-bottom-black mb-2">
                                            <span className="fz-12 m-0">Fee</span>
                                            <span className="fz-12 m-0">$50,000</span>
                                        </div>
                                        <div className="d-flex justify-content-between border-bottom-black">
                                            <span className="fz-12 m-0 fw-700">TOTAL</span>
                                            <span className="fz-12 m-0 fw-700">$1,750,000</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} xl={2} className={routedItem.floor_plan.length ? "pld-col-2 mb-4" : "d-none"}>
                                {
                                    routedItem.floor_plan.length ?
                                        <>
                                            <Row>
                                                {routedItem.floor_plan.map((fp, i) => (
                                                    <Col xl={12} key={fp.id} className={i === 0 ? "first-gallery fg-all" : "fg-all"}>
                                                        <img src={fp.url} alt="" className="w-100 d-block cursor-pointer" onClick={setShowModalTRUE} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </>
                                        : null
                                }
                            </Col>
                            <Col xs={12} md={5} xl={3} className="pld-col-3 mb-4">
                                {routedItem.map_coordinate &&
                                    <div className="mb-4">
                                        <SimpleMap
                                            latZ={coordinateArr[0]}
                                            lngZ={coordinateArr[1]}
                                        />
                                    </div>
                                }
                                {routedItem.august_office_personel &&
                                    <React.Fragment>
                                        <div>
                                            <h5 className="fw-700 fz-16">
                                                Listing Agent
                                            </h5>
                                            <div className="d-flex py-2 mb-2 flex-column">
                                                <div className="listing-agent-img">
                                                    <img
                                                        className="w-100 object-cover"
                                                        src={routedItem.august_office_personel.photo.formats.thumbnail.url}
                                                        alt="August property"
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className="fz-15 fw-700 m-0 pt-1" style={{ color: "#B89B57" }}>
                                                        <Link to={`/${lang}/personels/${routedItem.august_office_personel.slug}`}>
                                                            {routedItem.august_office_personel.namesurname}
                                                        </Link>
                                                    </h5>
                                                    {routedItem.august_office_personel.EMail &&
                                                        <p className="m-0 fz-14">
                                                            {routedItem.august_office_personel.EMail}
                                                        </p>
                                                    }
                                                    {routedItem.august_office_personel.Phone &&
                                                        <p className="m-0 fz-12">
                                                            {routedItem.august_office_personel.Phone}
                                                        </p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {routedItem.august_office_personel.Phone &&
                                            <div
                                                style={{ left: '0', right: '0', top: '0', bottom: '0' }}
                                                className="position-relative d-flex op-agents-cards-footer ad-left-col-border mb-4"
                                            >
                                                <div className="w-50 pr-1">
                                                    <a
                                                        target='_blank'
                                                        href={`https://wa.me/${routedItem.august_office_personel.Phone}`}
                                                        className="d-block w-100"
                                                    >
                                                        Whatsapp
                                                    </a>
                                                </div>
                                                <div className="w-50 pl-1">
                                                    <a
                                                        target='_blank'
                                                        href={`tel:${routedItem.august_office_personel.Phone}`}
                                                        className="d-block w-100"
                                                    >
                                                        Text Me
                                                    </a>
                                                </div>
                                            </div>
                                        }
                                        <div className="ad-left-col-general-border p-2">
                                            <form action="">
                                                <span className="fw-700 c-000">
                                                    Contact Me
                                                </span>
                                                <input
                                                    type="text"
                                                    className="ad-left-col-general-border w-100 p-2 mb-2"
                                                    placeholder="Name"
                                                />
                                                <input
                                                    type="text"
                                                    className="ad-left-col-general-border w-100 p-2 mb-2"
                                                    placeholder="Email"
                                                />
                                                <input
                                                    type="text"
                                                    className="ad-left-col-general-border w-100 p-2 mb-2"
                                                    placeholder="Phone"
                                                />
                                                <input
                                                    type="text"
                                                    className="ad-left-col-general-border w-100 p-2 mb-2"
                                                    placeholder="Country"
                                                />
                                                <textarea
                                                    name="name"
                                                    className="ad-left-col-general-border w-100 p-2 mb-2"
                                                    rows="8"
                                                    defaultValue="Your messages"
                                                    cols="80"
                                                ></textarea>
                                                <button className="btn more-info-bttn w-100" type="button">
                                                    Send Message
                                                </button>
                                            </form>
                                        </div>
                                    </React.Fragment>
                                }
                                {routedItem.august_project &&
                                    <Row>
                                        <Col xs={12} className="mt-4 mb-4">
                                            <Link to={`/${lang}/projects/${routedItem.august_project.slug}`}>
                                                <img
                                                    src={routedItem.august_project.Banner.formats.thumbnail.url}
                                                    alt=""
                                                    className="w-100 d-block"
                                                />
                                                <div className="rdp-body p-2 position-relative">
                                                    <span className="mc-body-abs float-left w-auto px-3 fw-700" style={{ right: "auto" }}>
                                                        {routedItem.august_project.ProjectName}
                                                    </span>
                                                    <p className="fw-400 m-0">
                                                        {routedItem.august_project.Content.substring(0, 70)}...
                                                    </p>
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                }
                            </Col>
                        </Row>
                        <h2 className="fz-18 fw-700 c-000 pb-2 mt-3 border-bottom mb-4">
                            Key Features
                        </h2>
                        {
                            (randomProperty1 !== null || randomProperty2 !== null || randomProperty3 !== null) &&

                            <Row>
                                <Col xs={12} md={6} lg={4}>
                                    <CardSlide
                                        key={randomProperty1.id}
                                        asking_price={randomProperty1.asking_price}
                                        intro_text={randomProperty1.intro_text}
                                        bathrooms={randomProperty1.bathrooms}
                                        bedrooms={randomProperty1.bedrooms}
                                        living={randomProperty1.living}
                                        size_sq_mtr={randomProperty1.size_sq_mtr}
                                        list_photo={
                                            randomProperty1.list_photo.formats.small ?
                                                randomProperty1.list_photo.formats.small
                                                :
                                                randomProperty1.list_photo
                                        }
                                        updatedAt={randomProperty1.updatedAt}
                                        slug={randomProperty1.Slug}
                                        district={randomProperty1.district}
                                        currency={randomProperty1.currency}
                                        lang={lang}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <CardSlide
                                        key={randomProperty2.id}
                                        asking_price={randomProperty2.asking_price}
                                        intro_text={randomProperty2.intro_text}
                                        bathrooms={randomProperty2.bathrooms}
                                        bedrooms={randomProperty2.bedrooms}
                                        living={randomProperty2.living}
                                        size_sq_mtr={randomProperty2.size_sq_mtr}
                                        list_photo={
                                            randomProperty2.list_photo.formats.small ?
                                                randomProperty2.list_photo.formats.small
                                                :
                                                randomProperty2.list_photo
                                        }
                                        updatedAt={randomProperty2.updatedAt}
                                        slug={randomProperty2.Slug}
                                        district={randomProperty2.district}
                                        currency={randomProperty2.currency}
                                        lang={lang}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <CardSlide
                                        key={randomProperty3.id}
                                        asking_price={randomProperty3.asking_price}
                                        intro_text={randomProperty3.intro_text}
                                        bathrooms={randomProperty3.bathrooms}
                                        bedrooms={randomProperty3.bedrooms}
                                        living={randomProperty3.living}
                                        size_sq_mtr={randomProperty3.size_sq_mtr}
                                        list_photo={
                                            randomProperty3.list_photo.formats.small ?
                                                randomProperty3.list_photo.formats.small
                                                :
                                                randomProperty3.list_photo
                                        }
                                        updatedAt={randomProperty3.updatedAt}
                                        slug={randomProperty3.Slug}
                                        district={randomProperty3.district}
                                        currency={randomProperty3.currency}
                                        lang={lang}
                                    />
                                </Col>
                            </Row>
                        }

                        <h2 className="fz-18 fw-700 c-000 pb-2 mt-3 border-bottom mb-4">
                            Homes for Sale near Sarıyer
                        </h2>
                        <Row>
                            <Col xs={12} lg={4}>
                                <Row>
                                    {placesData.map((place) => (
                                        <Col key={place.id} xs={4}>
                                            <Link to={`/${lang}/places/${place.Slug}`} className="c-links fz-14">
                                                {place.title}
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        properties: state.properties.properties,
        isPending2: state.properties.isLoading,
        placesData: state.places.places,
        isPending: state.places.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(PropertyDetail)