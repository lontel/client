import commentService from "../../services/comment.services"
import { useState, useEffect } from "react"




const CardChat = () => {

    const [message, setMessage] = useState([])

    useEffect(() => {
        loadMessages()
    }, [])

    const loadMessages = () => {

        commentService
            .getComments()
            .then(({ data }) => {
                setMessage(data)
            })
            .catch(err => console.log(err))
    }

    return (
        message.map(elm => {
            return (
                <p>{elm.message}</p>
            )
        })
    )

}

export default CardChat