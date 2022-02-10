// General
import React from 'react';
import Slider from 'react-slick';

// import components / containers
import CardSlide from './Components/CardSlide';
import Head from '../../Components/general/Head';
import { connect } from 'react-redux';
import { cardSliderSettings } from '../../Settings/settings';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';


// Component -------------------------------------------- [ Function ]
const CardSliderPanel = ({ lang, home_properties, home_properties_error_message }) => {
    if (home_properties_error_message !== null) {
        return (
            <ErrorMessage message={home_properties_error_message} />
        )
    } else {
        return (
            <>
                <div className="px-md-2">
                    <Head
                        thislink={`/${lang}/property-list-view`}
                        headInner="August Exclusives"
                        buttonInner={"MORE PROPERTIES"}
                    />
                </div>
                <Slider {...cardSliderSettings} className="multiple-items">
                    {home_properties !== null &&
                        home_properties.map((thisdata) => (
                            <CardSlide
                                key={thisdata.id}
                                asking_price={thisdata.asking_price}
                                intro_text={thisdata.intro_text}
                                bathrooms={thisdata.bathrooms}
                                bedrooms={thisdata.bedrooms}
                                living={thisdata.living}
                                size_sq_mtr={thisdata.size_sq_mtr}
                                list_photo={thisdata.list_photo.formats.small}
                                updatedAt={thisdata.updatedAt}
                                slug={thisdata.Slug}
                                district={thisdata.district}
                                currency={thisdata.currency}
                                lang={lang}
                            />
                        ))
                    }
                </Slider>
            </>
        )
    }
}

// Global State to Props
const mapStateToProps = (state) => {
    return {
        home_properties: state.properties.home_properties,
        home_properties_error_message: state.properties.home_properties_error_message
    }
}

// Export Default -------------------------------------------- [ Function ]
export default connect(mapStateToProps)(CardSliderPanel);


