import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import AugustLoading from '../../Components/general/AugustLoading';
import AgentCardItem from './Components/AgentCardItem';

const AgentsPanel = ({ lang, personels, personels_loading }) => {
    if (personels_loading || personels === null) { return <AugustLoading /> } else {
        return (
            <main className="general-main-outher pages-main">
                <Container>
                    <Row>
                        {personels !== null && personels.map((personel) => (
                            <AgentCardItem
                                key={personel.id}
                                img={personel.photo.url}
                                name={personel.namesurname}
                                location={personel.august_office.name}
                                langs={personel.personel_languages}
                                email={personel.EMail}
                                phone={personel.Phone}
                                whatsapp={personel.Whatsappnumber}
                                slug={personel.slug}
                                lang={lang}
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
        personels: state.personels.personels,
        personels_loading: state.personels.isLoading,
        lang: state.lang.lang
    }
}

export default connect(mapStateToProps)(AgentsPanel)



