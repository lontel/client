import './NavBar.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import { MessageContext } from '../../contexts/userMessage.context'


const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)

    const logout = () => {

        setShowMessage({ show: true, title: 'Good bye!', text: 'Your session has been succesfully closed' })
        logoutUser()

    }

    return (

        <Navbar bg="dark" expand="md" variant="dark" className='mb-5'>
            <Container>
                <Link to="/">
                    <Navbar.Brand>Bike Connect!</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        {user ?
                            <>
                                <Link to="/account/logout">
                                    <Nav.Link as="span" onClick={logout} >Logout</Nav.Link>
                                </Link>
                            </>
                            :
                            <>
                                <Link to="/account/sign-up">
                                    <Nav.Link as="span">Sign-Up</Nav.Link>
                                </Link>
                                <Link to="/account/login">
                                    <Nav.Link as="span">Login</Nav.Link>
                                </Link>
                            </>
                        }

                        <Link to="/events">
                            <Nav.Link as="span">Events</Nav.Link>
                        </Link>

                        <Link to="/users">
                            <Nav.Link as="span">Users</Nav.Link>
                        </Link>

                        <Link to="/events/create">
                            <Nav.Link as="span">Create Event</Nav.Link>
                        </Link>

                        <Link to="/events/details/:id">
                            <Nav.Link as="span">Details Event</Nav.Link>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar