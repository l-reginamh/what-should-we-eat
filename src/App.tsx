import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "nes.css/css/nes.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="nes-container is-rounded">
        <p>Ready for lunch?</p>
        <button type="button" className="nes-btn is-success">Let's Go!</button>
      </div>
    </div>
  )
}

export default App
