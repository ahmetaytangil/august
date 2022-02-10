// General
import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Export Default -------------------------------------------- [ Function ]
export default function CareersCard({ subject, content, refNo, createdAt }) {

    const date = new Date(createdAt)
    const getYearA = date.getFullYear(date)
    const getMonthA = date.getMonth(date)
    const getDateA = date.getDate(date)
    const totalDate = String(getDateA)+"/"+"0"+String(getMonthA)+"/"+String(getYearA)
    
    // ----------------------------------------- Render Content [ return ]
    return (
        <Col xs={12} className="mb-4">
            <div className="careers-cards-outher">
                <h5 className="m-0 fz-22 fw-700">
                    {subject}
                </h5>
                <p className="c-000 fz-14">
                    <span className="mr-4">Date: {totalDate}</span> 
                    <span>Ref: {refNo}</span> 
                </p>
                <div className="clearfix">
                    <p 
                        className="float-left pr-5" 
                        style={{maxWidth: "615px"}}
                    >
                        {content}
                    </p>
                    <Link 
                        to="/" 
                        className="float-right more-info-bttn"
                    >
                        MORE INFO
                    </Link>
                </div>
            </div>
        </Col>
    )
}
