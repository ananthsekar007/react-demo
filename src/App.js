import React, { Component, useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Paragraph from "./components/paragraph";
import { Button } from "@material-ui/core";
import "./styles.css";

function App1 (){
  let counts = 0;
  counts = counts+1; 
  const [count, setCount] = useState(0);
  const [dataArr, setDataArr] = useState(
  [
    {
      welcome: "Hi",
      dept: "CSE",
      name: "Ananth"
    },
    {
      welcome: "Hello",
      dept: "CSE",
      name: "Renu"
    },
    {
      welcome: "hey",
      dept: "CSE",
      name: "Jothi"
    },
    {
      welcome: "hey",
      dept: "CSE",
      name: "ragu"
    },
  ]
  );

  const increaseCount = () => {
    setCount(count+1);
    console.log("count", count);
  }

  useEffect(() => {
    console.log("useEffect called =======");
  })

  return(
    <div>
      <p id="para" style={{
        color: "red",
        fontSize: 100,
      }} >
        {count}
      </p>
      <Button color="primary" variant="outlined" onClick={() => {
        setCount(count+1);
      }} >Hi</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      &nbsp;
      &nbsp;
      <button style={{
        backgroundColor: "blue"
      }} onClick={() => {
        setCount(count+1)
      }}>click me</button>
      {
        dataArr.map((item, index) => {
          return <Paragraph name={item.name} welcome={item.welcome} dept={item.dept} />
        })
      }
    </div>
  )
}


export default App1;
