import { useEffect, useState } from "react"
import { Form, Container, Button, Col } from "react-bootstrap"
import React from "react"
import commentService from "../../services/comment.services"
import CardChat from "./CardChat"


const Chat = () => {

    const [chatMessage, setChatMessage] = useState({ message: '' })

    const handleInputChange = e => {
        const { value, name } = e.target
        setChatMessage({ ...chatMessage, [name]: value })
    }

    const handleForm = e => {
        e.preventDefault()

        commentService
            .saveComment(chatMessage)
            .then(({ data }) => {
                console.log(data, 'que hay en este data')
                setChatMessage(data)
            })
            .catch(err => console.log(err))

    }



    const { message } = chatMessage

    return (
        <>
            <div>
                <CardChat state={setChatMessage} />
            </div>
            <Container>

                <Col md={{ offset: 4, span: 4 }}>
                    <Form onSubmit={handleForm} >

                        <Form.Group className="mb-3" controlId="bio">
                            <Form.Label>Leave your message here!</Form.Label>
                            <Form.Control as="textarea" type="text" name="message" value={message} onChange={handleInputChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit" >
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Container>



        </>

    )
}


export default Chat