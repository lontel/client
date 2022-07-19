import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import UserListPage from '../pages/UsersPages/UsersPage/UserPage'
import UserDetails from '../pages/UsersPages/UserDetails/UserDetails'
import HomePage from '../pages/HomePage/HomePage'
import EventListPage from '../pages/EventsPages/EventsPage/EventsPage'
import NewEventPage from '../pages/EventsPages/NewEventPage/NewEventPage'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<UserListPage />} />
            <Route path='/account/details/:account_id' element={<UserDetails />} />
            <Route path='/events' element={<EventListPage />} />
            <Route path='/events/create' element={<NewEventPage />} />
            <Route path='/events/details/:id' element={<h1>Detalle del evento</h1>} />
            <Route path='/account/sign-up' element={<SignupPage />} />

        </Routes>
    )
}
export default AppRoutes

