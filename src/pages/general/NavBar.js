import styled from 'styled-components';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { HOME } from '../pagesPath';
import Logo from '../../assets/images/logo2.png';
import Hamburger from '../../assets/images/Vector.png';
import { Container, Navbar, NavDropdown ,Nav} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
const GeneralNavBar = () => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const toggleNav = () => {
        setShow(!show);
    }
    return (
      <GeneralNavBar.Wrapper>
       <Navbar bg="light">
           <Container>
           <Navbar.Brand href={HOME}>
               <img src={Logo} alt="Superflux logo"/>SuperFlux</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           </Container>
           
           <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Solutions" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Blog/Media</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
      
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
       </Navbar>
      </GeneralNavBar.Wrapper>
    );
}

GeneralNavBar.Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
// padding: 0 10rem;
// padding-top: 2rem;
background: url(${require("../../assets/images/ezgif.png")}) repeat center;
.logo {
  img {
    width: 12rem;
    margin-bottom: 3rem;
  }
}
.links_actions {
  display: flex;
  align-items: center;
  position: relative;
  top: auto;
  right: auto;
  margin-top: -5rem;
}
.logo {
    h3 {
      color: #444c64;
      font-size: 2.2rem;
      line-height: 19px;
      font-family: Muli-Bold;
      display: flex;
      align-items: center;
    }
  }
`;

export default GeneralNavBar;