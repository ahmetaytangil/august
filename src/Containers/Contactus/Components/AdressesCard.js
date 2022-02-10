import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Import Images
import PhoneImg from '../../../Assets/images/general/phone-black.svg'
import MailImg from '../../../Assets/images/general/mail-black.svg'

// Export Default -------------------------------------------- [ Function ]
export default function AdressesCard({ img, name, address, lang, ContactUsListOrder }) {
    // ----------------------------------------- Render Content [ return ]
    return (
        <Col xs={12} className="mb-4" style={{ order: ContactUsListOrder }}>
            <Row>
                <Col xs={12} md={4} xl={3} className="pr-md-0">
                    <div className="position-relative">
                        <h5 className="contact-us-img-abs c-fff fz-22 fw-700 text-center">
                            {name}
                        </h5>
                        <div className="black-bg" style={{ left: "0", right: "0" }}></div>
                        <img
                            className="w-100 d-block"
                            src={img}
                            alt={name}
                        />
                    </div>
                </Col>
                <Col xs={12} md={8} xl={9} className="pl-md-0">
                    <div className="w-100 h-100 contact-us-cards-outher p-4">
                        {address.map((thisaddress) => (
                            <div key={thisaddress.id} className="contact-cards-contents">
                                <h5 className="fz-22 fw-700">
                                    <Link to={`/${lang}/office/${thisaddress.slug}`}>
                                        {thisaddress.name}
                                    </Link>
                                </h5>
                                <p className="fz-18">
                                    {thisaddress.Address}
                                </p>
                                <ul>
                                    {thisaddress.Phone === "0" ?
                                        null
                                        :
                                        <li>
                                            <a target="_blank" href={`tel:${thisaddress.Phone}`}>
                                                <img
                                                    className="mr-1"
                                                    src={PhoneImg}
                                                    alt={thisaddress.name}
                                                />
                                                {thisaddress.Phone}
                                            </a>
                                        </li>
                                    }
                                    {thisaddress.EMail &&
                                        <li>
                                            <a target="_blank" href={`mailto:${thisaddress.EMail}`}>
                                                <img
                                                    className="mr-1"
                                                    src={MailImg}
                                                    alt={thisaddress.name}
                                                />
                                                {thisaddress.EMail}
                                            </a>
                                        </li>
                                    }

                                </ul>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
