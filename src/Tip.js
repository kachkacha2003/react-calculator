import React from "react";
import { useState } from "react";

export default function Tip(props) {
  const [color1, setColor1] = useState();
  const [border, setBorder] = useState();
  const [color2, setColor2] = useState();
  const [change, setChange] = useState();
 
  

  const handleNumChange = (event) => {
    if (event.target.value[0] === "0") {
      setColor1("true");
      setColor2("false");
    } else {
      setColor1("false");
      setColor2("true");
    }
    if (event.target.value.length === 0) {
      setBorder("true");
    } else {
      setBorder("false");
      setColor2("false");
    }
  };
  return (
    <div className="tip">
      <h3>Select Tip %</h3>
      <div className={`buttons `}>
        <button className={`${props.value==="5" ? "green-color" : null}`} onClick={props.click}>5%</button>
        <button className={`${props.value==="10" ? "green-color" : null}`} onClick={props.click}>10%</button>
        <button className={`${props.value==="15" ? "green-color" : null}`} onClick={props.click}>15%</button>
        <button className={`${props.value==="25" ? "green-color" : null}`} onClick={props.click}>25%</button>
        <button className={`${props.value==="50" ? "green-color" : null}`} onClick={props.click}>50%</button>
        <input
          type={"number"}
          placeholder="Custom"
          value={props.value}
          className={`enter-procent  ${
            props.value==="0" || props.value[0] === "0" 
            ? "border"
            : props.value>0
            ? "green"
            // : color2 === "false" && color1 === "false" && change === "xd"
            // ? "brux"
            : null
          }`}
          onInput={handleNumChange}
          onChange={props.function}
          onBlur={() => {
            setChange("xd");
            
          }}
        ></input>
      </div>
    </div>
  );
}
