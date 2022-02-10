import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserWhite from '../../Assets/images/favorited/user-white.svg';
import FavoriteBlack from '../../Assets/images/favorited/favorite-black.svg';
import CancelBlack from '../../Assets/images/favorited/cancel-black.svg';
import { useAuth } from '../../Providers/firebase/contexts/AuthContext';
import { useGeneral } from '../../Providers/general/General';

export default function Favorited() {
    const { currentUser, logout, writeUserData, databaseState } = useAuth();
    const { openFavoriteSide, closeSide } = useGeneral();
    const [error, setError] = useState('');
    const [isLastVisitedWindow, setIsLastVisitedWindow] = useState(false);

    const handleLogOut = async () => {
        setError('')

        try {
            await logout()
            setIsUserLoggedIn(false)
        } catch {
            setError('Failed to log out')
            console.error(error);
        }
    }

    const removeCart = (id) => {
        if (currentUser !== null) {
            if (databaseState.currentUser_cart) {
                var index = databaseState.currentUser_cart.findIndex(function (o) {
                    return o.id === id;
                })
                let settedArr = []
                for (var i = 0; i < databaseState.currentUser_cart.length; i++) {
                    if (i !== index) {
                        settedArr.push(databaseState.currentUser_cart[i]);
                    }
                }
                writeUserData(currentUser.uid, settedArr, databaseState.currentUser_lastVisited);
            }
        }
    }

    return (
        <div className={openFavoriteSide && currentUser ? "favorited-side-outher opened" : "favorited-side-outher"}>
            <div className="favorited-side-outher-black-bg" onClick={closeSide}>
                {/* Black Bg */}
            </div>
            <div className={openFavoriteSide && currentUser ? "favorited-side opened" : "favorited-side"}>
                <div className="close-fav-side cursor-pointer" onClick={closeSide}>
                    <i className="fal fa-times c-fff fz-18"></i>
                </div>
                <div className="fav-header d-flex px-5 pt-4">
                    <div className="mr-3">
                        <img src={UserWhite} alt="" />
                    </div>
                    <div className="pt-3">
                        {
                            currentUser &&
                            <>
                                <h5 className="m-0 fz-22 fw-700 c-fff">
                                    {currentUser.displayName}
                                </h5>
                                <p className="m-0 fz-14 c-fff cursor-pointer" onClick={handleLogOut}>
                                    <span>Logout</span>
                                </p>
                            </>
                        }
                    </div>
                </div>
                <div className="fav-body">
                    <Row>
                        <Col xs={6}>
                            <span
                                className={!isLastVisitedWindow ? "active fav-tabs-btn tablinks fw-700" : "fav-tabs-btn tablinks fw-700"}
                                onClick={() => setIsLastVisitedWindow(false)}
                            >
                                My Properties
                            </span>
                        </Col>
                        <Col xs={6}>
                            <span
                                className={isLastVisitedWindow ? "active fav-tabs-btn tablinks fw-700" : "fav-tabs-btn tablinks fw-700"}
                                onClick={() => setIsLastVisitedWindow(true)}
                            >
                                Last Visited
                            </span>
                        </Col>
                    </Row>
                    {
                        isLastVisitedWindow ?
                            <div className="px-4 tabcontent">
                                <h5 className="d-flex align-items-center py-4 fz-20">
                                    <span className="mr-2">
                                        <img src={FavoriteBlack} alt="" />
                                    </span>
                                    <span className="mr-2 lh-1">
                                        Last Visited
                                    </span>
                                </h5>
                                {
                                    (databaseState.currentUser_lastVisited !== null && currentUser) &&
                                    <div>
                                        {
                                            databaseState.currentUser_lastVisited.map((item) => (
                                                <div key={item.id} className="fav-cards-outher p-3 mb-3">
                                                    <div className="d-flex">
                                                        <div className="mr-3">
                                                            <img src={item.list_photo.formats.thumbnail ? item.list_photo.formats.thumbnail.url : item.list_photo.url} alt="" style={{ maxWidth: '75px' }} />
                                                        </div>
                                                        <div>
                                                            <h5 className="fz-14 fw-400 c-000 m-0">
                                                                {item.district.Name}
                                                            </h5>
                                                            <p className="m-0 fz-14 fw-400 text-left">
                                                                <span className="cards-body-price pl-0">
                                                                    {item.currency === "Dollar" && "$"}
                                                                    {item.currency === "TL" && "₺"}
                                                                    {item.currency === "EURO" && "€"}
                                                                    {item.asking_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                            :
                            <div className="px-4 tabcontent">
                                <h5 className="d-flex align-items-center py-4 fz-20">
                                    <span className="mr-2">
                                        <img src={FavoriteBlack} alt="" />
                                    </span>
                                    <span className="mr-2 lh-1">
                                        My Properties
                                    </span>
                                </h5>
                                {
                                    (databaseState.currentUser_cart !== null && currentUser) &&
                                    <div>
                                        {
                                            databaseState.currentUser_cart.map((item) => (
                                                <div key={item.id} className="fav-cards-outher p-3 mb-3">
                                                    <div className="d-flex">
                                                        <div className="mr-3">
                                                            <img src={item.list_photo.formats.thumbnail ? item.list_photo.formats.thumbnail.url : item.list_photo.url} alt="" style={{ maxWidth: '75px' }} />
                                                        </div>
                                                        <div>
                                                            <h5 className="fz-14 fw-400 c-000 m-0">
                                                                {item.district.Name}
                                                            </h5>
                                                            <p className="m-0 fz-14 fw-400 text-left">
                                                                <span className="cards-body-price pl-0">
                                                                    {item.currency === "Dollar" && "$"}
                                                                    {item.currency === "TL" && "₺"}
                                                                    {item.currency === "EURO" && "€"}
                                                                    {item.asking_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}

                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <span className="cursor-pointer" onClick={() => removeCart(item.id)}>
                                                            <img src={CancelBlack} alt="" />
                                                        </span>

                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }

                            </div>
                    }


                </div>
            </div>
        </div>
    )
}
