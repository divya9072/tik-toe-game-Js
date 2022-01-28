import React from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers";
import './styles.css';



const styles={
    width:'200px',
    margin:'20xp auto',
}
const Game=()=>{

    const [board,setBoard]=React.useState(Array(9).fill(null));
    const[xIsNext,setXisNext]=React.useState(true);
    const winner=calculateWinner(board)

    const handleClick=i=>{
        const boardCopy=[...board];
        if(winner || boardCopy[i]) return;

        boardCopy[i]=xIsNext?'X':'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves=()=>(
        <button className="winner1" onClick={()=>setBoard(Array(9).fill(null))}>
            Start Game</button>
    )
    return (
        <div>
        <Board squares={board} onClick={handleClick}/>
        <div className='center'style={styles}>
            <p className="winner">{winner?'Winner:'+ winner:'Next Player: '+(xIsNext?'X':'O')}</p>
            {renderMoves()}
            </div>
        </div>
    )
}

export default Game;