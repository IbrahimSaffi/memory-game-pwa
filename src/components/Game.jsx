import GameStatus from "./GameStatus"
import Card from "./Card"
import { useEffect, useState } from "react"
let intervalId ;
function Game() {
  let [items, setItems] = useState([])
  let [moves, setMoves] = useState(0)
  let [time, setTime] = useState(0)
  let [scoreArr, setScoreArr] = useState([])
  let [score,setScore] = useState(0)
  let [clickable,setClickable] = useState(true)
  let [gameStatus,setGameStatus] = useState("Not Started")
  function visibile(arr) {
    let tempArr = arr.slice()
    let tempMoves = moves + 1
    let tempScoreArr = scoreArr.map(ele => ele.slice())
    tempScoreArr.push(tempArr)
    setScoreArr(tempScoreArr)
    setMoves(tempMoves)
  }
  useEffect(()=>{
    if(scoreArr.length%2===0&&scoreArr.length!==0){
      let tempScoreArr = scoreArr.map(ele => ele.slice())
      setTimeout(()=>{
      let [currRow, currCol] = tempScoreArr[tempScoreArr.length - 1]
      let [lastRow, lastCol] = tempScoreArr[tempScoreArr.length - 2]
      if (items[currRow][currCol] !== items[lastRow][lastCol]) { 
        tempScoreArr.pop()
        tempScoreArr.pop()
        setScoreArr(tempScoreArr)
      }
      else if(items[currRow][currCol] === items[lastRow][lastCol]){
        let tempScore =scoreArr.length/2
        setScore(tempScore)
        if(tempScoreArr.length===16){
          setGameStatus("Finished")
          clearInterval(intervalId)
        }
      }
      setClickable(true)
     },300)
     setClickable(false)
   }
  },[scoreArr])
  function itemsArray() {
    let items = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
    let totalItems = 16
    let itemsMatrix = []
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 4; j++) {
        let itemToDisplay = Math.floor(Math.random() * totalItems)
        row.push(items[itemToDisplay])
        items.splice(itemToDisplay, 1)
        totalItems--
      }
      itemsMatrix.push(row)
      setItems(itemsMatrix)
    }
  }
  function handleGameStatus(){
    if(gameStatus==="Not Started"){
      setGameStatus("Started")
      itemsArray() 
    }
    else {
      setMoves(0)
      setItems([])
      setScoreArr([])
      setTime(0)
      setScore(0)
      setClickable(true)
      itemsArray() 
      setGameStatus("Started")
      // clearInterval(intervalId)
    }
    // if(gameStatus!=="Finished"){
      intervalId= setInterval(() => {
        setTime(time=>time+1)
      }, 1000)
    // }
  }
  return (
    <>
      <h1>Memory Game</h1>
      <GameStatus gameStatus={gameStatus} handleGameStatus={handleGameStatus} time={time} moves={moves} score={score} />
      <Card
       gameStatus ={gameStatus}
       clickable ={clickable} 
       items={items} scoreArr={scoreArr} visibile={visibile}  time={time} moves={moves}/>
    </>
  )
}
export default Game