import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.svg'
import styles from './assets/Header.module.scss'

function Header() {
  return (
    <header>
      <Navbar className="" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              className={styles.logoHeader}
              src={logo}
              alt={`Imagem da logo` + logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Nav className="me-auto gap-3" variant="underline">
            <Nav.Link
              className="border-2 px-4 fw-medium"
              href=""
              style={{ color: '#FFFFFF' }}
            >
              Projetos
            </Nav.Link>
            <Nav.Link
              className="border-2 px-4 fw-medium"
              href=""
              style={{ color: '#FFFFFF' }}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
