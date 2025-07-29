import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  
  function handleChange() {
    const increase = count + 1;
    setCount(increase);
  }

  return (
    <div className="button-container">
      <Counter count={count} onClick={handleChange} />
      <Counter count={count} onClick={handleChange} />
    </div>
  );

}

export default App;
