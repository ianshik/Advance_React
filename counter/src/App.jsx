import { useCallback, useEffect,useMemo, useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
const [input, setInput] = useState("");

const refer=useRef(null);

const handleboth = () => {
  handleadd();
  handleSelect();
};
const handleSelect = () => {
    refer.current.select();
  };

useEffect(()=>{
  console.log("count changed");
},[count]);

const isEven =useMemo(()=>{
  return count%2===0;
},[count]);

const handleadd = useCallback(()=>{
  setCount((count) => count+ Number(input));
},[input]);

const handlechange= (e)=>{
  setInput(e.target.value);
};

  return (
    <>
      <h1>counter</h1>

      <h2>Value : {count}</h2>

      <input ref={refer} type="number" value={input} onChange={handlechange} />

      <button onClick={handleboth}> add </button>
    </>
  )
}

export default App
