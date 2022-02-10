import React, { useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import useFetch from '../../api/useFetch';
import AngleDown from '../../Assets/images/general/select-after.svg';
import AugustLoading from '../../Components/general/AugustLoading';
import paths from '../../Redux/ApiHelper/apiPaths';
import BlogCard from './Components/BlogCard';

const PressAndMediaPanel = ({ lang, mediaTypes, mediaTypesp, categories, categoriesp }) => {
    const fetchUrl = paths.news;
    const [isfilteringMediaType, setisfilteringMediaType] = useState(false)
    const [filteringMediaType, setfilteringMediaType] = useState("")

    const onChangeMediaType = (e) => {
        setfilteringMediaType(`${e.target.value}`)
        setisfilteringMediaType(true)
        if (e.target.value === "all") {
            setisfilteringMediaType(false)
        }
    }
    let filteringMediaTypeLink = isfilteringMediaType ? `&media_type.id=${filteringMediaType}` : ""

    const [isfilteringCategory, setisfilteringCategory] = useState(false)
    const [filteringCategory, setfilteringCategory] = useState("")

    const onChangeCategory = (e) => {
        setfilteringCategory(`${e.target.value}`)
        setisfilteringCategory(true)
        if (e.target.value === "all") {
            setisfilteringCategory(false)
        }
    }
    let filteringCategoryLink = isfilteringCategory ? `&news_categories.id=${filteringCategory}` : ""

    let generalLink = `${fetchUrl}?_limit=-1${filteringMediaTypeLink}${filteringCategoryLink}`

    const { data: newsMedia, isPending } = useFetch(generalLink);

    const [filtering, setFiltering] = useState(false)
    const [filteredItemsTYPE, setFilteredItemsTYPE] = useState([])

    const handleInputChange = event => {
        const query = event.target.value
        const tl = query.toLowerCase()
        const filtered = newsMedia.filter(element => element.title.toLowerCase().includes(tl))
        setFilteredItemsTYPE(filtered)
        setFiltering(true)
        if (query === "") setFiltering(false)
    }

    if (isPending || mediaTypesp || categoriesp) { return <AugustLoading /> } else {
        return (
            <main className="general-main-outher pages-main">
                <Container>
                    <Row>
                        <Col xs={6} md={3} className="mb-4">
                            {categoriesp ?
                                <div className="d-flex justify-content-center">
                                    <Spinner animation="border" />
                                </div>
                                :
                                <section className="border pb-1 w-100">
                                    <label className="pl-2 m-0" htmlFor="all-categories">
                                        All Categories
                                    </label>
                                    <select
                                        id="all-categories"
                                        className="form-control custom-select h-100 fw-700 w-100"
                                        style={{ background: `#fff url(${AngleDown}) no-repeat right .75rem center/8px 10px` }}
                                        onChange={onChangeCategory}
                                    >
                                        <option value="all">
                                            All
                                        </option>
                                        {categories.map(({ Name, id }) => (
                                            <option key={id} value={id}>{Name}</option>
                                        ))}
                                    </select>
                                </section>
                            }

                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            {mediaTypesp ?
                                <div className="d-flex justify-content-center">
                                    <Spinner animation="border" />
                                </div>
                                :
                                <section className="border pb-1 w-100" >
                                    <label className="pl-2 m-0" htmlFor="mediar">
                                        MEDIA TYPE
                                    </label>
                                    <select
                                        id="media"
                                        className="form-control custom-select h-100 fw-700 w-100"
                                        style={{ background: `#fff url(${AngleDown}) no-repeat right .75rem center/8px 10px` }}
                                        onChange={onChangeMediaType}
                                    >
                                        <option value="all">All</option>
                                        {mediaTypes.map(({ title, id }) => (
                                            <option key={id} value={id}>{title}</option>
                                        ))}
                                    </select>
                                </section>
                            }

                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <section className="border pb-1 w-100">
                                <label className="pl-2 m-0" htmlFor="search">SEARCH</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="search"
                                    placeholder="Type to keywords"
                                    onChange={handleInputChange}
                                />
                            </section>
                        </Col>
                    </Row>
                    {
                        filtering ?
                            <>
                                <section className="w-100 d-flex index-main-head">
                                    <h1 className="fz-28 fw-700">Found {filteredItemsTYPE.length} Press News</h1>
                                </section>
                                <Row>
                                    {filteredItemsTYPE.map((neww) => (
                                        <BlogCard
                                            key={neww.id}
                                            img={neww.ListImage.url}
                                            // name={news_categories}
                                            head={neww.title}
                                            linkk={neww.slug}
                                            published={neww.published_at}
                                            lang={lang}
                                        />
                                    ))}
                                </Row>
                            </>
                            :
                            <Row>
                                {isPending ? null : newsMedia.map((neww) => (
                                    <BlogCard
                                        key={neww.id}
                                        img={neww.ListImage.url}
                                        // name={news_categories}
                                        head={neww.title}
                                        linkk={neww.slug}
                                        published={neww.published_at}
                                        lang={lang}
                                    />
                                ))}
                            </Row>
                    }
                </Container>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.latestNews.news_categories,
        categoriesp: state.latestNews.news_categories_loading,
        mediaTypes: state.latestNews.media_types,
        mediaTypesp: state.latestNews.media_types_loading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(PressAndMediaPanel)