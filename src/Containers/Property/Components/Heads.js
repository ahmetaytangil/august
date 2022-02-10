import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default function Heads({name, img, getLink, lang}) {
    return (
        <Col xs={6} lg={3} className="position-relative mb-5">
            <Link to={`/${lang}/places/${getLink}`}>
                <div className="ffy-contents px-5">
                    <h5 className="text-center fz-24 fw-700 c-fff">{name}</h5>
                </div>

                <div className="black-bg"></div>
                <img className="w-100 d-block object-cover" src={img} alt={name} style={{ borderRadius: "4px", height: '150px' }} />
            </Link>
        </Col>
    )
}
