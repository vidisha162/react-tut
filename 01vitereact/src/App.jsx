import { useState } from 'react'
import './App.css'
import Card from './Card'
function App() {
  const [counter,setCounter] = useState(15)
// let myojb = {
//   username: "vidisha cutiepie",
//   age:20
// }
// let arr = [20,31,16,7]


  // let counter=5
  const addValue = ()=>{
    
    // counter=counter+1
    
    if(counter<20){
      setCounter(counter+1)
    }
    console.log("value added");
  }
  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
    console.log("remove value");
  }
  return (
    <>
    <div>
      <h1>hello world | vidisha</h1>
      <h1 className="text-3xl font-bold text-blue-600">Tailwind is Working! 💥</h1>
      <h3>counter value:{counter}</h3>
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removevalue}>remove value</button>

      



          
          <Card username="vidisha" />
          <Card username="cuitepie" />

    </div>
   </>
  )
}

export default App
