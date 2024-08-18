import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './chai'


function App() {

  let [counter,setcounter] = useState(15)
  // counter is variable and setcounter is function
const addvalue = () =>{
  
 counter = counter + 1;
  setcounter(counter);
  console.log("value added",counter);
}

const removevalue = () =>{
  counter = counter - 1;
  setcounter(counter);

}
  return (
    <div>
   <h1>Chai our code with vite</h1>
   <h2>Counter value:{counter}</h2>
   <h3>counter value:{counter}</h3>
   <button
   onClick={addvalue}>Add value</button>
   <br/>
   <button onClick={removevalue}>remove value</button>
   <Chai/>
  </div>
  )
}

export default App
