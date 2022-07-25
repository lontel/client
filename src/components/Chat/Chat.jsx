import { createElement } from "react"
import { useEffect, useState } from "react"
import { Form, Container, Button, Col } from "react-bootstrap"
import React from "react"

const Chat = () => {

    const [chatMessage, setChatMessage] = useState([])

    // const handleInputChange = e => {
    //     const { value, name } = e.target
    //     setChatMessage({ ...chatMessage, [name]: value })
    // }

    const handleForm = e => {
        e.preventDefault()
        
        // const { chatMessage } = e.target
        // setChatMessage(chatMessage)
      

    }

    // useEffect(() => {
    //     setChatMessage()
    // })

    return (

        <Container>
            <Col md={{ offset: 4, span: 4 }}>
                <Form >

                    <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Leve your message here!</Form.Label>
                        <Form.Control as="textarea" type="text" name="message" />
                    </Form.Group>

                    <Button variant="dark" type="submit" onClick={handleForm}>
                        Submit
                    </Button>

                </Form>
            </Col>
        </Container>

    )
}


export default Chat