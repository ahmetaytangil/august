import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Icons
import PhoneBlackSvg from '../../Assets/images/general/phone-black.svg'
import MailBlackSvg from '../../Assets/images/general/mail-black.svg'
import LocationSvg from '../../Assets/images/general/location.svg'
import SimpleMap from '../../Components/Googlemaps/SimpleMap'



export default function ContactPanelTab({ officesData }) {
    let mapLocation = officesData.MapLocation ? officesData.MapLocation.split(",") : false

    return (
        <Container className="tabcontent" id="contact">
            <section className="w-100 d-flex index-main-head mb-5 border-bottom">
                <h1 className="fz-28 fw-700 c-4d4 mt-0">
                    Contact us at {officesData.name}
                </h1>
            </section>
            <Row>
                <Col xs={12} md={3}>
                    <form action="">
                        <div className="form-group">
                            <label className="c-4d4 fz-14 fw-700" htmlFor="fname">First Name</label>
                            <input type="text" className="form-control office-page-form-control" id="fname" />
                        </div>
                        <div className="form-group">
                            <label className="c-4d4 fz-14 fw-700" htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control office-page-form-control" id="lname" />
                        </div>
                        <div className="form-group">
                            <label className="c-4d4 fz-14 fw-700" htmlFor="emailadress">EMail</label>
                            <input type="email" className="form-control office-page-form-control" id="emailadress" />
                        </div>
                        <div className="form-group">
                            <label className="c-4d4 fz-14 fw-700" htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control office-page-form-control" id="phone" />
                        </div>
                        <div className="form-group">
                            <label className="c-4d4 fz-14 fw-700" htmlFor="msg">Your Message</label>
                            <textarea className="form-control form-control office-page-form-control" id="msg" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn opr-card-bttn w-100">Submit Now</button>
                    </form>
                </Col>
                <Col xs={12} md={9}>
                    <div className="mt-4">
                        {mapLocation &&
                            <SimpleMap
                                latZ={mapLocation[0]}
                                lngZ={mapLocation[1]}
                                h={"278px"}
                            />
                        }
                    </div>
                    <div className="d-flex mt-4 flex-colmn-mob">
                        <div className="d-flex mr-5">
                            <div>
                                <img className="mr-2" src={LocationSvg} alt="" />
                            </div>
                            <div>
                                <p>
                                    {officesData.Address}
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {
                                    officesData.Phone === "0" ? 
                                    null 
                                    : 
                                    <li>
                                    <a href={`sms:${officesData.Phone}`} className="d-flex">
                                        <img className="mr-2" src={PhoneBlackSvg} alt="" />
                                        {officesData.Phone}
                                    </a>
                                </li>
                                }
                                
                                <li>
                                    <a href={`mailto:${officesData.EMail}`} className="d-flex">
                                        <img className="mr-2" src={MailBlackSvg} alt="" />
                                        {officesData.EMail}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
