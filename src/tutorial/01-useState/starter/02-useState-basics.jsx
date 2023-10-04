import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount ] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
  };
   const resetCount = () => {
    setCount(0);
  };

  return (
  <div>
    <h2>You Click {count} time</h2>
    <button type="button" className="btn" onClick={handleClick}>Click Me</button>
    <button type="button" className="btn" onClick={resetCount}>Reset</button>
  </div>
    );
};

export default UseStateBasics;
