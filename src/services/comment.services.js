import axios from 'axios'

class CommentService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/forum`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getComments(event_id) {
        return this.api.get(`/getAllComments/${event_id}`)
    }

    getOneComment(comment_id) {

        return this.api.get(`/getOneComment/${comment_id}`)
    }

    saveComment(commentData) {
        return this.api.post('/saveComment', commentData)
    }

    editComment(comment_id, commentData) {
        return this.api.put(`/updateComment/${comment_id}`, commentData)
    }

    deleteComment(comment_id) {
        return this.api.delete(`/deleteComment/${comment_id}`)
    }

    addLike(comment_id) {
        return this.api.put(`/addLike/${comment_id}`)
    }



}

const commentService = new CommentService()

export default commentService