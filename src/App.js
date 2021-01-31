import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [color, changeColor] = useState("blue");

  const handleClick = async () => {
   
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (response.status === 200) {
        console.log(response)
        changeColor("green");
      }
    } catch (err) {
      changeColor("red");
      console.log(err)
      
    }
  };


  return (
    <div className="App">
      <button onClick={handleClick}>
        make green after successful api call
      </button>

      <div className={`box ${color}`}>Lorem Ipsum</div>
    </div>
  );
}

export default App;
