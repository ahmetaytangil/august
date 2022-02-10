// General
import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import images
import IconLocation from '../../../Assets/images/general/location.svg'

// Export Default -------------------------------------------- [ Function ]
export default function AgentCardItem({
    slug,
    img,
    name,
    location = false,
    langs = false,
    email = false,
    phone = false,
    whatsapp = false,
    ofMonth = null,
    ofMonthIcon = null,
    lang
}) {
    // ----------------------------------------- Render Content [ return ]
    return (
        <Col xs={12} sm={6} xl={3} className="mb-4">
            <div className="office-p-agents-cards-outher">
                {ofMonth &&
                    <div className="op-agents-cards-abs text-left d-flex">
                        {ofMonthIcon.Icon &&
                            <img
                                className="p-2"
                                src={ofMonthIcon.Icon.url}
                                alt=""
                                style={{ width: "35px" }}
                            />
                        }
                        <span className="lh-1">
                            {ofMonth.Title}
                        </span>
                    </div>
                }
                <Link to={`/${lang}/personels/${slug}`}>
                    <img
                        className="w-100 d-block object-cover"
                        style={{ height: '250px' }}
                        src={img}
                        alt={name}
                    />
                </Link>
                <div className="op-agents-cards-body p-2 position-relative">
                    {location &&
                        <span className="mc-body-abs text-left fw-700">
                            <img
                                className="mr-2 ml-3"
                                src={IconLocation}
                                alt=""
                                style={{ marginTop: "-5px", width: "12px" }}
                            />
                            {location}
                        </span>
                    }
                    <h5 className="fz-18 fw-700 m-0 pt-1">
                        <Link to={`/${lang}/personels/${slug}`}>
                            {name}
                        </Link>
                    </h5>
                    <div className="border-bottom">
                        <small >
                            {
                                langs &&
                                langs.map((lang) => {
                                    return (
                                        <span key={lang.id}>{lang.Name}, </span>
                                    )
                                })
                            }
                        </small>
                    </div>
                    {email &&
                        <p className="m-0 pt-2">
                            {email}
                        </p>
                    }
                    {phone &&
                        <p>
                            P: {phone}
                        </p>
                    }
                    {whatsapp && phone &&
                        <div className="d-flex op-agents-cards-footer">
                            <div className="w-50 pr-1">
                                <a
                                    className="d-block w-100"
                                    href={`https://wa.me/${whatsapp}`}
                                    target="_blank"
                                >
                                    Whatsapp
                                </a>
                            </div>
                            <div className="w-50 pl-1">
                                <a
                                    className="d-block w-100"
                                    href={`sms:${phone}`}
                                    target="_blank"
                                >
                                    Text Message
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Col>
    )
}
