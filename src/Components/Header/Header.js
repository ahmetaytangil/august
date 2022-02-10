// General
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';

// Components
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';
import GoDropDown from './godropdown/GoDropDown';

// Context
import { useAuth } from '../../Providers/firebase/contexts/AuthContext';
import { useCurrency } from '../../Providers/currencyparites/CurrencyParites';
import { useGeneral } from '../../Providers/general/General';
import { loadcitiesData } from '../../Redux/Reducers/cities/cities.thunk';
import { loadservicesData } from '../../Redux/Reducers/services/services.thunk';
import { loadHomePlacesData } from '../../Redux/Reducers/places/places.thunk';

const Header = ({
    cities,
    services,
    home_places,
    lang
}) => {
    const dispatch = useDispatch();
    const {
        showSignIn,
        showSignUp,
        switchToSignIn,
        switchToSignUp,
        signInOpener,
        signUpOpener,
        signInCloser,
        signUpCloser,
        openSide
    } = useGeneral();

    const [scrolled, setScrolled] = useState(false);
    const [isNavOpened, setisNavOpened] = useState(false);

    const [isLangOpened, setisLangOpened] = useState(false);
    const [isCurrencyOpened, setisCurrencyOpened] = useState(false);

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const { settedCurrency, setSettedCurrency } = useCurrency();

    const [menuCurrency, setmenuCurrency] = useState(false);
    const [menuMyAugust, setmenuMyAugust] = useState(false);

    useEffect(() => {
        dispatch(loadcitiesData()),
            dispatch(loadservicesData()),
            dispatch(loadHomePlacesData())
    }, [dispatch]);

    const handleLogOut = async () => {
        setError('');
        try {
            await logout();
        } catch {
            setError('Failed to log out');
        }
    }

    let home = useRouteMatch("/en/home");

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    let headerClassesHome = ['header-outher', 'z-index-2', 'general-sticky']
    let headerClassesPages = ['header-outher', 'z-index-2', 'general-sticky', 'pages-header']
    let headerClasses = (home) ? headerClassesHome : headerClassesPages

    if (scrolled) {
        headerClasses.push('sticky-fixed');
    }

    return (
        <header className={headerClasses.join(" ")}>
            <Container className="d-flex nav-outher" fluid>
                <ul>
                    <li onClick={() => setisNavOpened(false)}>
                        <Link to={`/${lang}/home`} className="logo-item">
                            AUGUST PROPERTY
                        </Link>
                    </li>
                </ul>
                <ul className="d-flex nav-menu-outher" style={isNavOpened ? { right: '0px' } : {}}>
                    <div className="close-nav show-max-1200 cursor-pointer" onClick={() => setisNavOpened(false)}>
                        <i className="fal fa-times c-000 fz-18"></i>
                    </div>
                    <li onClick={() => setisNavOpened(false)}>
                        <Link to={`/${lang}/home`} className="logo-item logo-item-m show-max-1200">
                            AUGUST PROPERTY
                        </Link>
                    </li>
                    <li onClick={() => setisNavOpened(false)}>
                        <Link to={`/${lang}/property-list-view`} className="nav-items fz-14 fw-700">
                            Property Search
                        </Link>
                    </li>
                    <li>
                        <GoDropDown
                            head="Services"
                            leftsideData={services !== null ? services.filter(val => val.ShowInTopMenu === true) : null}
                            leftsideHead="Our Services"
                            lang={lang}
                            leftsideType="services"
                            setNavClose={() => setisNavOpened(false)}
                        />
                    </li>
                    <li>
                        <GoDropDown
                            head="Explore"
                            leftsideData={cities !== null ? cities : null}
                            leftsideHead="TOP CITIES"
                            rightsideData={home_places !== null ? home_places : null}
                            rightsideHead="TOP DISTRICT"
                            lang={lang}
                            setNavClose={() => setisNavOpened(false)}
                        />
                    </li>
                    <li onClick={() => setisNavOpened(false)}>
                        <Link to={`/${lang}/contact-us`} className="nav-items fz-14 fw-700">Contact Us</Link>
                    </li>
                    <li>
                        <div
                            onMouseEnter={() => setmenuCurrency(true)}
                            onMouseLeave={() => setmenuCurrency(false)}
                            className="go-dropdown"
                            onClick={() => setisLangOpened(!isLangOpened)}
                        >
                            <span className="nav-items fz-14 fw-700 cursor-pointer">
                                {
                                    lang === "en" ? "EN" : lang === "tr" ? "TR" : ""
                                }
                                /
                                {settedCurrency ? settedCurrency : "ALL CURRENCY"}
                                <i className="fas fa-angle-down ml-1"></i>
                            </span>
                            <div
                                className={menuCurrency ? "dropdown-content drp-opened p-2 c-000 pl-4" : "dropdown-content p-2 c-000 pl-4"}
                                style={
                                    isLangOpened ? { width: "160px", height: 'auto' }
                                        :
                                        { width: "160px" }
                                }
                            >
                                <h5 className="m-0 fw-700 mt-3 fz-12">Currency:</h5>
                                <div className="d-flex mobile-header-50ler"
                                    onClick={() => setSettedCurrency("TL")}
                                >
                                    <div className="w-50 d-flex">
                                        <div className="switch-outher float-left">
                                            <label className="switch mb-0 mx-2">
                                                <input type="radio" name="currency" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="float-right">
                                            <span style={{ fontSize: "14px" }}>TL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mobile-header-50ler"
                                    onClick={() => setSettedCurrency("Dollar")}
                                >
                                    <div className="w-50 d-flex">
                                        <div className="switch-outher float-left">
                                            <label className="switch mb-0 mx-2">
                                                <input type="radio" name="currency" defaultChecked="checked" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="float-right">
                                            <span style={{ fontSize: "14px" }}>USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mobile-header-50ler"
                                    onClick={() => setSettedCurrency("EURO")}
                                >
                                    <div className="w-50 d-flex">
                                        <div className="switch-outher float-left">
                                            <label className="switch mb-0 mx-2">
                                                <input type="radio" name="currency" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="float-right">
                                            <span style={{ fontSize: "14px" }}>EURO</span>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="m-0 fw-700 mt-3 fz-12">Units:</h5>
                                <section className="d-flex banner-inner-1 msdf p-1">
                                    <span className="c-534D4D fz-12">Sq Ft</span>
                                    <div className="switch-outher">
                                        <label className="switch mb-0 mx-2">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <span className="c-534D4D fz-12">Sqr Mtr</span>
                                </section>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            onMouseEnter={() => setmenuMyAugust(true)}
                            onMouseLeave={() => setmenuMyAugust(false)}
                            className="go-dropdown"
                            onClick={() => setisCurrencyOpened(!isCurrencyOpened)}
                        >
                            <span className="nav-items fz-14 fw-700 cursor-pointer">
                                My August <i className="fas fa-angle-down"></i>
                            </span>
                            <div
                                className={menuMyAugust ? "dropdown-content drp-opened p-2 c-000 pl-4" : "dropdown-content p-2 c-000 pl-4"}
                                style={isCurrencyOpened ? { width: "160px", height: 'auto' } : { width: "160px" }}
                            >
                                {
                                    currentUser ?
                                        <>
                                            {error &&
                                                <p>{error}</p>
                                            }
                                            {
                                                currentUser &&
                                                <>
                                                    <p>
                                                        {currentUser.displayName}
                                                    </p>
                                                    <p className="cursor-pointer" onClick={openSide}>
                                                        My Favorites
                                                    </p>
                                                </>
                                            }

                                            <p>
                                                <strong className="cursor-pointer" onClick={handleLogOut}>
                                                    Log out
                                                </strong>
                                            </p>
                                        </>
                                        :
                                        <>
                                            <button type="button" className="btn fz-14 fw-700" onClick={signInOpener}>
                                                Sign In
                                            </button>

                                            <SignInModal
                                                show={showSignIn}
                                                onHide={signInCloser}
                                                sw={switchToSignUp}
                                                signedIn={() => setIsUserLoggedIn(true)}
                                            />

                                            <button type="button" className="btn fz-14 fw-700" onClick={signUpOpener}>
                                                Sign Up
                                            </button>

                                            <SignUpModal
                                                show={showSignUp}
                                                onHide={signUpCloser}
                                                sw={switchToSignIn}
                                            />
                                        </>
                                }

                            </div>
                        </div>
                    </li>
                </ul>
                <div
                    className="menu-opener show-max-1200 cursor-pointer"
                    onClick={() => setisNavOpened(true)}
                >
                    <h1 className="fz-20"><i className="fas fa-bars"></i></h1>
                </div>
            </Container>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities,
        services: state.services.services,
        home_places: state.places.home_places,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(Header);