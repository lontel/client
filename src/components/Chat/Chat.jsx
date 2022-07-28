import './CardChat'
import { useEffect, useState } from "react"
import { Form, Container, Button, Col, Row } from "react-bootstrap"
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
                console.log('-------este-------', data)
                setAllMessages(data.reverse())
            })
            .catch(err => console.log(err))
    }



    const { message } = chatMessage


    return (
        <>


            <Container>
                <CardChat allMessages={allMessages} loadMessages={loadMessages} />

                <Form onSubmit={handleForm} >
                    <Row className="mb-3">
                        <Col>
                            <Form.Group className='input-wrapper' controlId="bio">
                                <Form.Control type="text" placeholder="Leave your message here!" name="message" value={message} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className='input-wrapper' controlId="bio">
                                {/* <Button type="submit" > Submit </Button> */}
                                <button className='button-chat' type="submit">
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Submit</span>
                                </button>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>


            </Container>




        </>

    )
}


export default Chat