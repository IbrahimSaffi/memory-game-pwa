function GameStatus(props){
    return(
       <div className="status">
        <h3>Time: {props.time}s</h3>
        <h3>Moves: {Math.floor(props.moves/2)} </h3>
        <h3>Score: {props.score}</h3>
        <button onClick={()=>props.handleGameStatus()}>
            {props.gameStatus==="Not Started"?"Start":"Restart"}
            </button>
       </div>
    )
}
export default GameStatus