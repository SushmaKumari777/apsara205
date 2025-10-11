import React, { useState } from 'react'

const Example2 = () => {
    const [count,setCount]=useState(10);
    const [name,setName]=useState("");
    const increment=()=>{
        setCount(count+1);
    }
        const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
      <p>Current count value is{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Example2;
