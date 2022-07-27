import { useEffect, useState } from "react"
import { Form, Container, Button, Col } from "react-bootstrap"
import commentService from "../../services/comment.services"
import CardChat from "./CardChat"
import { useParams } from "react-router-dom"


const Chat = () => {

    const [allMessages, setAllMessages] = useState([])
    const [chatMessage, setChatMessage] = useState({ message: '' })

    const { event_id: event } = useParams()


    useEffect(() => {
        loadMessages()
    }, [])

    const handleInputChange = e => {
        const { value, name } = e.target
        setChatMessage({ ...chatMessage, [name]: value })
    }

    const handleForm = e => {

        e.preventDefault()
        const { message } = chatMessage

        commentService
            .saveComment({ message, event })
            .then(({ data }) => {
                setChatMessage('')
                loadMessages()

            })
            .catch(err => console.log(err))
        e.target.reset()
    }


    const loadMessages = () => {

        commentService
            .getComments(event)
            .then(({ data }) => {
                setAllMessages(data.reverse())
            })
            .catch(err => console.log(err))
    }



    const { message } = chatMessage


    return (
        <>
            <div>
                <CardChat allMessages={allMessages} loadMessages={loadMessages} />
            </div>
            <Container>

                <Col md={{ offset: 4, span: 4 }}>
                    <Form onSubmit={handleForm} >

                        <Form.Group className="mb-3" controlId="bio">
                            <Form.Control type="text" placeholder="Leave your message here!" name="message" value={message} onChange={handleInputChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit" > Submit </Button>

                    </Form>

                </Col>

            </Container>



        </>

    )
}


export default Chat