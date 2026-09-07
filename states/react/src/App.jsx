import { useState } from "react";

/*function increment(){
  console.log("Increment Called")
}
*/ // we can provide the function inside the app func and oustside the app func.
function App() {
  const increment=()=>{
    setCount(count+1);
    console.log("Count is",count)
  };
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button> 
    </div>
  );
}

export default App
