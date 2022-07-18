import { Routes, Route } from 'react-router-dom'
import UserListPage from '../pages/UsersPage/UserPage'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<UserListPage />} />
            <Route path='/events' element={<h1>Soy los eventos</h1>} />
            <Route path='/events/create' element={<h1>Crea tus eventos</h1>} />
            <Route path='/events/details/:id' element={<h1>Detalle del evento</h1>} />
        </Routes>
    )
}
export default AppRoutes

