import React, { useEffect } from "react";
import { useState } from "react";

export default function Info(props) {
  const [color1, setColor1] = useState();
  const [border, setBorder] = useState();
  const [color2, setColor2] = useState();
  const [change, setChange] = useState();
  const [leter, setleter] = useState(props.title);

  // console.log(props.value)
  
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
    <div className="first-part">
      <div className="error">
        <h3>Bill</h3>

        <h3 className={`eror ${props.value ==="0" ? "change" : null}`}>
          Can’t be less then 1
        </h3>
        <h3 className={`eror1 ${props.value.length===0? "change1" : null}`}>
          Can’t be empty
        </h3>
      </div>
      <input
        type="number"
        id="num"
        name="num"
        placeholder="0"
        value={props.value}
        className={` ${
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
      />
    </div>
  );
}
