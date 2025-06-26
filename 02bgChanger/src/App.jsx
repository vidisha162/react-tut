import { useState } from 'react'

import './App.css'
// import Card from './Card'

function App() {

  const [color, setcolor] = useState("white")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={() => setcolor('red')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setcolor('green')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setcolor('pink')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => setcolor('blue')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setcolor('grey')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "grey" }}>Grey</button>
            <button onClick={() => setcolor('purple')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={() => setcolor('white')} className="outline-none px-4 py-1 rounded-lg" style={{ backgroundColor: "white" }}>White</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
