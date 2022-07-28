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
import AboutUs from '../pages/AboutUs/AboutUs'
import PrivateRoute from './PrivateRoute'
import MyProfilePage from './../pages/MyProfilePage/MyProfilePage'
import ChatPage from '../pages/EventsPages/ChatPage/ChatPage'

const AppRoutes = () => {

    return (

        // Public Routes 

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/account/sign-up' element={<SignupPage />} />
            <Route path='/account/login' element={<LoginPage />} />
            <Route path='/events' element={<EventListPage />} />
            <Route path='/about-us' element={<AboutUs />} />

        // Private Routes

            <Route path="/users" element={<PrivateRoute />}>
                <Route path="" element={<UserListPage />} />
            </Route>
            <Route path="/account/details/:account_id" element={<PrivateRoute />}>
                <Route path="" element={<UserDetails />} />
            </Route>
            <Route path="/account/edit/:user_id" element={<PrivateRoute />}>
                <Route path="" element={<UserEdit />} />
            </Route>
            <Route path='/account/myprofile/:account_id' element={<PrivateRoute />}>
                <Route path="" element={<MyProfilePage />} />
            </Route>
            <Route path="/events/details/:event_id" element={<PrivateRoute />}>
                <Route path="" element={<EventDetails />} />
            </Route>
            <Route path="/events/edit/:event_id" element={<PrivateRoute />}>
                <Route path="" element={<EventEditForm />} />
            </Route>
            <Route path="/events/create" element={<PrivateRoute />}>
                <Route path="" element={<NewEventPage />} />
            </Route>
            <Route path="/events/chat/:event_id" element={<PrivateRoute />}>
                <Route path="" element={<ChatPage />} />
            </Route>



        </Routes>
    )
}
export default AppRoutes
