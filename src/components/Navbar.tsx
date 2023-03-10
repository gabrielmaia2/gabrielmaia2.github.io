import React from "react";
import { Navbar as NavbarBs, Nav, NavDropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <NavbarBs variant="dark" expand="md">
      <NavbarBs.Brand href="/">G. Maia</NavbarBs.Brand>
      <NavbarBs.Toggle aria-controls="responsive-navbar-nav">
        <GiHamburgerMenu className="fs-3" />
      </NavbarBs.Toggle>
      <NavbarBs.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/about">About me</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavDropdown title="Resume">
            <NavDropdown.Item href="https://docs.google.com/document/d/1Immakb-vaPLkAzgL3AG0J4PgXJzN1Zlqx2QLAvdk4ik/edit?usp=sharing">
              Resume Fullstack (BR)
            </NavDropdown.Item>
            <NavDropdown.Item href="https://docs.google.com/document/d/1VzsAqEb69s6P6KJvYn52qe7NJR4F0BYTdJnl_-58a7U/edit?usp=sharing">
              Resume GameDev (BR)
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </NavbarBs.Collapse>
    </NavbarBs>
  );
}
