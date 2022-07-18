import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {

    return (
        <Navbar bg="dark" expand="md" variant="dark" className='mb-5'>
            <Container>
                <Navbar.Brand>Bike Connect!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>
                        <Link to="/events">
                            <Nav.Link as="span">Events</Nav.Link>
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