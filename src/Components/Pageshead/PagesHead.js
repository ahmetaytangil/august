import React from 'react'
import { Link } from 'react-router-dom'
import LocationSvg from '../../Assets/images/general/location.svg'
import PhoneSvg from '../../Assets/images/general/phone.svg'
import MailSvg from '../../Assets/images/general/mail.svg'

export default function PagesHead(
    {
        type = "general",
        pageName = false,
        content = false,
        img,
        address = false,
        email = false,
        phone = false
    }) {

    if (type === "general") {
        return (
            <section className="pages-banner-outher-content mb-4">
                <div className="position-relative">
                    <div className="container position-absolute search-outher pages-banner-h search-pages d-flex py-3">
                        <div className="pages-banner-inner mt-4">
                            {
                                pageName &&
                                <h1 className="text-left so-h1 fw-700 fz-48 m-xl-0 mt-0">
                                    {pageName}
                                </h1>
                            }
                            {
                                content &&
                                <p className="c-fff fz-18 m-0">
                                    {content}
                                </p>
                            }
                        </div>
                    </div>
                    <img
                        src={img}
                        alt={pageName}
                        className="w-100 d-block main-banner-img pages-banner-bg-img"
                    />
                </div>
            </section>
        )
    }

    if (type === "detail") {
        return (
            <section className="pages-banner-outher-content mb-4">
                <div className="position-relative">
                    <img className="w-100 d-block main-banner-img pages-banner-bg-img" src={img} alt={pageName} />
                </div>
            </section>
        )
    }

    if (type === "office") {
        return (
            <section className="pages-banner-outher-content mb-4">
                <div className="position-relative">
                    <div className="container position-absolute search-outher pages-banner-h search-pages d-flex py-3">
                        <div className="pages-banner-inner mt-4">
                            <p className="c-fff fz-24 fw-700 m-0">
                                {pageName}
                            </p>
                            <h1 className="text-left so-h1 fw-700 fz-48 m-xl-0 mt-0">
                                {content}
                            </h1>
                        </div>
                        <div className="pages-banner-footer office-page-banner-footer c-fff">
                            <p className="m-0 d-flex mb-2">
                                <span className="d-block">
                                    <img className="mr-2" src={LocationSvg} alt={pageName} />
                                </span>
                                <span style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.7)' }}>
                                    {address}
                                </span>
                            </p>
                            <ul>
                                {phone === "0" ?
                                    null
                                    :
                                    <li style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                        <span>
                                            <img className="mr-2" src={PhoneSvg} alt={pageName} />
                                        </span>
                                        {phone}
                                    </li>
                                }
                                {email &&
                                    <li style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                        <span>
                                            <img className="mr-2" src={MailSvg} alt={pageName} />
                                        </span>
                                        {email}
                                    </li>
                                }


                            </ul>
                        </div>
                    </div>

                    <img className="w-100 d-block main-banner-img pages-banner-bg-img" src={img} alt={pageName} />

                </div>
            </section>
        )
    }
    if (type === "press") {
        return (
            <section className="pages-banner-outher-content mb-4">
                <div className="position-relative">
                    <div className="container position-absolute search-outher pages-banner-h search-pages d-flex py-3">
                        <div className="pages-banner-inner">
                            <h1 className="text-left so-h1 fw-700 fz-48 mb-0">
                                {pageName}
                            </h1>
                            <p className="c-fff fz-18">
                                {content}
                            </p>
                        </div>
                        <div className="pages-banner-footer office-page-banner-footer c-fff">
                            <p className="m-0">
                                {address}
                            </p>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <img className="mr-1" src={PhoneSvg} alt={pageName} />
                                        {phone}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <img className="mr-1" src={MailSvg} alt={pageName} />
                                        {email}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img className="w-100 d-block main-banner-img pages-banner-bg-img" src={img} alt={pageName} />

                </div>
            </section>
        )
    }

}
