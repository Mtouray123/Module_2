import { useState } from 'react';

function Counter() {
    // State variable
    const [counter, setCounter] = useState(0);
    // New State countByTwo
    const [countByTwo, setCountByTwo] = useState(0)
    // New State multiplyByThree
    const [multiplyByThree, setCountByThree] = useState(0)

    function handleClick() {
        setCounter(counter + 1);
    }

    // Declare handleCountByTwo
    function handleCountByTwo() {
        setCountByTwo(countByTwo + 2)
    }

    // Multiply by 3
    function multiplyByThree() {
        setCountByThree(counter * 3);
    }
        


    return (
        <div>

            <h2>Counter: {counter}</h2>

            <button onClick={handleClick}>Click Me</button>

            <h2>Count By Twos: {countByTwo}</h2>

            <button onClick={handleCountByTwo}>By Two</button>

            <h2>Multiply By Three: {counter}</h2>

            <button onClick={multiplyByThree}>By Three</button>
        </div>
    )
}

export default Counter;