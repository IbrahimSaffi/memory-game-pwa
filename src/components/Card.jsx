import Box from "./Box"
function Card(props) {
    return (
        <div className="card" >
            {props.gameStatus==="Started"?
            props.items.map((row,i)=>{
              return <div className="row" >
                {row.map((item,j)=>{
                   return <Box
                   clickable ={props.clickable}
                     items={props.items} scoreArr={props.scoreArr} key={`${i},${j}`} index ={[i,j]} visibile ={props.visibile} svgNo={props.items[i][j]} />
                })}
              </div>
            }):(props.gameStatus==="Not Started")?<div className="game-status">click start button to start game</div>:<div className="game-status">You have finished the game in {props.moves} moves and {props.time} seconds <br/>click restart button to play again</div>}
        </div>
    )
}
export default Card