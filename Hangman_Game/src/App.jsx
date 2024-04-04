import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { Hangman } from './components/hangman/Hangman'
import Alphabets from './components/words/Alphabets'
import Words from './components/GuessWord/words'

function App() {

  let[status,setStatus]=useState(true)
  let [guessWord,setGuessWord]=useState(()=>{
    return Words[Math.floor(Math.random() * Words.length)]

   })

   let[guessedWord,setGuessedWord]=useState([])
   let guessedWordFunc=(e)=>{
    setGuessedWord((pre)=>[...pre,e])
  

   }
 
const inCorrectLetter=guessedWord.filter(
  letter=>!guessWord.word.includes(letter))
  
const CorrectLetter=guessWord.word.split('').every(
  letter=>guessedWord.includes(letter))



 let checkStatus=()=>{
  if(inCorrectLetter.length>=6){
    setStatus(false)
    
  }
  
 
 
 }
  useEffect(()=>{
     checkStatus()
  },)
  
 
  

  return (
 <>
<div className="app-con">
  <div className="hint">Hint:{guessWord.hint}</div>
  <div className="length">lengthOfWord:{guessWord.word.split('').length}</div>
  <div className="word">{guessWord.word}</div>
 <Hangman inCorrectLetter={inCorrectLetter.length} CorrectLetter={CorrectLetter}/>
 <Alphabets word={guessWord.word} guessedWordFunc={guessedWordFunc} status={status}/>
</div>
 </>
  )
}

export default App
