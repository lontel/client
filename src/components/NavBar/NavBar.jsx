import './NavBar.css'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
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
    // const { user_id } = useParams()

    return (

        <Navbar className='NavBar' expand="md" variant="dark" >
            <Container>
                <Link to="/">
                    <Navbar.Brand>Bike Connect!</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        {user ?
                            <>
                                <NavDropdown title="Profile" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to={`/account/myprofile/${user._id}`}>
                                            <Nav.Link as="span" ><img className='img-profile-nav' src={user.profilePic}></img> My Profile  </Nav.Link>

                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/account/login">
                                            <Nav.Link as="span" onClick={logout} >Logout</Nav.Link>
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

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

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar