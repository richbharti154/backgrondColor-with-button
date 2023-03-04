import React from "react";
import {useState} from 'react'

export default function App() {
  const[color,setColor]=useState('white')
 function handleRed(){
   setColor('red')
 }
 function handleYellow(){
   setColor('yellow')
 }
 function handleBlue(){
   setColor('blue')
 }
 function handleblack(){
   setColor('pink')
 }
 function handleBrown(){
  setColor('Brown')
 }
 function handlePurple(){
  setColor('purple') 
 }


  return (
    <div style={{backgroundColor:color}}>
    <button  onClick={handleRed}>Red</button> 
   <button onClick={handleYellow}>yellow</button>
   <button onClick={handleBlue}>Blue</button>
   <button onClick={handleblack}>pink</button>
   <button onClick={handleBrown}>Brown</button>
   <button onClick={handlePurple}>Purple</button>
    </div>
  );
}
