import React, { useState } from 'react';
import { Container, Modal, Row, Col } from 'react-bootstrap';
import GridWhite from '../../Assets/images/general/grid-white.svg';
import XWhite from '../../Assets/images/general/x-white.svg';
import BackBackWhite from '../../Assets/images/back-back-white.svg';
import NextNextWhite from '../../Assets/images/next-next-white.svg';
import Fancybox from '../../Components/general/fancybox';

const GalleryModal = ({ show, onHide, photos, floor_plan }) => {
    const [number, setNumber] = useState(0)
    const [listView, setListView] = useState(false)

    const handleClick = (i) => {
        setListView(true)
        setNumber(i)
    }

    const handleIncrement = () => {
        let index = number
        index++
        if (index > photos.length - 1) {
            index = 0
        }
        setNumber(index)
    }

    const handleDecrement = () => {
        let index = number
        index--
        if (index > 0) {
            index = photos.length - 1
        }
        setNumber(index)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            id="gallerymodal"
            aria-labelledby="gallerymodal"
            centered
        >
            <div className="black-bgc-others">
                <div className="d-flex justify-content-end mr-4 mt-4">
                    {
                        listView &&
                        <button type="button" className="btn btn-grifd" onClick={() => setListView(false)}>
                            <img src={GridWhite} alt="" />
                        </button>
                    }
                    <button type="button" className="btn btn-close" onClick={onHide}>
                        <img src={XWhite} alt="" />
                    </button>
                </div>
                {
                    listView &&
                    <div className="w-100 p-4 viewgallery-outhers vo-head">
                        <picture>
                            <source
                                media="(min-width:1200px)"
                                srcSet={photos[number].url}
                            />
                            <source
                                media="(min-width:565px)"
                                srcSet={photos[number].formats.medium.url}
                            />
                            <img
                                src={photos[number].formats.small.url}
                                alt=""
                                className="w-100 d-block"
                            />
                        </picture>
                        <span
                            className="carousel-control-next view-gallery-next mt-3 cursor-pointer"
                            onClick={handleIncrement}
                        >
                            <span className="pl-2">Next</span>
                            <img src={NextNextWhite} alt="" className="ml-2" />
                        </span>
                        <span
                            className="carousel-control-prev view-gallery-prev mt-3 cursor-pointer"
                            onClick={handleDecrement}
                        >
                            <img src={BackBackWhite} alt="" className="mr-2" />
                            <span className="pr-2">Previous</span>
                        </span>


                    </div>
                }
                {
                    !listView &&
                    <div className="p-4 viewgallery-outhers vo-content">
                        <Row>
                            <div className="col-12 col-xl-4 mb-4">
                                {
                                    floor_plan &&
                                    <div>
                                        <h5 className="c-fff fz-28" style={{ opacity: ".7" }}>Floor Plans</h5>
                                        <Row>
                                            <Fancybox>
                                                {floor_plan.map((fp, i) => (
                                                    <Col xl={12} key={fp.id} className={i === 0 ? "first-gallery fg-all" : "fg-all"}>
                                                        <a
                                                            href={fp.url}
                                                            data-fancybox="gallery"
                                                            className="btn p-0 w-100"
                                                        >
                                                            <img src={fp.formats.thumbnail.url} alt="" className="w-100 d-block" />
                                                        </a>
                                                    </Col>
                                                ))}
                                            </Fancybox>
                                            {/* {
                                                floor_plan.map((fp) => (
                                                    <Col xs={3} md={6} key={fp.id} className="px-1 mb-2">
                                                        <img src={fp.formats.thumbnail.url} className="d-block w-100 object-cover" alt="" />
                                                    </Col>
                                                ))
                                            } */}
                                        </Row>
                                    </div>
                                }
                            </div>
                            <div className="col-12 col-xl-8">
                                <h5 className="c-fff fz-28" style={{ opacity: ".7" }}>Photos</h5>
                                <Row>
                                    {
                                        photos.map((image, index) => {
                                            var i = index++
                                            return (
                                                <Col xs={3} md={4} key={image.id} className="mb-2 px-1">
                                                    <img
                                                        className="cursor-pointer object-cover"
                                                        src={image.formats.thumbnail ? image.formats.thumbnail.url : image.formats.small.url}
                                                        alt=""
                                                        onClick={() => handleClick(i)}
                                                    />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Row>
                    </div>
                }
                <div className="viewgallery-outhers vo-video p-4">
                    {/* Video */}
                </div>
            </div>
        </Modal>
    )
}

export default function PropertyHeadPanel({
    price,
    photos,
    floor_plan,
    district = false,
    currency = false,
    showModal,
    setShowModalTRUE,
    setShowModalFALSE
}) {
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center for-sale-pld-outher">
                <div className="for-sale-pld p-3">
                    <p className="mb-0 fz-24 fw-700">
                        Sale in {district.Name}
                    </p>
                    <p className="mb-0 fz-20 fw-700">
                        {
                            currency &&
                            <span>
                                {
                                    currency === "Dollar" ?
                                        "$"
                                        : currency === "EURO" ?
                                            "€"
                                            : currency === "TL" ?
                                                "₺"
                                                :
                                                ""
                                }
                            </span>
                        }
                        {price}
                    </p>
                </div>
                <div className="view-gallery-pld">
                    <button
                        type="button"
                        className="btn fz-14 fw-700 viewModalBtn"
                        onClick={setShowModalTRUE}
                    >
                        VIEW GALLERY ({photos.length + floor_plan.length})
                    </button>

                    <GalleryModal
                        show={showModal}
                        onHide={setShowModalFALSE}
                        photos={photos}
                        floor_plan={floor_plan}
                    />

                </div>
            </div>
        </Container>
    )
}
