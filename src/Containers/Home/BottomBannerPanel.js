import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BGImg from '../../Assets/images/general/footer-before-bg.png';
import { useGeneral } from '../../Providers/general/General';

export default function BottomBannerPanel() {
    const { signUpOpener } = useGeneral();
    
    return (
        <div
            className="w-100 footer-before-contents mt-5 py-4"
            style={{ backgroundImage: `url("${BGImg}")` }}
        >
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={5} className="c-fff">
                        <h1 className="fz-60 fw-700 m-0">3 Reasons</h1>
                        <h3 className="fz-40 fw-700 m-0">to sign up to</h3>
                        <h3 className="fz-40 fw-700 m-0">My August</h3>
                    </Col>
                    <Col xs={12} md={6} lg={7} className="mt-5 mt-md-0">
                        <Row>
                            <Col xs={12} lg={6} className="mb-4">
                                <div className="d-flex">
                                    <div>
                                        <span className="fbc-spans mr-2">
                                            1
                                        </span>
                                    </div>
                                    <div className="c-fff">
                                        <h1 className="m-0 fz-20 fw-700 pt-1">Get Ahead of the Herd</h1>
                                        <p className="m-0 fw-400">Be the first in line with our property alerts.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className="mb-4">
                                <div className="d-flex">
                                    <div>
                                        <span className="fbc-spans mr-2">
                                            2
                                        </span>
                                    </div>
                                    <div className="c-fff">
                                        <h1 className="m-0 fz-20 fw-700 pt-1">Save Properties</h1>
                                        <p className="m-0 fw-400">Save, rate and organise your favourite homes.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className="mb-4">
                                <div className="d-flex">
                                    <div>
                                        <span className="fbc-spans mr-2">
                                            3
                                        </span>
                                    </div>
                                    <div className="c-fff">
                                        <h1 className="m-0 fz-20 fw-700 pt-1">Gain insight &amp; information</h1>
                                        <p className="m-0 fw-400">Monthly newsletters &amp; quartely reports keeping you updated on the market</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className="mb-4">
                                <span onClick={signUpOpener} className="footer-before-link fw-700 cursor-pointer">Join My August</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
