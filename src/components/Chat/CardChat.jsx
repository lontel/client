import './CardChat.css'
import commentService from "../../services/comment.services"
import { AuthContext } from "../../contexts/auth.context"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useEffect, useContext, useState } from "react"
import { getFullTime, getFullDate } from './../../utils/dateFormatter'

const CardChat = ({ allMessages, loadMessages }) => {

    const { user } = useContext(AuthContext)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        loadMessages()
    }, [])

    const handleButton = (comment_id) => {

        commentService
            .deleteComment(comment_id)
            .then(() => loadMessages())
            .catch(err => console.log(err))
    }

    const incrementValue = (comment_id) => {

        commentService
            .addLike(comment_id)
            .then(() => {
                loadMessages()
                setIsActive(current => !current)
            })
            .catch(err => console.log(err))
    }


    return (
        allMessages.map(elm => {
            { console.log('&&&&&&&&&&&', elm) }
            return (

                <Container>
                    <div className="mb-3">
                        <ul key={elm._id}>
                            <li>
                                <div className='chat-message'>
                                    <div className="chat-profilePic" style={{ backgroundImage: `url(${elm.owner?.profilePic})` }}></div>
                                    <Row>
                                        <Col className='chat-user'>
                                            <h4 >@{elm.owner.username}</h4>

                                            <p >{elm.message}
                                            </p>
                                        </Col>
                                        <Col>

                                            <Col id='chat-user'>
                                                <p> {getFullTime(elm.createdAt)}</p>
                                            </Col>
                                            {
                                                (elm.owner._id === user._id || user.role === 'ADMIN') ?

                                                    <Button className='delete-message' onClick={() => handleButton(elm._id)} as="div" variant="danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg></Button>
                                                    :
                                                    <button className='like-button' onClick={() => incrementValue(elm._id)}> {elm.likes} </button>


                                            }
                                        </Col>
                                    </Row>
                                </div>


                            </li>
                        </ul>
                    </div>
                </Container >
            )
        })
    )
}


export default CardChat