import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Navbarcomponent = () => {
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {localStorage?.getItem("user") ?
                            <Nav.Link as={Button} onClick={()=>navigate("/logout")}>
                                LogOut
                            </Nav.Link>
                            :
                            <Nav.Link as={Button} onClick={()=>navigate("/login")}>
                                LogIn
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navbarcomponent;