import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import Form from 'react-bootstrap/esm/Form';
import FormControl from 'react-bootstrap/esm/FormControl';


const NavSection = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Super Cinema</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="finder">Movie Finder</Nav.Link>
                <Nav.Link href="mymovies">My Movies</Nav.Link>
                <Nav.Link href="about">About us</Nav.Link>
                <Nav.Link href="contact">Contact us</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>

    );
}

export default NavSection;

