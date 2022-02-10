import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import AdressesCard from './Components/AdressesCard';
import AugustLoading from '../../Components/general/AugustLoading';

const ContactUsMainPanel = ({ lang, countries, countries_loading }) => {
    if (countries_loading || countries === null) { return <AugustLoading /> } else {
        return (
            <main className="general-main-outher pages-main">
                <Container>
                    <Row>
                        {countries !== null && countries.map((item) => (
                            <AdressesCard
                                key={item.id}
                                img={item.image.url}
                                name={item.title}
                                address={item.august_offices}
                                lang={lang}
                                ContactUsListOrder={item.ContactUsListOrder}
                            />
                        ))}
                    </Row>
                </Container>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries.countries,
        countries_loading: state.countries.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(ContactUsMainPanel)
