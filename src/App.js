import './App.css';
import React from "react"

function App() {
  const [display, setDisplay] = React.useState("0")

  const handleNumber = (event) => {
    const number = event.target.textContent;
    if(display === "0"){
      setDisplay(number)
    }else{
      setDisplay(display + number)
    }
  }

  const handleAC = () => {
    setDisplay("0")
  }

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + " " + operator + " ")
  }

  const handleEqual = () => {
    setDisplay(eval(display))
  }

  const handleDelete = () => {
    const array = display.split("");
    if(array === []){
      setDisplay("0")
    }else{
      array.pop()
      console.log(array)
      setDisplay(array.join(""))
    }
  }
  return(
    <div className='calculator_grid'>
      <div className='output'>
        <div className = "current_operand">{display}</div>
      </div>

      <button className='span_two' onClick={handleAC}>AC</button>
      <button onClick = {handleDelete}>DEL</button>
      <button onClick={handleOperator}>/</button>
      <button onClick = {handleNumber}>1</button>
      <button onClick = {handleNumber}>2</button>
      <button onClick = {handleNumber}>3</button>
      <button onClick={handleOperator}>*</button>
      <button onClick = {handleNumber}>4</button>
      <button onClick = {handleNumber}>5</button>
      <button onClick = {handleNumber}>6</button>
      <button onClick={handleOperator}>+</button>
      <button onClick = {handleNumber}>7</button>
      <button onClick = {handleNumber}>8</button>
      <button onClick = {handleNumber}>9</button>
      <button onClick={handleOperator}>-</button>
      <button onClick={handleNumber}>.</button>
      <button onClick = {handleNumber}>0</button>
      <button className='span_two' onClick={handleEqual}>=</button>

    </div>
  )
}

export default App;
