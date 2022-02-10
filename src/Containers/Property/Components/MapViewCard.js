// General
import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

// import components / containers
import Icon from '../../../Components/general/Icon'

// Export Default -------------------------------------------- [ Function ]
export default function MapViewCard({
    asking_price,
    intro_text,
    bathrooms,
    bedrooms,
    living,
    size_sq_mtr,
    list_photo,
    handleMarker,
    district,
    currency
}) {

    const numFormat = asking_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    asking_price = numFormat

    // ----------------------------------------- Render Content [ return ]
    return (
        <Col xs={12} md={6} xl={12} className="mb-4">
            <div className="main-card-in-out cursor-pointer" onClick={handleMarker}>
                <div className="main-card-outher d-flex">
                    <div className="w-50">
                        <img src={list_photo} alt="" className="w-100 d-block object-cover" />
                    </div>
                    <div className="w-50 position-relative">
                        <div className="main-cards-body pl-2">
                            <span className="cards-body-price fw-700 fz-14">
                                {currency &&
                                    <span>
                                        {
                                            currency === "Dollar" ?
                                                "$"
                                                : currency === "EURO" ?
                                                    "€"
                                                    : currency === "TL" ?
                                                        "₺"
                                                        :
                                                        ""
                                        }
                                    </span>
                                }{asking_price}
                            </span>
                            <h5 className="cards-body-head fz-12 fw-700">
                                {district.Name}
                            </h5>
                            <p className="fw-400 cards-body-contents fz-12 m-0">
                                {intro_text}
                            </p>
                        </div>
                        <div className="main-cards-footer d-flex">
                            <span className="mr-2">
                                <Icon src="shower" />
                                <span>{bathrooms}</span>
                            </span>
                            <span className="mr-2">
                                <Icon src="bed" />
                                <span>{bedrooms}</span>
                            </span>
                            <span className="mr-2">
                                <Icon src="room" />
                                <span>{living}</span>
                            </span>
                            <span className="mr-2">
                                <Icon src="home-size" />
                                <span>{size_sq_mtr}m2</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
