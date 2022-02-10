import React from 'react'
import { Col } from 'react-bootstrap'

export default function PropertyItem({ img, head, content }) {
    return (
        <Col lg={6} className="mb-md-5 mb-4">
            <div className="d-flex">
                <div className="mr-3">
                    <img src={img} style={{ width: "57px" }} alt="" />
                </div>
                <div>
                    <h5 className="m-0 fw-700 fz-20 www-color">
                        {head}
                    </h5>
                    <p className="m-0 www-color">
                        {content}
                    </p>
                </div>
            </div>
        </Col>
    )
}
