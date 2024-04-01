import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
function App() {
  const [name,setName] = useState(null)
  function update(){
    setName("Hello There Welcome TO React JS")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
      <button onClick={()=>update()}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
