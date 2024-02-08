import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/// JSON DATA 
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

// JSON FETCH DATA USING AXIOS
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
// JSON PAGE
  return (
    <div id="zenbu-json" >
      <div className="calc-page">
        <h1 id="digital-t-light">User Information</h1>
        <div className="row">
          {users.length === 0 ? (
            <p>Loading...</p>
          ) : (
            users.map(user => (
              <div key={user.id} className="col-md-5 col-lg-3 mb-3">
                <div className="json-card">
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
