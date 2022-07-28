import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import userService from "../../../services/user.services"
import { Form, Button } from "react-bootstrap"
import uploadServices from '../../../services/upload.services'


const UserEditForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { user_id } = useParams()
    const navigate = useNavigate()

    const [editData, setEditData] = useState({
        username: '',
        email: '',
        bio: '',
        role: ''
    })

    useEffect(() => {
        userService
            .getOneUser(user_id)
            .then(({ data }) => {
                setEditData({
                    username: data.username,
                    email: data.email,
                    bio: data.bio,
                    role: data.role
                })
            })
            .catch(err => console.log(err))
    }, [])


    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .editUser(user_id, editData)
            .then((data) => {
                navigate(`/account/myprofile/${user_id}`)
            })
            .catch(err => console.log(err))
    }

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setEditData({ ...editData, profilePic: data.cloudinary_url })
            })
            .catch(err => console.error(err))
    }

    const { username, email, bio, role } = editData

    return (
        <Form onSubmit={handleSubmit} >

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="profilePic" />
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Select role</Form.Label>
                <Form.Select onChange={handleInputChange} name="role" value={role}>
                    <option value={'CYCLIST'}>Cyclist</option>
                    <option value={'SPONSOR'}>Sponsor</option>
                </Form.Select>
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Edit user</Button>
            </div>

        </Form>

    )
}

export default UserEditForm