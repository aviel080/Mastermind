import React, { useState } from "react";
import { getRandomInt, Result } from "../helper";
import Board from "./Board"
import Stack from "./Stack"
import Circle from "./Circle";
import Button from '@material-ui/core/Button';

const Game = () => {
    var [row, setRow] = useState(0);
    var [col, setCol] = useState(0);
    var [level, setLevel] = useState(7); 
    const [stackColors, setStackColors] = useState(["crimson","green","blue","chartreuse","yellow","white","springgreen","orange","aqua","magenta","saddlebrown","purple"]);
    var [stack, setStack] = useState(getRandomInt(stackColors.length, level).map((index)=> stackColors[index]));
    const [password, setPassword] = useState(getRandomInt(stack.length, 4).map((index)=> stack[index]));
    var [matrix, setMatrix] = useState(Array(10).fill().map(row => new Array(4).fill("grey")));
    const [results, setResult] = useState(Array(10).fill().map(row => new Array(4).fill("grey")));
    const [status, setStatus] = useState("Playing");

    const SetLevel = (levelNum) => {
        level = levelNum;
        setLevel(level)
        Restart()
    }

    const Restart = () => {
        setRow(0);
        setCol(0);
        stack= getRandomInt(stackColors.length, level).map((index)=> stackColors[index]);
        setStack(stack);
        setPassword(getRandomInt(stack.length, 4).map((index)=> stack[index]));
        setMatrix(Array(10).fill().map(row => new Array(4).fill("grey")));
        setResult(Array(10).fill().map(row => new Array(4).fill("grey")));
        setStatus("Playing");
    }

    const handleClick = (color) => {
        if (status !== "Playing")
            return;
        if (matrix[row].indexOf(color) === -1){
            let copy = [...matrix];
            copy[row][col] = color;
            setMatrix(copy);
            setCol(col + 1);
            col++;
        }
        if (col === 4){
            setCol(0);
            setRow(row + 1);
            let copy = [...results];
            let result = Result(password,matrix[row])
            copy[row] = result;
            setResult(copy);
            row++;
            if (result[3]==="black")
                setStatus("You Win, Attemps: " +row);
            else if (row === 10)
            {
                setStatus("LOSE");
            }
        }
      };

    return (
    <>
        <div style={{justifyContent: 'center' ,alignContent:'flex-end', display: 'flex', gap: '10px'}}>
        <Button variant="contained" color="primary" onClick = {Restart}>
        Restart
        </Button>
        <Button variant="contained" color="primary" onClick={() => SetLevel(7)}>
        Easy
        </Button>
        <Button variant="contained" color="primary" onClick={() => SetLevel(10)}>
        Medium
        </Button>
        <Button variant="contained" color="primary" onClick={() => SetLevel(12)}>
        Difficult
        </Button>
        </div>
        <h1 style = {{textAlign: 'center'}}>
            {status}
        </h1>
        <div className= "container" style= {{top: `2%`, display: status !== "Playing" ? "flex" : "none"}}>
        Correct Pattern: 
        {password.map((circle, j) => (
            <Circle key={j} value={circle} result = {false} />
        ))}
        </div>
        <Stack stack={stack} onClick={handleClick}/>
        <Board matrix={matrix} results = {results}/>
    </>
    )
}

export default Game;