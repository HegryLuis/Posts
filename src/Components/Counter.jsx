import React, { useState } from "react";

const Counter = () => {
    const [Count, setCount] = useState(0);

    function increment() {
        setCount(Count + 1);
    }

    function decrement() {
        setCount(Count - 1);
    }

    return (
        <div>
            <h1>{Count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;
