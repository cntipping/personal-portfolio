import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { flushSync } from "react-dom";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";

function CustomNavbar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavBar] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY >= 20) {
                updateNavBar(true);
            } else {
                updateNavBar(false);
            }
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-logo" alt="brand image" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                     <span></span>
                     <span></span>
                     <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id ="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px"}} />
                            </Nav.link>
                        </Nav.Item>


                        <Nav.Item>
                            <Nav.link
                            as={Link}
                            to="/resume"
                            onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px"}} /> Resume
                            </Nav.link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href="https://soumyajitblogs.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href="https://soumyajitblogs.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;