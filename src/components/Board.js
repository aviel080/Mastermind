import React from "react";
import Circle from "./Circle";

const Board = ({ matrix, results}) => (
  matrix.map((line, i) => (
  <div className= "container" style= {{top: `${63 - i*13}%`}} key={i}>
    {line.map((circle, j) => (
      <Circle key={'A'+i+j} value={circle} result = {false} />
    ))}
    {results[i].map((circle, j) => (
      <Circle key={'B'+i+j} value={circle} result = {true} />
    ))}
  </div>
  ))
);

export default Board;