import React, { useState } from 'react';
import BannerImg from '../Assets/images/pages/pages-banner-2.jpg';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SelectBackgroundImg from '../Assets/images/general/select-after.svg';
import FoundHeadsPanel from '../Containers/Marketresearch/FoundHeadsPanel';
import FoundCardsPanel from '../Containers/Marketresearch/FoundCardsPanel';
import requests from '../api/ApiRequests';
import useFetch from '../api/useFetch';
import AugustLoading from '../Components/general/AugustLoading';
import { connect } from 'react-redux';

const MarketResearch = ({ intro_market_researches, isLoading_market_researches }) => {
    const [isfilteringCategory, setisfilteringCategory] = useState(false)
    const [filteringCategory, setfilteringCategory] = useState("")

    const onChangeCategory = (e) => {
        setfilteringCategory(`${e.target.value}`)
        setisfilteringCategory(true)
        if (e.target.value === "all") {
            setisfilteringCategory(false)
        }
    }
    let filteringCategoryLink = isfilteringCategory ? `&market_research_categories.id=${filteringCategory}` : ""
    let generalLink = `${requests.marketResearches}?_limit=-1${filteringCategoryLink}`

    const { data: researchCategories, isPending: researchCategoriesP } = useFetch(requests.researchCategories);
    const { data: foundHeadBefore, isPending } = useFetch(generalLink);

    const [filtering, setFiltering] = useState(false)
    const [filteredItemsTYPE, setFilteredItemsTYPE] = useState([])

    const handleInputChange = event => {
        const query = event.target.value
        const tl = query.toLowerCase()
        const filtered = foundHeadBefore.filter(element => element.title.toLowerCase().includes(tl))
        setFilteredItemsTYPE(filtered)
        setFiltering(true)
        if (query === "") setFiltering(false)
    }

    if (isPending || isLoading_market_researches || intro_market_researches === null) { return <AugustLoading /> } else {
        return (
            <>
                <section className="pages-banner-outher-content mb-4">
                    <div className="position-relative">
                        <div className="market-research-ban w-100">
                            <div className="container">
                                <h1 className="m-0 fz-48 msban-head fw-700 c-fff py-2">Market Research</h1>
                            </div>
                        </div>
                        <img className="w-100 d-block main-banner-img pages-banner-bg-img" src={BannerImg} alt="" style={{ maxHeight: "166px" }} />
                    </div>
                </section>
                <main className="general-main-outher pages-main">
                    <Container>
                        <Row>
                            <Col xs={6} md={3} className="mb-4">
                                {researchCategoriesP ?
                                    <div className="d-flex justify-content-center">
                                        <Spinner animation="border" />
                                    </div>
                                    :
                                    <section className="border pb-1 w-100">
                                        <label className="pl-2 m-0" htmlFor="all-categories">All Categories</label>
                                        <select
                                            id="all-categories"
                                            className="form-control custom-select h-100 fw-700 w-100"
                                            style={{ background: `#fff url(${SelectBackgroundImg}) no-repeat right .75rem center/8px 10px` }}
                                            onChange={onChangeCategory}
                                        >
                                            <option value="all">
                                                All
                                            </option>
                                            {researchCategories.map(({ Name, id }) => (
                                                <option key={id} value={id}>{Name}</option>
                                            ))}
                                        </select>
                                    </section>
                                }
                            </Col>
                            <Col xs={12} md={3} className="mb-4">
                                <section className="border pb-1 w-100">
                                    <label className="pl-2 m-0" htmlFor="search">SEARCH</label>
                                    <input type="text" className="form-control" id="search" placeholder="Type to keywords" onChange={handleInputChange} />
                                </section>
                            </Col>
                        </Row>
                        {filtering &&
                            <section className="w-100 d-flex index-main-head mt-2">
                                <h1 className="fz-20 fw-700">Found {filteredItemsTYPE.length} Research</h1>
                            </section>
                        }
                        <FoundHeadsPanel
                            top_data={intro_market_researches}
                            isPending={isLoading_market_researches}
                        />
                        <FoundCardsPanel
                            fetchData={isfilteringCategory ? foundHeadBefore : intro_market_researches}
                            filteringP={filtering}
                            filteredItemsTYPEP={filteredItemsTYPE}
                        />
                    </Container>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        intro_market_researches: state.marketResearches.marketResearches,
        isLoading_market_researches: state.marketResearches.isLoading
    }
}

export default connect(mapStateToProps)(MarketResearch)
