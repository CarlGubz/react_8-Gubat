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
             <h1 id="digital-t"> 趣味 HOBBIES</h1>
            <table id="hobbies-table">
                <tr>
                  <th> <img id="hb-1" src="https://static0.moviewebimages.com/wordpress/wp-content/uploads/2023/11/every-korean-drama-releasing-in-december-2023.jpg"></img></th>
                  <th> <img id="hb-2" src="https://img.emg-services.net/HtmlPages/HtmlPage17411/patrick-tomasso-oaqk7qqnh_c-unsplash-1.jpg"></img></th>
                  <th> <img id="hb-3" src="https://raisingchildren.net.au/__data/assets/image/0023/49280/Sleep-FAQs.jpg"></img></th>
                </tr>
                <tr>
                  <th> K-Drama</th>
                  <th> Writing</th>
                  <th> Sleeping</th>
                  
                </tr>



            </table>
              

            </div>

 

    </div>
    );
};

 