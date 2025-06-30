import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);