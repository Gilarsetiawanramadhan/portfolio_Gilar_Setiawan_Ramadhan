import "./navbar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from "../../page/about/About";

const NavbarList =() => {
    return (
        <Navbar expand="lg" style={{paddingLeft:"20px",}}>
            <Navbar.Brand href="/home" style={{color:"tomato", fontSize:"2rem"}}>GILAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home" style={{color:"white", fontSize:"1rem"}}>HOME</Nav.Link>
                    <Nav.Link href="/About" style={{color:"white", fontSize:"1rem"}}>ABOUT</Nav.Link>
                    <Nav.Link href='#' style={{color:"white", fontSize:"1rem"}}>MINI PROJECT</Nav.Link>
                    <Nav.Link href='#' style={{color:"white", fontSize:"1rem"}}>MY SKILLS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarList;