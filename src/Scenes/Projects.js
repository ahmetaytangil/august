import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import BannerBG from '../Assets/images/pages/pages-banner-1.jpg';
import AugustLoading from '../Components/general/AugustLoading';
import DevProject from '../Containers/Home/Components/DevProject';

const Projects = ({ lang, projectsData, isPending }) => {
    if (isPending || projectsData === null) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content">
                    <div className="position-relative">
                        <div className="container position-absolute search-outher pages-banner-h">
                            <div className="pages-banner-inner">
                                <h1 className="text-center so-h1 fw-700 fz-40">
                                    Other Projects
                                </h1>
                            </div>
                        </div>
                        <img
                            className="w-100 d-block main-banner-img pages-banner-bg-img"
                            src={BannerBG}
                            alt=""
                        />
                    </div>
                </section>
                <main>
                    <Container className="mt-5">
                        <Row>
                            {projectsData !== null && projectsData.map((project) => (
                                <DevProject
                                    key={project.id}
                                    august_project_no={project.august_project_no}
                                    SubTitle={project.SubTitle}
                                    slug={project.slug}
                                    img={project.Banner.url}
                                    lang={lang}
                                />
                            ))}
                        </Row>
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projectsData: state.projects.projects,
        isPending: state.projects.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(Projects)