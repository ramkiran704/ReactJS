import { useState,useEffect } from "react";
export default function App() {
  const data={
    Kerala:"Kochi",
    TN:"Chennai",
    Karnataka:"Bengaluru"
  };


  const [selectedState,setSelectedState]=useState("Kerala");
  const [selectedCapital,setSelectedCapital]=useState("Kochi");

  const changeState=(e)=>{
    setSelectedState(e.target.value);
    console.log("changeState is Called");
  };

  const changeCapital=()=>{
    setSelectedCapital(data[selectedState]);
    console.log("changeCapital is Called")
  };

  
  useEffect(changeCapital,[selectedState]);
  return (
  <div>
    <select onChange={changeState}>
      <option value="Kerala">Kerala</option>
      <option value="Karnataka">Karnataka</option>
      <option value="TN">TN</option>
    </select>
    <p>Selected State is :{selectedState}</p>
    <p>Capital of Selected State:{selectedCapital}</p>
  </div>
  );
}
