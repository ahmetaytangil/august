import React from 'react'
import { Row, Spinner } from 'react-bootstrap'


// Component
import FoundCard from './Components/FoundCard'

export default function FoundCardsPanel({
    fetchData,
    filteringP,
    filteredItemsTYPEP
}) {

    return (
        <div>
            {filteringP ?
                <Row>
                    {
                        filteredItemsTYPEP.map(f => (
                            <FoundCard
                                key={f.id}
                                img={f.ListImage.url}
                                head={f.title}
                                marketPlanning={f.market_research_categories}
                                content={f.Subject}
                                sourceFirm={f.SourceFirm}
                                year={f.Year}
                                slug={f.slug}
                            />
                        ))
                    }
                </Row>
                :
                <Row>
                    {
                        fetchData.map(f => (
                            <FoundCard
                                key={f.id}
                                img={f.ListImage.url}
                                head={f.title}
                                marketPlanning={f.market_research_categories}
                                content={f.Subject}
                                sourceFirm={f.SourceFirm}
                                year={f.Year}
                                slug={f.slug}
                            />
                        ))
                    }
                </Row>
            }
        </div>

    )
}

