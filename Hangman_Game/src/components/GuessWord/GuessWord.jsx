import React, { useState } from 'react'
import Words from './words'
import { Hangman } from '../hangman/Hangman'

function GuessWord({handleFunc}) {
    let [data,setData]=useState(()=>{
     return Words[Math.floor(Math.random() * Words.length)].word

    })

    let[word,setWord]=useState('')
    let [guess,setGuess]=useState('')
    
      handleFunc(data.split(''))
      
   
     return (
     <>
      <input type="text" onChange={(e)=>{setWord(e.target.value)}} />
      <button onClick={()=>{console.log(data)}}></button>
      <button onClick={()=>{setGuess(word)}}>click</button>
      
      <button>{guess}</button>
      
     </>
     )
   }


export default GuessWord
