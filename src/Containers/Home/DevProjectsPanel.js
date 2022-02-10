// General
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';

// import components
import Head from '../../Components/general/Head';
import Icon from '../../Components/general/Icon';
import DevProject from './Components/DevProject';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

const DevProjectsPanel = ({ lang, home_projects, home_projects_error_message }) => {
    if (home_projects_error_message !== null) {
        return (
            <ErrorMessage message={home_projects_error_message} />
        )
    } else {
        return (
            <>
                <Head
                    thislink={`/${lang}/projects`}
                    headInner="New Development Projects"
                    buttonInner={"OTHER PROJECTS"}
                />
                <Row>
                    {
                        (home_projects !== null) &&
                        <Col lg={5} className="mb-4 position-relative">
                            {
                                home_projects.filter(val => val.ShowHomePagePrimaryBox === true).map((project) => (
                                    <Link to={`/${lang}/projects/${project.slug}`} key={project.id}>
                                        <div className="new-dev-shdw h-100">
                                            <div className="new-dev-content px-2">
                                                <p className="fw-700 m-0">
                                                    {project.august_project_no}
                                                </p>
                                                <p className="fz-13 fw-600 m-0">
                                                    {project.SubTitle}
                                                </p>
                                            </div>
                                            {project.HomePageVideo &&
                                                <video className="new-dev-video" autoPlay muted loop >
                                                    <source src={project.HomePageVideo.url} type="video/mp4" />
                                                </video>
                                            }
                                            <img
                                                className="object-cover new-dev-img cursor-pointer"
                                                src={project.Banner.url}
                                                alt=""
                                                style={{ maxHeight: "570px" }}
                                            />
                                            {project.HomePageVideo &&
                                                <span className="new-dev-footer">
                                                    <Icon src="back" />
                                                </span>
                                            }
                                        </div>
                                    </Link>
                                ))
                            }
                        </Col>
                    }
                    {
                        (home_projects !== null) &&
                        <Col lg={7}>
                            <Row>
                                {
                                    home_projects.filter(val => val.ShowHomePagePrimaryBox === false).map((project) => (
                                        <DevProject
                                            key={project.id}
                                            august_project_no={project.august_project_no}
                                            SubTitle={project.SubTitle}
                                            slug={project.slug}
                                            img={project.Banner.formats.small ? project.Banner.formats.small.url : project.Banner.formats.thumbnail.url}
                                            lang={lang}
                                        />
                                    ))
                                }
                            </Row>
                        </Col>
                    }
                </Row>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home_projects: state.projects.home_projects,
        home_projects_error_message: state.projects.home_projects_error_message
    }
}

export default connect(mapStateToProps)(DevProjectsPanel)