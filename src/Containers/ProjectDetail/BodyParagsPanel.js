import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function BodyParagsPanel({
    title,
    content,
    bannerUrl
}) {
    return (
        <Row className="align-items-center mb-5 general-orders-outher">
            <Col xs={12} md={6} className="mb-4 general-orders-one">
                <img src={bannerUrl} alt="" className="w-100 d-block object-cover" />
            </Col>
            <Col xs={12} md={6} className="mb-4 general-orders-two">
                <h5 className="fz-24 c-4d4 fw-700">
                    {title}
                </h5>
                <p className="fz-14 c-4d4">
                    {content}
                </p>
            </Col>
        </Row>
    )
}
