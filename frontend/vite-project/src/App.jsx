import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Loading...");


  useEffect(() => {
    fetch("http://localhost:3000/api/message") // API request to backend
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  return (
    <>
      <Banner />
      <div className="flex justify-center items-center mt-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 className="text-xl font-bold mt-4">{message}</h2> 
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
     
      </div>
    </>
  );
}

export default App;
