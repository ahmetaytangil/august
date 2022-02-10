import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function PRCarouselPanel({ propertyData }) {
    return (
        <Carousel>

            {
                propertyData.photos.map((thisData) => (
                    <Carousel.Item key={thisData.id}>
                        <img
                            className="d-block w-100 pr-list-photos"
                            src={thisData.url}
                            alt=""
                        />
                    </Carousel.Item>
                ))
            }


        </Carousel>
    )
}
