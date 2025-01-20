import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, useNavigate} from 'react-router-dom';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useShoppingCart} from "use-shopping-cart";
import NavBarComponent from "../authentification/Navbarcomponent.jsx";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

function Menu() {
    const navigate = useNavigate();
    const { cartCount } = useShoppingCart();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as ={Link} to="/">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link as ={Link} to="/">Home</Nav.Link>
                        {localStorage?.getItem('user') ? (
                            <>
                                <Nav.Link as={Link} to="/categories">Categorie</Nav.Link>
                                <Nav.Link as={Link} to="/scategories">Sous-Categorie</Nav.Link>
                                <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
                                <NavDropdown title="Client" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to={"/articles/page/1"}>List of Articles</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">History</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>Setting</Nav.Link>
                                <Nav.Item>
                                    <center>
                                        <Link to="/cart">
                                            <IconButton aria-label="cart">
                                                <StyledBadge badgeContent={cartCount} color="secondary">
                                                    <ShoppingCartIcon />
                                                </StyledBadge>
                                            </IconButton>
                                        </Link>
                                    </center>
                                </Nav.Item>
                            </>
                        ) : null}

                    </Nav>

                    <Nav>
                        {localStorage?.getItem("user") ?
                            <Nav.Link as={Button} onClick={()=>navigate("/logout")} variant="btn btn-outline-success">Logout</Nav.Link>
                            :
                            <Nav.Link as={Button} onClick={()=>navigate("/login")} variant="btn btn-outline-success">Login / Sign Up</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;