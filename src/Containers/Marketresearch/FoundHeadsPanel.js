import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import FoundHead from './Components/FoundHead';

export default function FoundHeadsPanel({ top_data, isPending }) {
    const foundHead = isPending ? null : top_data.filter(val => val.ShowInTopContent === true);
    
    if (isPending || foundHead === null) {
        return (
            <div className="d-flex justify-content-center py-5">
                <Spinner animation="border" />
            </div>
        )
    } else {
        return (
            <Row>
                {foundHead.map(head => (
                    <FoundHead
                        key={head.id}
                        img={head.ListImage.url}
                        head={head.title}
                        marketPlanning={head.market_research_categories}
                        content={head.Subject}
                        slug={head.slug}
                    />
                ))}
            </Row>
        )
    }
}

