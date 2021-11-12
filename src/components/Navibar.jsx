import React, { useContext, useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { userContext } from '../contexts/userContext';
import logo_img from '../images/logo.svg'
import LogInModal from './auth/LogInModal';
import SignUpModal from './auth/SignUpModal';
const Navibar = () => {
    const { user, logoutUser, setUser } = useContext(userContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    let button;

    function logout() {
        logoutUser();
        localStorage.clear();
    }

    if (user) {
        let struser = JSON.stringify(user);
        localStorage.setItem("user", struser);
        button = (
            <>
                <Navbar.Collapse
                    className="justify-content-end me-2 navbar"
                    style={{ maxWidth: "200px" }}
                >
                    <Navbar.Text>
                        Signed in as: <Badge bg="secondary">{user.username}</Badge>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Button className="me-2" variant="primary" onClick={() => logout()}>
                    Logout
                </Button>
            </>
        );
    } else {
        button = (
            <>
                <Button
                    className="me-2 text-success"
                    variant="outline-dark"
                    onClick={handleShowLogin}
                >
                    Log In
                </Button>
                <Button
                    className="me-2 text-success"
                    variant="outline-dark"
                    onClick={handleShow}
                >
                    Sign Up
                </Button>
            </>
        );
    }

    let struser = localStorage.getItem("user");
    function setuser() {
        if (struser) {
            setUser(JSON.parse(struser));
        }
    }
    useEffect(() => setuser(), [struser]);


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo_img} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        {button}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <SignUpModal handleClose={handleClose} show={show} />
            <LogInModal handleCloseLogin={handleCloseLogin} showLogin={showLogin} />
        </Navbar>
    );
};

export default Navibar;