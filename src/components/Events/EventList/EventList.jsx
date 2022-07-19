import { Row, Col } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'


const EventList = ({ events }) => {

    return (
        <Row>
            {
                events.map(event => {
                    return (
                        <Col md={3} key={event._id} >
                            <EventCard {...event} />
                        </Col>
                    )

                })
            }
        </Row>
    )
}

export default EventList