// General
import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../api/useFetch'

// import components / containers
import Icon from '../../../Components/general/Icon'
import { useCurrency } from '../../../Providers/currencyparites/CurrencyParites'

// Export Default -------------------------------------------- [ Function ]
export default function CardSlide({
    asking_price,
    intro_text,
    bathrooms,
    bedrooms,
    living,
    size_sq_mtr,
    list_photo,
    updatedAt,
    slug,
    district = false,
    currency = false,
    lang = "en",
}) {
    const { settedCurrency, currencyParitesData, isPending } = useCurrency();
    const numFormatNum = asking_price;
    const numFormat = asking_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    asking_price = numFormat;
    let datePublished = new Date(updatedAt);
    let currentDate = new Date();
    let timeDifference = Math.abs(currentDate.getTime() - datePublished.getTime());
    let dayDifference = Math.ceil(timeDifference / (100 * 360 * 24));
    let parites = currency ? ((currency === settedCurrency) ? false : true) : false;
    let paritedPrice = parites && isPending === false ? currencyParitesData.filter(f => f.fromCurrency === currency && f.toCurrency === settedCurrency) : false;

    // ----------------------------------------- Render Content [ return ]
    return (
        <div className="pb-4 mx-2 h-100">
            <Link to={`/${lang}/properties/${slug}`}>
                <div className="main-card-in-out h-100">
                    <div className="main-card-outher h-100">
                        {
                            dayDifference <= 7 &&
                            <div className="main-cards-new">
                                <span className="fw-700 c-fff py-1 px-4 d-block">New Listing</span>
                            </div>
                        }
                        {
                            list_photo.url &&
                            <img src={list_photo.url} alt="" className="w-100 d-block list_photo" />
                        }
                        <div className="main-cards-body p-2 h-100">
                            <span className="cards-body-price fw-700">
                                {
                                    settedCurrency ?
                                        <span>
                                            {
                                                settedCurrency === "Dollar" ?
                                                    "$"
                                                    : settedCurrency === "EURO" ?
                                                        "€"
                                                        : settedCurrency === "TL" ?
                                                            "₺"
                                                            :
                                                            ""
                                            }
                                        </span>
                                        :
                                        currency ?
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
                                            :
                                            null
                                }
                                {
                                    parites ?
                                        <span>
                                            {
                                                paritedPrice && parseInt(numFormatNum*parseFloat(paritedPrice[0].parite)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1.")
                                            }
                                        </span>
                                        :
                                        asking_price
                                }
                            </span>
                            {
                                district &&
                                <h5 className="cards-body-head fz-14 fw-700">
                                    {district.Name}
                                </h5>
                            }
                            <p className="fw-400 cards-body-contents">
                                {intro_text}
                            </p>
                        </div>
                        <div className="main-cards-footer d-flex">
                            <span className="mr-3">
                                <Icon src="bed" />
                                <span>{bedrooms}</span>
                            </span>
                            <span className="mr-3">
                                <Icon src="shower" />
                                <span>{bathrooms}</span>
                            </span>
                            <span className="mr-3">
                                <Icon src="room" />
                                <span>{living}</span>
                            </span>
                            <span className="mr-3">
                                <Icon src="home-size" />
                                <span>{size_sq_mtr}m2</span>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
