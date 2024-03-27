import '../CSS/Navbar.css';
import '../CSS/Sticky-nav.css';
import AboutPage from '../Pages/AboutPage';
import HomePage from '../Pages/HomePage';
import ServicePage from '../Pages/ServicePage';
import ProjectPage from '../Pages/ProjectPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaMagnifyingGlass } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SearchForm from './SearchBar';


function Navibar() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <Container fluid="xxl" className='position-relative p-0'>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`Navbar px-4 px-3 px-lg-5 px-lg-0 ${stickyClass}`}>
          <Navbar.Brand className='brand'>
            <Link to="/" className='brand-link'>
              <FaMagnifyingGlass className='brandicon'/>
              <h1 className='brandname'>SEO<span className="fs-5 brandname">Master</span></h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='navBody'>
              <Nav className="justify-content-end flex-grow-1 nav py-0">
                <Nav.Link as={Link} to="/" className='navLinks navLink1'>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className='navLinks navLink2'>About</Nav.Link>
                <Nav.Link as={Link} to="/service" className='navLinks navLink3'>Service</Nav.Link>
                <Nav.Link as={Link} to="/project" className='navLinks navLink4'>Project</Nav.Link>
                <NavDropdown title="Pages" className='navLinks' id={`offcanvasNavbarDropdown-expand-${expand}`}show={showDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 3</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact" className='navLinks navLink5'>Contact</Nav.Link>
              </Nav>
              <SearchForm/>
            </Offcanvas.Body> 
          </Navbar.Offcanvas>
        </Navbar>
      ))}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        {/* <Route path="/contact" element={< />} /> */}
      </Routes>
    </Container> 
  );
}

export default Navibar;
