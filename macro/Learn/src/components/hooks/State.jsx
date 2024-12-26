import { useState } from "react";

const State = () => {
  console.log("Parent Componet rendered");
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 10);
  };

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
};

function ChildComponent({ count }) {
  console.log("Child Componet rendered");
  return (
    <div className="main-div">
      <h1>Child Component | {count}</h1>
    </div>
  );
}

export default State;
