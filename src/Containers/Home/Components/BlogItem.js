import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BlogItem({ thislink, head, content, img }) {
    return (
        <Col xs={12} md={6} 
            className="mb-4 position-relative"
        >
            <Link to={thislink}>
                <div className="main-blog-outher p-3">
                    <h5 className="m-0 fz-18 fw-700">
                        {head}
                    </h5>
                    <p className="m-0 fw-700 fz-22">
                        {content}
                    </p>
                </div>
                <img src={img} alt={head} className="w-100 d-block" />
            </Link>
        </Col>
    )
}
