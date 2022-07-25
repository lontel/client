// import { useState } from "react"
// import { Form, Container, Button, Col } from "react-bootstrap"


// const Chat = () => {

//     // const [message, setMessage] = useState

//     // const handleInputChange = e => {
//     //     const { value, name } = e.target
//     //     setMessage({ ...message, [name]: value })
//     // }

//     const handleForm = e => {
//         e.preventDefault()
//         const { message } = e.target

//         console.log(message)
//     }

//     return (

//         <Container>
//             <Col md={{ offset: 6, span: 4 }}>
//                 <Form >

//                     <Form.Group className="mb-3" controlId="bio">
//                         <Form.Label>Leve your message here!</Form.Label>
//                         <Form.Control as="textarea" type="text" name="message" value={message} />
//                     </Form.Group>

//                     <Button variant="dark" type="submit" onClick={handleForm}>
//                         Submit
//                     </Button>

//                 </Form>
//             </Col>
//         </Container>

//     )
// }


// export default Chat