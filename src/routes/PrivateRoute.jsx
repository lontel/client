import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"
import { MessageContext } from "../contexts/userMessage.context"

function PrivateRoute() {
    const { setShowMessage } = useContext(MessageContext)

    const { isLoading, user } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!user) {
        setShowMessage({ show: true, title: `Oh no!`, text: 'You have to login first!' })

        return <Navigate to="/account/login" />
    }

    return <Outlet />
}

export default PrivateRoute