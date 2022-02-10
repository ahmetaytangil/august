import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function BreadCrumbs({
    thatSlug = false,
    country = false,
    city = false,
    district = false
}) {
    return (
        <div className="w-100 box-shadow-line">
            <Container className="py-3">
                <Row className="justify-content-between">
                    <div className="pl-3">
                        <h5 className="fz-12 fw-700 c-534D m-0 lh-1">
                            <span>
                                Home Page
                            </span>
                            <span className="mx-2">
                                <i className="fal fa-chevron-right"></i>
                            </span>
                            <span>
                                Sale Home
                            </span>
                            <span className="mx-2">
                                <i className="fal fa-chevron-right"></i>
                            </span>
                            {
                                country &&
                                <span>
                                    {country.title}
                                </span>
                            }
                            <span className="mx-2">
                                <i className="fal fa-chevron-right"></i>
                            </span>
                            {
                                city &&
                                <span>
                                    {city.Name}
                                </span>
                            }
                            <span className="mx-2">
                                <i className="fal fa-chevron-right"></i>
                            </span>
                            {
                                district &&
                                <span>
                                    {district.Name}
                                </span>
                            }
                        </h5>
                    </div>
                    {
                        thatSlug &&
                        <div className="pt-3 pt-sm-0 fw-700 fz-12 dnone-m">
                            <p className="m-0 lh-1">
                                <span>
                                    <span className="mr-3 lh-1"># {thatSlug}</span>
                                </span>
                            </p>
                        </div>
                    }
                </Row>
            </Container>
        </div>
    )
}
