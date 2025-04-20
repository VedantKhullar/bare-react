import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [customValue, setCustomValue] = useState(0);

  useEffect(() => {
    console.log(history);
  },[history])
  return (
    <div>
      <div>Counter - {counter}</div>
      <div>
        <button onClick={ () => {
          setCounter(counter + 1)
          setHistory((prevHistory) => [...prevHistory, counter]);
          }}>+1</button>
        <button onClick={ () => {
          setCounter(counter - 1);
          setHistory((prevHistory) => [...prevHistory, counter]);
          }}>-1</button>
        <button onClick={ () => {
          setCounter(0);
          setHistory((prevHistory) => [...prevHistory, counter]);
        }}>reset</button>
        <button onClick={ () => {
          setCounter(counter * 2); 
          setHistory((prevHistory) => [...prevHistory, counter]);
          }}>double</button>
      </div>
      <div>
        <input type="number" value={customValue} onChange={(e) => setCustomValue(e.target.value)}/>
        <button onClick={() => {
          setCounter(parseInt(customValue) + counter);
          setCustomValue(0);
          setHistory((prevHistory) => [...prevHistory, counter]);
        }}>set</button>
      </div>
      {history && history.length ?
      history.map((item, index) => (
        <p key={index}>{item}</p>
      )) : ''}
    </div>
  );
};

export default App;
