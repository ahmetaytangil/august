import React from 'react'
import { Row, Col } from 'react-bootstrap'

// api
import useFetch from '../../api/useFetch'

export default function PrProjectsPanel({ fetchUrl }) {
    const { data: projectsData, isPending } = useFetch(`${fetchUrl}?_start=0&_limit=3`)

    if (isPending) {
        return <div>loading...</div>
    } else {
        return (
            <Row>
                {projectsData.map((project) => (
                    <Col xs={12} md={6} lg={4} key={project.id}>
                        <div className="w-100 mt-4 mb-4">
                            <img src={project.Banner.formats.thumbnail.url} alt="" className="w-100 d-block object-cover" style={{ height: "175px" }} />
                            <div className="rdp-body p-2 position-relative">
                                <span className="mc-body-abs float-left w-auto px-3 fw-700" style={{ right: "auto" }}>
                                    {project.ProjectName}
                                </span>
                                <p className="fw-400 m-0">
                                    {project.Content.substring(0, 70)}...
                                </p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        )
    }
}
