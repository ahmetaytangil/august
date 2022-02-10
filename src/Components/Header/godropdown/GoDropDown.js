import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function GoDropDown({
    head,
    leftsideData,
    leftsideHead,
    rightsideData,
    rightsideHead,
    lang,
    leftsideType,
    setNavClose
}) {
    const [isOpen, setisOpen] = useState(false);
    const [goDropdown, setgoDropdown] = useState(false);

    return (
        <div
            onMouseEnter={() => setgoDropdown(true)}
            onMouseLeave={() => setgoDropdown(false)}
            className="go-dropdown"
        >
            <span className="nav-items fz-14 fw-700 cursor-pointer" onClick={() => setisOpen(!isOpen)}>
                {head && head}
                <i className="fas fa-angle-down ml-1"></i>
            </span>
            <div
                className={goDropdown ? "dropdown-content drp-opened p-4 c-000 pl-4" : "dropdown-content p-2 c-000 pl-4"}
                style={isOpen ? { width: "544px", height: 'auto' } : { width: "544px" }}
            >
                <Row className="justify-content-end">
                    {
                        rightsideData ?
                            <Col xs={12} xl={head === "Services" ? 12 : 8}>
                                <Row>
                                    <Col xs={6} xl={6}>
                                        <h5 className="m-0 fw-700 fz-14 mb-2" style={{ color: "#B89B57" }}>
                                            {leftsideHead && leftsideHead}
                                        </h5>
                                        <ul>
                                            {leftsideData !== null &&
                                                leftsideData.map((item) => (
                                                    <li key={item.id} className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                                        <Link to={`/${lang}/city-details/${item.slug}`} className="fz-14">
                                                            <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                                            {item.Name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </Col>
                                    <Col xs={6} xl={6} >
                                        <h5 className="m-0 fw-700 fz-14 mb-2" style={{ color: "#B89B57" }}>
                                            {rightsideHead && rightsideHead}
                                        </h5>
                                        <ul>
                                            {rightsideData !== null &&
                                                rightsideData.map((item) => (
                                                    <li key={item.id} className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                                        <Link to={`/${lang}/places/${item.Slug}`} className="fz-14 mb-2">
                                                            <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            :
                            <Col xs={12} xl={head === "Services" ? 12 : 8}>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="m-0 fw-700 fz-14 mb-2" style={{ color: "#B89B57" }}>
                                            {leftsideHead && leftsideHead}
                                        </h5>
                                    </Col>
                                    {leftsideHead && leftsideData !== null && leftsideData.map((item) => {
                                        if (leftsideType === "services") {
                                            return (
                                                <Col key={item.id} md={6} onClick={() => {setNavClose; setgoDropdown(false);}} className="mb-2">
                                                    <Link to={item.august_service_parts[0] ? `/${lang}/services/parts/${item.slug}` : `/${lang}/services/detail/${item.slug}`} className="fz-14">
                                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                                        {item.title}
                                                    </Link>
                                                </Col>
                                            )
                                        } else {
                                            return (
                                                <Col key={item.id} md={6} onClick={() => {setNavClose; setgoDropdown(false);}} className="mb-2">
                                                    <Link to={`/${lang}/${leftsideType}/${item.slug}`} className="fz-14">
                                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                                        {item.title}
                                                    </Link>
                                                </Col>
                                            )
                                        }
                                    })}
                                </Row>
                            </Col>
                    }
                    {
                        head === "Explore" &&
                        <Col xs={12} xl={4} className="menu-bl">
                            <h5 className="m-0 fw-700 fz-14 mb-2 ml-2" style={{ opacity: '0' }}>
                                hidden
                            </h5>
                            <ul>
                                <li className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                    <Link to={`/${lang}/blogs`} className="fz-14">
                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                        Blog
                                    </Link>
                                </li>
                                <li className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                    <Link to={`/${lang}/news-and-media`} className="fz-14">
                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                        Newsletter
                                    </Link>
                                </li>
                                <li className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                    <Link to={`/${lang}/market-research`} className="fz-14">
                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                        Market Research
                                    </Link>
                                </li>
                                <li className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                    <Link to={`/${lang}/news-and-media`} className="fz-14">
                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                        Press and Media
                                    </Link>
                                </li>
                                <li className="mb-2" onClick={() => {setNavClose; setgoDropdown(false);}}>
                                    <Link to={`/${lang}/places`} className="fz-14">
                                        <i className="fas fa-angle-right mr-2 fz-14 fw-400"></i>
                                        Neighborhood Guide
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    }
                </Row>
            </div>
        </div>
    )
}
