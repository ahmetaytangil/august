import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Markdown from 'markdown-to-jsx'

// Components
import SimpleMap from '../../Components/Googlemaps/SimpleMap'

// Export Default -------------------------------------------- [ Function ]
export default function CBannerPanel({ project }) {
    let mapCoordinate = project.location ? project.location.split(",") : false
    let latt = mapCoordinate[0]
    let lngg = mapCoordinate[1]

    // ----------------------------------------- Render Content [ return ]
    return (
        <Container>
            <h1 className="collective-banner c-fff">
                {project.ProjectName}
            </h1>
            <Row>
                <Col xs={12} md={mapCoordinate ? 7 : 12} className="mt-5 mb-4">
                    <Markdown>
                        {project.Content}
                    </Markdown>
                </Col>
                {mapCoordinate &&
                    <Col xs={12} md={5} className="mt-5 mb-4">
                        <SimpleMap
                            latZ={latt}
                            lngZ={lngg}
                        />
                    </Col>
                }
                {project.gallery[0] && project.gallery &&
                    <Col className="mb-4">
                        <img src={project.gallery[0].url} alt="" className="w-100 d-block h-100 object-cover" />
                    </Col>
                }
                {project.gallery[1] && project.gallery &&
                    <Col xs={12} md={6}>
                        <Row>
                            {project.gallery[1] &&
                                <Col xs={project.gallery[3] ? 6 : 12} className="mb-4">
                                    <img src={project.gallery[1].url} alt="" className="w-100 d-block object-cover" />
                                </Col>
                            }
                            {project.gallery[2] &&
                                <Col xs={project.gallery[3] ? 6 : 12} className="mb-4">
                                    <img src={project.gallery[2].url} alt="" className="w-100 d-block object-cover" />
                                </Col>
                            }
                            {project.gallery[3] &&
                                <Col xs={12} className="mb-4">
                                    <img src={project.gallery[3].url} alt="" className="w-100 d-block object-cover" />
                                </Col>
                            }
                        </Row>
                    </Col>
                }
                {project.gallery[4] && project.gallery &&
                    <Col className="mb-4">
                        <img 
                            src={project.gallery[4].url} 
                            alt="" 
                            className="w-100 d-block h-100 object-cover" 
                        />
                    </Col>
                }
                {project.gallery[5] && project.gallery &&
                    <Col xs={12} md={6}>
                        <Row>
                            {project.gallery[5] &&
                                <Col xs={6} className="mb-4">
                                    <img 
                                        src={project.gallery[5].url} 
                                        alt="" 
                                        className="w-100 d-block object-cover" 
                                    />
                                </Col>
                            }
                            {project.gallery[6] &&
                                <Col xs={6} className="mb-4">
                                    <img 
                                        src={project.gallery[6].url} 
                                        alt="" 
                                        className="w-100 d-block object-cover" 
                                    />
                                </Col>
                            }
                            {project.gallery[6] &&
                                <Col xs={12} className="mb-4">
                                    <img 
                                        src={project.gallery[6].url} 
                                        alt="" 
                                        className="w-100 d-block object-cover" 
                                    />
                                </Col>
                            }
                        </Row>
                    </Col>
                }
            </Row>
        </Container>
    )
}
