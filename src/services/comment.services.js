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


    getComments() {
        return this.api.get('/getAllComments')
    }

    getOneComment(coment_id) {

        return this.api.get(`/getOneComment/${coment_id}`)
    }

    saveComment(commentData) {
        return this.api.post('/saveComment', commentData)
    }

    editComment(coment_id, commentData) {
        return this.api.put(`/updateComment/${coment_id}`, commentData)
    }

    deleteComment(coment_id) {
        return this.api.delete(`/deleteComment/${coment_id}`)
    }

}

const commentService = new CommentService()

export default commentService