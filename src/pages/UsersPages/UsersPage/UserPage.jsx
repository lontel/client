import { useState, useEffect } from "react";
import userService from "../../../services/user.services";
import UserList from "../../../components/Users/UserList/UserList";
import Loader from "../../../components/Loader/Loader";


const UserListPage = () => {

    return (

        <>

            <h1>Listado de usuarios</h1>
            <UserList />

        </>

    )
}

export default UserListPage