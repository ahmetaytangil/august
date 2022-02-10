import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function DevProject({ august_project_no, SubTitle, slug, img, lang }) {
    return (
        <Col sm={6} className="mb-4">
            <Link to={`/${lang}/projects/${slug}`}>
                <div className="new-dev-shdw">
                    <div className="new-dev-content px-2">
                        <p className="fw-700 m-0">
                            {august_project_no}
                        </p>
                        <p className="fz-13 fw-600 m-0">
                            {SubTitle}
                        </p>
                    </div>
                    <img
                        style={{ height: '265px' }}
                        className="w-100 d-block object-cover"
                        src={img}
                        alt={SubTitle}
                    />
                </div>
            </Link>
        </Col>
    )
}
