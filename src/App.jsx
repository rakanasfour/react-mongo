import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/items');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('There was a problem fetching the items:', error);
      }
    };

    fetchItems();
  }, []);


  return (
    <>
    
         <div>
        <h1>Hello from Rakan Asfour!</h1>
        <h2>Here is my info:</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
