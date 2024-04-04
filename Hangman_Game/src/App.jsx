import React from 'react'
import { useState } from 'react'
import './App.css'
import GuessWord from './components/GuessWord/GuessWord'
import { Hangman } from './components/hangman/Hangman'
import Alphabets from './components/words/Alphabets'

function App() {
  let[word,setWord]=useState('')
  let[guessword,setGuessWord]=useState('')
  let handleFunc=(e)=>{
  // setWord(e)
    
  }
  let handleFunc2=(e)=>{
  // setGuessWord(e)
    
  }
  
 


  return (
 <>
<div className="app-con">
<GuessWord handleFunc={handleFunc}/>
 <Hangman length={length}/>
 <Alphabets handleFunc2={handleFunc2}/>
</div>
 </>
  )
}

export default App
