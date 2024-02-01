import { useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
  
 
const Calculator = () => {
  let navigate = useNavigate();
        const toHome=()=>{
            let path = `Home`; 
            navigate(path);
        } 
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value: string) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  

  return (
     

    <div id="zenbu-calc">
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
    
    <div id="enter">
 
    <div className="calculator"> 
    <h1 id="h1-calc"> 電卓 Calculator</h1>
    
      <div className="calculator-display-1"> 
        <div className="calculator-display"> {display}</div>
      </div>
      
       
      <div className="calculator-row">
      <Row> 
        <Col> <Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('7')}>7</Button></Col>
        <Col> <Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('8')}>8</Button></Col>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('9')}>9</Button> </Col>
        <Col> <Button variant="warning" size="lg" className="calc-btn" onClick={() => handleButtonClick('/')}>/</Button></Col>
      </Row>
      </div>
      <div className="calculator-row">
      <Row>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('4')}>4</Button></Col>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('5')}>5</Button></Col>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('6')}>6</Button></Col>
        <Col><Button variant="warning" size="lg" className="calc-btn" onClick={() => handleButtonClick('*')}>*</Button></Col>
      </Row> 
      </div>
      <div className="calculator-row">
      <Row>
        <Col>  <Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('1')}>1</Button></Col>
        <Col> <Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('2')}>2</Button></Col>
        <Col> <Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('3')}>3</Button></Col>
        <Col> <Button variant="warning" size="lg" className="calc-btn" onClick={() => handleButtonClick('-')}>-</Button></Col>
      </Row>
      </div>
      <div className="calculator-row">
      <Row>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={() => handleButtonClick('0')}>0</Button></Col>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={handleClear}>C</Button></Col>
        <Col><Button variant="info" size="lg" className="calc-btn" onClick={handleCalculate}>=</Button></Col>
        <Col><Button variant="warning" size="lg" className="calc-btn" onClick={() => handleButtonClick('+')}>+</Button></Col>
      </Row>
       
      </div>
    </div>
    </div>
    </div>


);
  
};


export default Calculator;