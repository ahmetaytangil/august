import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FoundCard = ({ img, head, marketPlanning, content, sourceFirm, year, lang, slug }) => {
    return (
        <Col xs={12} md={6} lg={4} className="mb-4">
            <Link to={`/${lang}/market-research/${slug}`}>
                <div className="market-cards-outher h-100">

                    {img && <img className="d-block w-100" src={img} alt={head} />}

                    <div className="market-cards-body p-3">
                        <p className="m-0 fz-14">
                            {sourceFirm && sourceFirm} {year && <span>{year}</span>}
                        </p>
                        {head &&
                            <h5 className="m-0 fz-20 fw-700">
                                {head}
                            </h5>
                        }
                        {content &&
                            <p className="fz-14">
                                {content}
                            </p>
                        }

                    </div>
                    <div className="market-cards-footer">
                        <div className="mhcb-bttns-outher">
                            <p className="text-left">
                                {marketPlanning && marketPlanning.map(m => (
                                    <span className="mhcb-bttns" key={m.id}>
                                        {m.Name}
                                    </span>
                                ))}
                            </p>
                        </div>
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

export default connect(mapStateToProps)(FoundCard);
