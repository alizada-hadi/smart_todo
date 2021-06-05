import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
        <Navbar bg="light" expand="sm">
            <div className="container">
                <Navbar.Brand href="#home" className="mr-5">Smart TODO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#link">Todos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                <NavDropdown title="Hadi" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                    
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        </div>
    )
}
