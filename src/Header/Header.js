import React from 'react';
import './Header.css'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Mydemy-Course</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link className="menu-item" href="#home">Home</Nav.Link>
                    <Nav.Link className="menu-item" href="#features">Features</Nav.Link>
                    <Nav.Link className="menu-item" href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Dashboard</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;