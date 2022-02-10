import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import BannerImg from '../Assets/images/pages/pages-banner-3.jpg';
import AugustLoading from '../Components/general/AugustLoading';
import PagesHead from '../Components/Pageshead/PagesHead';
import OfficeMainPanel from '../Containers/Officepage/OfficeMainPanel';

const OfficePage = ({
    properties,
    properties_loading,
    offices,
    offices_loading,
    lang
}) => {
    let { slug } = useParams()
    const offices_slug = offices !== null ? offices.filter(val => val.slug === slug) : null;

    if (offices_loading || offices_slug === null || properties_loading) {
        return <AugustLoading />
    } else if (offices_slug.constructor === Array) {
        return (
            <>
                <PagesHead
                    type="office"
                    pageName="August"
                    content={offices_slug[0].name}
                    img={BannerImg}
                    address={offices_slug[0].Address}
                    email={offices_slug[0].EMail}
                    phone={offices_slug[0].Phone}
                />
                <OfficeMainPanel
                    dataPRS={properties}
                    properties_loading={properties_loading}
                    officesData={offices_slug[0]}
                    lang={lang}
                />
            </>
        )
    } else { return null }
}

const mapStateToProps = (state) => {
    return {
        properties: state.properties.properties,
        properties_loading: state.properties.isLoading,
        offices: state.offices.offices,
        offices_loading: state.offices.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(OfficePage);