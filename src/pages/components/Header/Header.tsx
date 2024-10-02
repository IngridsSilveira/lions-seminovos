import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../assets/images/logo.png";

export const Header = () => {
    return (
        <Navbar expand="lg" className="bg-red-800" variant='dark'>
          <Container fluid>
            <Navbar.Brand href="https://www.lionsseminovos.com.br/" target='_blank'><img src={logo} alt="logo lion seminovos" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Pesquisar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='bg-slate-800 border-none hover:bg-slate-900 font-serif'>Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
