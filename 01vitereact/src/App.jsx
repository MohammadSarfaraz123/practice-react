import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

let [Counter, setCounter] = useState(15)

  // let Counter =15
const addValue = () =>{
  if (Counter<20) {
    setCounter(Counter +1)
  } else {
    alert(`you can not go above 20`)
  }
}

const removeValue = () =>{
  if (Counter>0) {
    setCounter(Counter - 1)
  } else {
    alert('You can not go below zero')
  }
}

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Counter value: {Counter}</h2>
       <div style={{paddingBottom: 10}}>
      <button onClick={addValue}>Add value</button>
      </div>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
