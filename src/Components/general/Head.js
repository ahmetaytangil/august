import React from 'react'
import { Link } from 'react-router-dom'

export default function Head({thislink, headInner, buttonInner}) {
    return (
        <section className="w-100 d-flex index-main-head mt-md-5 mt-4">
            <h1 className="fz-28 fw-700 mt-md-4 mt-0">{headInner}</h1>
            <Link to={thislink} className="more-prop-link fw-700 c-000">{buttonInner}</Link>
        </section>
    )
}
