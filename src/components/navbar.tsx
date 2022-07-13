import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  const isAuth = false

  return (
    <Navbar bg="dark" variant="dark" className="mb-2">
        <Container >
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            {isAuth 
              ? <Nav.Link as={Link} to="/dashboard">Log Out</Nav.Link>
              : <>
                  <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                  <div className="vr" />
                  <Nav.Link as={Link} to="/logup" className="justify-content-end">Log Up</Nav.Link>
                </>
            }
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
