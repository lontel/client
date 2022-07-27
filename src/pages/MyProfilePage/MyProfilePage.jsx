import { useEffect } from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
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
            .then(({ data }) => setProfileData(data))
            .catch(err => console.log(err))
    }
    return (role === 'ADMIN' ?
        <>
            <h1>Welcome {username}</h1>
            <h2>{bio}</h2>
            <h3>{email}</h3>
            <img src={profilePic} alt="" />
            <h4>{role}</h4>
            <Link to="/users">
                <Button as="span" >Users</Button>
            </Link>


            {/* <div class="container">
                <div class="card">
                    <input accept="image/png, image/jpeg" name="avatar" type="file"/>
                        <main>
                            <a href="">
                                <svg xml:space="preserve" style="enable-background:new 0 0 129.5 129.5;" viewBox="0 0 129.5 129.5" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Camada_1" version="1.1">
                                    <style type="text/css">
                                        .st0 {
                                            fill : #BAC5E1;
                        }

                                        .st1 {
                                            fill: #FFFFFF;
                        }
                                    </style>
                                    <g>

                                        <ellipse ry="64.8" rx="64.8" cy="64.8" cx="64.8" class="st0" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -26.8258 64.7633)"></ellipse>
                                        <ellipse ry="32.6" rx="25.2" cy="54.2" cx="64.8" class="st1"></ellipse>
                                        <path d="M64.8,89.1c-21.1,0-39.6,6.4-50.5,16.2c11.9,14.7,30.1,24.2,50.5,24.2c20.4,0,38.6-9.4,50.5-24.2
		C104.4,95.6,85.8,89.1,64.8,89.1z" class="st1"></path>
                                        <path d="M67.6,105.9H62c-5.3,0-9.6-4.3-9.6-9.6V74.4c0-5.3,4.3-9.6,9.6-9.6h5.6c5.3,0,9.6,4.3,9.6,9.6v21.9
		C77.2,101.6,72.9,105.9,67.6,105.9z" class="st1"></path>
                                        <path d="M43,55.7c1.5,4.2,0.9,8.3-1.3,9s-5.1-2.1-6.6-6.3c-1.5-4.2-0.9-8.3,1.3-9C38.6,48.6,41.6,51.4,43,55.7z" class="st1"></path>
                                        <ellipse ry="4.2" rx="8.1" cy="57" cx="90.4" class="st1" transform="matrix(0.328 -0.9447 0.9447 0.328 6.8843 123.7582)"></ellipse>
                                        <path d="M42.7,55.5c-3.3-6-6.6-12.3-6.5-19.1c0.2-6.8,5.3-14,12.1-13.7c1.2,0,2.4,0.3,3.5,0.1c2.3-0.3,4.1-2.3,6-3.7
		c4.3-3.2,10.3-3.9,15.2-1.9c3.1,1.2,5.7,3.4,8.6,4.8c5.6,2.6,12.4,2.4,17.8-0.7c-1.1,2.1-3,3.8-5.2,4.6c2,0.6,4.3,0.6,6.3-0.2
		c-1.2,2.2-3.2,3.9-5.5,4.8c1.7,0.1,3.4,0.2,5.2,0.4c-1.5,2.1-3.6,3.7-6,4.6c1.4,0,2.7,0.1,4.1,0.1c-1,3-3.6,5.4-6.7,6.1
		c0.9,0,1.7,0,2.6,0c-2.9,4.1-5.7,8.2-8.6,12.4c-0.8,1.2-1.7,2.4-2.9,3.2c-1,0.6-2.2,0.9-3.3,1.2c-8.5,1.9-17.2,2.5-25.8,1.7
		c-3-0.3-6-0.8-8.4-2.6c-2.3-1.8-3.6-5.4-2-7.8" class="st1"></path>
                                        <path d="M48.5,95.3c0.2-3.4,0.6-6.8,1.3-10.2c1.7,1.9,4.6,2.2,7.1,2.3c3.9,0.2,7.8,0.3,11.6,0.5
		c0.5,2.6,0.8,5.8-1.1,7.6c-0.9,0.9-2.1,1.3-3.3,1.6c-2.6,0.7-5.3,1.1-8,1.1c-3.2,0-7.1-0.9-8.1-4c0.3-0.3,0.7-0.6,1-0.9" class="st1"></path>
                                        <path d="M81,95.3c-0.2-3.4-0.6-6.8-1.3-10.2c-1.7,1.9-4.6,2.2-7.1,2.3c-3.9,0.2-7.8,0.3-11.6,0.5
		c-0.5,2.6-0.8,5.8,1.1,7.6c0.9,0.9,2.1,1.3,3.3,1.6c2.6,0.7,5.3,1.1,8,1.1c3.2,0,7.1-0.9,8.1-4c-0.3-0.3-0.7-0.6-1-0.9" class="st1"></path>
                                    </g>
                                </svg>
                            </a>
                        </main>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                        </span>
                </div>
                <div class="info">
                    <h2>Igor Brown</h2>
                    <p>Developer</p>
                </div>
            </div> */}

        </>
        :
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