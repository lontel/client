import commentService from "../../services/comment.services"
import { useState, useEffect } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"
import { Button } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"


const CardChat = ({ allMessages, loadMessages }) => {


    const { event_id } = useParams()
    const [message, setMessage] = useState([])

    const { user } = useContext(AuthContext)
    console.log(user, 'desde contexto auth')

    useEffect(() => {
        loadMessages()
    }, [])

    const handleButton = (comment_id) => {

        commentService
            .deleteComment(comment_id)
            .then(() => loadMessages())
            .catch(err => console.log(err))
    }

    return (
        allMessages.map(elm => {
            console.log(elm, 'desde el elelmeto iterrado')

            return (
                <ul key={elm._id}>
                    <li>
                        <p>{elm.message}</p>
                        {
                            elm?.owner === user._id
                            &&
                            <Button onClick={() => handleButton(elm._id)} as="div" variant="danger">Delete comment <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></Button>
                        }
                    </li>
                </ul>
            )
        })
    )
}


export default CardChat