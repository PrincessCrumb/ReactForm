import React, { useState } from 'react';

const Counter = function () {
    const [count, setСount] = useState (0)

    function increment(){
        setСount(count +1)
        }


  function decrement () {
         setСount(count - 1)
      }

    return (
    <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>

    )

}
export default Counter;