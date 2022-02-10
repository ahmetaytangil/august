import React from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const FoundHead = ({ img, head, marketPlanning, content, slug, lang }) => {
    return (
        <Col xs={12} lg={6} className="mb-5">
            <Link to={`/${lang}/market-research/${slug}`}>
                <div className="position-relative">
                    <div className="market-head-columns-bg">
                        <div className="black-bg"></div>
                        {img && <img className="w-100 d-block object-cover" src={img} alt={head} style={{ height: '300px' }} />}

                    </div>
                    <div className="market-head-columns-body">
                        <div className="mhcb-bttns-outher">
                            <p className="text-center">
                                {marketPlanning && marketPlanning.map(m => (
                                    <span className="mhcb-bttns" key={m.id}>
                                        {m.Name}
                                    </span>
                                ))}
                            </p>
                        </div>
                        {head &&
                            <h1 className="text-center fw-700 c-fff" style={{ height: "57px" }}>
                                {head}
                            </h1>
                        }

                        {content &&
                            <div className="p-5">
                                <p className="fz-18 fw-700 c-fff p-4 pb-5 bg-clour">
                                    {content}
                                </p>
                            </div>
                        }

                    </div>
                </div>
            </Link>
        </Col>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(FoundHead);
