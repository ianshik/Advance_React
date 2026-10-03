import { useCallback, useEffect,useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
const [input, setInput] = useState("");

useEffect(()=>{
  console.log("count changed");
},[count]);

const isEven =useMemo(()=>{
  return count%2===0;
},[count]);

const handleadd = useCallback(()=>{
  setCount(count + Number(input));
  setCount((count)=>count +4);
},[input]);

const handlechange= (e)=>{
  setInput(e.target.value);
};

  return (
    <>
      <h1>counter</h1>

      <h2>Value : {count}</h2>

      <input type="number" value={input} onChange={handlechange} />

      <button onClick={handleadd}> add </button>
      {isEven ? <h4>Even</h4> : <h4>Odd</h4>}
    </>
  )
}

export default App
