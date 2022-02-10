import React from 'react';
import Slider from 'rc-slider';
import { connect, useDispatch } from 'react-redux';
import { Form, Dropdown, Row, Col, Spinner } from 'react-bootstrap';
import CheckBox from '../../Components/Checkbox/CheckBox';
import CheckBoxCities from '../../Components/Checkbox/CheckBoxCities';
import { formatPrice } from '../../Helpers/General.helpers';
import { paramTypesOnClick, isTopParamTypesOnClick, cityTypesOnClick, priceOnChange, loadFilteringProperties } from '../../Redux/Reducers/filterSearchList/filterSearchList.thunk';
import 'rc-slider/assets/index.css';
import SearchListDetail from './SearchListDetail'

const { Range } = Slider;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div className="d-flex justify-content-between w-100 align-items-center">
        <span
            className="btn w-100 fw-700 c-534D text-left go-filter-dropdown"
            ref={ref}
            onClick={(e) => {
                e.preventDefault()
                onClick(e)
            }}
        >
            {children}
        </span>
        <i className="fal fa-angle-down float-right fz-16"></i>
    </div>
))

// Export Default -------------------------------------------- [ Function ]
const SearchListPC = (
    {
        setBuy,
        setRent,
        buyRent,
        defaultValues,
        paramTypes,
        paramTypes_isLoading,
        cities,
        cities_isLoading,
        selected_paramTypes,
        selected_cityTypes,
        selected_prices,
        is_filtering_properties,
        handleChangePlacesFilter,
        places,
        mobileShow,
        mobileCloser
    }
) => {
    const dispatch = useDispatch();

    const handleOnClick_paramTypes = (e) => {
        dispatch(paramTypesOnClick(e.target.value));
    }

    const handleOnClick_paramTypes_isTop = (e) => {
        const targetParam = paramTypes.filter(param_object => param_object.id === e.target.value)[0];
        const isTop = (targetParam.is_top === true) ? true : false;

        if (isTop) {
            const childParams = targetParam.property_param_types.map(object => object.id);
            const allSelected_Ids = [targetParam.id, ...childParams];
            dispatch(isTopParamTypesOnClick(allSelected_Ids));
        }

    }

    const handleOnClick_cityTypes = (e) => {
        dispatch(cityTypesOnClick(e.target.value));
    }

    const handleOnChange_prices = (value) => {
        dispatch(priceOnChange(value));
    }

    const sendSearchRequest = () => {
        let applyPrices = (selected_prices !== null) ? selected_prices : defaultValues;
        let filteredLink = (selected_paramTypes.length !== 0) ? selected_paramTypes.join("&property_param_type.id=") : null;
        let filteredCityLink = (selected_cityTypes.length !== 0) ? selected_cityTypes.join("&city.id=") : null;

        let filteredParamLink = (selected_paramTypes.length !== 0) ? `&property_param_type.id=${filteredLink}` : ""
        let filteredCitiesLink = (selected_cityTypes.length !== 0) ? `&city.id=${filteredCityLink}` : ""
        let filteredPricesLink = `?_where[asking_price_gte]=${applyPrices[0]}&[asking_price_lte]=${applyPrices[1]}`

        // send to fetch all filtered links
        let compareFiltersLink = `${filteredPricesLink}${filteredCitiesLink}${filteredParamLink}`

        dispatch(loadFilteringProperties(compareFiltersLink));
        handleChangePlacesFilter(selected_cityTypes, places);
        mobileCloser();
    }

    // ----------------------------------------- Render Content [ return ]
    return (
        <>
            {/* Dekstop */}
            <section className="container-fluid property-search-list-head">
                <Row className="align-items-end">
                    <Col xs={12} md={3} className="col-xl border-right border-bottom">
                        <section className="d-flex justify-content-between">
                            <span className="c-534D4D p-2 fw-700">Buy</span>
                            <div className="switch-outher">
                                {
                                    buyRent &&
                                    <label className="switch mb-0 mx-2" onClick={setBuy}>
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="slider round"></span>
                                    </label>
                                }
                                {
                                    !buyRent &&
                                    <label className="switch mb-0 mx-2" onClick={setRent}>
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                }

                            </div>
                            <span className="c-534D4D p-2 fw-700">Rent</span>
                        </section>
                    </Col>
                    <Col xs={6} md={3} className="col-xl border-right border-bottom">
                        <Dropdown className="w-100">
                            <Dropdown.Toggle as={CustomToggle} id="dd1">
                                Property Type {"(" + selected_paramTypes.length + ")"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="p-3">
                                    {
                                        (paramTypes_isLoading) ? <Spinner animation="border" /> : paramTypes.filter(
                                            f => f.is_top === true
                                        ).map((param) => (
                                            <ul key={param.id}>
                                                <li>
                                                    <Form.Group controlId={param.id} className="mb-0">
                                                        <CheckBox
                                                            title={param.title}
                                                            checkId={param.id}
                                                            paramId={param.id}
                                                            onClick={handleOnClick_paramTypes_isTop}
                                                            selected={selected_paramTypes}
                                                        />
                                                    </Form.Group>
                                                </li>
                                                {
                                                    param.property_param_types.map(ppt => (
                                                        <li key={ppt.id} className="ml-3 fz-16">
                                                            <Form.Group controlId={ppt.id} className="mb-0">
                                                                <CheckBox
                                                                    title={ppt.title}
                                                                    checkId={ppt.id}
                                                                    paramId={ppt.id}
                                                                    onClick={handleOnClick_paramTypes}
                                                                    selected={selected_paramTypes}
                                                                />
                                                            </Form.Group>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ))
                                    }
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={6} md={3} className="col-xl border-right border-bottom">
                        <Dropdown className="w-100">
                            <Dropdown.Toggle as={CustomToggle} id="dd2">
                                Cities {"(" + selected_cityTypes.length + ")"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="p-3">
                                    {
                                        (cities_isLoading) ? <Spinner animation="border" /> : cities.map((city) => (
                                            <Form.Group key={city.id} controlId={city.id} className="mb-0">
                                                <CheckBoxCities
                                                    title={city.Name}
                                                    cityId={city.id}
                                                    onClick={handleOnClick_cityTypes}
                                                    selected={selected_cityTypes}
                                                />
                                            </Form.Group>
                                        ))
                                    }
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={6} md={3} className="col-xl border-right border-bottom">
                        <Dropdown className="w-100">
                            <Dropdown.Toggle as={CustomToggle} id="dd3">
                                Price
                                {
                                    (selected_prices !== null) &&
                                    <>
                                        {
                                            " (" +
                                            formatPrice(selected_prices[0]).slice(0, -4)
                                            + " - " +
                                            formatPrice(selected_prices[1]).slice(0, -4)
                                            + ")"
                                        }
                                    </>
                                }
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="p-3" style={{ width: '300px' }}>
                                    <p>
                                        Select Price Range:
                                    </p>
                                    <Range
                                        allowCross={false}
                                        min={defaultValues[0]}
                                        max={defaultValues[1]}
                                        defaultValue={[defaultValues[0], defaultValues[1]]}
                                        onChange={(value) => handleOnChange_prices(value)}
                                        step={10000}
                                    />
                                    <p>
                                        <span className="w-50 d-inline-block">
                                            Min: ${
                                                (selected_prices !== null) ?
                                                    formatPrice(selected_prices[0])
                                                    :
                                                    formatPrice(defaultValues[0])
                                            }
                                        </span>
                                        <span className="w-50 d-inline-block">
                                            Max: ${
                                                (selected_prices !== null) ?
                                                    formatPrice(selected_prices[1])
                                                    :
                                                    formatPrice(defaultValues[1])
                                            }
                                        </span>
                                    </p>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={6} md={4} className="col-xl border-bottom">
                        <span
                            className="btn opr-card-bttn w-100"
                            style={{
                                pointerEvents: is_filtering_properties ? 'none' : null,
                                cursor: is_filtering_properties ? 'no-drop' : 'pointer',
                                opacity: is_filtering_properties ? '0.5' : '1',
                            }}
                            onClick={sendSearchRequest}
                        >
                            {is_filtering_properties && <Spinner animation="border" size="sm" />} Search
                        </span>
                    </Col>
                </Row>
            </section>

            {/* Mobile */}
            <div className="property-search-list-head-mobile" style={mobileShow ? { right: '0' } : { right: '-100%' }}>
                <div className="modal-header">
                    <h5 className="modal-title">All Filters</h5>
                    <button type="button" className="close filter-close" onClick={mobileCloser}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <section className="d-flex justify-content-between border-bottom modal-body">
                    <section className="d-flex justify-content-between w-100">
                        <span className="c-534D4D p-2 fw-700">Buy</span>
                        <div className="switch-outher">
                            {
                                buyRent &&
                                <label className="switch mb-0 mx-2" onClick={setBuy}>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="slider round"></span>
                                </label>
                            }
                            {
                                !buyRent &&
                                <label className="switch mb-0 mx-2" onClick={setRent}>
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            }

                        </div>
                        <span className="c-534D4D p-2 fw-700">Rent</span>
                    </section>
                </section>
                <section class="border-bottom py-3">
                    <SearchListDetail
                        name="Property Types"
                        type="1"
                        paramTypes_isLoading={paramTypes_isLoading}
                        paramTypes={paramTypes}
                        handleOnClick_paramTypes_isTop={handleOnClick_paramTypes_isTop}
                        selected_paramTypes={selected_paramTypes}
                        handleOnClick_paramTypes={handleOnClick_paramTypes}
                    />
                </section>
                <section class="border-bottom py-3">
                    <SearchListDetail
                        name="Cities"
                        type="2"
                        cities_isLoading={cities_isLoading}
                        cities={cities}
                        handleOnClick_cityTypes={handleOnClick_cityTypes}
                        selected_cityTypes={selected_cityTypes}
                    />
                </section>
                <section class="border-bottom py-3">
                    <SearchListDetail
                        name="Price"
                        type="3"
                        defaultValues={defaultValues}
                        handleOnChange_prices={handleOnChange_prices}
                        selected_prices={selected_prices}
                    />
                </section>
                <div class="filter-modal-footer p-3">
                    <span
                        class="btn opr-card-bttn w-100"
                        style={{
                            pointerEvents: is_filtering_properties ? 'none' : null,
                            cursor: is_filtering_properties ? 'no-drop' : 'pointer',
                            opacity: is_filtering_properties ? '0.5' : '1',
                        }}
                        onClick={sendSearchRequest}
                    >
                        {is_filtering_properties && <Spinner animation="border" size="sm" />} Search
                    </span>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        paramTypes: state.paramTypes.paramTypes,
        paramTypes_isLoading: state.paramTypes.isLoading,
        cities: state.cities.cities,
        cities_isLoading: state.cities.isLoading,
        selected_paramTypes: state.filterSearchList.selected_paramTypes,
        selected_cityTypes: state.filterSearchList.selected_cityTypes,
        selected_prices: state.filterSearchList.selected_prices,
        is_filtering_properties: state.filterSearchList.is_filtering_properties,
        places: state.places.places
    }
}

export default connect(mapStateToProps)(SearchListPC);

