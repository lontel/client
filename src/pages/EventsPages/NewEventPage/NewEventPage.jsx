import { Container } from 'react-bootstrap'
import EventForm from '../../../components/Events/EventForm/EventForm'


const NewEventPage = () => {

    return (

        <Container>

            <h1>Create new event</h1>

            <hr />

            <EventForm />

        </Container>
    )
}

export default NewEventPage