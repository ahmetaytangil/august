import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import AugustLoading from '../Components/general/AugustLoading'
import PagesHead from '../Components/Pageshead/PagesHead'
import BannerImg from '../Assets/images/pages/pages-banner-2.jpg';
import Heads from '../Containers/Property/Components/Heads'

const CityDetail = ({ cities, isLoading, lang }) => {
    const { slug } = useParams();
    const citiesDATA = cities !== null ? cities.filter(val => val.slug === slug) : null
    const citiesOBJ = cities !== null ? citiesDATA[0] : null

    if (isLoading || cities === null) {
        return <AugustLoading />
    } else {
        return (
            <>
                <PagesHead
                    pageName={`Explore ${citiesOBJ.Name}`}
                    img={BannerImg}
                />

                <main className="general-main-outher pages-main">
                    <div className='container'>

                        {
                            citiesOBJ.august_places.length ?
                                <div className='row'>
                                    {
                                        citiesOBJ.august_places.map((places) => (
                                            <Heads
                                                key={places.id}
                                                name={places.title}
                                                getLink={places.Slug}
                                                img={places.HomePageImage.url}
                                                lang={lang}
                                            />
                                        ))
                                    }
                                </div>
                                :
                                <div>
                                    location not found, please return to <Link to={`/${lang}/home`}><i><b>home page</b></i></Link>
                                </div>
                        }

                    </div>
                </main>
            </>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities,
        isLoading: state.cities.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(CityDetail)