// json.tsx

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    suite: string;
    city: string;
    zipcode: string;
  };
}

const JsonComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData: User[] = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="json">
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
    <div id="json-div" className="container mt-4">
      <h2 id="h1-calc">User Information</h2>
      <div className="row">
        {users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          users.map(user => (
            <div key={user.id} className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name: {user.name}</h5>
                  <p className="card-text">Username: {user.username}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Suite: {user.address.suite}</p> 
                  <p className="card-text">City: {user.address.city}</p>
                  <p className="card-text">Zipcode: {user.address.zipcode}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default JsonComponent;
