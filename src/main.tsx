import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import JSON from './pages/JSON'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
            <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="Home">カルロス ・グバト</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic0-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="Home">Home</Nav.Link>
                  <Nav.Link href="Calculator">Calculator</Nav.Link>
                  <Nav.Link href="JSON">JSON</Nav.Link>
                  <Nav.Link href="Hobbies">Hobbies</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      <Routes>
 
        <Route path="calculator" element={<Calculator />}> </Route>
        <Route path="/*" element={<Home />}> </Route>
        <Route path="hobbies" element={<Hobbies />}> </Route>
        <Route path="json" element={<JSON />}> </Route>
         
      </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>,
);


 




 


