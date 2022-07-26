import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import UserEditForm from "../../components/Users/UserEditForm/UserEditForm"
import userService from "../../services/user.services"


const MyProfilePage = () => {

    const { account_id } = useParams()
    const [profileData, setProfileData] = useState({
        username: '',
        bio: '',
        profilePic: '',
        email: '',
        role: ''

    })

    const { username, email, bio, role, profilePic } = profileData
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        userService
            .getProfile(account_id)
            .then(({ data }) => {
                setProfileData(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
        <h1>Welcome {username}</h1>
        <h2>{bio}</h2>
        <h3>{email}</h3>
        <img src={profilePic} alt="" />
        <h4>{role}</h4>
        </>
    )
}

export default MyProfilePage