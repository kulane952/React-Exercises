

import { useState } from "react";

const Counter=()=>{
    const [count, setcount]=useState(0)
   const increment =()=>setcount(count + 1)

    const decrement=()=>{
    if(count>0)setcount(count -1);
}


    return(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={decrement} disabled={count === 0}>Descrement</button>
        <button onClick={increment}>Increment</button>
    </div>
)

};


export default Counter;