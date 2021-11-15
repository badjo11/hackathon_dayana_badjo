import React, { useContext, useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router'
import { userContext } from '../contexts/userContext';
import logo_img from '../images/logo.svg'
import LogInModal from './auth/LogInModal';
import SignUpModal from './auth/SignUpModal';
import { BsFillCartFill } from "react-icons/bs";
import { serviceContext } from '../contexts/serviceContext';

const Navibar = () => {
    const { user, logoutUser, setUser } = useContext(userContext);
    const { countOfServices}= useContext(serviceContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    let button;
    let doctorRoom
    // const history = useHistory();
    const history = useNavigate()
    function logout() {
        logoutUser();
        history('/')
        localStorage.clear();
    }
    let content

    if (user) {

        if (user.type === 'doctor') {
            doctorRoom = <Link to={'/doctor/' + user.id}>Личный кабинет</Link>
        }else{
            
            doctorRoom = <Link to='/cart'> <Badge bg="secondary">{countOfServices}<BsFillCartFill/></Badge></Link>
        }
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
                <Button style={{ padding: '0 40px', border: 'none' }} className="me-2" onClick={() => logout()}>
                    LogOut
                </Button>
            </>
        );
    } else {
        button = (
            <>
                <Button
                    className="me-2 text-white"
                    onClick={handleShowLogin}
                    style={{ border: 'none', }}


                >
                    Log In
                </Button>
                <Button
                    className="me-2 text-white"
                    onClick={handleShow}
                    style={{ border: 'none' }}
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
    useEffect(() => setuser(struser), [struser]);

// asd
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to='/'><img src={logo_img} alt="" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">
                        <Link to="/" className='px-4'>Главная</Link>
                        <Link to="/link" className='px-4'>Пациентам</Link>
                        <Link to="/service" className='px-4'>Услуги</Link>
                        {doctorRoom}
                        {content}
                        
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