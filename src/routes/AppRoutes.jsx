import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import UserListPage from '../pages/UsersPages/UsersPage/UserPage'
import UserDetails from '../pages/UsersPages/UserDetails/UserDetails'
import UserEdit from '../pages/UsersPages/UserEdit/UserEdit'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import EventListPage from '../pages/EventsPages/EventsPage/EventsPage'
import EventDetails from '../pages/EventsPages/EventsDetails/EventsDetails'
import EventEditForm from '../components/Events/EventEditForm/EventEditForm'
import NewEventPage from '../pages/EventsPages/NewEventPage/NewEventPage'


const AppRoutes = () => {

    return (

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<UserListPage />} />
            <Route path='/account/details/:account_id' element={<UserDetails />} />
            <Route path='/account/edit/:id' element={<UserEdit />} />
            <Route path='/account/sign-up' element={<SignupPage />} />
            <Route path='/account/login' element={<LoginPage />} />
            <Route path='/events' element={<EventListPage />} />
            <Route path='/events/details/:id' element={<EventDetails />} />
            <Route path='/events/create' element={<NewEventPage />} />
            <Route path='/events/edit/:id' element={<EventEditForm />} />

        </Routes>
    )
}
export default AppRoutes

