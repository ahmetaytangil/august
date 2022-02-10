import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'

import Slider from 'rc-slider'
const { Range } = Slider
import 'rc-slider/assets/index.css'

// components
import CheckBox from '../../Components/Checkbox/CheckBox'
import CheckBoxCities from '../../Components/Checkbox/CheckBoxCities'
import { formatPrice } from '../../Helpers/General.helpers'

export default function SearchListDetail({
    name = false,
    type = false,
    defaultValues,
    handleOnChange_prices,
    selected_prices,
    paramTypes_isLoading,
    paramTypes,
    handleOnClick_paramTypes_isTop,
    selected_paramTypes,
    handleOnClick_paramTypes,
    cities_isLoading,
    cities,
    handleOnClick_cityTypes,
    selected_cityTypes

}) {
    const [isThisOpened, setisThisOpened] = useState(false);

    const selectedNumber = (name) => {
        if (name === "Property Types") {
            return "(" + selected_paramTypes.length + ")"
        } else if (name === "Cities") {
            return "(" + selected_cityTypes.length + ")"
        } else if (name === "Price") {
            if (selected_prices !== null) {
                return " (" +
                    formatPrice(selected_prices[0]).slice(0, -4)
                    + " - " +
                    formatPrice(selected_prices[1]).slice(0, -4)
                    + ")"
            }
        } else {
            return null
        }
    }

    return (
        <>
            <span class="btn w-100 fw-700 c-534D text-left go-filter-dropdown" onClick={() => setisThisOpened(true)}>
                {
                    (name) &&
                    <>
                        {name} {selectedNumber(name)}
                    </>
                }
                <i class="fal fa-angle-right float-right fz-30"></i>
            </span>
            <div className="filter-dropdown modal-body" style={isThisOpened ? { right: '0' } : { right: '-100%' }}>
                <div className="border-bottom pb-2 mb-3">
                    <button type="button" className="btn p-0 fz-18 d-flex filter-back-btn" onClick={() => setisThisOpened(false)}>
                        <i className="fal fa-long-arrow-left mr-3 fz-28"></i>
                        Back
                    </button>
                </div>
                {type &&
                    <>
                        {type === "1" ?
                            <>
                                {
                                    (paramTypes_isLoading) ? <Spinner animation="border" /> : paramTypes.filter(
                                        f => f.is_top === true
                                    ).map((param) => (
                                        <ul key={param.id}>
                                            <li>
                                                <Form.Group controlId={param.id}>
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
                                                        <Form.Group controlId={ppt.id}>
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
                            </>
                            : type === "2" ?
                                <>
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
                                </>
                                : type === "3" ?
                                    <>
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
                                    </>
                                    :
                                    <></>
                        }
                    </>
                }
            </div>
        </>
    )
}
