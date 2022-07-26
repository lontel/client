import commentService from "../../services/comment.services"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"


const CardChat = ({ allMessages, loadMessages }) => {

    const { user} = useContext(AuthContext)
console.log(user, 'desde contexto auth')

    const handleButton = (comment_id) => {

        commentService
            .deleteComment(comment_id)
            .then(() => loadMessages() )
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
                            <Button onClick={() => handleButton(elm._id)} as="div" variant="danger">Delete comment</Button>                          
                    }
                    </li>
                </ul>
            )
        })
    )

}

export default CardChat