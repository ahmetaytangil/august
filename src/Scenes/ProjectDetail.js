import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import CBannerPanel from '../Containers/ProjectDetail/CBannerPanel';
import MBannerPanel from '../Containers/ProjectDetail/MBannerPanel';
import BodyParagsPanel from '../Containers/ProjectDetail/BodyParagsPanel';
import CardSlide from '../Containers/Home/Components/CardSlide';
import AugustLoading from '../Components/general/AugustLoading';
import { connect } from 'react-redux';

const ProjectDetail = ({ lang, projects, isPending }) => {
    let { slug } = useParams()
    const [showAll, setShowAll] = useState(false)
    const project = isPending ? null : projects.filter(val => val.slug === slug);

    if (isPending || projects === null || project === null) { return <AugustLoading /> } else {
        return (
            <>
                <div className="w-100">
                    <img
                        src={project[0].Banner.url}
                        alt=""
                        style={{ height: '500px' }}
                        className="w-100 d-block object-cover"
                    />
                </div>
                <main className="general-main-outher pages-main">
                    <CBannerPanel project={project[0]} />
                    <MBannerPanel project={project[0]} />
                    <Container>
                        {project[0].ProjectDetail &&
                            <div>
                                {project[0].ProjectDetail.map((pd) => (
                                    <BodyParagsPanel
                                        key={pd.id}
                                        title={pd.Title}
                                        content={pd.Content}
                                        bannerUrl={pd.Banner.url}
                                    />
                                ))}
                            </div>
                        }
                        {showAll &&
                            <Row>
                                {project[0].august_properties.map((prop) => (
                                    <Col key={prop.id} xs={12} md={6} lg={4}>
                                        <CardSlide
                                            asking_price={prop.asking_price}
                                            intro_text={prop.intro_text}
                                            bathrooms={prop.bathrooms}
                                            bedrooms={prop.bedrooms}
                                            living={prop.living}
                                            size_sq_mtr={prop.size_sq_mtr}
                                            list_photo={
                                                prop.list_photo.formats.small ?
                                                    prop.list_photo.formats.small
                                                    :
                                                    prop.list_photo
                                            }
                                            updatedAt={prop.updatedAt}
                                            slug={prop.Slug}
                                            district={prop.district}
                                            currency={prop.currency}
                                            lang={lang}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        }
                        {!showAll &&
                            <Row>
                                {project[0].august_properties[0] &&
                                    <Col xs={12} md={6} lg={4}>
                                        <CardSlide
                                            asking_price={project[0].august_properties[0].asking_price}
                                            intro_text={project[0].august_properties[0].intro_text}
                                            bathrooms={project[0].august_properties[0].bathrooms}
                                            bedrooms={project[0].august_properties[0].bedrooms}
                                            living={project[0].august_properties[0].living}
                                            size_sq_mtr={project[0].august_properties[0].size_sq_mtr}
                                            list_photo={project[0].august_properties[0].list_photo}
                                            list_photo={
                                                project[0].august_properties[0].list_photo.formats.small ?
                                                    project[0].august_properties[0].list_photo.formats.small
                                                    :
                                                    project[0].august_properties[0].list_photo
                                            }
                                            updatedAt={project[0].august_properties[0].updatedAt}
                                            slug={project[0].august_properties[0].Slug}
                                            district={project[0].august_properties[0].district}
                                            currency={project[0].august_properties[0].currency}
                                            lang={lang}
                                        />
                                    </Col>
                                }
                                {project[0].august_properties[1] &&
                                    <Col xs={12} md={6} lg={4}>
                                        <CardSlide
                                            asking_price={project[0].august_properties[1].asking_price}
                                            intro_text={project[0].august_properties[1].intro_text}
                                            bathrooms={project[0].august_properties[1].bathrooms}
                                            bedrooms={project[0].august_properties[1].bedrooms}
                                            living={project[0].august_properties[1].living}
                                            size_sq_mtr={project[0].august_properties[1].size_sq_mtr}
                                            list_photo={
                                                project[0].august_properties[1].list_photo.formats.small ?
                                                    project[0].august_properties[1].list_photo.formats.small
                                                    :
                                                    project[0].august_properties[1].list_photo
                                            }
                                            updatedAt={project[0].august_properties[1].updatedAt}
                                            slug={project[0].august_properties[1].Slug}
                                            district={project[0].august_properties[1].district}
                                            currency={project[0].august_properties[1].currency}
                                            lang={lang}
                                        />
                                    </Col>
                                }
                                {project[0].august_properties[2] &&
                                    <Col xs={12} md={6} lg={4}>
                                        <CardSlide
                                            asking_price={project[0].august_properties[2].asking_price}
                                            intro_text={project[0].august_properties[2].intro_text}
                                            bathrooms={project[0].august_properties[2].bathrooms}
                                            bedrooms={project[0].august_properties[2].bedrooms}
                                            living={project[0].august_properties[2].living}
                                            size_sq_mtr={project[0].august_properties[2].size_sq_mtr}
                                            list_photo={
                                                project[0].august_properties[2].list_photo.formats.small ?
                                                    project[0].august_properties[2].list_photo.formats.small
                                                    :
                                                    project[0].august_properties[2].list_photo
                                            }
                                            updatedAt={project[0].august_properties[2].updatedAt}
                                            slug={project[0].august_properties[2].Slug}
                                            district={project[0].august_properties[2].district}
                                            currency={project[0].august_properties[2].currency}
                                            lang={lang}
                                        />
                                    </Col>
                                }
                            </Row>
                        }
                        {!showAll &&
                            <button
                                style={{ maxWidth: "350px" }}
                                className="w-100 collective-register-bttn"
                                onClick={() => setShowAll(true)}
                            >
                                All properties on this project
                            </button>
                        }
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        isPending: state.projects.isLoading
    }
}

export default connect(mapStateToProps)(ProjectDetail);
