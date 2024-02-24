import { useState } from "react";
import "./App.css";

function App() {
   let [counter, setCounter] = useState(5);

   function incre() {
      counter < 10 ? counter++ : 10;
      setCounter(counter);
   }
   function decre() {
      counter === 0 ? 0 : counter--;
      setCounter(counter);
   }
   return (
      <>
         <h1>hello world</h1>
         <h2>counter: {counter}</h2>
         <button onClick={incre}>Incre value {counter}</button>
         <br />
         <button onClick={decre}>Decre value {counter} </button>
      </>
   );
}

export default App;
