import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import UserListPage from '../pages/UsersPages/UsersPage/UserPage'
import UserDetails from '../pages/UsersPages/UserDetails/UserDetails'
import HomePage from '../pages/HomePage/HomePage'
import EventListPage from '../pages/EventsPages/EventsPage/EventsPage'
import NewEventPage from '../pages/EventsPages/NewEventPage/NewEventPage'
import EventDetails from '../pages/EventsPages/EventsDetails/EventsDetails'
import UserEdit from '../pages/UsersPages/UserEdit/UserEdit'
import LoginPage from '../pages/LoginPage/LoginPage'
import EventEditForm from '../components/Events/EventEditForm/EventEditForm'
import UserDelete from '../components/Users/UserDelete/UserDelete'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<UserListPage />} />
            <Route path='/account/details/:account_id' element={<UserDetails />} />
            <Route path='/account/delete/:id' element={<UserDelete />} />
            <Route path='/account/sign-up' element={<SignupPage />} />
            <Route path='/account/edit/:id' element={<UserEdit />} />
            <Route path='/account/login' element={<LoginPage />} />
            <Route path='/events' element={<EventListPage />} />
            <Route path='/events/create' element={<NewEventPage />} />
            <Route path='/events/details/:id' element={<EventDetails />} />
            <Route path='/events/edit/:id' element={<EventEditForm />} />



        </Routes>
    )
}
export default AppRoutes

