import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
const [input, setInput] = useState("");

const handleadd = ()=>{
  setCount(count + Number(input));
  setCount((count)=>count +4);
}

const handlechange= (e)=>{
  setInput(e.target.value);
};

  return (
    <>
      <h1>counter</h1>

      <h2>Value : {count}</h2>

      <input type="number" value={input} onChange={handlechange} />

      <button onClick={handleadd}> add </button>
    </>
  )
}

export default App
