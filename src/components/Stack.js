import React from "react";
import CircleButton from "./CircleButton";

const Stack = ({stack, onClick}) => (
  <div className= "container">
    {stack.map((circle) => (
    <CircleButton value={circle} key ={circle} onClick={() => onClick(circle)}/>
    ))}
  </div>
);

export default Stack;