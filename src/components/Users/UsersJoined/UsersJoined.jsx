import { Card } from "react-bootstrap"


const UsersJoined = ({ username, profilePic }) => {

    return (
        <Card className="UserCard mb-4">
            <Card.Body>
                <>
                    <img src={profilePic} />
                    <p>{username}</p>
                </>

            </Card.Body>

        </Card >
    )
}

export default UsersJoined