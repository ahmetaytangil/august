// General
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

// api
import requests from '../api/ApiRequests'

// import images
import PagesBanneBG from '../Assets/images/pages/pages-banner-2.jpg'
import InstagramSvg from '../Assets/images/general/instagram-black.svg'
import FacebookSvg from '../Assets/images/general/facebook-black.svg'
import TwitterSvg from '../Assets/images/general/twitter-black.svg'
import LinkedInSvg from '../Assets/images/general/linkedin-black.svg'
import VkSvg from '../Assets/images/general/vk-black.svg'
import LocationSvg from '../Assets/images/general/location.svg'
import PhoneBlack from '../Assets/images/general/phone-black.svg'
import MailBlack from '../Assets/images/general/mail-black.svg'
import LocationBlack from '../Assets/images/general/location-black.svg'

// import components / containers
import PagesHead from '../Components/Pageshead/PagesHead'
import CardSlide from '../Containers/Home/Components/CardSlide'
import useFetch from '../api/useFetch'
import { connect } from 'react-redux'
import AugustLoading from '../Components/general/AugustLoading'

// Export Default -------------------------------------------- [ Function ]
const AgentDetail = ({ lang, personels, personels_loading }) => {
    let { slug } = useParams();
    const thisAgent = personels !== null ? personels.filter(val => val.slug === slug) : null
    const agentToObject = thisAgent !== null ? thisAgent[0] : null

    // ----------------------------------------- Render Content [ return ]

    if (personels_loading && agentToObject === null) {
        return <AugustLoading />
    } else {
        return (
            <>
                <PagesHead
                    type="detail"
                    img={PagesBanneBG}
                />
                <main className="general-main-outher pages-main">
                    <Container className="agent-details-container">
                        <Row>
                            <Col xs={12} lg={3}>
                                <img
                                    src={agentToObject.photo.url}
                                    alt=""
                                    className="w-100 d-block"
                                />
                                <div className="agents-detail-left-col mt-4">
                                    {agentToObject.Phone &&
                                        <a
                                            target="_blank" href={`tel:${agentToObject.Phone}`}
                                            className="ad-left-col-bttn d-block w-100 mb-3 fz-13"
                                        >
                                            <img className="mr-2" src={PhoneBlack} alt="" />
                                            {agentToObject.Phone}
                                        </a>
                                    }
                                    <a
                                        target="_blank"
                                        href={`mailto:${agentToObject.EMail}`}
                                        className="ad-left-col-bttn d-block w-100 mb-3 fz-13"
                                    >
                                        <img
                                            className="mr-2"
                                            src={MailBlack}
                                            alt=""
                                        />
                                        {agentToObject.EMail}
                                    </a>
                                    {agentToObject.Whatsappnumber && agentToObject.Phone &&
                                        <div
                                            style={{ left: '0', right: '0', top: '0', bottom: '0' }}
                                            className="d-flex op-agents-cards-footer ad-left-col-border mb-4 position-relative"
                                        >
                                            <div className="w-50 pr-1">
                                                <a
                                                    target="_blank"
                                                    href={`https://wa.me/${agentToObject.Whatsappnumber}`}
                                                    className="d-block w-100"
                                                >
                                                    Whatsapp
                                                </a>
                                            </div>
                                            <div className="w-50 pl-1">
                                                <a
                                                    target="_blank"
                                                    href={`sms:${agentToObject.Phone}`}
                                                    className="d-block w-100"
                                                >
                                                    Text Me
                                                </a>
                                            </div>
                                        </div>
                                    }
                                    <div className="ad-left-col-general-border p-2">
                                        <form action="">
                                            <p className="fw-700 c-000">
                                                Contact Me
                                            </p>
                                            <input
                                                type="text"
                                                className="ad-left-col-general-border w-100 p-2 mb-2"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="text"
                                                className="ad-left-col-general-border w-100 p-2 mb-2"
                                                placeholder="Email"
                                            />
                                            <input
                                                type="text"
                                                className="ad-left-col-general-border w-100 p-2 mb-2"
                                                placeholder="Phone"
                                            />
                                            <input
                                                type="text"
                                                className="ad-left-col-general-border w-100 p-2 mb-2"
                                                placeholder="Country"
                                            />
                                            <textarea
                                                name="name"
                                                className="ad-left-col-general-border w-100 p-2 mb-2"
                                                rows="8"
                                                cols="80"
                                                defaultValue="Your messages"></textarea>
                                            <button className="btn more-info-bttn w-100" type="submit">
                                                Send Message
                                            </button>
                                        </form>
                                    </div>
                                    <div className="d-flex justify-content-between p-3">
                                        <Link to="/">
                                            <img src={InstagramSvg} alt="" />
                                        </Link>
                                        <Link to="/">
                                            <img src={FacebookSvg} alt="" />
                                        </Link>
                                        <Link to="/">
                                            <img src={TwitterSvg} alt="" />
                                        </Link>
                                        <Link to="/">
                                            <img src={LinkedInSvg} alt="" />
                                        </Link>
                                        <Link to="/">
                                            <img src={VkSvg} alt="" />
                                        </Link>
                                    </div>
                                    <div className="d-flex pl-3 m-border">
                                        <div>
                                            <img
                                                className="mr-2"
                                                src={LocationBlack}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <p className="m-0 fw-700 fz-14">
                                                August {agentToObject.august_office.name}
                                            </p>
                                            <p>
                                                {agentToObject.august_office.Address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={9}>
                                <div className="clearfix m-c-000 d-none-991">
                                    <h2 className="float-left fw-700 c-fff m-c-000 fz-36">
                                        {agentToObject.namesurname}
                                    </h2>
                                    <Link
                                        to={`/${lang}/office/${agentToObject.august_office.slug}`}
                                        className="float-right agent-details-t-bttn m-c-000"
                                    >
                                        <img
                                            className="mr-2"
                                            src={LocationSvg}
                                            alt=""
                                        />
                                        August {agentToObject.august_office.name}
                                    </Link>
                                </div>
                                <div className="py-4">
                                    <h5 className="c-4d4 fw-700 fz-18">
                                        About Me
                                    </h5>
                                    {
                                        agentToObject.personel_languages &&
                                        <p className="fz-14 fw-700 c-4d4">
                                            Languages:
                                            {agentToObject.personel_languages.map(pl => (
                                                <span className="fw-400">{pl.Name}, </span>
                                            ))}
                                        </p>
                                    }

                                    <p>
                                        {agentToObject.Detail}
                                    </p>
                                </div>
                                <Row>
                                    {agentToObject.august_properties.slice(0, 5).map((propsT) => (
                                        <Col key={propsT.id} xs={12} md={6} lg={4} className="px-md-0">
                                            <CardSlide
                                                key={propsT.id}
                                                asking_price={propsT.asking_price}
                                                intro_text={propsT.intro_text}
                                                bathrooms={propsT.bathrooms}
                                                bedrooms={propsT.bedrooms}
                                                living={propsT.living}
                                                size_sq_mtr={propsT.size_sq_mtr}
                                                list_photo={
                                                    propsT.list_photo.formats.small ?
                                                        propsT.list_photo.formats.small
                                                        :
                                                        propsT.list_photo
                                                }
                                                updatedAt={propsT.updatedAt}
                                                slug={propsT.Slug}
                                                district={propsT.district}
                                                currency={propsT.currency}
                                                lang={lang}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personels: state.personels.personels,
        personels_loading: state.personels.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(AgentDetail);

