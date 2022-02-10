// General
import React from 'react'
import { Container } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// import images
import BannerBG from '../../Assets/images/home/main-banner.jpg';
import SelectBackgroundImg from '../../Assets/images/general/select-after.svg';
import { cityTypesOnClick, isTopParamTypesOnClick, loadFilteringProperties, setHomeBuyRent } from '../../Redux/Reducers/filterSearchList/filterSearchList.thunk';

// Export Default -------------------------------------------- [ Function ]
const BannerPanel = ({
    paramTypes,
    cities,
    selected_paramTypes,
    selected_cityTypes,
    lang,
    homeBuyRent
}) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const handleOnChange_paramTypes = (e) => {
        const targetParam = paramTypes.filter(param_object => param_object.id === e.target.value)[0];
        const isTop = (targetParam.is_top === true) ? true : false;

        if (isTop) {
            const childParams = targetParam.property_param_types.map(object => object.id);
            const allSelected_Ids = [targetParam.id, ...childParams];
            dispatch(isTopParamTypesOnClick(allSelected_Ids));
        }
    }

    const handleOnChange_cityTypes = (e) => {
        dispatch(cityTypesOnClick(e.target.value));
    }

    const sendSearchRequest = () => {
        let filteredLink = (selected_paramTypes.length !== 0) ? selected_paramTypes.join("&property_param_type.id=") : null;
        let filteredCityLink = (selected_cityTypes.length !== 0) ? selected_cityTypes.join("&city.id=") : null;

        let filteredParamLink = (selected_paramTypes.length !== 0) ? `&property_param_type.id=${filteredLink}` : ""
        let filteredCitiesLink = (selected_cityTypes.length !== 0) ? `&city.id=${filteredCityLink}` : ""

        // send to fetch all filtered links
        let compareFiltersLink = `?_limit=-1${filteredCitiesLink}${filteredParamLink}`

        dispatch(loadFilteringProperties(compareFiltersLink));
        history.push(`/${lang}/property-list-view`);
    }

    const setRent = () => {
        dispatch(setHomeBuyRent(true))
    }

    const setBuy = () => {
        dispatch(setHomeBuyRent(false))
    }
    
    // ----------------------------------------- Render Content [ return ]
    return (
        <section>
            <div className="position-relative">
                <section className="position-absolute search-outher">
                    <Container>
                        <h1 className="text-center so-h1 fw-700 fz-40">
                            Find your dream home
                        </h1>
                        <form action="">
                            <div className="d-flex banner-form-outher">
                                <section className="d-flex banner-inner-1">
                                    <span className="c-534D4D p-2 fw-700">Buy</span>
                                    {
                                        homeBuyRent &&
                                        <div className="switch-outher" onClick={setBuy}>
                                            <label className="switch mb-0 mx-2">
                                                <input type="checkbox" defaultChecked="checked" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    }
                                    {
                                        !homeBuyRent &&
                                        <div className="switch-outher" onClick={setRent}>
                                            <label className="switch mb-0 mx-2">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    }

                                    <span className="c-534D4D p-2 fw-700">Rent</span>
                                </section>
                                <section className="banner-inner-2 banner-group">
                                    <select
                                        className="form-control custom-select h-100 fw-700"
                                        style={{ background: `#fff url(${SelectBackgroundImg}) no-repeat right .75rem center/8px 10px` }}
                                        onChange={handleOnChange_paramTypes}
                                    >
                                        <option>All Property Types</option>
                                        {paramTypes !== null &&
                                            paramTypes.filter(f => f.is_top === true).map((pt) => (
                                                <option
                                                    key={pt.id}
                                                    value={pt.id}
                                                >
                                                    {pt.title}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </section>
                                <section className="banner-inner-2 banner-group mr-0">
                                    <select
                                        className="form-control custom-select h-100 fw-700"
                                        style={{ background: `#fff url(${SelectBackgroundImg}) no-repeat right .75rem center/8px 10px` }}
                                        onChange={handleOnChange_cityTypes}
                                    >
                                        <option>All Cities</option>
                                        {cities !== null &&
                                            cities.map((rcd) => (
                                                <option
                                                    key={rcd.id}
                                                    value={rcd.id}
                                                >
                                                    {rcd.Name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </section>
                                <span className="btn banner-search-bttn fw-700 c-fff" onClick={sendSearchRequest}>
                                    SEARCH
                                </span>
                            </div>
                        </form>
                    </Container>
                </section>
                <img
                    className="w-100 d-block main-banner-img"
                    src={BannerBG}
                    alt=""
                />
            </div>
        </section >
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang.lang,
        paramTypes: state.paramTypes.paramTypes,
        cities: state.cities.cities,
        selected_paramTypes: state.filterSearchList.selected_paramTypes,
        selected_cityTypes: state.filterSearchList.selected_cityTypes,
        selected_prices: state.filterSearchList.selected_prices,
        homeBuyRent: state.filterSearchList.homeBuyRent
    }
}

export default connect(mapStateToProps)(BannerPanel);