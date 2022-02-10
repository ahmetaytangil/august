import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

// api
import requests from '../../api/ApiRequests'
import useFetch from '../../api/useFetch'

// Components
import AgentCardItem from '../../Containers/Agents/Components/AgentCardItem'

// Export Default -------------------------------------------- [ Function ]
const AgentsPanelTab = ({ officesData, lang, personels, personels_loading }) => {
    const filteredAgents = personels_loading ?
        null
        :
        personels.filter(
            agents => agents.personel_type.id === "611bb84a2f27fa054861bcad"
        )

    if (personels_loading) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" />
            </div>
        )
    } else {
        // ----------------------------------------- Render Content [ return ]
        return (
            <Container className="tabcontent" id="agents">
                <Row>
                    {filteredAgents.length !== 0 ?
                        <div className="w-100">
                            {filteredAgents.map((personel) => (
                                <AgentCardItem
                                    key={personel.id}
                                    img={personel.photo.url}
                                    name={personel.namesurname}
                                    location={officesData.name}
                                    langs={personel.personel_languages}
                                    email={personel.EMail}
                                    phone={personel.Phone}
                                    whatsapp={personel.Whatsappnumber}
                                    slug={personel.slug}
                                    langs={personel.personel_languages}
                                    ofMonth={personel.personel_label}
                                    ofMonthIcon={personel.personel_label}
                                    lang={lang}
                                />
                            ))}
                        </div>
                        :
                        <div className="text-center">There is no agent</div>
                    }
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personels: state.personels.personels,
        personels_loading: state.personels.isLoading
    }
}

export default connect(mapStateToProps)(AgentsPanelTab);
