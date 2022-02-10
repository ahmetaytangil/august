import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PlaceItem({cityName, location, screenLg, img, linkk}) {
    
    return (
        <Col xs={12} sm={6} lg={screenLg} className="position-relative mb-4">
            <Link to={linkk}>
                <div className="ffy-contents px-5">
                    <h5 className="ffy-border-bottom text-center fz-28 fw-700 c-fff">
                        {cityName}
                    </h5>
                    <div className="text-center">
                        <span className="fz-18 c-fff">
                            {location}
                        </span>
                    </div>
                </div>
                <div className="black-bg"></div>
                <img className="object-cover d-block max-h-200-m" src={img} alt="" />
            </Link>
        </Col>
    )
}
