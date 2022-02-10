import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NewsItem({ link, img, head, content}) {
    return (
        <Col xs={12} lg={6} className="mb-5">
            <Link to={link}>
                <div className="d-flex ln-outher">
                    <div className="l-news-img">
                        <img 
                            src={img} 
                            style={{width: '185px', height: '92px', objectFit: 'cover'}} 
                            alt="" 
                            className="w-100 d-block" 
                        />
                    </div>
                    <div className="p-2">
                        <h5 className="m-0 fw-700 fz-14">
                            {head}
                        </h5>
                        <p className="m-0 fz-13 fw-400">
                            {content.substring(0, 150)}
                        </p>
                    </div>
                </div>
            </Link>
        </Col>
    )
}
