import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@internal/ui-components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>HR Dashboard</h1>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
    </div>
  )
}

export default App
