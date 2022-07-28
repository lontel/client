import './UserPage.css'
import UserList from "../../../components/Users/UserList/UserList";


const UserListPage = () => {

    return (

        <>

            <h1 id='users-title' >List of users</h1>
            <hr></hr>
            <br></br>
            <UserList />
        </>

    )
}

export default UserListPage