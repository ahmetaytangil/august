import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default function SPagination({ filteredLength, activePagS, handle }) {
    let items = [];
    let propNumber = Math.ceil(filteredLength/21)

    for (let number = 0; number <= propNumber; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePagS} onClick={() => handle(number)}>
                {number+1}
            </Pagination.Item>,
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <Pagination>{items}</Pagination>
        </div>
    )
}
