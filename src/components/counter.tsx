import { useState, useEffect } from "react";

const Counter = (): JSX.Element => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timer : any =
          counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);

    return (
        <p>Counter: {counter}</p>
    )
}

export default Counter;