import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
 
 

export default function home() {
    const [] = useState("tite");

    //Routing

    let navigate = useNavigate();
        const toCalc=()=>{
            let path = `Calculator`; 
            navigate(path);
        }

        const toJSON=()=>{
            let path = `JSON`; 
            navigate(path);

        }
        const toHobbies=()=>{
            let path = `Hobbies`; 
            navigate(path);
        }

        

    //Html Home Page
    return (
    
    <div id="zenbu">

            <Navbar bg="dark" data-bs-theme="dark" className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <Container>
                <Navbar.Brand href="Home">カルロス ・グバト</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="Home">Home</Nav.Link>
                    <Nav.Link href="Calculator">Calculator</Nav.Link>
                    <Nav.Link href="JSON">JSON</Nav.Link>
                    <Nav.Link href="Hobbies">Hobbies</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
    
        <div id="all">  
             <h1 id="digital-t"> DIGITAL TRANSFORMATION </h1>
             <div id="center-all"> 
                <h2 id="create-by"> Created By    </h2> 
                <Form id="namae">
                    <Form.Group  className="mb-2" controlId="exampleForm.ControlInput1">
                         
                        <Form.Control id="namae" type="text" placeholder="名前 / FULL NAME" />
                         
                    </Form.Group>
                </Form>  
                <Button id="calculator-samp" size="lg" variant="outline-light" onClick={toCalc}> CALCULATOR <br/>SAMPLE </Button> 
                <Button id="json-samp" size="lg" variant="outline-light" onClick={toJSON}>  JSON <br/> SAMPLE </Button> 
             </div>
             <div id="hobbies-sec">
                    
                    <h3 id="h33"> My Hobbies</h3>
                    <p> Hi! My name is Carlos Gubat IV. By clicking the button below you will learn about me.</p>

             <Button variant="outline-light" onClick={toHobbies}>Learn More </Button>
             </div>

            </div>

 

    </div>
    );
};

 