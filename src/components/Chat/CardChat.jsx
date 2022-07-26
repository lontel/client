import commentService from "../../services/comment.services"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CardChat = () => {

    const { event_id } = useParams()

    const [message, setMessage] = useState([])

    useEffect(() => {
        loadMessages()
    }, [])

    const loadMessages = () => {

        commentService
            .getComments(event_id)
            .then(({ data }) => {
                setMessage(data)
            })
            .catch(err => console.log(err))
    }

    return (
        message.map(elm => {
            return (
                <ul>
                    <li>
                        <p>{elm.message}</p>
                    </li>
                </ul>
            )
        })
    )

}

export default CardChat