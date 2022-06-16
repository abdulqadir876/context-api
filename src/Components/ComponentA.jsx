import React, { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const ComponentA = () => {
    const {count, decrease} = useContext(CounterContext)
  return <div style={{ background: "red", color: "white" }}>
    {count}
    <br />
    <button onClick={decrease}>-</button>
  </div>;
};

export default ComponentA;
