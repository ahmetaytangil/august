import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default function BlogCard({ img, name, head, linkk, published, lang }) {
    return (
        <Col xs={12} md={6} className="position-relative mb-4">
            <Link to={`/${lang}/news-and-media/${linkk}`}>
                <div className="blog-cards">
                    <img
                        src={img}
                        className="w-100 d-block"
                        alt={head}
                    />
                    <div className="main-blog-outher p-3">
                        <h5 className="m-0 fz-18 fw-700">
                            {name}
                            <span className="float-right mbo-tarih fw-400 fz-13">
                                {published}
                            </span>
                        </h5>
                        <p className="m-0 fw-700 fz-22">
                            {head}
                        </p>
                    </div>
                </div>
            </Link>
        </Col>
    )
}
